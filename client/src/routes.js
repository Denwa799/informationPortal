import {ANIMENEWS_ROUTE, GAMENEWS_ROUTE, MAIN_ROUTE, NEWS_ROUTE} from "./utils/consts";
import Main from "./pages/Main";
import News from "./pages/News";
import GameNews from "./pages/GameNews"
import AnimeNews from "./pages/AnimeNews"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: GAMENEWS_ROUTE,
        Component: GameNews
    },
    {
        path: ANIMENEWS_ROUTE,
        Component: AnimeNews
    },
]