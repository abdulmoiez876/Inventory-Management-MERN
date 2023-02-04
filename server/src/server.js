import http from 'http';
import mongoose from 'mongoose';

import app from './app.js';

const PORT = 8000;
const MONGO_URL = "mongodb+srv://inventoryApi:tvbGjwgjqf8zwgsL@inventorymanagementclus.xwtqdgk.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log("MongoDB connection established!");
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

await mongoose.connect(MONGO_URL);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})