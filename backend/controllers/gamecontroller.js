const asyncHandler = require("express-async-handler");

const game = require("../models/gamemodel");

/*
    @description    get games
    @route          GET /api/games
    @access         private
*/
const getGames = asyncHandler(async (req, res) => {
    const games = await game.find();
    
    res.status(200).send(games);
});

/*
    @description    set game
    @route          POST /api/games
    @access         private
*/
const setGame = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error("[error] please add a text field");
    }

    const game = await game.create({
        text: req.body.text,
    })

    res.status(200).send(game);
});

/*
    @description    update game for id
    @route          PUT /api/games/:id
    @access         private
*/
const updateGame = asyncHandler(async (req, res) => {
    const game = await game.findById(req.params.id);

    if(!game) {
        res.status(400);
        throw new Error("[error] game not found");
    }

    const updatedGame = await game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).send(updatedGame);
});

/*
    @description    delete game for id
    @route          DELETE /api/games/:id
    @access         private
*/
const deleteGame = asyncHandler(async (req, res) => {
    const game = await game.findById(req.params.id);

    if(!game) {
        res.status(400);
        throw new Error("[error] game not found");
    }

    const deletedGame = await game.findByIdAndDelete(req.params.id);

    res.status(200).send(deletedGame);
});

module.exports = {
    getGames,
    setGame,
    updateGame,
    deleteGame,
};