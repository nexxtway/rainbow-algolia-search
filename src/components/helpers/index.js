export const getLanguajeName = languageCode => {
    const languageMap = {
        eng: 'English',
        spa: 'Spanish',
        fre: 'French',
        nl: 'Dutch',
        ara: 'Arabic',
        por: 'Portuguese',
        ger: 'German',
        nor: 'Norwegian',
        jpn: 'Japanese',
        vie: 'Vietnamese',
        ind: 'Indonesian',
        pol: 'Polish',
        tur: 'Turkish',
        dan: 'Danish',
        fil: 'Pilipino',
        ita: 'Italian',
        per: 'Persian',
        swe: 'Swedish',
        rum: 'Romanian',
        rus: 'Russian',
    };

    return languageMap[languageCode] || '';
};
