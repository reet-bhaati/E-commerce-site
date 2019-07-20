const express=require('express')
const router=express.Router();
const {connectdb}=require('./database')
const ObjectId = require('mongodb').ObjectID;

router.use('/',express.static(__dirname+'/public'))
router.use('/',express.static(__dirname+'/body-pics'))
router.use('/',express.static(__dirname+'/cart-pics'))

router.get('/',(req,res)=>
{

    let Squery=req.query.size
    let Cquery=req.query.color

    if(Squery)
{

    connectdb('testdb')
    .then((db)=>
    {
        const allproducts=db.collection('allproducts')
        return allproducts.find({
            category:'women',
            size:Squery
        })
    })
    .then((pro)=> pro.limit(9))
    .then((pro)=>pro.toArray())
    .then((products)=>
    {
        res.render('show',{products})
    })

}
else if(Cquery)
{   
    connectdb('testdb')
    .then((db)=>
    {
        const allproducts=db.collection('allproducts')
        return allproducts.find({
            category:'women',
            color:Cquery
        })
    })
    .then((pro)=> pro.limit(9))
    .then((pro)=>pro.toArray())
    .then((products)=>
    {
        res.render('show',{products})
    })
  
}
else
{
     connectdb('testdb')
    .then((db)=>
    {
        const allproducts=db.collection('allproducts')
        return allproducts.find({
            category:'women',
        })
    })
    .then((pro)=> pro.limit(9))
    .then((pro)=>pro.toArray())
    .then((products)=>
    {
        res.render('show',{products})
    })

}

})


router.get('/:id',(req,res)=>
{
     connectdb('testdb')
    .then((db)=>
    {
        const allproducts=db.collection('allproducts')
        return allproducts.find({
            
            _id:ObjectId(req.params.id)
        })
    })
    .then((pro)=>pro.toArray())
    .then((product)=>
    {
        console.log(product)
        res.render('pd',{product})
    })
})

module.exports=router;