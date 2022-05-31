module.exports = function (source) {
  const message = `
    /**
    *author: ${this.getOptions().author}
    *date: ${this.getOptions().date}
    **/
  `
  return message + source
}
