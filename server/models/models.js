const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const GlobalNews = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    //symbolCode: {type: DataTypes.STRING, allowNull: false},
    preview: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    //regionName: {type: DataTypes.STRING, allowNull: false},
    //sectionName: {type: DataTypes.STRING, allowNull: false},
    //tags: {type: DataTypes.STRING, allowNull: false},
})

const GameNews = sequelize.define('game_news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    //symbolCode: {type: DataTypes.STRING, allowNull: false},
    preview: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    //tags: {type: DataTypes.STRING, allowNull: false},
})

const AnimeNews = sequelize.define('anime_news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    //symbolCode: {type: DataTypes.STRING, allowNull: false},
    preview: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    //tags: {type: DataTypes.STRING, allowNull: false},
})

const Regions = sequelize.define('regions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const Sections = sequelize.define('sections', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const SectionTitle = sequelize.define('section_title', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

/*
const tags = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})*/

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    name: {type: DataTypes.STRING, allowNull: false},
})

const NewsRegions = sequelize.define('news_regions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const NewsSections = sequelize.define('news_sections', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


GlobalNews.hasOne(Regions)
Regions.belongsToMany(GlobalNews, {through: NewsRegions})

GlobalNews.hasOne(Sections)
Sections.belongsToMany(GlobalNews, {through: NewsSections})

Regions.hasMany(Sections)
Sections.belongsTo(Regions)

module.exports = {
    GlobalNews,
    GameNews,
    AnimeNews,
    Regions,
    Sections,
    SectionTitle,
    User,
    NewsRegions,
    NewsSections,
}