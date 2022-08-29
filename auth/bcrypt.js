import * as bcrypt from "bcrypt";

export class BcryptHelper {
  async hashGenerator(password) {
    const hashedPassword = await bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log(err);
        throw new Error("Error in hash");
      }

      return hash;
    });
    console.log("hash: ", hashedPassword);
    return hashedPassword;
  }

  comparePassword(password, hash) {}
}
