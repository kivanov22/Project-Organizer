import{ID,storage}from "@/appwrite";

const uploadImage = async(file:File)=>{
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "64f076a3cb0e1bc8e8d9",
        ID.unique(),
        file
    );

    return fileUploaded;
}

export default uploadImage;