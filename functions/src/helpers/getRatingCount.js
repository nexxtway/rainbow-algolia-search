module.exports = stars =>
    Object.values(stars).reduce((accumulator, value) => Number(accumulator) + Number(value), 0);
