import React from "react";
import styles from "./NewsPage.module.css"

const NewsPage = (props) => {

    const news = {
            id: 1,
            title: "Коллектив старейшего в мире оркестра дважды выступит в Сириусе",
            preview: "Музыкальный фестиваль «Сочи.Сириус» продолжат выступления старейшего в мире оркестра, история которого насчитывает более четырехсот лет.",
            text: "27 и 28 августа пройдут концерты Дрезденского камерного оркестра Саксонской государственной капеллы. Коллектив представит две программы:\n" +
                "\n" +
                "В первый вечер прозвучат «Времена года» сразу двух композиторов – итальянского автора эпохи барокко Антонио Вивальди и аргентинского композитора XX века Астора Пьяццоллы.\n" +
                "\n" +
                "Во второй вечер оркестр исполнит шедевры И. С. Баха, В. А. Моцарта, Ф. Мендельсона, Р. Штрауса, Д. Шостаковича, написанные специально для камерного оркестра.\n" +
                "\n" +
                "В открытии музыкального вечера примет участие Чрезвычайный и Полномочный Посол Федеративной Республики Германия в Российской Федерации Геза Андреас фон Гайр.\n" +
                "Начало концертов в 19:30.",
            img: "https://drivenew.ru/upload/resize_cache/iblock/5ea/944_629_26b22810fab4bff8ee101c821c0453bc5/5ea4380f1a655a89b74479f44c6d43fe.jpg",
            region: 'krasnodarTerritory',
            section: 'sochi',
        }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {news.title}
            </h1>
            <img className={styles.img} src={news.img} alt={news.preview}/>
            <div className={styles.text}>
                {news.text}
            </div>
        </div>
    );
};

export default NewsPage;