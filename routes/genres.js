const express = require("express");
const router = express.Router();

const genres = [ 
    {   
        id:1,
        name:"action"
    },
    {   
        id:2,
        name:"comedy"
    },
    {   
        id:3,
        name:"horor"
    }
];

function toFind(id){
    return genres.find(c => c.id === parseInt(id));
}
//getGenres
router.get('/', (req,res) => {
    res.send(genres);
});

//getParticularGenres
router.get('/:id', (req,res) => {
    const genre = toFind(req.params.id);
    if(!genre) return res.status(404).send('No id found');
    res.send(genre);
});

//create new genre
router.post('/', (req,res) => {
    console.log(req.body.name);
    const genre ={
        id : genres.length+1,
        name :req.body.name 
    }
    genres.push(genre);
    res.send(genre);
});

//delete a genre
router.delete('/:id', (req,res) => {
    const genre = toFind(req.params.id);
    if(!genre) return res.status(404).send('No id found');
    const inx = genres.indexOf(genre);
    genres.splice(inx, 1);;
    res.send(genre);
});

//update a genre
router.put('/:id', (req,res) =>{
    const genre = toFind(req.params.id);
    if(!genre) return res.status(404).send('No id found');
    const { name } = req.body;
    genre.name=name;
    res.send(genre);
})

module.exports = router;