<script setup>
defineProps({
  cssClasses: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <button :class="cssClasses">
    <slot />
    {{ text }}
  </button>
</template>
