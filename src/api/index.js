import axios from 'axios'

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options))
  return instance
}

// export const boards = create('http://localhost:5001/boards/')
// export const boards = create(import.meta.env.VITE_APP_API_URL + 'boards/')
export const boards = create(`${import.meta.env.VITE_APP_API_URL}boards/`)
