const express = require('express')
const router = express.Router()

const URL = require('../models/model')

router.get('/', (req, res) => {
    URL.find()
       .then(data => res.json(data))
       .catch(err => res.status(400).json('Error:' + err))
})

router.get('/:surl', (req, res) => {
    URL.findOne({shortUrl:{$eq:req.params.surl}})
       .then(data => res.redirect(data.url))
       .catch(err => res.status(400).json('Error:' + err))
})

router.get('/find/:surl', (req, res) => {
    URL.findOne({shortUrl:{$eq:req.params.surl}})
       .then(data => {
           res.json(data.shortUrl);
       })
       .catch(err => res.status(400).json('Error:' + err))
})

router.post('/', (req, res) => {
    const url = req.body.url;
    const shortUrl = req.body.shortUrl;
    
    const newUrl = new URL({url,shortUrl})
    newUrl.save()
          .then(() => res.json('URL ADDED'))
          .catch(err => res.status(400).json("ERROR:" + err))
})

router.delete('/:id',(req,res) => {
    const id = req.params.id;
    URL.findByIdAndDelete(id)
        .then(() => res.json("List deleted"))
        .catch(err => res.status(400).json('Error' + err))
})

module.exports = router;
