function findMax(node) {
  const vals = [node.value];
  node.left && vals.push(findMax(node.left));
  node.right && vals.push(findMax(node.right));
  return Math.max(...vals);
}

module.exports = findMax;
