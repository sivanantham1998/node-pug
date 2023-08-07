const express=require('express');
const app=express();
app.set('view engine', 'pug');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }))

const a=["a","b","c"];
const b=[]

app.get('/',(req,res)=>{
    // res.send('hai');
    res.render('index',{a:a,b:b})
})
app.post('/',(req,res)=>{
    b.unshift(req.body.uname);
    res.redirect('/')
})
app.listen(1998,()=>console.log("Running on portal"))