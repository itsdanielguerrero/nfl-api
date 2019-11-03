const express = require('express')
const app = express()
const teams = require('./teams.json')


app.get ('/teams', (request, response) => {
    response.send(teams)
})

app.get ('/teams/:teamID', (request, response) => {
    let teamRequested = teams.filter((team) => {
        return team.id = request.param.teamID
    })
    response.send(teamRequested)
})

app.get ('/teams/:abbr', (request, response) => {
    let teamRequested = teams.filter((team) => {
        return team.abbreviation == request.param.abbr
    })
    response.send(teamRequested)
})

app.all('*', (request, response) => {
    response.send('Oops, Did you find what your looking for?')
})

app.listen(1337, () => {
    console.log('Server is up!')
})
