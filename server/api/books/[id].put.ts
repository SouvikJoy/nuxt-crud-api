import BookModel from "~~/server/models/Book.model";
import { BookSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    // @ts-ignore
    const id = event.context.params.id;
    let { error } = BookSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }
    try {
        await BookModel.findByIdAndUpdate(id, body);
        return { message: "Author updated" };
    } catch (error) {
        throw createError({
            // @ts-ignore
            message: error.message,
        });
    }
});