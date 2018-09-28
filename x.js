const {spawn} = require('child_process')

const log = spawn('node', ['-e', "console.log(`hhhh`)"], {stdio: 'inherit'})

process.nextTick(() => console.log('next tick'))
// Promise.resolve().then(() => console.log('in promise'))
console.log('sync func 1')
console.log('sync func 2')
console.log('sync func 3')
console.log('sync func 4')
console.log('sync func 5')
console.log('sync func 6')
console.log('sync func 7')

setTimeout(() => console.log('setTimeout'), 0)
setImmediate(() => console.log('setImmediate'))


function clickOn(el) {
  const {bottom, left, right, top} = el.getBoundingClientRect()
  const mouseClick = document.createEvent('MouseEvent')
  const mouseMouseUp = document.createEvent('MouseEvent')

  const elYCenter = top + ((bottom - top) / 2) // as a clientY
  const elXCenter = left + ((right - left) / 2) // as a clientX

  const screenX = window.screenX + elXCenter // as a screenX
  const screenY = window.screenY + elYCenter // as a screenX

  mouseClick.initMouseEvent(
    'mousedown', true, false, window, 1, // detail : Event's mouse click count
    screenX, // screenX
    screenY, // screenY
    elXCenter, // clientX
    elYCenter, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button : 0 = click, 1 = middle button, 2 = right button
    null // relatedTarget : Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.
  )

  mouseMouseUp.initMouseEvent(
    'mouseup', true, false, window, 1, // detail : Event's mouse click count
    screenX, // screenX
    screenY, // screenY
    elXCenter, // clientX
    elYCenter, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button : 0 = click, 1 = middle button, 2 = right button
    null // relatedTarget : Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.
  )
  el.dispatchEvent(mouseClick)
  el.dispatchEvent(mouseMouseUp)
}