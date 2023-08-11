import AuthorModel from "~~/server/models/Author.model";
import { AuthorSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    // @ts-ignore
    const id = event.context.params.id;
    let { value, error } = AuthorSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }
    try {
        await AuthorModel.findByIdAndUpdate(id, body);
        return { message: "Author updated" };
    } catch (error) {
        throw createError({
            // @ts-ignore
            message: error.message,
        });
    }
});