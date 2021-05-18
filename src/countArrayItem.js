export default function countArrayItem(arr) {
  const map = new Map()

  for (const item of arr) {
    const cnt = map.get(item)
    if (cnt === undefined) {
      map.set(item, 1)
    } else {
      map.set(item, cnt + 1)
    }
  }

  return map
}
