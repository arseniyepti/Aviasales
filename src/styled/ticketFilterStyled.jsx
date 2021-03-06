import styled from 'styled-components';
import shape from '../components/ResultApp/Shape.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 500px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  color: ${({ activeBtn }) => (activeBtn ? '#fff' : '#4A4A4A')};
  font-weight: 600;
  height: 50px;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px solid ${({ activeBtn }) => (activeBtn ? '#2196F3' : '#DFE5EC')};
  border-right-width: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${({ activeBtn }) => (activeBtn ? '#2196F3' : '#fff')};
`;

export const WrapButton = styled.div`
  width: 500px;
  display: flex;
  flex-flow: row wrap;
`;
export const Form = styled.div`
  width: 232px;
  margin-right: 20px;
  background-color: #fff;
  padding: 20px 0 20px 0;
  display: flex;
  align-self: flex-start;
  flex-flow: column nowrap;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
export const FormWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Title = styled.h2`
  padding-left: 20px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: Bold;
  text-transform: uppercase;
  margin: 0;
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label:before {
    border: 1px solid #2196f3;
  }

  &:checked + label:after {
    opacity: 1;
  }
`;

export const Wrap = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f1fcff;
  }
`;

export const Label = styled.label`
  width: 230px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 13px;
  font-weight: normal;
  position: relative;
  cursor: pointer;
  padding-left: 30px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #9abbce;
    border-radius: 2px;
    background: #fff;
    transition: 0.2s;
  }

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 15px;
    left: 4px;
    width: 20px;
    height: 20px;
    background: url(${shape}) no-repeat;
  }
`;
