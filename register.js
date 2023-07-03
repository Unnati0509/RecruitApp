const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'login.html'));
// });

// app.post('/login', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   // Perform login authentication logic
//   // Redirect to dashboard or display error message
// });

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});


// app.post('/register', (req, res) => {
//     console.log(req.body);
//     // res.json({message:req.body})
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   // Perform registration logic
//   // Store user information or display success message
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
