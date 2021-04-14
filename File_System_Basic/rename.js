const fs = require("fs");

fs.renameSync('./assets/color.json', './assets/colorData.json');

fs.rename('./assets/notes.md', './storange-files/notes.md', err => {
    if(err){
        throw err;
    }
});

//delete image
setTimeout(() => {
    fs.unlinkSync("./assets/minions.jpg")
},4000);