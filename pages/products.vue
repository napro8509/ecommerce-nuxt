<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900">All Products</h1>
      <div class="flex space-x-4">
        <select v-model="selectedCategory" class="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <select v-model="sortBy" class="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <div v-for="product in filteredProducts" :key="product.id" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">{{ product.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
          </div>
          <button @click="addToCart(product)" class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
            Add to Cart
          </button>
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
  category: string;
}

const selectedCategory = ref('');
const sortBy = ref('price-asc');

const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden'];

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/300',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 24.99,
    image: 'https://via.placeholder.com/300',
    category: 'Clothing',
  },
  {
    id: 3,
    name: 'Garden Tool Set',
    price: 149.99,
    image: 'https://via.placeholder.com/300',
    category: 'Home & Garden',
  },
  {
    id: 4,
    name: 'Programming Book',
    price: 49.99,
    image: 'https://via.placeholder.com/300',
    category: 'Books',
  },
  // Add more products as needed
];

const filteredProducts = computed(() => {
  let result = [...products];

  // Filter by category
  if (selectedCategory.value) {
    result = result.filter(product => product.category === selectedCategory.value);
  }

  // Sort products
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return result;
});

const addToCart = (product: Product) => {
  // TODO: Implement cart functionality
  console.log('Added to cart:', product);
};
</script> 