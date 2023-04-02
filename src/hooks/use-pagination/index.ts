export default function usePagination(
  current: number,
  total: number,
): string[] {
  const delta = 2
  const left = current - delta
  const right = current + delta + 1
  const range: number[] = []
  const rangeWithDots: string[] = []
  let l: number | null = null

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(`${l + 1}`)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i.toString())
    l = i
  }

  return rangeWithDots
}
