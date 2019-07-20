const express=require('express')
const router=express.Router();
const {connectdb}=require('./database')
const ObjectId = require('mongodb').ObjectID;

// console.log(__dirname+'/public')
// console.log(/Users/reetpalbhaati/Desktop/e-commerce/public)
// console.log(Users/reetpalbhaati/Desktop/e-commerce/public)
// router.use('/',express.static(/Users/reetpalbhaati/Desktop/e-commerce/public))
// router.use('/',express.static(/Users/reetpalbhaati/Desktop/e-commerce/body-pics))
// router.use('/',express.static(/Users/reetpalbhaati/Desktop/e-commerce/cart-pics))

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
            category:'accessories',
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
            category:'accessories',
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
            category:'accessories',
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
