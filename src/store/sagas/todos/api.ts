import axios from "axios";

export const getTodosApi = async () =>
  await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
