const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const additionalUrls = (process.env.ADD_URL || '').split(',');

const listUrls = [
  'https://forms.gle/z8UPzyTSrL3KpVE16', //1
  'https://forms.gle/nPbsTvfWQ7HEP2Sb8', //2
  'https://forms.gle/ZQqEzGTtJYugSahq5', //3

  'https://forms.gle/t8BgmkvanEtbUKsM8', //5
  'https://forms.gle/byCbQnYLyvYENY5DA', //6
  'https://forms.gle/hnR875PdMBMDSuYBA', //7
  'https://forms.gle/M4iqtkVAaChdVGrU9', //8
  'https://forms.gle/YM2WBmRsvDcEJjRLA', //9

  'https://forms.gle/DyZ76dCPTSpRduBw7', //11
  'https://forms.gle/1TTKW6rRRjGve5rB9', //12
  'https://forms.gle/VoRazxZPknj4NmTE6', //13
  'https://forms.gle/r3sNgfLJ9xtLdHKB7', //14
  'https://forms.gle/yqkJQnB4ZA6cxP7x7', //15
  ...additionalUrls
];

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