const { pseudoQueue } = require('./queue-with-stacks');

describe ('pseudoqueue module', () => {
  it('gets out the first thing put in', () => {
    const q = new pseudoQueue();
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    expect(q.dequeue()).toEqual(20);
  });
});

