const { pi } = require('../constants');

const createCircle = ({
  radius = 0
} = {}) => ({
  area: Math.floor(pi * radius**2),
  circumference: Math.floor(2 * pi * radius),
  diameter: radius * 2,
  radius,
})

module.exports = {
  createCircle
}
