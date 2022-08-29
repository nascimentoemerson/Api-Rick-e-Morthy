import { UserEntity } from "../../../entities/user.js";

export class UpdateUserUseCase {
  constructor(userRepository, findUserByID) {
    this.repository = userRepository;
    this.findUserByID = findUserByID;
  }
  async execute(userUpdated, userId) {
    const userToUpdate = await this.findUserByID.execute(userId);
  
    const userModified = Object.assign(userToUpdate, userUpdated);

    const userValidated = new UserEntity(userModified);

    userValidated.validate();

    return await this.repository.updateUser(userValidated.getUser());
  }
}
