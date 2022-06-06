import { Heading, Text } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

const TextStory: Meta = {
  title: 'Theme/Typography',
}

const Template: Story = () => {
  return (
    <div>
      <Heading as="h1" size="4xl">
        Heading 1
      </Heading>
      <Heading as="h2" size="3xl">
        Heading 2
      </Heading>
      <Heading as="h3" size="2xl">
        Heading 3
      </Heading>
      <Heading as="h4" size="xl">
        Heading 4
      </Heading>
      <br />
      <Text as={'strong'}>Font weight: 300</Text>
      <Text fontWeight={300}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla felis. Sed
        dapibus sapien libero, vel pretium magna varius ac. Duis efficitur rutrum libero nec
        feugiat. Mauris id sem at felis tincidunt bibendum eget id felis. Fusce vitae ullamcorper
        quam. Ut ut faucibus lacus. Donec eget mauris pulvinar, faucibus neque vel, consectetur
        ante. Nam vitae eros sit amet purus rhoncus varius. Donec porttitor iaculis vulputate.
        Mauris non semper libero.
      </Text>
      <br />
      <Text as={'strong'}>Font weight: 400 (default)</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla felis. Sed
        dapibus sapien libero, vel pretium magna varius ac. Duis efficitur rutrum libero nec
        feugiat. Mauris id sem at felis tincidunt bibendum eget id felis. Fusce vitae ullamcorper
        quam. Ut ut faucibus lacus. Donec eget mauris pulvinar, faucibus neque vel, consectetur
        ante. Nam vitae eros sit amet purus rhoncus varius. Donec porttitor iaculis vulputate.
        Mauris non semper libero.
      </Text>
      <br />
      <Text as={'strong'}>Font weight: 500</Text>
      <Text fontWeight={500}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla felis. Sed
        dapibus sapien libero, vel pretium magna varius ac. Duis efficitur rutrum libero nec
        feugiat. Mauris id sem at felis tincidunt bibendum eget id felis. Fusce vitae ullamcorper
        quam. Ut ut faucibus lacus. Donec eget mauris pulvinar, faucibus neque vel, consectetur
        ante. Nam vitae eros sit amet purus rhoncus varius. Donec porttitor iaculis vulputate.
        Mauris non semper libero.
      </Text>
      <br />
      <Text as={'strong'}>Font weight: 600</Text>
      <Text fontWeight={600}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla felis. Sed
        dapibus sapien libero, vel pretium magna varius ac. Duis efficitur rutrum libero nec
        feugiat. Mauris id sem at felis tincidunt bibendum eget id felis. Fusce vitae ullamcorper
        quam. Ut ut faucibus lacus. Donec eget mauris pulvinar, faucibus neque vel, consectetur
        ante. Nam vitae eros sit amet purus rhoncus varius. Donec porttitor iaculis vulputate.
        Mauris non semper libero.
      </Text>
    </div>
  )
}

export const Default = Template.bind({})

export default TextStory
