import BookModel from "~~/server/models/Book.model";
import { BookSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let { error } = BookSchema.validate(body);
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }
    try {
        await BookModel.create(body);
        return { message: "Book created" };
    } catch (error) {
        throw createError({
            // @ts-ignore
            message: error.message,
        });
    }
});