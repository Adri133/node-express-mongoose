import mongoose from 'mongoose';

class Database {
  mongoDb = 'mongodb://127.0.0.1/test';

  connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
    // Get the default connection
    const db = mongoose.connection;
    
    // Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }
}

export default new Database();