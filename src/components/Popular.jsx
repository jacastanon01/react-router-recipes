import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SlideWrapper from "./UI/SlideWrapper";
import Card from "./UI/Card";
import SuspenseWrapper from "./UI/SuspenseWrapper";

function Popular() {

  return (
    <SlideWrapper title="Selected Dishes">
      <SuspenseWrapper>
        {(resolvedData) => 
            resolvedData.popularResponse && resolvedData.popularResponse.map((result) => (
            <SplideSlide key={result.id}>
              <Card recipe={result} />
            </SplideSlide>
            ))
        }
      </SuspenseWrapper>
      {/* {popularResponse && popularResponse.map((r) => (
        <SplideSlide key={r.id}>
          <Card recipe={r} />
        </SplideSlide>
      ))} */}
    </SlideWrapper>
  );
}

export default Popular;
