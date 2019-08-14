const handleStoresGet = (req,res,db) => {
    db.select('*').returning('*').from('store').orderBy('store_name').then(data => {
        res.json(data)
    })
}

const handleAddStore = (req,res,db) => {
    const store = req.body;
    //take input value and add to db
    db('store').returning('*').insert({
        store_name: store.name,
        opens_at: '07:00',
        closes_at: '23:00',
        date_added: new Date(),
    }).then(response => {
        res.json(response)
    }).catch(err => res.status(400).json('unable to add'))
}

module.exports = {
    handleStoresGet,
    handleAddStore
}