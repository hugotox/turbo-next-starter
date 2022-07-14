import { Button, ButtonProps, Icon, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeToggle = ({ ...rest }: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      colorScheme="gray"
      onClick={toggleColorMode}
      paddingLeft={2}
      paddingRight={2}
      size="sm"
      variant="ghost"
      {...rest}
    >
      <Icon as={colorMode === 'dark' ? FaSun : FaMoon} color="gray" />
    </Button>
  )
}
