function swipeElement(el, x = -50, y = 0) {
  const elRect = el.getBoundingClientRect()
  const elCenterX = elRect.left + (elRect.width / 2)
  const elCenterY = elRect.top + (elRect.height / 2)

  const mouseDown = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: elCenterX,
    clientY: elCenterY,
    screenX: window.screenX + elCenterX,
    screenY: window.screenY + elCenterY
  })

  const mouseMove = new MouseEvent('mousemove', {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: elCenterX + x,
    clientY: elCenterY + y,
    screenX: window.screenX + elCenterX + x,
    screenY: window.screenY + elCenterY + y
  })

  const mouseUp = new MouseEvent('mouseup', {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: elCenterX + x,
    clientY: elCenterY + y,
    screenX: window.screenX + elCenterX + x,
    screenY: window.screenY + elCenterY + y
  })

  el.dispatchEvent(mouseDown)
  el.dispatchEvent(mouseMove)
  el.dispatchEvent(mouseUp)
}