// plugins/scrollToHash.client.ts
export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
  
    router.afterEach((to) => {
      if (!to.hash) return;
  
      const tryScroll = () => {
        const el = document.querySelector(to.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" }); // Instant scroll
        } else {
          // Retry a few times in case the element is delayed
          setTimeout(tryScroll, 100);
        }
      };
  
      // Slight delay to allow page content/render/layouts
      setTimeout(tryScroll, 50);
    });
  });
  