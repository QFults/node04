// function Animal (type, sound) {
//   this.type = type
//   this.sound = sound
//   this.makeSound = () => {
//     console.log(this.sound)
//   }
// }

// let dog = new Animal('dog', 'bark')
// let cat = new Animal('cat', 'meow')
// let giraffe = new Animal('giraffe', 'WEEE!')

// dog.makeSound()
// cat.makeSound()
// giraffe.makeSound()

class Animal {
  constructor (type, sound) {
    this.type = type
    this.sound = sound
    this.makeSound = () => {
      console.log(this.sound)
    }
  }
}

let dog = new Animal('dog', 'bark')

dog.makeSound()

class Reptile extends Animal {
  constructor(type, sound, scales) {
    super(type, sound)
    this.scales = scales
  }
}

let lizard = new Reptile('lizard', 'hiss', 100)

console.log(lizard)


// function Person (name, age, email, address) {
//   this.name = name
//   this.age = age
//   this.email = email
//   this.address = address
//   this.printInfo = () => {
//     console.log(`
//       Name: ${this.name}
//       Age: ${this.age}
//       Email: ${this.email}
//       Address: ${this.address}
//     `)
//   }
// }

// let person1 = new Person('John Doe', 54, 'johndoe@gmail.com', '123 Main St')

// person1.printInfo()

// function Teacher (name, age, email, address, subject) {
//   Person.call(this, name, age, email, address)
//   this.subject = subject
// }

// let teacher1 = new Teacher('Mr Johnson', 54, 'jjohnson@gmail.com', '321 South St', 'math')

// console.log(teacher1)

// function Student (name, age, email, address, gpa, grade, favoriteSubject) {
//   Person.call(this, name, age, email, address)
//   this.gpa = gpa
//   this.grade = grade
//   this.favoriteSubject = favoriteSubject
// }

// let student1 = new Student('Jack Doe', 18, 'jackdoe@gmail.com', '123 West St', 3.8, 12, 'english')

// console.log(student1)
