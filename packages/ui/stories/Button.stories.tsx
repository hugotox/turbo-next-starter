import { css } from '@emotion/react'
import { Meta, Story } from '@storybook/react'

import { Button } from '../src'

const ComponentName: Meta = {
  title: 'Button Stories',
  component: Button,
}

const style = css`
  color: red;
`

const Template: Story = () => {
  return (
    <div>
      <Button />
    </div>
  )
}

export const Simple = Template.bind({})

export default ComponentName
