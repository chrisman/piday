const { pi } = require('../constants');

const createCylinder = ({
  radius = 0,
  height = 0,
}) => ({
  radius,
  height,
  volume: Math.floor(pi * radius**2 * height),
})

module.exports = {
  createCylinder
}
