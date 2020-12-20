const studentRoutes = (app,fs) => {
	const dataPath = './api/data/students.json';

	app.get('/students',(req,res) =>{
		fs.readFile(dataPath,'utf8', (err, data) => {
			if (err) {
				console.log(err);
			}

			res.send(JSON.parse(data));
		});
	});
};

module.exports = studentRoutes;