const fs = require("fs");

fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
  console.log("file contents read");
  console.log(text);
});

fs.readFile("./assets/minions.jpg", (err, img) => {
    if(err){
        console.log(`An error ocurred : ${err.message}`);
        process
    }
    console.log("file contents read");
    console.log(img);
  });