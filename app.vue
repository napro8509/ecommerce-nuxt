<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <TheNavigation
      @open-login="openLoginModal"
      @open-signup="openSignupModal"
    />

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} E-Store. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Login Modal -->
    <LoginModal
      v-model="loginForm"
      :is-loading="isLoading"
      :error="error"
      @submit="handleLogin"
      @close="closeLoginModal"
      @google-login="handleGoogleLogin"
    />

    <!-- Signup Modal -->
    <SignupModal
      v-model="signupForm"
      :is-loading="isLoading"
      :error="error"
      @submit="handleSignup"
      @close="closeSignupModal"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import { useGoogleAuth } from '~/composables/useGoogleAuth'

const {
  showLoginModal,
  showSignupModal,
  isLoading,
  error,
  loginForm,
  signupForm,
  openLoginModal,
  openSignupModal,
  closeLoginModal,
  closeSignupModal,
  handleLogin,
  handleSignup
} = useAuth()

const { handleGoogleLogin: handleGoogleAuth } = useGoogleAuth()

const handleGoogleLogin = async () => {
  try {
    // Handle the Google login
    await handleGoogleAuth()
    closeLoginModal()
  } catch (err) {
    console.error('Google login error:', err)
  }
}
</script>
