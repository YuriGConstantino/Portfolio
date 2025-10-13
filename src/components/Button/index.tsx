import React from 'react'

type Props = {
  type: 'button' | 'submit' | 'link' | 'download'
  className: string
  href?: string
  target?: string
  rel?: string
  children: string | React.ReactNode
  onClick?: () => void
  download?: boolean
}

export const Button = ({
  type,
  onClick,
  href,
  target,
  rel,
  className,
  children,
  download
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <>
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      </>
    )
  }

  return (
    <a href={href} target={target} rel={rel} className={className} download={download}>
      {children}
    </a>
  )
}
