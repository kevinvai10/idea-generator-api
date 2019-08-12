const handleCategoriesGet = (req,res,db) => {
    db.select('*').returning('*').from('category').orderBy('category_name')
    .then(data => {
        res.json(data)
    })
}

const handleAddCategory = (req,res,db) => {
    const category = req.body;
    console.log('category received: ', category)
    //take input value and add to db
    db('category').returning('*').insert({
        category_name: category.name,
        created_on: new Date(),
    }).then(response => {
        console.log('we had a response');
        res.json(response)
    }).catch(err => res.status(400).json('unable to add'))
}
module.exports = {
    handleCategoriesGet,
    handleAddCategory
}