function deepFreeze(obj) {
  Object.freeze(obj);

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}

const config = deepFreeze({
  api: {
    baseUrl: 'https://x.com',
    retries: 3
  },
  debug: false
});

try {
  config.api.baseUrl = 'https://changed.com';
} catch (error) {}

try {
  config.debug = true;
} catch (error) {}

console.log(config.api.baseUrl, config.debug);
console.log(Object.isFrozen(config.api));