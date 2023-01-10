<template>
  <li class="error-container" >
    <h4 class="error-header"> Houston, we have a problem </h4>
    <p class="error-message"> {{ errorMessage }} </p>
    <button
      class="error-button"
      @click="handleClick"
    >
      Retry!
    </button>
  </li>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['retry'])

const errorMessage = props.error?.response?.data?.message
    ?? props.error?.message
    ?? 'Something went wrong, please try again later'

const handleClick = () => {
  emit('retry')
}
</script>

<style >
.error-container {
  padding: 1rem;
  border: #181818 solid 2px;
  background: #ff9494;
  position: relative;
}

.error-container:after{
  content:'';
  position: absolute;
  background-color: black;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  z-index:-1;
}

.error-header {
  font-weight: 900;
  margin: 0;
}

.error-message {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.error-button {
  background: #181818;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
}

</style>
