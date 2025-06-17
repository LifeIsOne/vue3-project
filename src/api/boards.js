import { boards } from '.'

// 목록 조회
export function getBoards(params) {
  return boards.get('', { params })
}
// 상세 조회
export function getBoardById(boardId) {
  return boards.get(boardId)
}
// 생성
export function createBoard(data) {
  return boards.post('', data)
}
// 수정
export function updateBoard(boadId, data) {
  return boards.patch(boadId, data)
}
// export function updateBoard(boadId, data) {
//   return boards.put(boadId, data)
// }
// 삭제
export function deleteBoard(boadId) {
  return boards.delete(boadId)
}
