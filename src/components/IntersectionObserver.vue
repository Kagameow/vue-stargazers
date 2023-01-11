<script setup>
import { onMounted, ref } from 'vue'

const emit = defineEmits(['intersected'])
const observer = ref(null)
const observerElement = ref(null)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        emit('intersected')
      }
    })
  })
  observer.value.observe(observerElement.value)
})


</script>

<template>
  <div class="observer" ref="observerElement"></div>
</template>
