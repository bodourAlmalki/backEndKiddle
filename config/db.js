import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URL;

const db = async () => {
try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    console.log(`MongoDB is connected:`);
} catch (err) {
    console.error(err.message);
    process.exit(1);
}
};

export default db;
