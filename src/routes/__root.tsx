/// <reference types="vite/client" />
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AppFooter } from "../components/AppFooter";
import styles from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IVMOVIES" },
      { name: "description", content: "IV Movies portfolio" },
      { name: "keywords", content: "video movie film imbaud verhaegen" },
      { name: "theme-color", content: "#111" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { property: "og:title", content: "IVMOVIES" },
      { property: "og:description", content: "Worldwide visual content creator based in belgium" },
      { property: "og:type", content: "video.movie" },
      { property: "og:url", content: "https://www.ivmovies.be" },
      { property: "og:image", content: "https://www.ivmovies.be/sharing.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Quicksand&display=swap" },
      { rel: "stylesheet", href: styles },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans font-light text-white">
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}

function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="mt-16 text-[2rem] font-thin">Page not found</h1>
      <Link to="/" className="mt-4 inline-block">
        Back to the homepage
      </Link>
    </div>
  );
}
