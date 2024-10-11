import Input from '@/app/components/input'
import React from 'react'

const LoginView = () => {
  return (
    <div>
        <form action="">
            <h1>Login</h1>
            <Input type="email" name="email" id="email" placeholder="Email" />
        </form>
    </div>
  )
}

export default LoginView
