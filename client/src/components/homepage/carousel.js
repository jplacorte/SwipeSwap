import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  SlideButton,
  PREV,
  NEXT,
  LOAD
} from "./swipestyle";


const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

// var a, b
var load

const Carousel = props => {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);

    // a = numItems;
    // b = dispatch;

  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

    load = (dir, num) => {
    dispatch({ type: dir, num });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    // onSwipedLeft: () => slide(NEXT),
    // onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  
  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <SlideButton onClick={() => slide(PREV)} float="left" id="prevBtn" hidden>
        Prev
      </SlideButton>
      <SlideButton onClick={() => slide(NEXT)} float="right" id="nextBtn" hidden>
        Next
      </SlideButton>
    </div>
  );
};

export const slidePrev = () => {
  // b({ type: dir, a });
  //   setTimeout(() => {
  //     b({ type: "stopSliding" });
  //   }, 50);  
  document.getElementById("prevBtn").click()
}

export const slideNext = () => {
  // b({ type: dir, a });
  //   setTimeout(() => {
  //     b({ type: "stopSliding" });
  //   }, 50);  
  document.getElementById("nextBtn").click()
}

export const loadCount = (val) => {
  load(LOAD, val)
}


function reducer(state, { type, numItems, num }) {
  switch (type) {
    case "reset":
      return initialState;
    case LOAD:
      return {
        ...state,
        pos: num
      }
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
