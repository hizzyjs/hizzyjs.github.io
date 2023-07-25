import {defineConfig} from "vitepress";

const ogDescription = "Next Generation Fullstack Tooling";
const ogImage = "https://hizzyjs.github.io/og-image.png";
const ogTitle = "Hizzy";
const ogUrl = "https://hizzyjs.github.io";

const deployURL = process.env.DEPLOY_PRIME_URL || "";
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const deployType = (() => {
    return "release";
})();

const additionalTitle = ((): string => {
    switch (deployType) {
        case "local":
            return " (local)";
        case "release":
            return "";
    }
})();

const discordLink = "https://discord.gg/emAhrw3mvM";

export default defineConfig({
    title: `Hizzy${additionalTitle}`,
    description: "Next Generation Fullstack Tooling",

    head: [
        ["link", {rel: "icon", type: "image/svg+xml", href: "/logo.svg"}],
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:title", content: ogTitle}],
        ["meta", {property: "og:image", content: ogImage}],
        ["meta", {property: "og:url", content: ogUrl}],
        ["meta", {property: "og:description", content: ogDescription}],
        ["meta", {name: "twitter:card", content: "summary_large_image"}],
        ["meta", {name: "twitter:site", content: "@Hizzy159849"}],
        ["meta", {name: "theme-color", content: "#717aff"}]
    ],

    locales: {
        root: {label: "English"} // todo: translations?
    },

    themeConfig: {
        logo: "/logo.svg",
        editLink: {
            pattern: "https://github.com/hizzyjs/hizzy/edit/main/docs/:path",
            text: "Suggest changes to this page"
        },
        socialLinks: [
            {icon: "twitter", link: "https://twitter.com/Hizzy159849"},
            {icon: "discord", link: discordLink},
            {icon: "github", link: "https://github.com/hizzyjs/hizzy"}
        ],
        search: {
            provider: "local",
            options: {}
        },
        footer: {
            message: `Released under the MIT License. (${commitRef})`,
            copyright: "Copyright © 2023-present OguzhanUmutlu & Hizzy Contributors"
        },
        nav: [
            {text: "Guide", link: "/guide/", activeMatch: "/guide/"},
            {text: "Addons", link: "/addons/", activeMatch: "/addons/"},
            {text: "Team", link: "/team", activeMatch: "/team/"},
            {text: "Changelog", link: "https://github.com/hizzyjs/hizzy/blob/main/CHANGELOG.md"}
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "Guide",
                    items: [
                        {
                            text: "Getting Started",
                            link: "/guide/"
                        },
                        {
                            text: "Using Decorators",
                            link: "/guide/decorators"
                        },
                        {
                            text: "Static Asset Handling",
                            link: "/guide/assets"
                        },
                        {
                            text: "Using Addons",
                            link: "/guide/using-addons"
                        },
                        {
                            text: "CLI",
                            link: "/guide/cli"
                        },
                        {
                            text: "Preparing for Production",
                            link: "/guide/production"
                        },
                        {
                            text: "Configuration",
                            link: "/guide/config"
                        },
                        {
                            text: "Caching",
                            link: "/guide/caching"
                        },
                        {
                            text: "Routes",
                            link: "/guide/routes"
                        }
                    ]
                },
                {
                    text: "APIs",
                    items: [
                        {
                            text: "Addon API",
                            link: "/guide/api-addon"
                        },
                        {
                            text: "JavaScript API",
                            link: "/guide/api-javascript"
                        }
                    ]
                }
            ],
            "/addons/": [
                {text: "Getting started", link: "/addons/index"},
                {
                    text: "Official Addons",
                    items: [
                        {text: "Authentication", link: "/addons/authentication"},
                        {text: "Database", link: "/addons/database"},
                        {text: "Error Overlay", link: "/addons/error-overlay"},
                        {text: "Helmet", link: "/addons/helmet"},
                        {text: "Language", link: "/addons/language"},
                        {text: "Images", link: "/addons/images"},
                        {text: "API", link: "/addons/api"},
                        {text: "Requests", link: "/addons/requests"}
                    ]
                }
            ]
        }
    }
});