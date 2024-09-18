'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface Props {
  name?: string
  placeholder?: string
}

export default function PasswordField(props: Props) {
  const { name = "password", placeholder = "Password" } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="pr-10"
        aria-label="Password"
        name={name}
        minLength={6}
        required
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3"
        onClick={() => { setShowPassword(!showPassword) }}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <FaRegEyeSlash className="h-4 w-4" aria-hidden="true" />
        ) : (
          <FaRegEye className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}