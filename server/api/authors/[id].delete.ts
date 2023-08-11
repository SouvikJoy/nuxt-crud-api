import AuthorModel from "~~/server/models/Author.model";
import { AuthorSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const id = event.context.params.id;
    try {
        await AuthorModel.findByIdAndDelete(id);
        return { message: "Author removed" };
    } catch (error) {
        throw createError({
            // @ts-ignore
            message: error.message,
        });
    }
});