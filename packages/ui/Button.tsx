import { css, Theme } from '@emotion/react'

const styl = ({ colors }: Theme) => css`
  padding: 10px 20px;
  border: 0;
  border-radius: 6px;
  color: ${colors.blue['300']};
  background: lightcoral;
`

export const Button = () => {
  return <button css={styl}>Boop</button>
}
