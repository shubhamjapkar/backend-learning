const itemService = require("../services/itemService");

const itemController = {
  getAll(req, res) {
    const items = itemService.getAllItems();
    res.status(200).json({ data: items });
  },

  getById(req, res) {
    const item = itemService.getItemById(req.params.id);
    res.status(200).json({ data: item });
  },

  create(req, res) {
    const item = itemService.createItem(req.body);
    res.status(201).json({ data: item });
  },

  update(req, res) {
    const item = itemService.updateItem(req.params.id, req.body);
    res.status(200).json({ data: item });
  },

  remove(req, res) {
    const deletedItem = itemService.deleteItem(req.params.id);
    res.status(200).json({ data: deletedItem });
  }
};

module.exports = itemController;
