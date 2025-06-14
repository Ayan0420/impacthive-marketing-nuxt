// plugins/hcaptcha.client.ts
import { defineNuxtPlugin } from "#app";
import HCaptcha from "@hcaptcha/vue3-hcaptcha";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("hcaptcha", HCaptcha);
});
