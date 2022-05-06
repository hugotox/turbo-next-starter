import { css, Theme } from '@emotion/react'

export const style = ({ colors }: Theme) => css`
  padding: 10px 20px;
  border: 0;
  border-radius: 6px;
  color: #fff;
  background-color: ${colors.blue['600']};
`
