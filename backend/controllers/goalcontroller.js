const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalmodel");

/*
    @description    get goals
    @route          GET /api/goals
    @access         private
*/
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    
    res.status(200).send(goals);
});

/*
    @description    set goal
    @route          POST /api/goals
    @access         private
*/
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("[error] please add a text field");
    }

    res.status(200).send({ message: 'set goal' });
});

/*
    @description    update goal for id
    @route          PUT /api/goals/:id
    @access         private
*/
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).send({ message: `update goal where id=${req.params.id}` });
});

/*
    @description    delete goal for id
    @route          DELTE /api/goals/:id
    @access         private
*/
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).send({ message: `delete goal where id=${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};