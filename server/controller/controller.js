var Blogdb = require('../model/model');

// Create new Blog
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"content can not be empty!"});
        return;
    }

    const blog = new Blogdb({
        title:req.body.title,
        category:req.body.category,
        content:req.body.content
    })

    blog
        .save(blog)
        .then(data=>{
            // res.send(data)
            res.redirect('/add-blog')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error Occurred!"
            });
        });
}

// Find Blog
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Blogdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message:"blog not found"})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({
                    message:"Error Occurred!"
                })
            })
    }else{
        Blogdb.find()
            .then(blog=>{
                res.send(blog)
            })
            .catch(err=>{
                res.status(500).send({message:err.message||"Error Occurred!"})
            })
    }
}

// Update Blog
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data cannot be empty!"})
    }

    const id = req.params.id;
    Blogdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:'Update Command failed!'})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error Occurred!"})
        })
}

// Delete Blog
exports.delete = (req,res)=>{
    const id = req.params.id;

    Blogdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Delete Command Failed!`})
            }else{
                res.send({
                    message:"Blog Deleted!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Delete Command Failed!"
            });
        });
}