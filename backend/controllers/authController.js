const User = require('../models/User');

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = await User.create({ username, email, password });
    req.session.userId = newUser._id;
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    req.session.userId = user._id;
    res.json({ message: 'Signed in successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in', error });
  }
};

const profile = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Not authenticated.' });
  }

  try {
    const user = await User.findById(req.session.userId).select(
      'username email'
    ); 

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile.' });
  }
};

const signout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error signing out' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Signed out successfully' });
  });
};

const whoami = (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.json({ userId: req.session.userId });
};

module.exports = {
  signup,
  signin,
  signout,
  profile,
  whoami,
};
