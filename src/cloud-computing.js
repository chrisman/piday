const { createCylinder } = require('../lib')

const cloud = createCylinder({
  radius: 5,
  height: 6,
})

const cumulusCloudLiquidWaterContent = 500000
const waterDensity = 1000
const olympicSwimmingPoolVolume = 2500

const cloudWaterContent = cumulusCloudLiquidWaterContent * cloud.volume

const report = `
Cloud volume: ${cloud.volume} km^3
Total water in the cloud: ${cloudWaterContent.toLocaleString('en')} kg
Number of olympic pools: ${cloudWaterContent / waterDensity / olympicSwimmingPoolVolume}
`

console.log(report);
