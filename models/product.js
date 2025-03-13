import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  // e.g. for multiple language support or multiple names
  name: {
    type: [String],
    required: [true, 'Please provide a product name'],
  },

  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
  },

  // 1) Hero images array
  heroImages: {
    type: [String],
    default: [],
  },

  // 2) Specifications (could be an array of objects or a single object)
  specifications: {
    type: [
      {
        key: String,
        value: String,
      },
    ],
    default: [],
  },

  // 3) Related product references (name array in the diagram, 
  //    but often you might store product IDs for relationships)
  relatedProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
  ],

  // 4) Other products (from different category)
  otherProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
  ],

  // 5) YouTube video link
  youtubeVideoLink: {
    type: String,
    default: '',
  },

  // 6) Individual details (benefits, how to use, reviews, FAQs)
  details: {
    benefits: {
      type: String,
      default: '',
    },
    howToUse: {
      type: String,
      default: '',
    },
    reviews: [
      {
        // Adjust to your user model if needed
        user: { type: String, default: '' },
        rating: { type: Number, default: 0 },
        comment: { type: String, default: '' },
      },
    ],
    faqs: [
      {
        question: { type: String, default: '' },
        answer: { type: String, default: '' },
      },
    ],
  },

  // 7) Description
  description: {
    type: String,
    default: '',
  },

  // Optional: link back to Category (if needed)
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },
});

const Product =
  mongoose.models?.products || mongoose.model('products', ProductSchema);

export default Product;
