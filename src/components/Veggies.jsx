import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SlideWrapper from "./UI/SlideWrapper";
import Card from "./UI/Card";
import SuspenseWrapper from "./UI/SuspenseWrapper";


function Veggies() {

  return (
    <>
      <SlideWrapper title="Vegetarian Dishes"> 
      <SuspenseWrapper>    
          {(responseData) => 
            responseData.veggieResponse.map((r) => (
            <SplideSlide key={r.id}>
              <Card recipe={r} />
            </SplideSlide>
          ))}
        </SuspenseWrapper>
      </SlideWrapper>
    </>
  );
}

export default Veggies