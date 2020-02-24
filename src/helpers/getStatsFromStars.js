import getRatingCount from './getRatingCount';

export default stars => {
    const stats = [];
    const ratCount = getRatingCount(stars);

    for (let index = 1; index <= 5; index += 1) {
        const key = `star${index}`;
        stats.push({
            baseStat: index,
            percentage: Math.round((stars[key] * 100) / ratCount),
        });
    }

    return stats;
};
