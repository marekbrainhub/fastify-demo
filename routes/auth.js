import bcrypt from 'bcrypt'

import {usersTable} from '../db/schema.js'
import {eq} from 'drizzle-orm'

export const authRoutes = async (app, _options) => {
	app.post('/auth/register', async (req, res) => {
		const {email, password: rawPassword} = req.body
		const password = await bcrypt.hash(rawPassword, 10)

		await app.db.insert(usersTable).values({email, password})

		res.setCookie('sessionId', email, {
			path: '/',
			httpOnly: true,
			maxAge: 3000,
		})

		res.status(201).send({message: 'User registered successfully.'})
	})

	app.post('/auth/login', async (req, res) => {
		const {email, password} = req.body

		const [user] = await app.db
			.select({password: usersTable.password})
			.from(usersTable)
			.where(eq(usersTable.email, email))
			.limit(1)

		const isValid = await bcrypt.compare(password, user.password || 'somethingthatisntevenhashed')

		if (!user || !isValid) {
			res.status(401).send({message: 'Invalid username or password.'})
		}

		res.setCookie('sessionId', email, {
			path: '/',
			httpOnly: true,
			maxAge: 3600,
		})
	})

	app.get('/auth/me', async (req, res) => {
		const {sessionId} = req.cookies

		if (!sessionId) {
			return res.status(401).send({message: 'Unauthorized.'})
		}

		try {
			const [user] = await app.db
				.select({
					name: usersTable.name,
					email: usersTable.email,
				})
				.from(usersTable)
				.where(eq(usersTable.email, sessionId))
				.limit(1)

			if (!user) {
				return res.status(401).send({message: 'Unauthorized.'})
			}

			res.send({message: 'You are authenticated.', data: user})
		} catch {
			res.status(401).send({message: 'Unauthorized.'})
		}
	})
}
