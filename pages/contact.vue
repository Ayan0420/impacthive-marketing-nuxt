<template>
    <div
        id="contact-banner"
        class="p-custom d-flex flex-column align-items-center justify-content-center gap-4"
    >
        <h1 class="fw-bold display-4">Contact Us</h1>
        <h3 class="fst-italic text-center">Reachout to us for a FREE consultation.</h3>
    </div>
    <div id="contact-section" class="bg-pinkish pb-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col col-md-6">
                    <ContactForm />
                </div>
                <div class="col col-md-6 d-flex flex-column justify-content-center align-items-center gap-3">
                    <h2 class="fw-bold text-center">or book a meeting with us...</h2>
                    <router-link to="/booking" target="_blank" class="bg-light rounded-4 p-4 booking-link shadow text-decoration-none">
                        <img
                            src="@/assets/images-optimized/book-a-meeting.svg"
                            alt="book a meeting"
                            class="img-fluid"
                            width="500"
                        />
                        <p class="fw-bold text-center m-0 pt-4 text-primary">Booking System</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "ImpactHive Marketing - Contact",
    meta: [
        { name: "description", content: "ImpactHive Marketing - Your Web Development and Digital Marketing Partner" },
    ],
})
</script>

<style scoped>
#contact-banner {
    min-height: 400px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 218, 218, 0.8)),
        url(@/assets/images-optimized/home-image-2.webp);
    background-size: cover;
    background-position: top;
    /* background-attachment: fixed; */

    padding-top: 5rem;
    padding-bottom: 5rem;
}

.booking-link {
    max-width: 300px;
    transition: all 0.2s ease-in-out;
}
.booking-link:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    background-color: #cfa9a9 !important;
}

#contact-section {
    scroll-margin-top: 70px;
}
</style>
