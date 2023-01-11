<template>
  <div class="loading-spinner">
    <div class="spinner" />
  </div>
</template>

<script setup />

<style>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.spinner {
  border: 4px solid #000000;
  border-top: 4px solid #ff8bf0;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
