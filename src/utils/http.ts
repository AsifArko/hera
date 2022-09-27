import axios from "axios";

export const post = async (path:string, payload: any) => {
  return await axios.post(url(path), payload)
}

export const get = async (path: string) => {
  return await axios.get(url(path))
}

const url = (path: string) => `http://localhost:6060/api/${path}`
