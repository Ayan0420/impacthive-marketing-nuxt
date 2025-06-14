import { Post } from "../models/Posts";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        console.log(body);

        await connectToDB();

        const newPost = new Post(JSON.parse(body));
        await newPost.save();

        return {
            success: true,
            data: newPost,
        };
    } catch (error) {
        return {
            success: false,
            error: error,
        };
    }
});
