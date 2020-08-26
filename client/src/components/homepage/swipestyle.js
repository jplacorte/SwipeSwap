import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Item = styled.div`
  text-align: center;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 570px;
  width: 350px;
  border-radius: 10px
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform .2s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-100% - 20px))";
    if (props.dir === PREV) return "translateX(calc(2 * (-100% - 20px)))";
    return "translateX(0%)";
  }};
`;

export const Wrapper = styled.div`
  width: 350px;
  height: 570px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
  border-radius: 10px
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
    color: #ffffff;
    font-size: 16px;
    font-weight: 100;
    padding: 10px;
    background-color: #167D7F;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    margin-top: 20px;
    text-decoration: none;
    float: ${props => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
