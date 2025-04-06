import { Client } from 'react-native-appwrite'

export const config = {
    platform: 'com.rs.restate',
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
}

export const client = new Client()
client.setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)
