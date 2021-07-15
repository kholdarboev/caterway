import styled from "styled-components";

export const Section = styled.section`
max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
  
@keyframes meals-appear {
  from {
    opacity: 0;
    transform: translateY(4rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
export const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`  
 
