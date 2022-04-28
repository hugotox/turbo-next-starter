import { css } from '@emotion/react'

const styl = css`
  border: 0;
  border-radius: 6px;
  background: lightcoral;
`

export const Button = () => {
  return <button css={styl}>Boop</button>
}
