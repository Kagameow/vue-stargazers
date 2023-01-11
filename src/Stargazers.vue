<script setup>
import { computed, ref } from 'vue'
import { appConfig } from '@/util/config'
import { getReposSortedByStars } from '@/api/api-client'
import { useRequest } from '@/use/useRequest'

import IntersectionObserver from '@/components/IntersectionObserver.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import StargazersHeader from '@/components/StargazersHeader.vue'
import ListItemRepository from '@/components/ListItemRepository.vue'
import ListItemError from '@/components/ListItemError.vue'

const { sendRequest: getRepos, isLoading, error, data } = useRequest(getReposSortedByStars)
const { GITHUB_API_LANGUAGE, GITHUB_API_PER_PAGE } = appConfig
const repos = ref([])
const pageToLoad = ref(1)
const isAnyRepos = computed(() => repos.value.length)

const filterUnnecessaryData = (repo) => {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    url: repo.html_url,
  }
}

const fetchRepositories = async () => {
  if (isLoading.value) {
    return
  }
  await getRepos([{
    language: GITHUB_API_LANGUAGE,
    page: pageToLoad.value,
    perPage: GITHUB_API_PER_PAGE,
  }])
  if (error.value) {
    return
  }
  if (data.value) {
    repos.value = [...repos.value, ...data.value.items.map(filterUnnecessaryData)]
    pageToLoad.value = pageToLoad.value + 1
  }
}

</script>

<template>
  <StargazersHeader />
  <main v-if="isAnyRepos">
    <ul class="repositories-list">
      <ListItemRepository
          v-for="repo in repos"
          :repository="repo"
          :key="repo.id"
          class="repository-container"
      />
      <ListItemError
          v-if="error"
          :error="error"
          @retry="fetchRepositories"
      />
    </ul>
  </main>
  <IntersectionObserver v-if="!error" @intersected="fetchRepositories"/>
  <LoadingSpinner v-if="isLoading" />
</template>

<style>
.repositories-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  margin: 0 0.6rem;
}
</style>
