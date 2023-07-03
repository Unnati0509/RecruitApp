const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// app.post('/login', (req, res) => {
//   // Your login authentication logic here

//   // Assuming login is successful, redirect to the candidate-search page
//   res.redirect('/candidateSearch');
// });
// app.get('/candidate-search', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'candidateSearch.html'));
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
