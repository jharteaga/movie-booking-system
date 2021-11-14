class Response {
  constructor(meta = {}, data = {}, errors = []) {
    this.meta = meta
    this.data = data
    this.errors = errors
  }
}

module.exports = Response
