<template>
    <div class="rich-text-editor">
        <div v-if="editor" class="toolbar">
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('bold') }"
                @click="editor.chain().focus().toggleBold().run()"
            >
                Bold
            </button>
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('italic') }"
                @click="editor.chain().focus().toggleItalic().run()"
            >
                Italic
            </button>
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('strike') }"
                @click="editor.chain().focus().toggleStrike().run()"
            >
                Strike
            </button>
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            >
                H2
            </button>
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('bulletList') }"
                @click="editor.chain().focus().toggleBulletList().run()"
            >
                Bullet list
            </button>
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('orderedList') }"
                @click="editor.chain().focus().toggleOrderedList().run()"
            >
                Ordered list
            </button>
            <button
                type="button"
                :class="{ 'is-active': editor.isActive('blockquote') }"
                @click="editor.chain().focus().toggleBlockquote().run()"
            >
                Quote
            </button>
        </div>
        <EditorContent :editor="editor" class="content" />
    </div>
</template>

<script setup>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { onBeforeUnmount, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

const editor = new Editor({
    content: props.modelValue,
    extensions: [StarterKit],
    onUpdate: ({ editor: instance }) => emit('update:modelValue', instance.getHTML()),
})

watch(() => props.modelValue, (value) => {
    if (value !== editor.getHTML()) {
        editor.commands.setContent(value, { emitUpdate: false })
    }
})

onBeforeUnmount(() => {
    editor.destroy()
})
</script>

<style scoped>
.rich-text-editor {
    @apply rounded-md border border-gray-300 bg-white;
}

.toolbar {
    @apply flex flex-wrap gap-1 border-b border-gray-200 p-2;
}

.toolbar button {
    @apply rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100;
}

.toolbar button.is-active {
    @apply bg-gray-900 text-white;
}

.content :deep(.ProseMirror) {
    @apply min-h-32 p-3 outline-none;
}
</style>
