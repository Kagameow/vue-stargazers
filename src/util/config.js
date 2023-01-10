export const appConfig = {
    GITHUB_API_BASE_URL: import.meta.env.VITE_APP_GITHUB_API_BASE_URL || 'https://api.github.com',
    GITHUB_API_STARS_THRESHOLD: parseInt(import.meta.env.VITE_APP_GITHUB_API_STARS_THRESHOLD) || 1000,
    GITHUB_API_PER_PAGE: parseInt(import.meta.env.VITE_APP_GITHUB_API_PER_PAGE) || 50,
    GITHUB_API_LANGUAGE: import.meta.env.VITE_APP_GITHUB_API_LANGUAGE || 'javascript',
    GITHUB_API_LANGUAGE_LABEL: import.meta.env.VITE_APP_GITHUB_API_LANGUAGE_LABEL
        || import.meta.env.VITE_APP_GITHUB_API_LANGUAGE
        || 'JavaScript',
}
