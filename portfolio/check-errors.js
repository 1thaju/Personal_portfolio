const { execSync } = require("child_process");
const fs = require("fs");

try {
  const output = execSync("npx tsc --noEmit", { encoding: "utf8" });
  fs.writeFileSync("output.txt", "SUCCESS\n" + output);
} catch (error) {
  fs.writeFileSync("output.txt", "FAILED\n" + error.stdout + "\n" + error.stderr);
}
