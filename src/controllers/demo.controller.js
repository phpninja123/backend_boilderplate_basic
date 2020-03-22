const httpStatus = require('http-status');
const catchAsync = require('../shared/catchAsync');
const demoService = require('../services/demo.service');

const welcome = catchAsync(async (req, res) => {
  const demo = await demoService.getDemo(req.body);
  res.status(httpStatus.CREATED).send(demo);
});


module.exports = {
  welcome
};
