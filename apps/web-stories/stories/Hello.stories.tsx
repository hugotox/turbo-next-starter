import { css } from '@emotion/react'
import { Meta, Story } from '@storybook/react'

const ComponentName: Meta = {
  title: 'Example Story',
}

const style = css`
  color: red;
`

const Template: Story = () => {
  return (
    <div>
      <h1 css={style}>Hello, World</h1>
    </div>
  )
}

export const Simple = Template.bind({})

export default ComponentName
