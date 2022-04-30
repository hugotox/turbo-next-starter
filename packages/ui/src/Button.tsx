import { css, Theme } from '@emotion/react'

const style = ({ colors }: Theme) => css`
  padding: 10px 20px;
  border: 0;
  border-radius: 6px;
  color: #fff;
  background-color: ${colors.blue['600']};
`

export const Button = () => {
  return <button css={style}>Boop</button>
}
