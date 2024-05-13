import React from 'react'
import { Button } from "@/components/ui/button"
import { userLoggIn } from '@/lib/AppWrite/Api'

const SigninForm = () => {
  const value = {
    email: "test3@gmail.com",
    password: "test3@1234"
  }

  
  return (
    <div>
     
      <Button onClick={() => userLoggIn(value)}>click me</Button>
    </div>
  )
}

export default SigninForm;