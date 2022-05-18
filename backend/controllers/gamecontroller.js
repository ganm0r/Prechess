const asyncHandler = require("express-async-handler");

const game = require("../models/gamemodel");

/*
    @description    get games
    @route          GET /api/games
    @access         private
*/
const getgames = asyncHandler(async (req, res) => {
    const games = await game.find();
    
    res.status(200).send(games);
});

/*
    @description    set game
    @route          POST /api/games
    @access         private
*/
const setgame = asyncHandler(async (req, res) => {
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
const updategame = asyncHandler(async (req, res) => {
    const game = await game.findById(req.params.id);

    if(!game) {
        res.status(400);
        throw new Error("[error] game not found");
    }

    const updatedgame = await game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).send(updatedgame);
});

/*
    @description    delete game for id
    @route          DELETE /api/games/:id
    @access         private
*/
const deletegame = asyncHandler(async (req, res) => {
    const game = await game.findById(req.params.id);

    if(!game) {
        res.status(400);
        throw new Error("[error] game not found");
    }

    const deletedgame = await game.findByIdAndDelete(req.params.id);

    res.status(200).send(deletedgame);
});

module.exports = {
    getgames,
    setgame,
    updategame,
    deletegame,
};