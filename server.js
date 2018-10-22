const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');

const app = express();

app.use(bodyParser.json())


app.get('/powerful/superheros', controller.getAllSuperheros);

app.post('/powerful/superheros', controller.addSuperhero);

app.put('/powerful/superheros/:title', controller.editSuperhero)

app.delete('/powerful/superheros/:title', controller.deleteSuperhero);

const port = 3456;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})