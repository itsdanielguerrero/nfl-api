const express = require('express')
const app = express()
const teams = require('./teams.json')


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

app.listen(1337, () => {
    console.log('Server is up!')
})
