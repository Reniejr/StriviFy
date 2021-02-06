//FETCH
export const getUser = async (query) => {
    let url
    query
        ? url = `${process.env.REACT_APP_STRIVIFY_DB_ONLINE}/strivify/user?${query}`
        : url = `${process.env.REACT_APP_STRIVIFY_DB_ONLINE}/strivify/user`
    const response = await fetch(url),
        result = await response.json()
    console.log(result)
    return result
}