const { pi } = require('../constants');

const createEllipse = ({
  a = 0,
  b = 0,
}) => ({
  a,
  b,
  area: pi * a * b,
  width: a * 2,
  height: b * 2,
})

module.exports = {
  createEllipse
}
