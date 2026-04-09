const { execSync } = require("child_process");

execSync("npx next-sitemap", { stdio: "inherit" });
