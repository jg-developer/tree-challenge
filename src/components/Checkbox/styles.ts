import styled from 'styled-components';
import CheckIcon from '../../assets/check.svg';
import DashIcon from '../../assets/dash.svg';

export const CheckboxContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;

  input {
    cursor: pointer;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border: 1px solid #bfbfbf;
    appearance: none;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 3px;
    color: #fff;

    &:hover {
      border-color: #00a7ed;
    }

    &:checked {
      background-image: url(${CheckIcon});
      background-color: #00a7ed;
      border-color: #00a7ed;
    }

    &:indeterminate {
      background-image: url(${DashIcon});
      background-color: #00a7ed;
      border-color: #00a7ed;
    }
  }
`;
