export class DeleteCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(characterId) {
    const deletedCharacter = await this.repository.delete(characterId);
    if (!deletedCharacter) {
      throw new Error(`Could not delete character ${characterId}`);
    }
    return deletedCharacter;
  }
}
