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

    const goal = await Goal.create({
        text: req.body.text,
    })

    res.status(200).send(goal);
});

/*
    @description    update goal for id
    @route          PUT /api/goals/:id
    @access         private
*/
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error("[error] goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).send(updatedGoal);
});

/*
    @description    delete goal for id
    @route          DELETE /api/goals/:id
    @access         private
*/
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error("[error] goal not found");
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).send(deletedGoal);
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};