import { Post } from "../models/Posts";

export default defineEventHandler(async (event) => {
    try {
        await connectToDB();

        const posts = await Post.find();

        return {
            data: posts,
        };
    } catch (error) {
        return {
            success: false,
            error: error,
        };
    }
});
