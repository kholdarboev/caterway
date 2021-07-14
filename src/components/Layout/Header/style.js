  
import styled from 'styled-components'
export const Heading = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: crimson;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
    box-sizing: border-box;
  `
  export const Title = styled.h1`
  
  `
  export const ImgWrapper = styled.div`
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;
    
    `
  export const Img = styled.img`
   width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  `
 
  