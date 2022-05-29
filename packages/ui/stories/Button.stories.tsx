import { Button } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

const ComponentName: Meta = {
  component: Button,
  title: 'Button Stories',
}

const Template: Story = () => {
  return (
    <div>
      <Button>Chakra-UI is Awesome!</Button>
    </div>
  )
}

export const Simple = Template.bind({})

export default ComponentName
