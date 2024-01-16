'use client'

import { useRouter } from "next/navigation"

interface IProps {
  children: React.ReactNode,
  mode?: "modal" | "redirect",
  asChild?: boolean
}

export const LoginButton: React.FC<IProps> = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();
  
  const onClick = () => {
    router.push("auth/login")
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}