<template>
    <div class="container">
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators carousel-dark">
                <button
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    :data-bs-slide-to="index"
                    :class="{ active: index === 0 }"
                    aria-current="true"
                    :aria-label="`Slide ${index + 1}`"
                ></button>
            </div>
            <div class="carousel-inner" style="height: 450px">
                <div
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    :class="['carousel-item', { active: index === 0 }]"
                >
                    <div class="card border-0 p-4 px-5 rounded-4 text-center">
                        <!-- <img
                :src="testimonial.image"
                class="rounded-circle shadow mx-auto mb-4"
                alt="avatar"
                width="100"
                height="100"
              /> -->
                        <p class="lead fst-italic mb-4 fs-3">"{{ testimonial.quote }}"</p>
                        <h5 class="fw-bold mb-0">{{ testimonial.name }}</h5>
                        <small class="text-muted">{{ testimonial.role }}</small>
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-transparent" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-transparent" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->
        </div>

        <p class="text-center fs-6 mt-4">
            Want to be featured?
            <RouterLink to="/contact" class="text-primary fw-bold">Work with us</RouterLink> and be
            part of the growing success stories.
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const testimonials = ref([
    {
        name: "Sarah M.",
        role: "Owner of Glow Skincare Studio",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Charlotte and the team at ImpactHive completely transformed our social media presence. We went from inconsistent posts to a strong, cohesive brand that actually gets results. We've seen more engagement, inquiries, and confidence in our online image.",
    },
    {
        name: "Daniel K.",
        role: "Founder of Kent Wellness Group",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "From our first consultation, Charlotte understood exactly what we needed. The website she designed for us is clean, modern, and speaks directly to our audience. It has helped us convert more visitors into customers than ever before.",
    },
    {
        name: "Amira T.",
        role: "Boutique Owner",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "I had no idea how much time I was wasting on trying to manage my socials until I started working with ImpactHive. Now I can focus on growing my business while Charlotte handles everything with strategy and creativity. Best decision I made.",
    },
    {
        name: "James R.",
        role: "Managing Director at EcoTech Solutions",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        quote: "Professional, reliable, and always a step ahead. Charlotte's team doesn't just post content — they build a brand. Our follower growth and customer inquiries have skyrocketed since bringing ImpactHive on board.",
    },
    {
        name: "Lydia S.",
        role: "Founder of Sweet Haven Bakery",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        quote: "The entire process was seamless. Charlotte really took the time to understand my business and goals. She created a site that not only looks amazing but also drives sales. I couldn't be happier with the outcome.",
    },
]);
</script>

<style scoped>
.card {
    /* max-width: 800px; */
    margin: 0 auto;
    background-color: #fff;
}
.carousel-inner {
    padding-top: 1rem;
}
img {
    object-fit: cover;
    border: 4px solid #fff;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
    filter: invert(1);
}
</style>
