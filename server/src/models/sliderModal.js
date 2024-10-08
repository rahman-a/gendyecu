import mongoose from 'mongoose'

const sliderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    header: {
      en: {
        type: String,
      },
      ar: {
        type: String,
      },
    },
    subHeader: {
      en: String,
      ar: String,
    },
    target: {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModal',
      },
      type: {
        type: String,
      },
    },
    onModal: {
      type: String,
      required: true,
      enum: ['Course', 'Product', 'Blog'],
    },
  },
  { timestamps: true }
)

sliderSchema.post('save', (doc, next) => {
  doc
    .populate({
      path: 'target',
      populate: {
        path: 'itemId',
        select: 'name title',
      },
    })
    .then((_) => next())
})

export default mongoose.model('Slider', sliderSchema)
