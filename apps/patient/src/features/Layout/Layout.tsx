import type { ReactElement } from 'react'

export interface LayoutProps {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return <div css={{ padding: '20px 40px' }}>{children}</div>
}
