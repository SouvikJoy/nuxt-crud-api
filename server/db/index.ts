import mongoose from "mongoose"

export default async (_nitroApp: any) => {
    const config = useRuntimeConfig();

    mongoose
        .connect(config.MONGO_URI)
        .then(() => console.log(`Connected to Database`))
        .catch((e) => console.log(e));
}