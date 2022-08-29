import { userRepositoryMongoDb } from "../database/repositories/userRepository.js";
import { CreateUserUseCase } from "../services/useCases/user/createUser.js";
import { UpdateUserUseCase } from "../services/useCases/user/updateUser.js";
import { DeleteUserUseCase } from "../services/useCases/user/deleteUser.js";
import { FindUserByIdUseCase } from "../services/useCases/user/findUserById.js";
import { FindAllUsersUseCase } from "../services/useCases/user/findAllUsers.js";
import { Services } from "../services/service.js";
import { UserRoutes } from "../routes/userRoutes.js";
import { Controller } from "../controllers/controller.js";

export function makeUserFactory(router) {
  const userRepository = new userRepositoryMongoDb();

  const createUserUseCase = new CreateUserUseCase(userRepository);
  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
  const updateUserUseCase = new UpdateUserUseCase(
    userRepository,
    findUserByIdUseCase
  );
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  const userService = new Services(
    createUserUseCase,
    updateUserUseCase,
    findAllUsersUseCase,
    findUserByIdUseCase,
    deleteUserUseCase
  );
  const userController = new Controller(userService);

  const userRoutes = new UserRoutes(userController, router);

  return userRoutes;
}
