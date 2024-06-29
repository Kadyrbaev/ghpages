import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Modal = (props) => {
  return (
    <ModalStyle with={props.width}>
      <h1>{props.children}</h1>
      {props.variant==="standart" && <div>
        <Button>NO</Button>
        <Button>YES</Button>
      </div>}
    </ModalStyle>
  )
}

export default Modal

const ModalStyle = styled.div`
    /* width: ${(props)=>props.with}; */
    border-radius: 14px;
    display: inline-block;
    background-color: bisque;
    padding: 20px 50px;
    margin-top: 14px;
    position: fixed;
    top: 100px;
    z-index: 10;

    div{
        display: flex;
        justify-content: space-between;
        width: 330px;
        margin: auto;
    }

`