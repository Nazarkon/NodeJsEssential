const cp = require("child_process");

const questionApp = cp.spawn("node", ["./Node_Modules_Part/question.js"]);

questionApp.stdout.on("data", (data) => {
  console.log(`from question app: ${data}`);
});

questionApp.on("close", () => {
  console.log("questionApp close");
});
