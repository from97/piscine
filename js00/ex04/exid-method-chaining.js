const exidMethodChaining = {
  count: 0,
  up() {
    this.count++
    console.log('up', this.count)
    return this
  },
  down() {
    this.count--
    console.log('down', this.count)
    return this
  },
  showCount() {
    console.log(this.count)
    return this
  },
}

exidMethodChaining
  .up()
  .down()
  .up()
  .up()
  .down()
  .up()
  .down()
  .up()
  .up()
  .down()
  .showCount()
