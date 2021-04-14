const fs = require("fs");

if (fs.existsSync("storange-files")) {
  console.log("Directory already exist");
} else {
  fs.mkdir("storange-files", (err) => {
    if (err) {
      throw err;
    }

    console.log("directory created");
  });
}
