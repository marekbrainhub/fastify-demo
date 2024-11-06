import 'dotenv/config'
import fastify from 'fastify'
import cookie from '@fastify/cookie'
import fp from 'fastify-plugin'
import {drizzle} from 'drizzle-orm/libsql'
import {createClient} from '@libsql/client'

import {healthcheckRoutes} from './routes/healthcheck.js'
import {authRoutes} from './routes/auth.js'

const client = createClient({url: process.env.DB_FILE_NAME})
const db = drizzle({client})
const app = fastify({logger: true})

app.register(cookie, {secret: 'supersecret'})
app.register(fp((app, _options, done) => {
	app.decorate('db', db)
	done()
}))

app.register(healthcheckRoutes)
app.register(authRoutes)

app.listen({port: 3000, host: '0.0.0.0'}, (err, address) => {
	if (err) {
		app.log.error(address)
		process.exit(1)
	}
})

