import { Meta, Story } from '@storybook/react'

import { Link } from '../Link'

const ComponentName: Meta = {
  component: Link,
  title: 'UI/Link',
}

const Template: Story = () => {
  return (
    <div>
      <Link href=".">Chakra-UI is Awesome!</Link>
    </div>
  )
}

export const Simple = Template.bind({})

export default ComponentName
