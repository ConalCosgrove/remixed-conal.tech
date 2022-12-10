import { type MetaFunction } from "@remix-run/node";

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import stylesUrl from "~/styles/navbar.css";
import globalLargeStylesUrl from "~/styles/global-large.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";
import Navbar from "./navbar";

export const meta: MetaFunction = () => {
  return { title: "Conal Cosgrove", "theme-color":"#5454b8" };
};

export const links: LinksFunction = () => {
  return [
    {
      "rel": "stylesheet",
      "href": stylesUrl
    },
    {
      "rel": "stylesheet",
      "href": globalMediumStylesUrl,
      "media": "print, (min-width: 640px)",
    },
    {
      "rel": "stylesheet",
      "href": globalLargeStylesUrl,
      "media": "screen and (min-width: 1024px)",
    },
  ]
}  

function Sidebar() {
  const iframe = () => {
      return {
          __html: `<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1410560743&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/conalcosgrove" title="Conal Cosgrove" target="_blank" style="color: #cccccc; text-decoration: none;">Conal Cosgrove</a> · <a href="https://soundcloud.com/conalcosgrove/sets/recent-tracks" title="Recent Tracks" target="_blank" style="color: #cccccc; text-decoration: none;">Recent Tracks</a></div>`
      }
  }
  const path = useLocation().pathname;
  return (
      <nav hidden={path !== '/music'} className="music-sidebar">
      <h1>Listen! (Headphone warning)</h1>
      <div dangerouslySetInnerHTML={iframe()}></div>
  </nav>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar/>
        <div id="root-container" style={{display: 'flex'}}>
        <Sidebar/>
        <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
