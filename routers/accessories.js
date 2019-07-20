// const express=require('express')
// const router=express.Router();

// // console.log(__dirname+'/public')
// // console.log(/Users/reetpalbhaati/Desktop/e-commerce/public)
// // console.log(Users/reetpalbhaati/Desktop/e-commerce/public)
// // router.use('/',express.static(/Users/reetpalbhaati/Desktop/e-commerce/public))
// // router.use('/',express.static(/Users/reetpalbhaati/Desktop/e-commerce/body-pics))
// // router.use('/',express.static(/Users/reetpalbhaati/Desktop/e-commerce/cart-pics))

// router.use('/',express.static(__dirname+'/public'))
// router.use('/',express.static(__dirname+'/body-pics'))
// routerc.use('/',express.static(__dirname+'/cart-pics'))


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


// router.get('/',(req,res)=>
// {

//     let Squery=req.query.size
//     let Cquery=req.query.color

//     if(Squery)
// {
//     let count=0;
    
//     let products=allproducts.filter((pro)=>
//     {
//             if(pro.category=='accessories')
//             {
//                 count++;
//             }
//         return count<10 && pro.category=='accessories' &&pro.size==Squery
//     })
    
//     res.render('show',{products})
// }
// else if(Cquery)
// {
//     let count=0;
    
//     let products=allproducts.filter((pro)=>
//     {
//             if(pro.category=='accessories')
//             {
//                 count++;
//             }
//         return count<10 && pro.category=='accessories' &&pro.color==Cquery
//     })
    
//     res.render('show',{products})   
  
// }
// else
// {
//     let count=0;
    
//     let products=allproducts.filter((pro)=>
//     {
//             if(pro.category=='accessories')
//             {
//                 count++;
//             }
//         return count<10 && pro.category=='accessories'
//     })
    
//     res.render('show',{products})
// }

// })

// router.get('/:id',(req,res)=>
// {
//     let product=[allproducts.find((pro)=>pro.id==req.params.id)]

//     res.render('pd',{product})
// })

// module.exports=router;
