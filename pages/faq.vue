<template>
    <main>
        <div
            id="faq-banner"
            class="p-custom d-flex flex-column align-items-center justify-content-center gap-4"
        >
            <h1 class="fw-bold display-4">Frequently Asked Questions</h1>
            <!-- <h3 class="fst-italic text-center"></h3> -->
        </div>

        <!-- Main content -->
        <div class="bg-light">
            <div class="container py-5">
                <div class="mb-5">
                    <h1 class="text-center mb-3">General Questions</h1>
                    <FaqAccordion :faqItems="generalFAQItems" itemSource="general" />
                </div>
                <div class="mb-5">
                    <h1 class="text-center mb-3">Social Media Management</h1>
                    <FaqAccordion :faqItems="smmFAQItems" itemSource="smm" />
                </div>
                <div class="mb-5">
                    <h1 class="text-center mb-3">Website Development</h1>
                    <FaqAccordion :faqItems="webDevFAQItems" itemSource="webdev" />
                </div>
            </div>
        </div>

        <div class="container text-center py-5">
            <img
                src="@/assets/images-optimized/question.svg"
                alt="web design"
                class="img-fluid callout-img"
            />
            <p class="display-6 mb-4">Have more questions?</p>
            <button class="btn btn-primary rounded-pill px-4 fs-4">Get in touch</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { FaqItem } from "../types";

const generalFAQItems: FaqItem[] = [
    {
        question: "How do I know which package is right for me?",
        answer: "We’ll start with a quick discovery call to understand your goals, audience, and where your business stands. Based on that, we’ll recommend the package that best fits your needs — whether you're just starting out or looking to scale.",
    },
    {
        question: "Do I need to provide content or do you create it all?",
        answer: "We handle most of the content creation including captions, design, and strategy. However, we may ask for photos, videos, or brand assets you'd like us to use. We’ll guide you through the process to keep it simple and stress-free.",
    },
    {
        question: "What platforms do you manage for social media?",
        answer: "We currently manage Instagram and Facebook. If you’re using a different platform, just let us know and we’ll see how we can support it.",
    },
    {
        question: "How long does it take to design and launch a website?",
        answer: "It depends on the package and the complexity of your project. Most websites are completed within 2 to 4 weeks after receiving all necessary content and approvals. We'll give you a clear timeline before we start.",
    },
    {
        question: "Do you offer ongoing support after the website is launched?",
        answer: "Yes, all packages include post-launch support, and we offer affordable monthly maintenance plans to keep your website updated, secure, and running smoothly.",
    },
    {
        question: "Can I upgrade my package later on?",
        answer: "Yes, absolutely. As your business grows, your needs may change — and we’re here to grow with you. You can upgrade your social media or website package at any time, and we’ll make the transition smooth and seamless.",
    },
    {
        question: "Will I be involved in the content creation process?",
        answer: "You’ll be as involved as you’d like to be. Some clients prefer to give full creative control, while others like to review content before it’s posted. We work in collaboration with your preferences to make sure everything reflects your brand voice.",
    },
    {
        question: "Do you offer e-commerce website solutions?",
        answer: "Yes. If you’re selling products or services online, we can integrate e-commerce functionality tailored to your business needs. This includes secure payment systems, product pages, and user-friendly navigation to drive conversions.",
    },
    {
        question: "How do I get started?",
        answer: "It’s easy. Just get in touch through our Contact Page or send us an email. We’ll schedule a free consultation call to understand your goals and recommend the best next steps for your brand.",
    },
];

const smmFAQItems: FaqItem[] = [
    {
        question: "What platforms do you manage?",
        answer: "We currently support Instagram, Facebook, and LinkedIn. If you’re working on another platform, we’re happy to discuss custom solutions that fit your strategy.",
    },
    {
        question: "Will you engage with my audience?",
        answer: "Yes. Engagement is included in our standard and premium packages. We handle replies to comments, messages, and foster real conversations with your audience to build trust and community.",
    },
    {
        question: "Can you match my brand’s tone and style?",
        answer: "Absolutely. We begin by understanding your brand voice and target audience. Every caption, graphic, and story is designed to reflect your unique identity.",
    },
    {
        question: "How do I measure results?",
        answer: "We provide monthly or bi-weekly performance reports, depending on your package. These include insights on engagement, reach, growth, and what’s working — so you’re always in the loop.",
    },
    {
        question: "Do I need to provide photos or videos?",
        answer: "While we create graphics and reels, we may request brand assets such as product photos, behind-the-scenes shots, or clips for authenticity. We’ll guide you on what works best.",
    },
];

const webDevFAQItems: FaqItem[] = [
    {
        question: "How long does it take to build a website?",
        answer: "Timeframes vary by package, but most websites are completed within 2–4 weeks from project start. We’ll provide a clear timeline during onboarding.",
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Yes. Every website we create is fully responsive, meaning it works beautifully on desktops, tablets, and mobile phones.",
    },
    {
        question: "What’s included in SEO optimization?",
        answer: "All packages include basic to advanced SEO setup — this means your site is built with search engines in mind, including optimized titles, meta descriptions, keywords, and speed.",
    },
    {
        question: "Can you help me update the site after it’s launched?",
        answer: "Yes. We offer post-launch support and optional monthly maintenance packages to keep your site secure, updated, and performing at its best.",
    },
    {
        question: "Do you offer e-commerce functionality?",
        answer: "We do. You can add e-commerce features as an add-on or choose our standard/premium packages for full setup — ideal for selling products or services online with ease.",
    },
];
</script>
<style scoped>
#faq-banner {
    min-height: 400px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        url(@/assets/images-optimized/about-1.webp);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    padding-top: 5rem;
    padding-bottom: 5rem;
}
</style>
