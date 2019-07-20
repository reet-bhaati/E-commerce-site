const {MongoClient}=require('mongodb')

const url='mongodb://localhost:27017'
// const db_name='testdb'

// const connectdb=(db_name)=>
// {
//     return MongoClient.connect(url).then((client)=>
//     {
//         return client.db(db_name)
//     })
// }


module.exports.connectdb=(db_name)=>
{
    return MongoClient.connect(url).then((client)=>
    {
        return client.db(db_name)
    })
}

//insertion query
// const insertProducts=(db_name)=>
// {
// connectdb(db_name).then((db)=>
// {
//     let allproducts=db.collection('allproducts')

//     return allproducts.insertMany([{
        
//         name:"Torn Blue Jeans",
//         price:150,
//         quantity:1,
//         total:"£150.00",
//         category:"men",
//         size:'S',
//         color:'red'
//     },{
       
//         name:"Black Shoes",
//         price:2000,
//         quantity:1,
//         total:"£2000.00",
//         category:"men",
//         size:'L',
//         color:'black'
//     },{
        
//         name:"Torn Blue Jeans",
//         price:150,
//         quantity:1,
//         total:"£150.00",
//         category:"men",
//         size:'M',
//         color:'green'
//     },{
       
//         name:"Black Shoes",
//         price:2000,
//         quantity:1,
//         total:"£2000.00",
//         category:"men",
//         size:'XL',
//         color:'blue'
//     },{
        
//         name:"Torn Blue Jeans",
//         price:150,
//         quantity:1,
//         total:"£150.00",
//         category:"women",
//         size:'S',
//         color:'red'
//     },{
        
//         name:"Black Shoes",
//         price:2000,
//         quantity:1,
//         total:"£2000.00",
//         category:"women",
//         size:'M',
//         color:'green'
//     },{
       
//         name:"Torn Blue Jeans",
//         price:150,
//         quantity:1,
//         total:"£150.00",
//         category:"women",
//         size:'XL',
//         color:'blue'
//     },{
        
//         name:"Black Shoes",
//         price:2000,
//         quantity:1,
//         total:"£2000.00",
//         category:"women",
//         size:'S',
//         color:'black'
//     },{
       
//         name:"Torn Blue Jeans",
//         price:150,
//         quantity:1,
//         total:"£150.00",
//         category:"accessories",
//         size:'L',
//         color:'red'
//     },{
       
//         name:"Black Shoes",
//         price:2000,
//         quantity:1,
//         total:"£2000.00",
//         category:"accessories",
//         size:'S',
//         color:'black'
//     }])
// }).then((result)=>
// {
//     console.log(result)
// })
// }
// insertProducts('testdb')




// const findAll=(db_name)=>
// {
//     connectdb(db_name).then((db)=>
//     {
//         const cartData=db.collection('cartData')

//         return cartData.find({})
//     }).then((pro)=>pro.toArray())
//     .then(console.log)


// }
// findAll('testdb')

// connectdb('testdb').then((db)=>
// {
//     const cartData=db.collection('cartData')
//     return cartData.deleteMany({})
// }).then(console.log)