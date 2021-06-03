import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  filter:brightness(95%);
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)
    z-index: 2;
  }
`
export const FormWrap = styled.div`
  height: 100%;
 display: flex;
  flex-direction:  column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
  margin-left: 55px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;
  z-index: 3;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }

  &:hover {
    color: #01B56B;
    transition: 0.3s ease-in-out;
  }
`
export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
  padding: 10px;
}
`
export const Form = styled.form`

max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 60px 32px;
border-radius:4px;
background-color: rgba(209, 206, 209, 0.4);
box-shadow: 0 1px 2px rgba( 0, 0, 0, 0.9);

@media screen and (max-width: 480px) {
  padding: 32px 32px;
}
  `
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: black;
`
export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 32px;
  border-radius: 4px;
  background-color: 'transparent';


`
export const FormButton = styled.button`
  display: grid;
  padding: 15px ;
  margin-left: -25px;
  margin-right: -195px;
  background: ${({primary}) => (primary ?  '#010606' : 'black')};
  color: ${({dark}) =>  (dark ? '#010606' : '#fff')};
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

   &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  'red' : '#01BF71')};
    color: ${({dark}) =>  (dark ? '#010606' : '#fff')};
  }
`

export const IndexBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const Formside = styled.div`
display: grid;
padding: 1px 0px;
margin-bottom: 1px;
margin-top: 1px;

`
export const Formgrid = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;

padding: 5px 0px;
margin-bottom: 1px;
margin-top: 1px;

`