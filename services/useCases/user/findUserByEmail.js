export class FindUserByEmailUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(email) {
    const user = await this.repository.FindUserByEmail(email);
    if (!user) {
      throw new Error("user not found");
    }
    return user;
  }
}
