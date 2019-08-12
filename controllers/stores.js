const handleStoresGet = (req,res,db) => {
    db.select('*').returning('*').from('store').orderBy('store_name').then(data => {
        res.json(data)
    })
}
module.exports = {
    handleStoresGet
}