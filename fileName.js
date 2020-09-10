const Path = require("path");
const { join } = Path;
const { readdirSync, renameSync } = require("fs");

const filePath = "/media/sabuj/Work/amazon-clone/public/image/product";

// file extention
// const files = filePath.filter((file) => file.endsWith(".jpeg"));

const files = readdirSync(
  "/media/sabuj/Work/amazon-clone/public/image/product"
);
files.forEach((file) => {
  if (Path.extname(file)) {
    if (file.includes(" ")) {
      const oldFile = Path.join(filePath, file);
      const newFileName = Path.join(filePath, file.split(" ").join("_"));
      renameSync(oldFile, newFileName);
    }
  }
});
