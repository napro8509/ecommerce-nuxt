<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

    <div v-if="cartItems.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">Your cart is empty</p>
      <NuxtLink to="/products" class="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
        Continue Shopping
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2">
        <div class="space-y-4">
          <div v-for="item in cartItems" :key="item.id" class="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
            <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded">
            <div class="flex-1">
              <h3 class="text-lg font-medium text-gray-900">{{ item.name }}</h3>
              <p class="text-gray-500">${{ item.price }}</p>
            </div>
            <div class="flex items-center space-x-4">
              <button @click="updateQuantity(item, -1)" class="text-gray-500 hover:text-primary">-</button>
              <span class="text-gray-900">{{ item.quantity }}</span>
              <button @click="updateQuantity(item, 1)" class="text-gray-500 hover:text-primary">+</button>
              <button @click="removeFromCart(item)" class="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
        <div class="space-y-4">
          <div class="flex justify-between">
            <span class="text-gray-500">Subtotal</span>
            <span class="text-gray-900">${{ subtotal }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Shipping</span>
            <span class="text-gray-900">${{ shipping }}</span>
          </div>
          <div class="border-t pt-4">
            <div class="flex justify-between">
              <span class="text-lg font-medium text-gray-900">Total</span>
              <span class="text-lg font-medium text-gray-900">${{ total }}</span>
            </div>
          </div>
          <button @click="checkout" class="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Mock cart data - in a real app, this would come from a state management solution
const cartItems = ref<CartItem[]>([
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/300',
    quantity: 1,
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 24.99,
    image: 'https://via.placeholder.com/300',
    quantity: 2,
  },
]);

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const shipping = computed(() => {
  return subtotal.value > 100 ? 0 : 10;
});

const total = computed(() => {
  return subtotal.value + shipping.value;
});

const updateQuantity = (item: CartItem, change: number) => {
  const newQuantity = item.quantity + change;
  if (newQuantity > 0) {
    item.quantity = newQuantity;
  }
};

const removeFromCart = (item: CartItem) => {
  cartItems.value = cartItems.value.filter(i => i.id !== item.id);
};

const checkout = () => {
  // TODO: Implement checkout functionality
  console.log('Proceeding to checkout...');
};
</script> 