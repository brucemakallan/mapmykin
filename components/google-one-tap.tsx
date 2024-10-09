'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect } from 'react'

const OneTapComponent = () => {
  const supabase = createClient()

  useEffect(() => {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

    // Load the Google One Tap script
    const loadGoogleOneTap = () => {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        callback: handleCredentialResponse,
      })
      window.google.accounts.id.prompt() // Show One-Tap prompt
    }

    const handleCredentialResponse = async (response: {
      credential: unknown
    }) => {
      const { credential } = response

      // Send the ID token to Supabase to log in the user
      const { user, session, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        id_token: credential,
      })

      if (error) {
        console.error('Error logging in with Google One-Tap:', error.message)
      } else {
        console.log('User logged in:', user)
      }
    }

    // Append the Google One-Tap script to the page
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.onload = loadGoogleOneTap
    script.async = true
    script.id = 'google-one-tap-script'
    document.body.appendChild(script)

    return () => {
      // Clean up by removing the script when component unmounts
      const existingScript = document.getElementById('google-one-tap-script')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default OneTapComponent
