const { Router } = require('express');

const app = Router();

const Companies =  require('../controllers/Companies')

app.get('/companies', Companies.index);
app.get('/companies/:companyId', Companies.getById);
app.post('/companies', Companies.create);
app.put('/companies', (request,response) =>{
	response
		.json({
			type:'PUT',
		})
		.status(200);	
});

app.delete('/companies', (request,response) =>{
	response
		.json({
			type:'DELETE'
		})
		.status(200);
});

module.exports = app;
/*
http://localhost:3000/api/v1/companies*/
