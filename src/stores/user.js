import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const errorMessage = ref('')
  const loading = ref(false)
  const loadingUser = ref(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (credentials) => {
    const { email, password } = credentials
    if (!validateEmail(email)) {
      return errorMessage.value = 'Почта не прошла валидацию'
    }

    if (!password.length) {
      return errorMessage.value = 'Где пароль?'
    }

    loading.value = true

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      loading.value = false
      console.log(error.message);
      return errorMessage.value = error.message
    }

    const { data: existingUser } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single()

    user.value = {
      email: existingUser.email,
      username: existingUser.username,
      id: existingUser.id,
    }

    loading.value = false
    errorMessage.value = ''
  }

  const handleSignup = async (credentials) => {
    const { username, email, password } = credentials

    if (username.length < 2) {
      return errorMessage.value = 'Имя - минимум 2 символа'
    }

    if (!validateEmail(email)) {
      return errorMessage.value = 'Почта не прошла валидацию'
    }

    if (password.length < 6) {
      return errorMessage.value = 'Пароль - минимум 6 символа'
    }

    loading.value = true
    // validate if user exists
    const { data: usernameTaken } = await supabase
      .from('users')
      .select()
      .eq('username', username)
      .single()

    if (usernameTaken) {
      loading.value = false
      return errorMessage.value = 'Пользователь уже существует'
    }

    errorMessage.value = ''

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      loading.value = false
      return errorMessage.value = error.message
    }

    await supabase.from('users').insert({
      username, email,
    })

    const { data: newUser } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single()

    console.log(newUser);

    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    }

    loading.value = false
  }

  const getUser = async () => {
    // loadingUser.value = true
    const { data } = await supabase.auth.getUser()

    if (!data.user) return user.value = null

    const { data: userWithEmail } = await supabase
      .from('users').select()
      .eq('email', data.user.email)
      .single()

    user.value = {
      id: userWithEmail.id,
      email: userWithEmail.email,
      username: userWithEmail.username
    }

    loadingUser.value = false
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    user.value = null
  }


  const clearErrorMessage = () => {
    errorMessage.value = ''
  }
  return { user, loading, loadingUser, handleLogin, handleSignup, handleLogout, getUser, errorMessage, clearErrorMessage }
})
