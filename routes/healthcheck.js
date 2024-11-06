export const healthcheckRoutes = async (app, _options) => {
	app.get('/healthcheck', (_req, res) => {
		res.code(200).send('OK')
	})
}
