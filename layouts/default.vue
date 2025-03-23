<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center">
              <span class="text-2xl font-bold text-primary">E-Store</span>
            </NuxtLink>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink to="/" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Home
              </NuxtLink>
              <NuxtLink to="/products" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Products
              </NuxtLink>
              <NuxtLink to="/cart" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Cart
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p>&copy; 2024 E-Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template> 