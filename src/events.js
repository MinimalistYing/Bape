function checkListener (input) {
  if (typeof input !== 'function') throw new TypeError('Listener must be a function')
}

class EventEmitter {
  constructor () {
    this.bus = new Map()
  }

  on (event, listener) {
    checkListener(listener)

    const { bus } = this

    let listeners
    if (bus.get(event)) {
      listeners = bus.get(event)
    } else {
      listeners = []
      bus.set(event, listeners)
    }
    listeners.push(listener)

    let removeIndex = listeners.length - 1
    let flag = true
    return function remove() {
      if (flag) { // can only remove once
        listeners.splice(removeIndex, 1)
        flag = false
      }
    }
  }

  emit (event, ...args) {
    const listeners = this.bus.get(event)

    if (!listeners) return

    for (let listener of listeners) {
      if (typeof listener === 'function') Reflect.apply(listener, this, args)
    }
  }
}

export default EventEmitter
