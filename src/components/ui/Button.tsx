'use client'

import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5F00] disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-[#FF5F00] text-white hover:bg-[#CC4C00] active:scale-[0.98]',
  secondary: 'bg-white text-[#0A0A0A] hover:bg-[#F5F5F5] active:scale-[0.98]',
  ghost: 'text-white hover:text-[#FF5F00] bg-transparent',
  outline: 'border border-[#2A2A2A] text-white hover:border-[#FF5F00] hover:text-[#FF5F00] bg-transparent',
}

const sizes = {
  sm: 'h-9 px-4 text-sm rounded-md',
  md: 'h-11 px-6 text-base rounded-md',
  lg: 'h-14 px-8 text-lg rounded-md',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
