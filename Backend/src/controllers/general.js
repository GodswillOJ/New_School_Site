import { Post, User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const JWT_Phrase = process.env.JWT;

export const insertUser = async (req, res) => {
  const { username, email, password, country, city, state, phone } = req.body;

  // Validate input fields
  if (!username || !email || !password || !country, !city || !state || !phone) {
    return res.status(400).json({ error: 'Username, email, and others are required' });
  }
  const user = await User.findOne({ username });
  console.log(req.file)

  if (user) {
    return res.status(400).json({ error: 'User already exists on the site' });
  }

  // Hash the password year
  const hashedPassword = await bcrypt.hash(password, 10);
  const image = req.file.filename

  const newUser = new User({ username, email, image: image, password: hashedPassword, country: country, city: city, phoneNumber: phone, state: state, role: 'user' });

  try {
    const savedUser = await newUser.save();
    if (savedUser) {
      // Call sendVerifyMail function with user details
      sendVerifyMail(savedUser.username, savedUser.email, savedUser._id);
      console.log(savedUser);

      res.json(savedUser);
    } else {
      res.status(500).json({ error: 'Error in verifying user' });
    }
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// user login
export const LoginVerifyUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const role = user.role;

    if (role !== 'admin') {
      return res.status(403).json({ error: 'Access forbidden for admin users' });
    }

    const token = jwt.sign({ userId: user._id, role }, JWT_Phrase, { expiresIn: '1d' });
    console.log(user);

    res.json({ access_token: token, userID: user._id, userData: user });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// admin login
export const LoginVerify = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const role = user.role;

    if (role !== 'user') {
      return res.status(403).json({ error: 'Access forbidden for admin users' });
    }

    const token = jwt.sign({ userId: user._id, role }, JWT_Phrase, { expiresIn: '1d' });
    console.log(user);

    res.json({ access_token: token, userID: user._id, userData: user });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const userVerify_Mail = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Verifying user with ID: ${id}`);

    const updateInfo = await User.updateOne({ _id: id }, { $set: { is_verified: 1 } });
    console.log('Update response:', updateInfo);

    if (updateInfo.nModified === 0) {
      console.log('No document was updated.');
      return res.status(404).json({ error: 'User not found or already verified.' });
    }

    const user = await User.findById(id);
    console.log('Update successful:', user);
    res.json({ message: 'Your mail has been verified', userID: user });
  } catch (error) {
    console.error('Mail Verification error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const fetchUserData = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// For verify mail
const port = process.env.PORT
const emailUser = process.env.EmailUser
const emailPassword = process.env.EmailPassword

export const sendVerifyMail = async(username, email, userId)=> {
  try {
      const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          requireTLS: true,
          auth: {
              user: emailUser,
              pass: emailPassword
          }
      });

      const VerifyLink = `https://go-tech-school-be56.onrender.com/user_verify/${userId}`;

      const mailOptions = {
        from: emailUser,
        to: email,
        subject: 'Verify Mail Link',
        html: `<p>Hi ${username},<br/>Please click <a href="${VerifyLink}">here</a> to verify your mail</p>`
      };

      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error)
          } else {
              console.log('Email has been sent:-', info.response)
          }
      })
  } catch (error) {
      console.log(error.message)
  }
}