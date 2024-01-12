const fs = require("fs-extra");
const concat = require("concat");

const build = async () => {
  const files = [
    "./dist/web-component/runtime.js",
    "./dist/web-component/polyfills.js",
    "./dist/web-component/styles.css",
    "./dist/web-component/main.js",
  ];

  await fs.ensureDir("dist/web-component");
  await concat(files, "web-component-demo/web-component.js");
  console.log("Files concatenated successfully!!!");
};
build();
