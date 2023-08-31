import { Client, Account, ID, Databases, Storage } from 'appwrite';


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);//64f0699e7a9ea934a103


const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage, ID }