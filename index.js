const csv2json = require("csvjson-csv2json");
const { readFile, writeFile } = require("./file-service");

readFile("./ufo_sightings.csv").then((csvContents) => {
  const json = csv2json(csvContents, {
    parseNumbers: true,
    separator: ';'
  });
  writeFile("./ufo_sightings.json", { sightings: json });
}).then(() => {
  console.log('Successfully written file');
}).catch(error => {
  console.log('ERROR:', error);
});
