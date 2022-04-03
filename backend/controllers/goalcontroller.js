/*
    @description    get goals
    @route          GET /api/goals
    @access         private
*/
const getGoals = (req, res) => {
    res.status(200).send({ message: 'get goals' });
};

/*
    @description    set goal
    @route          POST /api/goals
    @access         private
*/
const setGoal = (req, res) => {
    res.status(200).send({ message: 'set goal' });
};

/*
    @description    update goal for id
    @route          PUT /api/goals/:id
    @access         private
*/
const updateGoal = (req, res) => {
    res.status(200).send({ message: `update goal where id=${req.params.id}` });
};

/*
    @description    delete goal for id
    @route          DELTE /api/goals/:id
    @access         private
*/
const deleteGoal = (req, res) => {
    res.status(200).send({ message: `delete goal where id=${req.params.id}` });
};

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};