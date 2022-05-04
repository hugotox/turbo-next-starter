import { css, Theme } from '@emotion/react'
import { Meta, Story } from '@storybook/react'
import { theme } from 'theme'

const colors: any = (theme as Theme).colors

const ColorStory: Meta = {
  title: 'Theme',
}

const storyStyle = css`
  display: flex;
  flex-direction: column;
`

const group = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const colorWrapper = css`
  display: flex;
  flex: 0 0 250px;
  margin-bottom: 15px;

  code {
    font-size: 14px;
  }
`

const colorBlock = css`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 6px;
`

const Color = ({ color, name }: any) => {
  return (
    <div css={colorWrapper}>
      <div css={colorBlock} style={{ backgroundColor: colors[color][name] }} />
      <div>
        <strong>
          {color} {name}
        </strong>
        <br />
        <code>{colors[color][name]}</code>
      </div>
    </div>
  )
}

const colorKeys = [
  'blackAlpha',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
]

const Template: Story = () => {
  return (
    <div css={storyStyle}>
      {colorKeys.map((color) => {
        const variants = Object.keys(colors[color])
        return (
          <div css={group} key={color}>
            {variants.map((variant) => (
              <Color color={color} key={`${color}-${variant}`} name={variant} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export const Colors = Template.bind({})

export default ColorStory
