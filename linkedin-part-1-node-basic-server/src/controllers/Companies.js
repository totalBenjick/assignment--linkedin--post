const { Router } = require('express');
const companies = require ('../../companies.json');
const Company = require('../models/Company');
const mongoose = require('mongoose'); 

const Controller = {
  index:(request, response) =>{
    Company
      .find()
      .exec()
      .then(data =>{
        if(data.length ===0){
          response.json({
              "data": "empty",
              "status": "200",
              "message": "No companies have been registered."
          })
        } else if( data.length===1){
          response.json({
            companies:data
          })
        }
        else
        {
        response
          .json(
          {
            count: data.length,
            companies:data
          })
          status(200)
        }          
      })
      .catch(error => {
          response
            .json({
              message:error
            })
            status(500)
        });


  },

  getById:(request,response) =>{

    const {companyId} = request.params;

    Company
      .find({
        _id: companyId
      })
      .then(data => {
        response
          .json({
            company: data
          })

      })
      .catch(error => {
          response
            .json({
              message:error
            })
            status(500)
        });


  },

  create: (request,response) => {
      const newCompany = new Company({
        _id: new mongoose.Types.ObjectId(),
        name: request.body.name
      });

      newCompany
        .save()
        .then(data =>{
          response
            .json({
              data: newCompany
            })
            status(201);
        })
        .catch(error => {
          response
            .json({
              message:error
            })
            status(500)
        });

      console.log(newCompany)
  },

  delete:(request,response) =>{

  const {companyId} = request.params;

    Company
      .findOneAndDelete({
        _id: companyId
      })
      .then(data => {
        response
          .json({
            data: data
          })
      })
  },
  update:(request,response)=>{
    Company
    .findOneAndUpdate({
      _id: request.params.companyId
    },{
      name: request.body.name
    }, {
      new: true
    })
    .exec()
    .then( data =>{
      response
        .status(200)
        .json({
          message:"Company was updated",
          data: data
        })


    })
  }

};

module.exports = Controller;