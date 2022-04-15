export const sortObjectsOfObjectByTimeStamp = data => {
    const objects = Object.values(data);

    objects.sort((a, b) => b.timestamp - a.timestamp);

    const result = {};
    objects.forEach(object => {
        result[object.id] = object
    })

    return result
}