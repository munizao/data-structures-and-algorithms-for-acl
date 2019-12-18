const { Queue } = require('./queue');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if(animal instanceof Dog) {
      this.dogQueue.enqueue(animal);
    }
    else if(animal instanceof Cat) {
      this.catQueue.enqueue(animal);
    }
    else throw new Error('object is neither a dog nor a cat');
  }

  dequeue(pref) {
    if(pref === 'dog') {
      return this.dogQueue.dequeue();
    }
    else if(pref === 'cat') {
      return this.catQueue.dequeue();
    }
    return null;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
}

module.exports = {
  AnimalShelter, Dog, Cat
};
