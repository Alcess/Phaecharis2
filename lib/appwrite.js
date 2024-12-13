import { configureLayoutAnimationBatch } from "react-native-reanimated/lib/typescript/core";

export const appwrite = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.phaecharis',
    projectId: '6759bb1d003b0e1afe50',
    databaseId: '6759bbe200307122f61b',
    jobsCollectionId: '675b1c690014dea5fee5'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    jobsCollectionId
} = config;


//INIT your react-native sdk
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setEndpoint(config.projectId)
    .setEndpoint(config.platform)

const databases = new Database(client);

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            jobsCollectionId,
        )

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}