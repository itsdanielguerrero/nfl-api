const express = require('express') //imports express lib and its node modules
const app = express() //creats an instance of express
const bodyParser = require('body-parser') //imports body-parser lib and its node modules
const models = require('./models') //importing my DB connection and 'teams' model
const PORT = process.env.PORT || 1338

function validatePost(body){
    //must have location, mascot, abbreviation, conference, division
    if(!body.location || !body.mascot || !body.abbreviation || !body.conference || !body.division){
        return false
    } else {
        return true
    }
}

app.use(bodyParser.json())

app.post('/teams', (request, response) => {
    let body = request.body || {}
    let { location, mascot, abbreviation, conference, division } = request.body
    
    if(!validatePost(body)){
        respond.status(400).send("The following attributes are required: location, mascot, abbreviation, conference, division")
    } else {
        models.Teams.create({location, mascot, abbreviation, conference, division}).then((team) => {
            response.status(201).send(team)
        })
    }

})

app.get ('/', (request, response) => {
    response.send('This is our NFL WEB APP, I can get you any current nfl team you would like. \n Note: if you can\'t choose I can just display them all for you!')
})

app.get ('/teams', (request, response) => {
    models.Teams.findAll({}).then((team) => {
        response.send(team)
    })
})

app.get ('/teams/:filter', (request, response) => {

    models.Teams.findOne({
        where: {
            [models.Op.or]: { 
                id: request.params.filter,
                location: request.params.filter,
                mascot: request.params.filter,
                abbreviation: request.params.filter,
                conference: request.params.filter,
                division: request.params.filter,
            },
        }
    }).then((teamRequested) => {
        if (teamRequested){
            response.send(teamRequested)
        } else {
            response.sendStatus(404)
        }
    })
    
    
     
})

app.all('*', (request, response) => {
    response.send('Oops, Did you find what your looking for?')
})

app.listen(PORT, () => {
    console.log('Server is up!')
})
