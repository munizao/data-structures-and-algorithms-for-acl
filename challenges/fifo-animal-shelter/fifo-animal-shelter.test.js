const { AnimalShelter, Dog, Cat } = require('./fifo-animal-shelter');

describe ('Animal Shelter module', () => {
  it('gets out the first dog if dog is preferred', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Cat('Pixel'));
    shelter.enqueue(new Dog('Rover'));
    shelter.enqueue(new Dog('Spot'));
    expect(shelter.dequeue('dog').name).toEqual('Rover');
  });
});
