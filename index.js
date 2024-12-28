const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json()); //parse json in request body

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
app.get('/api/genres', (req,res) => {
    res.send(genres);
});

//getParticularGenres
app.get('/api/genres/:id', (req,res) => {
    const genre = toFind(req.params.id);
    if(!genre) return res.status(404).send('No id found');
    res.send(genre);
});

//create new genre
app.post('/api/genres', (req,res) => {
    console.log(req.body.name);
    const genre ={
        id : genres.length+1,
        name :req.body.name 
    }
    genres.push(genre);
    res.send(genre);
});

//delete a genre
app.delete('/api/genres/:id', (req,res) => {
    const genre = toFind(req.params.id);
    if(!genre) return res.status(404).send('No id found');
    const inx = genres.indexOf(genre);
    genres.splice(inx, 1);;
    res.send(genre);
});

//update a genre
app.put('/api/genres/:id', (req,res) =>{
    const genre = toFind(req.params.id);
    if(!genre) return res.status(404).send('No id found');
    const { name } = req.body;
    genre.name=name;
    res.send(genre);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(process.env.PORT);
    console.log(`listening to ${port}`);
});
