const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const teams = require('./teams.json')

function validatePost(body){
    //must have location, mascot, abbreviation, conference, division
    let { location, mascot, abbreviation, conference, division } = body
    if(!location || !mascot || !abbreviation || !conference || !division){
        return false
    } else {
        return true
    }
}

app.use(bodyParser.json())

app.post('/teams', (request, respond) => {
    let newTeam = request.body || {}
    newTeam.id = teams.length + 1
    if(!validatePost(newTeam)){
        respond.status(400).send("The following attributes are required: location, mascot, abbreviation, conference, division")
    } else {
        teams.push(newTeam)
        respond.status(201).send(newTeam)
    }

})

app.get ('/', (request, response) => {
    response.send('This is our NFL WEB APP, I can get you any current nfl team you would like. \n Note: if you can\'t choose I can just display them all for you!')
})

app.get ('/teams', (request, response) => {
    response.send(teams)
})

app.get ('/teams/:filter', (request, response) => {
    //response.send(request.params.filter)
    
    var teamRequested = teams.filter((team) => {
        return parseInt(request.params.filter) === team.id || request.params.filter === team.abbreviation 
    })

    if (teamRequested.length){
        response.send(teamRequested)
    } else {
        response.sendStatus(404)
    }
     
})

app.all('*', (request, response) => {
    response.send('Oops, Did you find what your looking for?')
})

app.listen(1338, () => {
    console.log('Server is up!')
})
