import { Outlet } from "remix";
import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import musicStyleUrl from "~/styles/music.css";
import articleStyleUrl from "~/styles/article.css";
import mediumArticleStyleUrl from "~/styles/article-medium.css";


export const links: LinksFunction = () => {
    return [
        {
            "rel": "stylesheet",
            "href": musicStyleUrl,
        },
        {
            "rel": "stylesheet",
            "href": articleStyleUrl,
        },
        {
            "rel": "stylesheet",
            "href": mediumArticleStyleUrl,
            "media": "print, (min-width: 640px)",
        }

    ];
}
export default function MusicIndex() {
    return(
        <div className="music-container">
            <Outlet/>
        </div>

    );
}