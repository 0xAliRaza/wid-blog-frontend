const SERVER_URL = "http://localhost:8000";

export const environment = {
  production: true,
  serverUrl: SERVER_URL,
  apiUrl: `${SERVER_URL}/api/v1`,
  storageDir: `${SERVER_URL}/storage`,
  postImageUploadUrl: `${SERVER_URL}/api/v1/post/imageUpload`
};
