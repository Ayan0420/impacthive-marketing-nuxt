<!-- pages/thank-you.vue -->
<template>
    <div class="container py-5 text-center">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 500px">
            <div class="alert alert-success">
                <h1 class="mb-3">Thank You{{ name ? `, ${name}` : "" }}!</h1>
                <p>
                    Your message has been successfully received. We'll get back to you within
                    <strong>1–3 business days</strong>. We will reach out to you via email.
                </p>
            </div>
            <NuxtLink to="/" class="btn btn-primary mt-3">Return to Home</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const name = route.query.name;

if(!name) {
    navigateTo("/");
}

useHead({
    title: "ImpactHive Marketing - Thank You",
    meta: [
        { name: "description", content: "ImpactHive Marketing - Your Web Development and Digital Marketing Partner" },
    ],
})
</script>

