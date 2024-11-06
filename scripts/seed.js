import 'dotenv/config'
import {drizzle} from 'drizzle-orm/libsql'
import {eq} from 'drizzle-orm'
import {usersTable} from '../db/schema'

const db = drizzle(process.env.DB_FILE_NAME)

async function main() {
	const users = [
		{name: 'Alice', age: 23, email: 'alice@example.com'},
		{name: 'Bob', age: 27, email: 'bob@example.com'},
	]

	await db.insert(usersTable).values(users)
}
