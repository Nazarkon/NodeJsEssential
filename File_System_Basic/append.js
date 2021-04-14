const fs = require("fs");
const colorData = require("./assets/color.json");

colorData.colorList.forEach(color => {
    fs.appendFile("./storange-files/colors.md", `${color.color}: ${color.hex} \n`, err => {
        if(err){
            throw err;
        }
    });
});