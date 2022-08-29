import { CharacterRepositoryMongoDb } from "../database/repositories/characterRepository.js";
import { userRepositoryMongoDb } from "../database/repositories/userRepository.js";
import { CreateCharacterUseCase } from "../services/useCases/character/createCharacter.js";
import { UpdateCharacterUseCase } from "../services/useCases/character/updateCharacter.js";
import { FindAllCharacterUseCase } from "../services/useCases/character/findAllCharacter.js";
import { FindCharacterByIdUseCase } from "../services/useCases/character/findCharacterById.js";
import { FindCharacterByNameUseCase } from "../services/useCases/character/findCharacterByName.js";
import { DeleteCharacterUseCase } from "../services/useCases/character/deleteCharacter.js";
import { FindUserByIdUseCase } from "../services/useCases/user/findUserById.js";
import { Services } from "../services/service.js";
import { CharacterController } from "../controllers/characterController.js";
import { CharacterRoutes } from "../routes/characterRoutes.js";


export function makeCharacterFactory(router) {
  const characterRepository = new CharacterRepositoryMongoDb();
  const userRepository = new userRepositoryMongoDb();

  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);

  const findCharacterByIdUseCase = new FindCharacterByIdUseCase(
    characterRepository
  );
  const createCharacterUseCase = new CreateCharacterUseCase(
    characterRepository,
    findUserByIdUseCase
  );
  const updateCharacterUseCase = new UpdateCharacterUseCase(
    characterRepository,
    findCharacterByIdUseCase
  );
  const deleteCharacterUseCase = new DeleteCharacterUseCase(
    characterRepository
  );
  const findCharacterByNameUseCase = new FindCharacterByNameUseCase(
    characterRepository
  );
  const findAllCharactersUseCase = new FindAllCharacterUseCase(
    characterRepository
  );

  const characterService = new Services(
    createCharacterUseCase,
    updateCharacterUseCase,
    findAllCharactersUseCase,
    findCharacterByIdUseCase,
    deleteCharacterUseCase
  );

  const characterController = new CharacterController(
    characterService,
    findCharacterByNameUseCase
  );

  const characterRoutes = new CharacterRoutes(characterController, router);

  return characterRoutes;
}