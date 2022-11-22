export const useGetObjectsById = (idArr, colection) => {
    return idArr.map((id) => {
        return colection.find((item) => item.id === id)
    })
}

