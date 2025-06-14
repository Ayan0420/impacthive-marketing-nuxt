<template>
    <div class="container py-custom">
        <form @submit.prevent="submitBooking" class="space-y-4 max-w-md mx-auto">
            <input v-model="form.name" placeholder="Your Name" class="input" required />
            <input v-model="form.email" type="email" placeholder="Email" class="input" required />

            <select v-model="form.service" class="input" required>
                <option disabled value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="social-media">Social Media Management</option>
            </select>

            <input v-model="form.date" type="datetime-local" class="input" required />

            <textarea v-model="form.notes" placeholder="Optional notes..." class="input"></textarea>

            <button type="submit" class="btn">Book Slot</button>

            <p v-if="message" class="mt-4">{{ message }}</p>
        </form>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "ImpactHive Marketing - Book a Meeting",
    meta: [
        { name: "description", content: "ImpactHive Marketing - Your Web Development and Digital Marketing Partner" },
    ],
})

const form = reactive({
    name: "",
    email: "",
    service: "",
    date: "",
    notes: "",
});

const message = ref("");

async function submitBooking() {
    try {
        const res = await $fetch("/api/bookings", {
            method: "POST",
            body: { ...form, date: new Date(form.date) },
        });
        message.value = "Booking successful!";
    } catch (e: any) {
        message.value = e.statusMessage || "Booking failed.";
    }
}
</script>

<style scoped>
.input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
}
.btn {
    background: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
}
.py-custom{
    padding-top: 10rem;
    padding-bottom: 6rem;
}
</style>
