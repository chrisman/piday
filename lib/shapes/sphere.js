const { pi } = require('../constants');

const createSphere = ({
  radius = 0
}) => ({
  diameter: radius * 2,
  radius,
  surfaceArea: Math.floor(4 * pi * radius**2)
})

module.exports = {
  createSphere
}
