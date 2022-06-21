import { Meta, Story } from '@storybook/react'

import { ColorModeToggle } from '../ColorModeToggle'

const StoryMeta: Meta = {
  component: ColorModeToggle,
  title: 'UI/ColorModeToggle',
}

const Template: Story = () => {
  return (
    <div>
      <ColorModeToggle />
    </div>
  )
}

export const Simple = Template.bind({})

export default StoryMeta
