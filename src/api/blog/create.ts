
import { create } from "@/api/config";

export const createPost = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/blog"
    });

}
