const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  profilePhoto: { type: String }, // URL or file path
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillsOffered: [{ type: String }],
  skillsWanted: [{ type: String }],
  availability: [{ type: String }], // e.g., ['weekends', 'evenings']
  isPublic: { type: Boolean, default: true },
  ratings: [{
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: Number,
    feedback: String,
    date: { type: Date, default: Date.now }
  }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
