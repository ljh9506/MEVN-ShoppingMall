import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: "/api/"
  });
  return setInterceptors(instance);
}

export const interceptorAxios = createInstance();
