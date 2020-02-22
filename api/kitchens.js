const fs = require("fs");
const artTemplate = require("art-template");

const files = fs.readdirSync(__dirname + "/../images");
const template = fs.readFileSync(`${__dirname}/../templates/index.art`, "utf8");
const render = artTemplate.compile(template);

module.exports = (req, res) => {
  const data = files.map(fileName => ({
    name: fileName,
    url: `https://${req.headers.host}/images/${fileName}`
  }));

  const markup = render({ kitchens: data });

  res.send(markup);
};
