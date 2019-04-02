const { createCircle, createSphere } = require('../lib')

const mars = createSphere({
  radius: 3396.2
})

const caldera = createCircle({
  radius: 70 / 2
})

const areaCoveredInDust = mars.surfaceArea - caldera.area

const percentageCovered = areaCoveredInDust / mars.surfaceArea * 100

const report = `
Surface area of Mars: ${mars.surfaceArea.toLocaleString('en')} km^2
Area of Olympus Mons: ${caldera.area.toLocaleString('en')} km^2
Area covered in dust: ${areaCoveredInDust.toLocaleString('en')} km^2
Percentage covered: ${percentageCovered}%
`

console.log(report)
