const { Router } = require('express');

const app = Router();

const Jobs =  require('../controllers/Jobs')


app.get('/Jobs', Jobs.index);
app.get('/Jobs/:companyId', Jobs.getById);
app.post('/Jobs', Jobs.create);
app.put('/Jobs', (request,response) =>{
	response
		.json({
			type:'PUT',
		})
		.status(200);	
});

app.delete('/Jobs', (request,response) =>{
	response
		.json({
			type:'DELETE'
		})
		.status(200);
});

module.exports = app;