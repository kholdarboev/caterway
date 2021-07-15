import styled  from 'styled-components';

export const CartItemDetails = styled.ul`
list-style: none;
    margin: 0;
    max-height: 20rem;
    padding:1rem;
    overflow-y: scroll;
    
`

export const Total = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
`
export const Span = styled.span`

`
 export const Actions = styled.div`
    text-align: right;
 
 `
  
   export const Button = styled.button`
    :active, :hover{
        background-color: #5a1a01;
    border-color: #5a1a01;
    color: white; 
}
font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
    background-color:${({close})=>!close && '#8a2b06'} ;
    color:${({close})=>close ? '#8a2b06' :'#ffffff'}  ;

   `

 
  
  
  
 
  
  