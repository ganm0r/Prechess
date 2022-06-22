const asyncHandler = require("express-async-handler");

const Game = require("../models/gamemodel");
const User = require("../models/usermodel");

/*
    @description    Get games
    @route          GET /api/games
    @access         Private
*/
const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find({ user: req.user.id });

  res.status(200).send(games);
});

/*
    @description    Set game
    @route          POST /api/games
    @access         Private
*/
const setGame = asyncHandler(async (req, res) => {
  const game = await Game.create({
    user: req.user.id,
    name: req.body.name,
    type: req.body.type,
    game: req.body.game,
  });

  res.status(200).send(game);
});

/*
    @description    Update game for id
    @route          PUT /api/games/:id
    @access         Private
*/
const updateGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);

  if (!game) {
    res.status(400);
    throw new Error("[error] game not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("[error] user not found");
  }

  if (game.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("[error] user not authorized");
  }

  const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send(updatedGame);
});

/*
    @description    Delete game for id
    @route          DELETE /api/games/:id
    @access         Private
*/
const deleteGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);

  if (!game) {
    res.status(400);
    throw new Error("[error] game not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("[error] user not found");
  }

  if (game.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("[error] user not authorized");
  }

  await game.remove();

  res.status(200).send({ id: req.params.id });
});

module.exports = {
  getGames,
  setGame,
  updateGame,
  deleteGame,
};
