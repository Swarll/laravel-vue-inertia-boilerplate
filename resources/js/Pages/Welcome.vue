<template>
    <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div class="container mx-auto px-4 py-16">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h1 class="text-5xl font-bold text-gray-900 mb-4">
                        Laravel + Vue + Inertia Boilerplate
                    </h1>
                    <p class="text-xl text-gray-600">
                        A clean starting point for your next project
                    </p>
                </div>

                <div class="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
                    <div v-html="readmeHtml"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    readmeHtml: String
})
</script>
