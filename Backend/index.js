import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import Teachers from './src/routes/teacher.js';
import General from './src/routes/general.js';
import Management from './src/routes/management.js';
import Student from './src/routes/student.js';

dotenv.config();

const __dirname = path.resolve(); // Define __dirname manually for ES modules

const app = express();
const PORT = process.env.PORT || 3400;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', Student);
app.use('/api', Management);
app.use('/api', Teachers);
app.use('/api', General);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
