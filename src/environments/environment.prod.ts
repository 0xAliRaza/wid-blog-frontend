const SERVER_URL = "https://wid-blog-backend.0xali.com";

export const environment = {
  tinymce_base_url: "/wid-blog-frontend/tinymce",
  production: true,
  serverUrl: SERVER_URL,
  apiUrl: `${SERVER_URL}/api/v1`,
  storageDir: `${SERVER_URL}/storage`,
  postImageUploadUrl: `${SERVER_URL}/api/v1/post/imageUpload`,
};
