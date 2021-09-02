let initialState = {
    titles: [
        {
            id: 1,
            title: "Новости",
        },
        {
            id: 2,
            title: "Новости Сочи",
        },
        {
            id: 3,
            title: "Новости Краснодарского края",
        },
        {
            id: 4,
            title: "Новости Москвы",
        },
        {
            id: 5,
            title: "Игровые новости",
        },
        {
            id: 6,
            title: "Аниме новости",
        },

    ]
};

const titleReducer = (state = initialState, action) => {
    return state;
}

export default titleReducer;