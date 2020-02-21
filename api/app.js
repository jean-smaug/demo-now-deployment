const fs = require("fs");
const nunjucks = require("nunjucks");

nunjucks.configure({ autoescape: true });

const template = fs.readFileSync(`${__dirname}/../templates/index.njk`, "utf8");

module.exports = (req, res) => {
  const markup = nunjucks.renderString(template, {
    kitchens: [{ name: "aze", url: "aze" }]
  });

  res.send(markup);
};
