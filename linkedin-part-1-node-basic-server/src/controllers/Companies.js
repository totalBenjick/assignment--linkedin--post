const { Router } = require('express');

const companies = require ('../../companies.json');

const Controller = {
  index:(request, response) =>{
    response
      .status(200)
      .json({
        companies
      });
  },

  getById:(request,response) =>{
    const theCompany = companies.data.filter( company => {
      return company.id === parseInt(request.params.companyId);
    });
  response
    .json({
      data: company
    })
    status(200);
  },

  create: (request,response) => {
    response
      .json({
        type: 'POST rrrrrequest',
        data: request.body
      })
      .status(200);
  }

};

module.exports = Controller;