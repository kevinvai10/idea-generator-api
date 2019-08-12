const handleCategoriesGet = (req,res,db) => {
    db.select('*').returning('*').from('category').orderBy('category_name')
    .then(data => {
        res.json(data)
    })
}
module.exports = {
    handleCategoriesGet
}