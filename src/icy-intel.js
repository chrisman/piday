const { pi } = require('../lib')

/**
 * Returns the fluence of a laser blast
 * @param {number} radius - radius of the laser in cm
 * @param {number} opticalPulseEnergy - energy of the laser in J
 * @returns {number} J/cm^2
 */
const fluence = (radius) => (opticalPulseEnergy) =>
  opticalPulseEnergy / ((pi * radius**2) / 2)

// constants
const radius = 125  // micrometers
const energy = 0.3  // mJ
const power  = 0.73 // percent of max laser power

const peakFluence = fluence
  (radius / 1e4) // micrometers -> cm
  (energy / 1e3) // mJ -> J

const report = `
Peak fluence: ${peakFluence.toFixed(2)} J/cm^2
Fluence at ${power * 100}% power: ${(peakFluence * power).toFixed(2)} J/cm^2
This is ${(peakFluence * power >= 1) ? `greater than or equal to` : `less`} than the required 1.0 J/cm^2
`

console.log(report)
