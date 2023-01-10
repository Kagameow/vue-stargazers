import axios from 'axios'
import { appConfig } from '@/util/config'

const { GITHUB_API_BASE_URL, GITHUB_API_STARS_THRESHOLD } = appConfig

const apiClient = axios.create({
    baseURL: GITHUB_API_BASE_URL,
})

const ENDPOINTS = {
    GET_REPOS_SORTED_BY_STARS: ({ page, perPage, language }) =>
        `/search/repositories?q=language:${language}+stars:>=${GITHUB_API_STARS_THRESHOLD}&sort=stars&page=${page}&per_page=${perPage}&order=desc`,
}

export const getReposSortedByStars = (args) => apiClient.get(ENDPOINTS.GET_REPOS_SORTED_BY_STARS(args))
