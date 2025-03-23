<template>
  <div v-if="modelValue" class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Login</h3>
              <div class="mt-4">
                <form @submit.prevent="$emit('submit')">
                  <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      :value="modelValue.email"
                      @input="$emit('update:modelValue', { ...modelValue, email: ($event.target as HTMLInputElement).value })"
                      id="email" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" 
                      required
                    >
                  </div>
                  <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                      type="password" 
                      :value="modelValue.password"
                      @input="$emit('update:modelValue', { ...modelValue, password: ($event.target as HTMLInputElement).value })"
                      id="password" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" 
                      required
                    >
                  </div>
                  <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button 
                      type="submit" 
                      :disabled="isLoading"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {{ isLoading ? 'Loading...' : 'Login' }}
                    </button>
                    <button 
                      type="button" 
                      @click="$emit('close')"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                  <div v-if="error" class="mt-4 text-sm text-red-600">
                    {{ error }}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LoginForm {
  email: string
  password: string
}

defineProps<{
  modelValue: LoginForm
  isLoading: boolean
  error: string | null
}>()

defineEmits<{
  (e: 'update:modelValue', value: LoginForm): void
  (e: 'submit'): void
  (e: 'close'): void
}>()
</script> 