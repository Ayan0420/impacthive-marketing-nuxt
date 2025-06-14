import mongoose, {Schema, Document, Model} from 'mongoose'

export interface IPost extends Document {
    title: string
    content: string
}

const PostSchema: Schema<IPost> = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true}
})

export const Post: Model<IPost> = mongoose.models.Post || mongoose.model('Post', PostSchema)

