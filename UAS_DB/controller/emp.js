const Emp = require('../models/emp')
const mongoose = require('mongoose')
function create(req,res,next){
  let empjudul = req.body.empjudul;
  let emplink = req.body.emplink;
  let empgenre = req.body.empgenre;
  let emp = new Emp({
    empjudul,
    emplink,
    empgenre
  })
  emp.save().then((data)=>{
    res.send(data)
  })
}

function view(req,res,next){
    Emp.find({}).then((data)=>{
      res.send(data)
    })
  }

module.exports.view = view
module.exports.create = create