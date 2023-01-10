<template>
  <header class="header">
    <article class="header-card">
      <h1>Stargazers 🤩</h1>
      <h4>Lists of all {{ GITHUB_API_LANGUAGE_LABEL }} repositories on Github, sorted by the number of stars.
        Only the best are listed. Required minimum number of stars is {{ GITHUB_API_STARS_THRESHOLD }}</h4>
    </article>
  </header>
</template>

<script setup>
import { appConfig } from "@/util/config";

const { GITHUB_API_LANGUAGE_LABEL, GITHUB_API_STARS_THRESHOLD } = appConfig

</script>

<style>
.header {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
}

.header-card {
  padding: 1rem;
  border: #181818 solid 2px;
  background: #c9e4ff;
  position: relative;
}

.header-card:after{
  content:'';
  position: absolute;
  background-color: black;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  z-index:-1;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
}

.header h4 {
  margin: 0;
  max-width: 24rem;
  font-weight: 700;
}
</style>
