import styled,{css} from 'styled-components';

export const List = styled.li`
  display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
`
export const Container = styled.div`
  font-style: italic;
`
const Price = css`
  margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  `

export const Title = styled.h3`
margin:${({price})=>!price && ' 0 0 0.25rem 0'};
${({price})=>price && Price}
` 
  
 
  
  
 