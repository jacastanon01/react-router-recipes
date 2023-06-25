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
  margin: 0rem;
  @media screen and (min-width: 600px){
    margin: 4rem;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
    
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    font-size: 1rem;
    text-align: center;
    font-weight: 800;
    height: 40%;
  }
`;

export default SlideWrapper