import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  // Category name
  name: {
    type: String,
    required: [true, 'Please provide a category name'],
  },

  // 1) Hero images array
  heroImages: {
    type: [String],
    default: [],
  },

  // 2) Products (array of references to Product documents)
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
  ],

  // 3) Deal of the Day (could be a reference to a specific product)
  dealOfTheDay: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    default: null,
  },
});

const Category =
  mongoose.models?.categories || mongoose.model('categories', CategorySchema);

export default Category;
