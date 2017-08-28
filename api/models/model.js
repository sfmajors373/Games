const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  console: {
    type: String,
    enum: ['Atari', 'Playstation', 'Playstation II', 'Playstation Portable', 'Playstation Vita', 'Gameboy', 'Gameboy Color', 'Gameboy Advance']
  },
  altTitle: {
    type: String,
  },
  Code: {
    type: String,
  },
  designerProgrammer: {
    type: String,
  },
  publisher: {
    type: String,
  },
  year: {
    type: Number,
  },
  Genre: {
    type: String,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model('Game', GameSchema);
