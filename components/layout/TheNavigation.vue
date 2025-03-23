<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-primary">
              E-Store
            </NuxtLink>
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              to="/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/products"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Products
            </NuxtLink>
            <NuxtLink
              to="/cart"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Cart
            </NuxtLink>
          </div>
        </div>
        <!-- Right side icons -->
        <div class="flex items-center space-x-4">
          <button class="p-1 rounded-full text-gray-400 hover:text-gray-500">
            <span class="sr-only">Search</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div class="flex items-center space-x-2">
            <button 
              @click="$emit('openLogin')"
              class="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Login
            </button>
            <button 
              @click="$emit('openSignup')"
              class="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'openLogin'): void
  (e: 'openSignup'): void
}>()
</script> 