<template>
    <div class="accordion accordion-flush width-limit" :id="itemSource">
        <div class="accordion-item border-0 py-1 bg-transparent" v-for="(faqItem, index) in faqItems" key="faqItem.question">
            <h2 class="accordion-header mb-2">
                <button
                    class="accordion-button collapsed bg-pinkish rounded-2 shadow-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${index}-${itemSource}`"
                    aria-expanded="false"
                    :aria-controls="`#flush-collapse${index}-${itemSource}`"
                >
                    {{ faqItem.question }}
                </button>
            </h2>
            <div
                :id="`flush-collapse${index}-${itemSource}`"
                class="accordion-collapse collapse shadow-sm border rounded-2"
                :data-bs-parent="`#${itemSource}`"
            >
                <div class="accordion-body">
                    {{ faqItem.answer }}
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/types';

defineProps({
    faqItems: {
        type: Array<FaqItem>,
        required: true
    },
    itemSource: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.width-limit {
    max-width: 800px;
    margin: 0 auto;
}
</style>