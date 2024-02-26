const mainRouter = require('express').Router()

mainRouter.get('/users', (req, res) => {
    try {
        res.render('users.twig', {
            users : [
                {
                    nom: "beyrouth",
                    prenom: "lucio",
                    age: 25
                },
                {
                    nom: "robert",
                    prenom: "michel",
                    age: 30
                },
            ]
        })
    } catch (error) {

    }
})

module.exports = mainRouter