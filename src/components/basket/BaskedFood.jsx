import React, { useContext } from "react";
import styled from "styled-components";
import { OrderBusketContext } from "../store/OrderBusket";
import { useDispatch, useSelector } from "react-redux";

function BaskedFood() {
  const context = useContext(OrderBusketContext);
  const {basket} = useSelector((prev)=>prev.basket)
  const dispatch = useDispatch()
  console.log(basket);
  console.log("BASKET");

  return (
    <Global>
      {basket.map((el) => {
        return (
          <>
            <Wrapper>
              <Container>
                <FoodWithPrice>
                  <FoodName>{el.title}</FoodName>
                  <FoodPrice>{`${el.price}${"сом"}`}</FoodPrice>
                </FoodWithPrice>
                <Amount>{el.amount}</Amount>
              </Container>
              <Buttons>
                <button onClick={() => dispatch({type: "PLUS", payload: el.id})}>+</button>
                <button onClick={() => dispatch({type: "MINUS", payload: el.id})}>-</button>
              </Buttons>
            </Wrapper>
          </>
        );
      })}
    </Global>
  );
}

export default BaskedFood;

const Global = styled.div`
  overflow-x: hidden;
  max-height: 200px;
  border: 2px solid red;
`
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7b68ee;
  border-radius: 10px;
  color: white;
  transition: 0.2s;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    transform: scale(0.99);
    box-shadow: 0 0 10px 0.5px black;
  }
`;
const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  & button {
    width: 40px;
    height: 30px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    background-color: #f0e68c;
    border: none;
    cursor: pointer;
  }
  & button:hover {
    transform: scale(1.04);
    transition: 0.3s;
    box-shadow: 0 0 5px 0.5px;
    background-color: #ffe600;
  }
`;
const FoodWithPrice = styled.div`
  display: flex;
  flex-direction: column;
`;
const FoodName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const FoodPrice = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const Amount = styled.b`
  font-size: 28px;
  font-weight: 400;
`;
