let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

// This code is just here to demonstrate how fs.readdirSync works
let firstHalOfCode = `<!DOCTYPE html>
<html>
<head>
<title>A website!</title>
<link rel="stylesheet" href="css/main.css">
</head>
<body>
<header id="page-header">
<h1>Amazing Photo Gallery</h1>`

let secondHalfOfCode = `</p>
</body>
</html>`;

let addedImages;
//let count = 0;
for (let i = 1; i < imageFileNames.length + 1; i++) {
  let fileName = imageFileNames[i - 1];

  if (i === 1) {
    addedImages = `<img src="images/${fileName}" width="500" height="600">`;
    console.log(`${i}. ${fileName}`);
  } else if (i % 3 === 0) {
    addedImages = addedImages + `<img src="images/${fileName}" width="500" height="600">\r\n`;
    console.log(`${i}. ${fileName}`);
  } else {
    addedImages = addedImages + `<img src="images/${fileName}" width="500" height="600">`;
    console.log(`${i}. ${fileName}`);
  }
}
fs.writeFileSync('site/index.html', firstHalOfCode + addedImages + secondHalfOfCode);
