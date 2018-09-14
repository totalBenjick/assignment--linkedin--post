const { Router } = require('express');

const app = Router();

const Companies =  require('../controllers/Companies')
const Jobs =  require('../controllers/Jobs')

app.get('/companies', Companies.index);
app.get('/companies/:companyId', Companies.getById);
app.post('/companies', Companies.create);
app.put('/companies/:companyId', Companies.update );	


app.delete('/companies/:companyId', Companies.delete);

app.get('/jobs', Jobs.index);
app.get('/jobs/:jobId', Jobs.getById);
app.post('/jobs', Jobs.create);
app.put('/jobs', (request,response) =>{
	response
		.json({
			type:'PUT',
		})
		.status(200);	
});

app.delete('/jobs/:jobId', Jobs.delete);



module.exports = app;
/*
http://localhost:3000/api/v1/companies*/
