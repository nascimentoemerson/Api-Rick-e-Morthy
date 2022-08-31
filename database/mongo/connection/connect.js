import {mongoose} from "mongoose";
// import { config } from "dotenv";

// if (process.env.NODE_ENV !== "production") {
//   config();
// }

export class MongoDbConnection {
  async ConnectDb() {
    console.log("Atlas Database conectado")
    await mongoose.connect(process.env.DATABASE_URL);
  }
}
