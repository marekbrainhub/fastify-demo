import 'dotenv/config'
import fastify from 'fastify'
import fp from 'fastify-plugin'
import {drizzle} from 'drizzle-orm/libsql'
import {createClient} from '@libsql/client'

import {healthcheckRoutes} from './routes/healthcheck.js'
import {authRoutes} from './routes/auth.js'
import {remixFastify} from '@mcansh/remix-fastify'

const client = createClient({url: process.env.DB_FILE_NAME})
const db = drizzle({client})
const app = fastify({
	logger: {
		level: 'error',
		transport: {
			target: 'pino-pretty',
		},
	},
})

app.register(remixFastify)
app.register(fp((app, _options, done) => {
	app.decorate('db', db)
	done()
}))

app.register(healthcheckRoutes)
app.register(authRoutes)

app.listen({port: 3000, host: '0.0.0.0'}, (err, address) => {
	if (err) {
		app.log.error(err)
		process.exit(1)
	}
})

