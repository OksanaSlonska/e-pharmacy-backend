import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: 'Admin',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  if ('token' in obj) {
    delete obj.token;
  }
  return obj;
};

export const User = model('user', userSchema);
