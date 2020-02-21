const fs = require("fs");
const nunjucks = require("nunjucks");

nunjucks.configure({ autoescape: true });

const files = fs.readdirSync(__dirname + "/../images");
const template = fs.readFileSync(`${__dirname}/../templates/index.njk`, "utf8");

module.exports = (req, res) => {
  const data = files.map(fileName => ({
    name: fileName,
    url: `https://${req.headers.host}/images/${fileName}`
  }));

  const markup = nunjucks.renderString(template, {
    kitchens: data
  });

  res.send(markup);
};
