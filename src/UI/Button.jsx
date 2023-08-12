import React from 'react'
import { styled } from 'styled-components'

export const Button = ({children, onClick}) => {
  return (
    <ButtonCon onClick={onClick}>{children}</ButtonCon>
  )
}

const ButtonCon=styled.button`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border-style:none;
    background-color: #fa5759;
    color: #FFF;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
    background-color:#8b1416 ;
    border: 2px solid ;
    border-color: aqua;
  }
`



