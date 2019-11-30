class Storage {
  constructor() {
    this.localStorage = window.localStorage ? window.localStorage : null
    this.sessionStorage = window.sessionStorage ? window.sessionStorage : null
    this.isSupported = false
    this.checkBrowserSupport()
  }

  checkBrowserSupport() {
    if (this.localStorage && this.sessionStorage) {
      this.isSupported = true
    } else {
      this.isSupported = false
    }
  }
  get(key) {
    new Promise((resolve, reject) => {
      if (this.isSupported) {
        const value = this.localStorage.getItem(key)
        resolve(value)
      } else {
        reject("your browser doesn't support locatl storage")
        throw new Error("your browser doesn't support locatl storage")
      }
    })
  }
  set(key, value) {
    new Promise((resolve, reject) => {
      if (this.isSupported) {
        this.localStorage.setItem(key, value)
        resolve()
      } else {
        reject("your browser doesn't support locatl storage")
        throw new Error("your browser doesn't support locatl storage")
      }
    })
  }
  getJson(key) {
    new Promise((resolve, reject) => {
      if (this.isSupported) {
        const data = JSON.parse(this.localStorage.getItem(key))
        return resolve(data)
      } else {
        reject("your browser doesn't support locatl storage")
        throw new Error("your browser doesn't support locatl storage")
      }
    })
  }
  setJson(key, value) {
    new Promise((resolve, reject) => {
      if (this.isSupported) {
        this.localStorage.setItem(key, JSON.stringify(value))
        resolve()
      } else {
        reject("your browser doesn't support locatl storage")
        throw new Error("your browser doesn't support locatl storage")
      }
    })
  }
  remove(key) {
    new Promise((resolve, reject) => {
      if (this.isSupported) {
        this.localStorage.removeItem(key)
        return resolve()
      } else {
        reject("your browser doesn't support locatl storage")
        throw new Error("your browser doesn't support locatl storage")
      }
    })
  }
  clear() {
    new Promise((resolve, reject) => {
      if (this.isSupported) {
        this.localStorage.clear()
        return resolve()
      } else {
        reject("your browser doesn't support locatl storage")
        throw new Error("your browser doesn't support locatl storage")
      }
    })
  }
}

export default new Storage()
