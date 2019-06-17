import isNumber from './isNumber'

/**
 * Generate random number, support Int or Float
 * 
 * @param {number} min 
 * @param {number} max 
 * @param {integer} floating 
 */
export default function random (min = 0, max = 100, floating = 0) {
  if (!isNumber(min) || !isNumber(max)) throw new Error('min and max must be number')
  if (!isNumber(floating) || !Number.isInteger(floating) || floating < 1 || floating > 20) throw new Error('floating must be an integer between 0 and 20')

  const rand = Math.random() * (max - min)
  if (floating) {
    return min + parseFloat(rand.toFixed(floating))
  } else {
    return Math.floor(min + rand)
  }
}
