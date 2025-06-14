<template>
    <div id="form" class="">
        <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1055">
            <div
                v-if="showToast && toastType === 'error'"
                class="toast align-items-center text-bg-danger border-0 show"
                role="alert"
            >
                <div class="d-flex">
                    <div class="toast-body">ERROR: {{ toastMessage }}</div>
                    <button
                        type="button"
                        class="btn-close btn-close-white me-2 m-auto"
                        @click="showToast = false"
                    ></button>
                </div>
            </div>
        </div>
        <h2 class="text-center fw-bold mt-0" id="contactModalLabel">Enquire Now</h2>
        <p class="text-center py-3">
            Please fill out the form with your details and one of our representatives will get back
            to you promptly.
        </p>
        <!-- Form -->
        <form @submit.prevent="handleSubmit">
            <div class="mb-3 d-flex gap-2">
                <input
                    v-model="form.name"
                    type="text"
                    class="form-control border-dark"
                    placeholder="Full Name"
                    required
                />
                <input
                    v-model="form.email"
                    type="email"
                    class="form-control border-dark"
                    placeholder="Email Address"
                    required
                />
            </div>

            <div class="mb-3">
                <textarea
                    v-model="form.message"
                    class="form-control border-dark"
                    rows="6"
                    placeholder="Message"
                    required
                ></textarea>
            </div>

            <div class="d-flex justify-content-center gap-3">
                <div>
                    <p class="text-small text-center mb-1">
                        Please complete the captcha to submit.
                    </p>
                    <client-only>
                        <div class="mb-3 text-center">
                            <hcaptcha
                                :sitekey="hcaptchaSiteKey"
                                @verify="onVerify"
                                @expired="onExpired"
                            />
                        </div>
                        <template #fallback>
                            <div class="text-danger py-3">Loading hCaptcha...</div>
                        </template>
                    </client-only>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary align-self-center"
                    :disabled="loading || !hToken"
                >
                    {{ loading ? "Sending..." : "Send Message" }}
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const accessKey = "f34b605a-22a9-4031-8ba0-1334f9228983";
const hcaptchaSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

/* Form model */
const form = ref({
    name: "",
    email: "",
    message: "",
});

/* UI state */
const loading = ref(false);
const showToast = ref(false);
const toastType = ref<"success" | "error">("success");
const toastMessage = ref("");

/* hCaptcha */
const hToken = ref(""); // holds the verification token
const onVerify = (token: string) => {
    hToken.value = token;
};
const onExpired = () => {
    hToken.value = "";
};

/* Submit handler */
const handleSubmit = async () => {
    if (!hToken.value) {
        toastType.value = "error";
        toastMessage.value = "Please complete the captcha.";
        showToast.value = true;
        return;
    }

    loading.value = true;
    showToast.value = false;

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: accessKey,
                subject: "New Message from ImpactHive Website",
                from_name: form.value.name,
                name: form.value.name,
                email: form.value.email,
                message: form.value.message,
                "h-captcha-response": hToken.value, // ★ send captcha token
            }),
        });

        const result = await res.json();

        if (result.success) {
            form.value = { name: "", email: "", message: "" };
            hToken.value = ""; // reset captcha
            toastType.value = "success";
            toastMessage.value = "Message sent successfully!";
            navigateTo({ path: "/thank-you", query: { name: result.data?.name || "Friend" } });
            return;
        }

        toastType.value = "error";
        toastMessage.value = result.message || "Failed to send message.";
    } catch {
        toastType.value = "error";
        toastMessage.value = "Something went wrong. Please try again.";
    } finally {
        loading.value = false;
        showToast.value = true;
    }
};
</script>
