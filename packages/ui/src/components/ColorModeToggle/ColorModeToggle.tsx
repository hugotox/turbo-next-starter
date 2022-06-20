import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeToggle = () => {
  const t = useTranslations('ui.ColorModeToggle')
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      aria-label={colorMode === 'dark' ? t('switchToDark') : t('switchToLight')}
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
