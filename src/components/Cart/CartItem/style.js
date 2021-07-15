
import styled from 'styled-components';

export const List = styled.li`
 display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #8a2b06;
    padding: 1rem 0;
    margin: 1rem 0;
`
export const Wrapper = styled.div`

`

Wrapper.Summary = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
Wrapper.Actions = styled.div`
 display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    
  }
`
export const Button = styled.button`
font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
:active, :hover{
    background-color: #8a2b06;
    color: white;
  }

`
export const Title = styled.h2`
margin: 0 0 0.5rem 0;
    color: #363636;
` 
  
  
  export const Span = styled.span``

  Span.Amount = styled.span`
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
  `
  Span.Price = styled.span`
  font-weight: bold;
    color: #8a2b06;
  `
  
  
  
 
  
  
  
   