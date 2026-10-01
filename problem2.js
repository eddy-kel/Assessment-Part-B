function diffObjects(oldObj, newObj) {
  let added = {};
  let removed = {};
  let changed = {};

  // Check for added and changed properties
  for (let key in newObj) {
    if (!(key in oldObj)) {
      added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // Check for removed properties
  for (let key in oldObj) {
    if (!(key in newObj)) {
      removed[key] = oldObj[key];
    }
  }

  return {
    added: added,
    removed: removed,
    changed: changed
  };
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
));