const axios = require('axios');
const config = require('./config.js')

let superheros =[];

let id = 0;

module.exports = {
    getAllSuperheros: (req,res,next) => {
        res.status(200).send(superheros);
    },
    addSuperhero: (req,res,next) => {

        let {title,powers} = req.body;
        let promise = axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${config.publicKey}&ts=${config.ts}&hash=${config.hash}&name=${title}`);
        promise.then(response=>{
            var newSuperHero = response.data.data.results[0];
            let indexOfHero = superheros.findIndex(element=>element.name==newSuperHero.name);
            if (indexOfHero == -1) {
                superheros.push(newSuperHero)
            }
            res.status(200).send(superheros);
        });
    },
    editSuperhero: (req,res,next) => {
        let {title} = req.params;
        let {powers} = req.body;
        let indexOfHero = superheros.findIndex(element=>element.name==title);
        superheros[indexOfHero].description = powers;
        res.status(200).send(superheros);
    },
    deleteSuperhero: (req,res,next) => {
        let {title} = req.params;
        let indexOfHero = superheros.findIndex(element=>element.name== title);
        if (indexOfHero != -1)
        {
            superheros.splice(indexOfHero,1);
        }
        res.status(200).send(superheros);
    }
}
