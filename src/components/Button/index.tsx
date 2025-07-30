import React from 'react'

type Props = {
  type?: 'button' | 'submit'
  className: string
  href?: string
  target?: string
  rel?: string
  children: string | React.ReactNode
  onClick?: () => void
}

export const Button = ({
  type,
  onClick,
  href,
  target,
  rel,
  className,
  children
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  )
}
