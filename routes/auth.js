import {clerkPlugin, clerkClient, getAuth} from '@clerk/fastify'

export const authRoutes = async (app, _options) => {
	app.register(clerkPlugin)

	app.get('/auth/me', async (req, res) => {
		const {userId} = getAuth(req)
		if (!userId) {
			return res.code(403).send({error: 'Unauthorized.'})
		}

		const user = userId ? await clerkClient.users.getUser(userId) : null

		return res.send({
			message: 'You are authenticated.',
			user,
		})
	})
}
