const mongoose = require('mongoose');	

const Schema = new mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	title: {type:String, required: true},
	years:
	{
		type:Number,
		required:true	
	},	
	company:{
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Company'   //refernciar modelo
	}

});

module.exports = mongoose.model('Job', Schema);