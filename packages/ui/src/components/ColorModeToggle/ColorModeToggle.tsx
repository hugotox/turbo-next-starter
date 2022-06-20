import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      aria-label={colorMode === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
      colorScheme="gray"
      onClick={toggleColorMode}
      paddingLeft={2}
      paddingRight={2}
      size="sm"
      variant="ghost"
    >
      <Icon as={colorMode === 'dark' ? FaSun : FaMoon} color="gray" />
    </Button>
  )
}
