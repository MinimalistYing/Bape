/**
 * Determine whether the Enter Key has been pressed 
 * 
 * @param {event} e 
 */
export default function isEnter(e) {
  return e.key === 'Enter' || e.which === 13 || e.keyCode === 13
}