const axios = require('axios');


//render methods for different pages
exports.homeRoutes = (req,res) =>{
    axios.get('http://localhost:3000/api/blog')
        .then(function(response){
            res.render('index',{blogs:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_blog = (req,res) =>{
    res.render('add_blog');
}

exports.update_blog = (req,res) =>{
    axios.get('http://localhost:3000/api/blog',{params:{id:req.query.id}})
        .then(function(blogdata){
            res.render("update_blog",{blog:blogdata.data})
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.view_blog = (req,res) =>{
    axios.get('http://localhost:3000/api/blog',{params:{id:req.query.id}})
        .then(function(blogdata){
            res.render("view_blog",{blog:blogdata.data})
        })
        .catch(err=>{
            res.send(err);
        })
}
