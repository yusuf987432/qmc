
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Simple User schema for seeding
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'admin' }
});

UserSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', UserSchema);

async function seedAdmin() {
  try {
    // Use MongoDB Atlas connection string
    const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://admin:admin123@cluster0.mongodb.net/qmc-cms?retryWrites=true&w=majority';
    
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB Atlas');
    
    const adminExists = await User.findOne({ email: 'admin@qmc.edu.ng' });
    
    if (!adminExists) {
      const admin = new User({
        name: 'QMC Admin',
        email: 'admin@qmc.edu.ng',
        password: 'admin123',
        role: 'admin'
      });
      
      await admin.save();
      console.log('Admin user created successfully!');
      console.log('Email: admin@qmc.edu.ng');
      console.log('Password: admin123');
    } else {
      console.log('Admin user already exists');
    }
    
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
}

seedAdmin();
