export const getPagesCount = (totalPages, limit) => {
    return Math.ceil(totalPages / limit)
}

export const getPagesArray = (pagesCount) => {
    let pagesArray = []
    for (let i = 0; i < pagesCount; i++) {
        pagesArray.push(i + 1)
    }
    return pagesArray
}