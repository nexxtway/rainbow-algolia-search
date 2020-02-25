export const getRatingCount = stars =>
    Object.values(stars).reduce((accumulator, value) => Number(accumulator) + Number(value), 0);
