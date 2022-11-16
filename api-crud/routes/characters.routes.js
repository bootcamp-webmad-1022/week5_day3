const express = require('express')
const router = express.Router()

const charactersApi = require('./../services/characters-api.service')
const api = new charactersApi()


// Characters list
router.get("/listado", (req, res, next) => {

  api
    .getAllCharacters()
    .then(response => res.render('characters/list', { characters: response.data }))
    .catch(err => console.log(err))

})


// New character form (render)
router.get("/crear", (req, res, next) => {
  res.render('characters/create')
})


// New character form (handle)
router.post("/crear", (req, res, next) => {

  const { name, occupation, weapon } = req.body

  api
    .createCharacter({ name, occupation, weapon })
    .then(() => res.redirect('/personajes/listado'))
    .catch(err => console.log(err))
})



// Edit character form (render)
router.get("/:id/editar", (req, res, next) => {

  const { id: character_id } = req.params

  api
    .getOneCharacter(character_id)
    .then(response => res.render('characters/edit', { character: response.data }))
    .catch(err => console.log(err))
})


// Edit character form (handle)
router.post("/:id/editar", (req, res, next) => {

  const { id: character_id } = req.params
  const { name, occupation, weapon } = req.body

  api
    .editCharacter(character_id, { name, occupation, weapon })
    .then(() => res.redirect('/personajes/listado'))
    .catch(err => console.log(err))
})


module.exports = router