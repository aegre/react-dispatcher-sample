export default class Dispatcher {
  events = {}

  /**
   * Adds the callback to a list of listeners
   * @param {string} eventName 
   * @param {function} callback 
   */
  addListener (eventName, callback) {
  if (typeof callback !== 'function') {
    throw new Error('You must provide a function as an event listener')
  }

  if (typeof eventName !== 'string') {
    throw new Error('The event name must be a string')
  }
  
  if (!this.events[eventName]) {
    this.events[eventName] = {
      listeners: []
    }
  }

  this.events[eventName].listeners.push(callback)
}

  /**
   * Removes a certain event listener from the event's listener list
   * @param {string} eventName 
   * @param {Function} callback 
   */
  removeListener (eventName, callback) {
    if (this.events[eventName] === undefined) {      
      this.events[eventName].listeners = this.events[eventName].listeners.filter(listener => listener.toString() !== callback.toString())
    }
  }

  /**
   * Calls the listeners for a certain event with the provided payload
   * @param {string} eventName 
   * @param {*} payload 
   */
  dispatch (eventName, ...payload) {
    if (this.events[eventName]) {
      this.events[eventName].listeners.forEach((listener) => {
        listener(payload)
      })
    }
    
  }  
}

