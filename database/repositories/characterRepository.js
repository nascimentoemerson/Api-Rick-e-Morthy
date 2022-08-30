import { characterDb } from "../mongo/schemas/character.js";

export class CharacterRepositoryMongoDb {
  async create(character) {
    return await characterDb.create(character);
  }

  async update(character) {
    const characterUpdated = await characterDb.findOneAndUpdate(
      { id: character.id },
      character,
      {
        new: true,
      }
    );
    return characterUpdated;
  }

  async delete(characterId) {
    return await characterDb.findOneAndDelete({ id: characterId });
  }

  async find(characterId) {
    return await characterDb.findOne({ id: characterId });
  }

  async findByName(characterName) {
    return await characterDb.find({ name: characterName });
  }

  async findAll() {
    return await characterDb.find();
  }
}
