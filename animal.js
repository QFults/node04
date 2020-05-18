class Animal {
  constructor(type, sound) {
    this.type = type
    this.sound = sound
    this.makeSound = () => {
      return this.sound
    }
  }
}

module.exports = Animal