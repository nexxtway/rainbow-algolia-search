export const getNRandomFromArray = (currentArray, numberOfRandom) => {
    if (!Array.isArray(currentArray)) return [];
    const copyArray = [...currentArray];
    const shuffled = copyArray.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberOfRandom);
    return selected;
};
