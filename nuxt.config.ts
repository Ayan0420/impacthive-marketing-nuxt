// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/image"],
    plugins: ["~/plugins/hcaptcha.client.ts"],
    css: ["bootstrap/dist/css/bootstrap.min.css", "bootstrap-icons/font/bootstrap-icons.css"],
    app: {
        head: {
            title: "ImpactHive Marketing",
            meta: [
                {
                    name: "description",
                    content:
                        "ImpactHive Marketing - Your Web Development and Digital Marketing Partner",
                },
            ],
            htmlAttrs: {
                lang: "en",
            },
            link: [
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },
});
