const randomService = require("../services/randomService");

const randomController = {
  number(req, res) {
    const randomNumber = randomService.getRandomNumber();
    res.status(200).json({ data: randomNumber });
  },

  item(req, res) {
    const item = randomService.getRandomItem();
    res.status(200).json({ data: item });
  },

  cat(req, res) {
    const cat = randomService.getRandomCat();
    res.status(200).json({ data: cat });
  }
};

module.exports = randomController;
