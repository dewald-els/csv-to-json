const fs = require("fs");

const writeFile = (fileOutputPath, json) => { 
  return new Promise((resolve, reject) => {
    fs.writeFile(fileOutputPath, JSON.stringify(json), (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, fileContents) => {
      if (error) {
        reject(error);
      } else {
        resolve(fileContents);
      }
    });
  });
};

module.exports = {
  readFile,
  convertFileToJson,
  writeFile,
};
