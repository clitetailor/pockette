export function ItemsService() {
  const items = new Set()

  function add(item) {
    items.add(item)
  }

  function remove(item) {
    items.delete(item)
  }

  function list() {
    return Array.from(a)
  }

  return {
    add,
    remove,
    list
  }
}
