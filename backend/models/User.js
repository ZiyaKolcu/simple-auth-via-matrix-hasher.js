require('dotenv').config();
const mongoose = require('mongoose');
const { MatrixHasher } = require('matrix-hasher.js');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  const dimension = parseInt(process.env.DIMENSION, 10);
  const keyMatrix = MatrixHasher.genKeyMatrix(
    process.env.KEY_MATRIX_SEED,
    dimension
  );
  this.password = MatrixHasher.matrixHash(this.password, keyMatrix, dimension);
  next();
});

userSchema.methods.matchPassword = function (enteredPassword) {
  const dimension = parseInt(process.env.DIMENSION, 10);
  const keyMatrix = MatrixHasher.genKeyMatrix(
    process.env.KEY_MATRIX_SEED,
    dimension
  );
  return MatrixHasher.compare(
    enteredPassword,
    this.password,
    keyMatrix,
    dimension
  );
};

module.exports = mongoose.model('User', userSchema);
