export function StoreService() {
    const data = {}

    function get(key) {
        return data[key]
    }

    function set(key, value) {
        data[key] = value
    }

    return {
        get,
        set
    }
}
