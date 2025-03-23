<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-primary text-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to E-Store
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our amazing collection of products at great prices.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <NuxtLink to="/products" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Shop Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Products -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div v-for="product in featuredProducts" :key="product.id" class="group">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://source.unsplash.com/random/400x400/?headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    image: 'https://source.unsplash.com/random/400x400/?smartwatch',
  },
  {
    id: 3,
    name: 'Laptop',
    price: 199.99,
    image: 'https://source.unsplash.com/random/400x400/?laptop',
  },
  {
    id: 4,
    name: 'Camera',
    price: 299.99,
    image: 'https://source.unsplash.com/random/400x400/?camera',
  },
];
</script> 