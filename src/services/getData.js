export const getCategories = async () => {
    const res = await fetch('https://opentdb.com/api_category.php')
    return res
}

export const getQuestions = async (url) => {
    const res = await fetch(url);
    return res;
};

