const { stdin, stdout } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Please Enter Your name ", (name) => {
  console.log(name);
  rl.close();
});
