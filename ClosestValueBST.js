function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueHelper(tree, target, Infinity);
}
function findClosestValueHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest);
  } else if (target > tree.value) {
   return findClosestValueHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
