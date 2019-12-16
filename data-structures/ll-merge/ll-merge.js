const { LinkedList } = require('../linked-list/linked-list');

function mergeLists(l1, l2) {
  let curr1 = l1.head;
  let curr2 = l2.head;
  while(curr1 && curr2) {
    const nextcurr1 = curr1.next;
    const nextcurr2 = curr2.next;
    curr1.next = curr2;
    curr2.next = nextcurr1;
    curr1 = nextcurr1;
    curr2 = nextcurr2;
  }
  return l1;
}

module.exports = { mergeLists };
