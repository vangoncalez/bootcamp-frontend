import styled, { css } from "styled-components";

const Primary = css`
  color: ${props => props.theme.palette.typography.primary};
  background-color: ${props => props.theme.palette.core.primary};
      &:hover {
        background-color: ${props => props.theme.palette.core.primaryHover};
      }
      &:disabled{
        background-color: ${props => props.theme.palette.core.primaryDisabled};
      }
      /* &:active{
        background-color: ${props => props.theme.palette.core.primaryActive};
        border: ${props => props.theme.border.radius['3']} solid ${props => props.theme.border.color.primary};
      } */
`
const Secondary = css`
  color: ${props => props.theme.palette.typography.secondary};
  background-color: ${props => props.theme.palette.core.secondary};
`

const Button = styled.a<any>`
  width: 100%;
  display: inline-block;
  padding: 0.5rem 0;
  text-align: center;
  cursor: pointer;
  color:${props => props.theme.palette.typography.primary};
  background-color: ${props => props.theme.palette.core.baseBackground};
  transition: background  ${props => props.theme.animation.primary};
  border-radius: ${props => props.theme.border.radius['5']};

  ${props => props.primary && Primary};
  ${props => props.secondary && Secondary};
`

export default Button
