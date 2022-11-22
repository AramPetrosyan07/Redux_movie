export const raitingCalc = (movie) => {
    const reiting = movie.reiting;
    let multiply = 0;
    let sum = 0;
    for (let item in reiting) {
        let oneX = +item.substring(item.length - 1) * reiting[item];
        multiply += oneX;
        sum += reiting[item];
    }
    if (multiply === 0 || sum === 0) {
        return 0;
    }
    return multiply / sum;
};