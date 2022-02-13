import styled from 'styled-components'; // 引入styled-components

// 声明样式ButtonA组件
const ButtonA = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #abcdef;
  color: #fff;
`;

// 声明样式ButtonB组件
const ButtonB = styled.button`
  background: red;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
`;

// 对外暴露出去
export {
    ButtonA,
    ButtonB
}
