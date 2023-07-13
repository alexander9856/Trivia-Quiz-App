const base_url = 'https://opentdb.com/api.php?amount=';

export const urlBuilder = ({ questionsNum, category, difficulty, type }) => {
    let url = base_url + questionsNum;

    if (category !== 'any') {
        url += `&category=${category}`;
    }
    if (difficulty !== 'any') {
        url += `&difficulty=${difficulty}`;
    }
    if (type !== 'any') {
        url += `&type=${type}`;
    }
    
    return url;
};