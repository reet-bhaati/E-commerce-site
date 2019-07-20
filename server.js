const express=require('express')
const app=express()
const menRouter=require('./men')
const womenRouter=require('./women')
const accRouter=require('./accessories')
const storeRouter=require('./store')

const {connectdb}=require('./database')
const ObjectId = require('mongodb').ObjectID;

app.set('view engine','hbs')

app.use('/',express.static(__dirname+'/public'))
app.use('/',express.static(__dirname+'/body-pics'))
app.use('/',express.static(__dirname+'/cart-pics'))


// let allproducts=[{
//     id:1,
//     name:"Torn Blue Jeans",
//     price:150,
//     quantity:1,
//     total:"£150.00",
//     category:"men",
//     size:'S',
//     color:'red'
// },{
//     id:2,
//     name:"Black Shoes",
//     price:2000,
//     quantity:1,
//     total:"£2000.00",
//     category:"men",
//     size:'L',
//     color:'black'
// },{
//     id:3,
//     name:"Torn Blue Jeans",
//     price:150,
//     quantity:1,
//     total:"£150.00",
//     category:"men",
//     size:'M',
//     color:'green'
// },{
//     id:4,
//     name:"Black Shoes",
//     price:2000,
//     quantity:1,
//     total:"£2000.00",
//     category:"men",
//     size:'XL',
//     color:'blue'
// },{
//     id:5,
//     name:"Torn Blue Jeans",
//     price:150,
//     quantity:1,
//     total:"£150.00",
//     category:"women",
//     size:'S',
//     color:'red'
// },{
//     id:6,
//     name:"Black Shoes",
//     price:2000,
//     quantity:1,
//     total:"£2000.00",
//     category:"women",
//     size:'M',
//     color:'green'
// },{
//     id:7,
//     name:"Torn Blue Jeans",
//     price:150,
//     quantity:1,
//     total:"£150.00",
//     category:"women",
//     size:'XL',
//     color:'blue'
// },{
//     id:8,
//     name:"Black Shoes",
//     price:2000,
//     quantity:1,
//     total:"£2000.00",
//     category:"women",
//     size:'S',
//     color:'black'
// },{
//     id:9,
//     name:"Torn Blue Jeans",
//     price:150,
//     quantity:1,
//     total:"£150.00",
//     category:"accessories",
//     size:'L',
//     color:'red'
// },{
//     id:10,
//     name:"Black Shoes",
//     price:2000,
//     quantity:1,
//     total:"£2000.00",
//     category:"accessories",
//     size:'S',
//     color:'black'
// },]

let cart=[]


app.get('/',(req,res)=>
{

connectdb('testdb')
    .then((db)=>
    {
        const allproducts=db.collection('allproducts')
        return allproducts.find({})
    })
    .then((pro)=> pro.limit(8))
    .then((pro)=>pro.toArray())
    .then((products)=>
    {
        res.render('main',{products})
    })
    
})

app.use('/men',menRouter)

app.use('/women',womenRouter)

app.use('/accessories',accRouter)

app.use('/store',storeRouter)

// make cart collection
app.get('/cart',(req,res)=>
{

    connectdb('testdb').then((db)=>
    {
        const cartData=db.collection('cartData')
        return cartData.find({})
    })
    .then((pro)=>pro.toArray())
    .then((cart)=>
    {
        let totalPrice=cart.reduce((acc,item)=>
            {
                return acc+ item.price
            },0)
        res.render('cart',{cart,totalPrice})
    })

    
})

app.get('/about',(req,res)=>
{
    res.render('about')
})

app.get('/contact-us',(req,res)=>
{
    res.render('contact-us')
})

app.get('/remove-item/:id',(req,res)=>
{
    connectdb('testdb').then((db)=>
    {
        const cartData=db.collection('cartData')
        return cartData.deleteOne({
            _id:ObjectId(req.params.id)
        })
    }).then(()=>res.redirect('/cart'))

})

app.get('/add-to-cart',(req,res)=>
{
    // let id=req.query.id
    // cart.push(allproducts.find((product)=>product.id==id))
    // res.redirect('/cart')

    console.log(req.query.id)
    connectdb('testdb')
    .then((db)=>
    {
        const allproducts=db.collection('allproducts')
        return allproducts.find({
            
            _id:ObjectId(req.query.id)
        })
    })
    .then((pro)=>pro.toArray())
    .then((pro)=>
    {
        console.log(pro[0])
        connectdb('testdb')
        .then((db)=>
        {
            const cartData=db.collection('cartData')
            return cartData.insertOne(pro[0])
        })
        .then(()=>res.redirect('/cart'))
    })

})

app.listen(4040,()=>
{
    console.log('Server running on http:localhost:4040')
})



















// app.get('/',(req,res)=>
// {
//     let products=allproducts;
//     res.render('index',{products})
// })
// app.get('/cart',(req,res)=>
// {
//     res.render('cart',{cart})
// })
// app.get('/store',(req,res)=>
// {
//     // res.render('index',{products})
    
//     let products=allproducts;
//     res.render('show',{products})
// })

// app.get('/add-to-cart',(req,res)=>
// {
//     let id=req.query.id
//     cart.push(allproducts.find((product)=>product.id==id))
//     res.redirect('/')
// })

// app.get('/men',(req,res)=>
// {
//     let products=allproducts.filter((pro)=> pro.category=='men')
//     console.log(products)
//     res.render('show',{products})

// })

// app.get('/:id',(req,res)=>
// {
//     let id=req.params.id;
//     let product=[allproducts.find((product)=>product.id==id)]
//     console.log(product)

//     res.render('productDisplay',{product})
// })


