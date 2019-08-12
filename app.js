const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const product = require('./controllers/products');
const store = require('./controllers/stores');
const category = require('./controllers/categories');
//define db
const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'shopping-prices'
    }
})

/*const db = knex({
    client: 'pg',
    connection: {
        connectionString : process.env.DATABASE_URL,
        ssl: true
    }
})*/
// backend logic
const app = express();
app.use(bodyParser.json());
app.use(cors())
//get all products
//------------------------------------------------------------------
                        //GET REQUESTS
//------------------------------------------------------------------
app.get('/products', (req,res) => product.handleProductsGet(req,res,db))
app.get('/categories', (req,res) => category.handleCategoriesGet(req,res,db))
app.get('/stores', (req,res) => store.handleStoresGet(req,res,db))
//------------------------------------------------------------------
                        //POST REQUESTS
//------------------------------------------------------------------
app.post('/addproduct', (req,res) => product.handleAddProduct(req,res,db))
app.post('/addcategory', (req,res) => category.handleAddCategory(req,res,db))
app.post('/addstore', (req,res) => store.handleAddStore(req,res,db))
//------------------------------------------------------------------
                        //PUT REQUESTS
//------------------------------------------------------------------
app.put('/edit', (req,res) => product.handleProductEdit(req,res,db))
//------------------------------------------------------------------
                        //DELETE REQUESTS
//------------------------------------------------------------------
app.delete('/delete', (req,res) => product.handleDeleteProduct(req,res,db))

app.listen(3002, () => {
    console.log(`listening on port ${process.env.PORT}`)
})

