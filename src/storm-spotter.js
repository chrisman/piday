const { createSphere, createEllipse } = require('../lib')

const earth = createSphere({
  radius: 6371
})

const spot = {
  1979: createEllipse({
    a: 24700 / 2,
    b: 13300 / 2,
  }),
  2018: createEllipse({
    a: 16500 / 2,
    b: 11400 / 2,
  })
}


const report = `
Current width of the spot: ${spot['2018'].width.toLocaleString('en')} km
Diameter of Earth: ${earth.diameter.toLocaleString('en')} km
The spot is currently ${Math.floor(spot['2018'].width / earth.diameter * 100)}% earth's width.

Spot area in 1979: ${Math.floor(spot['1979'].area).toLocaleString('en')} km^2
Spot area in 2018: ${Math.floor(spot['2018'].area).toLocaleString('en')} km^2
The spot is ${Math.floor(spot['2018'].area / spot['1979'].area * 100)}% its 1979 size.
It shrank by ${100 - Math.floor(spot['2018'].area / spot['1979'].area * 100)}%.
`

console.log(report)
