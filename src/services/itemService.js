const itemRepository = require("../repositories/itemRepository");
const { createHttpError } = require("../utils/httpError");

class ItemService {
  getAllItems() {
    return itemRepository.findAll();
  }

  getItemById(id) {
    const item = itemRepository.findById(id);
    if (!item) {
      throw createHttpError(404, "Item not found");
    }

    return item;
  }

  createItem(payload) {
    this.validateCreatePayload(payload);
    return itemRepository.create(payload);
  }

  updateItem(id, payload) {
    this.validateUpdatePayload(payload);

    const updatedItem = itemRepository.updateById(id, payload);
    if (!updatedItem) {
      throw createHttpError(404, "Item not found");
    }

    return updatedItem;
  }

  deleteItem(id) {
    const deletedItem = itemRepository.deleteById(id);
    if (!deletedItem) {
      throw createHttpError(404, "Item not found");
    }

    return deletedItem;
  }

  getRandomItem() {
    const item = itemRepository.getRandom();
    if (!item) {
      throw createHttpError(404, "No items available");
    }

    return item;
  }

  validateCreatePayload(payload) {
    if (!payload || typeof payload !== "object") {
      throw createHttpError(400, "Body must be a JSON object");
    }

    if (!payload.name || typeof payload.name !== "string") {
      throw createHttpError(400, "name is required and must be a string");
    }
  }

  validateUpdatePayload(payload) {
    if (!payload || typeof payload !== "object") {
      throw createHttpError(400, "Body must be a JSON object");
    }

    if (payload.name !== undefined && typeof payload.name !== "string") {
      throw createHttpError(400, "name must be a string");
    }

    if (payload.description !== undefined && typeof payload.description !== "string") {
      throw createHttpError(400, "description must be a string");
    }

    if (Object.keys(payload).length === 0) {
      throw createHttpError(400, "At least one field must be provided for update");
    }
  }
}

module.exports = new ItemService();
