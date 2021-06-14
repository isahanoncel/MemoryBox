import mongoose from "mongoose";

const memoSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  creator: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Memory = mongoose.model('memo',memoSchema)

export default Memory