import BookModel from "~~/server/models/Book.model";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const id = event.context.params.id;
    try {
        await BookModel.findByIdAndDelete(id);
        return { message: "Book removed" };
    } catch (error) {
        throw createError({
            // @ts-ignore
            message: error.message,
        });
    }
});