const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(error => {
    //This is where the error handling is lacking
    console.error('Error:', error); // Logs the error, but doesn't send an error response to the client
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might cause an error
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});