var fs = require('fs');

var dbpath = "./db.json"

exports.find = function(callback){
    fs.readFile(dbpath,(err,data)=>{
        if (err) {
            return callback(err);
        }
        return callback(null,JSON.parse(data).students)
    })
}
exports.save = function (student,callback) {
    fs.readFile(dbpath,'utf8',(err,data)=>{
        if (err) {
            return callback(err);
        } 
        var students = JSON.parse(data).students

        student.id = students.length  + 1

        students.push(student)
        
        var tstudent = JSON.stringify(
            {students : students}
        )
       

        fs.writeFile(dbpath,tstudent,(err)=>{
            if (err) {
                return callback(err);
            } 
            return(callback(null))
        }) 
    })
    
}
exports.updatabyID = function (updataStudent,callback) {
    fs.readFile(dbpath,'utf8',(err,data)=>{
        if (err) {
            return callback(err);
        } 
        var students = JSON.parse(data).students

        updataStudent.id = parseInt(updataStudent.id)

        var stu = students.find(function(item){
            updataStudent.id === item.id
        })
        //遍历拷贝对象
        for (var key in updataStudent){
            stu[key] = updataStudent[key]
        }
        var tstudent = JSON.stringify(
            {students : students}
        )
        fs.writeFile(dbpath,tstudent,(err)=>{
            if (err) {
                return callback(err);
            } 
            return(callback(null))
        })
    })
}
exports.findByID = function (id,callback) {
    fs.readFile(dbpath,'utf8',(err,data)=>{
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        id = parseInt(id)
        var ret = students.find(function(item){
            return item.id === id
        })
        callback(null,ret)
    })
}
exports.deletByID = function (id,callback) {
    fs.readFile(dbpath,'utf8',(err,data)=>{
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students
        console.log(id)
        var deletid = students.findIndex((item)=>{
            return item.id === parseInt(id)
        })
        students.splice(deletid,1)
        var tstudent = JSON.stringify(
            {students : students}
        )
        fs.writeFile(dbpath,tstudent,(err)=>{
            if (err) {
                return callback(err);
            } 
            return(callback(null))
        })
        
    })
}

