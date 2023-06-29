import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function SlideWrapper({ title, children }) {

    return (
        <Wrapper>
            <h3>{title}</h3>
            <Splide
                options={{
                    perPage: 4,
                    drag: "free",
                    gap: "1rem",
                    pagination: false,
                    breakpoints: {
                      640: {
                        perPage: 1,
                      },
                      1082: {
                        perPage: 2
                      }
                    }
                }}>
                  {children}
            </Splide>
        </Wrapper>
    )

}

const Wrapper = styled.article`
@media screen and (min-width: 600px){
  margin: 4rem;
}
  margin: 0rem;
`;

export default SlideWrapper