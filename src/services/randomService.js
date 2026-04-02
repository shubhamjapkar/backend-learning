const catMe = require("cat-me");
const itemService = require("./itemService");

class RandomService {
  getRandomNumber(min = 1, max = 100) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return { min, max, value: randomValue };
  }

  getRandomItem() {
    return itemService.getRandomItem();
  }

  getRandomCat() {
    return { art: catMe() };
  }
}

module.exports = new RandomService();
