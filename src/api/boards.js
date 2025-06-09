import axios from 'axios'

// 목록 조회
export function getBoards(params) {
  return axios.get('http://localhost:5001/boards', { params })
}
// 상세 조회
export function getBoardById(boadId) {
  // return axios.get('http://localhost:5001/boards/' + id)
  return axios.get(`http://localhost:5001/boards/${boadId}`)
}
// 생성
export function createBoard(data) {
  return axios.post('http://localhost:5001/boards', data)
}
// 수정
export function updateBoard(boadId, data) {
  return axios.put(`http://localhost:5001/boards/${boadId}`, data)
}
// 삭제
export function deleteBoard(boadId) {
  return axios.delete(`http://localhost:5001/boards/${boadId}`)
}
