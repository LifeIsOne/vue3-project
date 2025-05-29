const boards = [
  { id: 1, title: 'title01', content: 'content01', createdAt: '2025-01-01' },
  { id: 2, title: 'title02', content: 'content02', createdAt: '2025-02-02' },
  { id: 3, title: 'title03', content: 'content03', createdAt: '2025-03-03' },
  { id: 4, title: 'title04', content: 'content04', createdAt: '2025-04-04' },
  { id: 5, title: 'title05', content: 'content05', createdAt: '2025-05-05' },
]

// 목록 조회
export function getBoards() {
  return boards
}

export function getBoardById(id) {
  const numberId = parseInt(id)
  return boards.find((item) => item.id === numberId)
}
