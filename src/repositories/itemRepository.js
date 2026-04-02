const seedItems = require("../data/seedItems");

class ItemRepository {
  constructor() {
    this.items = [...seedItems];
    this.nextId = this.items.length + 1;
  }

  findAll() {
    return [...this.items];
  }

  findById(id) {
    return this.items.find((item) => item.id === id) || null;
  }

  create(payload) {
    const now = new Date().toISOString();
    const item = {
      id: String(this.nextId++),
      name: payload.name,
      description: payload.description || "",
      createdAt: now,
      updatedAt: now
    };

    this.items.push(item);
    return item;
  }

  updateById(id, payload) {
    const item = this.findById(id);
    if (!item) {
      return null;
    }

    if (payload.name !== undefined) {
      item.name = payload.name;
    }
    if (payload.description !== undefined) {
      item.description = payload.description;
    }
    item.updatedAt = new Date().toISOString();

    return item;
  }

  deleteById(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }

    const [deleted] = this.items.splice(index, 1);
    return deleted;
  }

  getRandom() {
    if (this.items.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * this.items.length);
    return this.items[randomIndex];
  }
}

module.exports = new ItemRepository();
