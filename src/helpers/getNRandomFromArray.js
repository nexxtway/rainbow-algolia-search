export default (currentArray, numberOfRandom) => {
    if (!Array.isArray(currentArray)) return [];

    const shuffled = currentArray.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, numberOfRandom);

    return selected;
};
