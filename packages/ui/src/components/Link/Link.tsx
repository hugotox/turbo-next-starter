import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export interface LinkProps extends NextLinkProps {
  children: React.ReactNode | React.ReactNode[]
}

export const Link = ({ children, passHref = true, ...rest }: LinkProps) => {
  return (
    <NextLink {...rest} passHref={passHref}>
      <ChakraLink>{children}</ChakraLink>
    </NextLink>
  )
}
