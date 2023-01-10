<template>
  <li class="repository-container" >
    <a :href="repository.url" target="_blank">{{ repository.name }}</a>
    <h4> {{ repository.stars }} ⭐ </h4>
    <p class="repository-description"> {{ repository.description }} </p>
  </li>
</template>

<script setup>
  const props = defineProps({
    repository: {
      type: Object,
      required: true,
    },
  })
</script>

<style>
.repository-container {
  padding: 1rem;
  border: #181818 solid 2px;
  background: #f3f2ff;
  position: relative;
}

.repository-container:after{
  content:'';
  position: absolute;
  background-color: black;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  z-index:-1;
}

.repository-description {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.repository-container a {
  color: black;
  font-size: 1.3rem;
  font-weight: 900;
  margin: 0;
}

.repository-container a:visited {
  color: #883d78;
}

.repository-container h4 {
  font-weight: 900;
  margin: 0;
}
</style>
