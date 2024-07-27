import mongoose from "mongoose";

const connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@localhost:27017/blog`;
    try {
       await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error:', error);
    }
};

export default connection;
