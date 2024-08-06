import express from 'express';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {
  fetchUserData,
  insertUser,
  // insertAdmin,
  LoginVerify,
  userVerify_Mail,
  LoginVerifyUser,
} from '../controllers/general.js';

const router = express.Router();

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Serve static files from the "public" directory
router.use('/public', express.static('public'));

// Setting up multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + path.extname(file.originalname);
    console.log(`Saving file as: ${filename}`);
    cb(null, filename);
  }
});

// Storage of image
const upload = multer({ storage: storage });

router.get('/', fetchUserData);
router.get('/user_verify/:id', userVerify_Mail);
router.post('/register_@admin', upload.single('file'), (req, res) => {
  // Handle admin registration here
});
router.post('/registerStudent', upload.single('file'), insertUser);
router.post('/login', LoginVerifyUser);
router.get('/student/dashboard', fetchUserData);

export default router;
