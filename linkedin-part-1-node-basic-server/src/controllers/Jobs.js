const { Router } = require('express');
const Job = require('../models/Job');
const mongoose = require('mongoose'); 

const Controller = {
  index:(request, response) =>{
    Job
      .find()
/*      .select('title')
*/      .populate('Company')
      .exec()
      .then(data =>{
            if(data.length ===0){
              response
              .status(200)
              .json(            {
                  "data": "empty",
                  "status": "200",
                  "message": "No jobs have been registered."
              })
            } 
            else if( data.length===1){
              response
              .status(200)
              .json({
                companies:data
              })
            }
            else
            {
            response
              .status(200)
              .json({
                Jobs:data
              }) }
              
      })
      .catch(error => {
        response
          .json({
            message:error
          })
          .status(500)
      });

  },

  getById:(request,response) =>{

    const {JobId} = request.params;

    Job
      .find({
        _id: JobId
      })
      .then(data => {
        response
          .json({
            Job: data
          })

      })

  },

  create: (request,response) => {
      const newJob = new Job({
        _id: new mongoose.Types.ObjectId(),
        title: request.body.title,
        years: request.body.years,
        company: request.body.companyId
      });

      newJob
        .save()
        .then(data =>{
          response
            .json({
              data: newJob
            })
            .status(201)
        })
        .catch(error => {
          response
            .json({
              message:error
            })
            .status(500)
        });

      console.log(newJob)
  },

  delete:(request,response) =>{
  const {jobId} = request.params;

    Job
      .findOneAndDelete({
        _id: jobId
      })
      .then(data => {
        response
          .json({
            delete: done,
            Job: data
          })

      })
  }


};

module.exports = Controller;