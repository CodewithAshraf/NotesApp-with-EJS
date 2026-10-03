const express =  require('express');
const notesmodel = require('./model/user');
const app = express();
const path = require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.send("welcome");
})
app.get('/home',function(req,res){
    res.render("home");
})

app.post('/create',async function(req,res){
    let {title,description} = req.body
    let creatednote = await notesmodel.create({
        title,
        description
    })
    res.redirect('read');
})


app.get('/read',function(req,res){
    res.render("read");
})
const PORT = 2000;

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
})


