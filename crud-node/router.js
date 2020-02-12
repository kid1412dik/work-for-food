//路由模块
var fs = require('fs')

var express = require('express')

var router = express.Router()

var dbpath = './db.json'

var student = require('./student.js')
//转到首页
router.get('/', function(req,res){
    fs.readFile('./db.json','utf8',function(err,data){
        if(err){
            return res.status(500).send('server error.')
        }
        res.render('index.html',{
            students:JSON.parse(data).students
        })
    })
   
})
//进入添加学生页
router.get('/students/new',function(req,res){
        res.render('form.html')
})
//提交新添加学生
router.post('/students/new',function(req,res){
    student.save(req.body,(err)=>{
        if(err){
            return res.status(500).send('server error.')
        } 
        res.redirect('/')
    })

})
//进入编辑学生页
router.get('/students/edit',function(req,res){
    student.findByID(parseInt(req.query.id),function(err,student){
        if(err){
            return res.status(500).send('server error.')
        } 
        res.render('edit.html',{
            student:student
        })
    })
})
//提交编辑学生
router.post('/students/edit',function(req,res){
    students.updatabyID(req.body,(err)=>{
        if(err){
            return res.status(500).send('server error.')
        } 
        res.redirect('/')
    })
})
//删除学生
router.get('/students/delet',function(req,res){
    student.deletByID(req.query.id,(err)=>{
        if(err){
            return res.status(500).send('server error.')
        } 
        res.redirect('/')
    })
})
module.exports = router