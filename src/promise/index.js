const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('Ups!')
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));


// New promise.all with errors no problem.

Promise.allSettled([
  somethingWillHappen(),
  somethingWillHappen2(),
]).then(response => {
  console.log('Array of results', response);
}).catch(err => console.log(err));