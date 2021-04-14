const fs = require("fs");

// fs.readdirSync("./storage").forEach(fileName => {
//     fs.unlinkSync(`./storage/${fileName}`)
// });

fs.renameSync("./storange-files", "./storage");
fs.rmdir("./storage", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Storage directory removed");
  }
});
