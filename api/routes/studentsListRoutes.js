const studentRoutes = require('./students.js');

const appRouter = (app, fs) => {
	app.get('/', (req, res) => {
		res.send('welcome to the students list api');
	});

	studentRoutes(app, fs);
};

module.exports = appRouter;