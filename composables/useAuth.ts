import { ref } from 'vue'

interface LoginForm {
  email: string
  password: string
}

interface SignupForm {
  name: string
  email: string
  password: string
}

export const useAuth = () => {
  // State
  const showLoginModal = ref(false)
  const showSignupModal = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Form data
  const loginForm = ref<LoginForm>({
    email: '',
    password: ''
  })

  const signupForm = ref<SignupForm>({
    name: '',
    email: '',
    password: ''
  })

  // Methods
  const openLoginModal = () => {
    showLoginModal.value = true
    error.value = null
  }

  const openSignupModal = () => {
    showSignupModal.value = true
    error.value = null
  }

  const closeLoginModal = () => {
    showLoginModal.value = false
    loginForm.value = {
      email: '',
      password: ''
    }
    error.value = null
  }

  const closeSignupModal = () => {
    showSignupModal.value = false
    signupForm.value = {
      name: '',
      email: '',
      password: ''
    }
    error.value = null
  }

  const handleLogin = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      // TODO: Implement actual login API call here
      console.log('Login attempt:', loginForm.value)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      closeLoginModal()
      // TODO: Set user state/token after successful login
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred during login'
      console.error('Login error:', err)
    } finally {
      isLoading.value = false
    }
  }

  const handleSignup = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      // TODO: Implement actual signup API call here
      console.log('Signup attempt:', signupForm.value)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      closeSignupModal()
      // TODO: Set user state/token after successful signup
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred during signup'
      console.error('Signup error:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    // State
    showLoginModal,
    showSignupModal,
    isLoading,
    error,
    
    // Form data
    loginForm,
    signupForm,
    
    // Methods
    openLoginModal,
    openSignupModal,
    closeLoginModal,
    closeSignupModal,
    handleLogin,
    handleSignup
  }
} 