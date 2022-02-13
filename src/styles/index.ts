
import styled, {createGlobalStyle } from 'styled-components';

const GrobalStyle = createGlobalStyle `
  html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .clearfix:after {visibility: hidden;display: block;font-size: 0;content: ".";clear: both;height: 0;}
    .clearfix {zoom: 1;}
`;

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

// 声明样式ButtonB组件
const Img = styled.img`
  background: red;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const HomeWrapper = styled.div `
  width: 560px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid red;
  .flip1-list-item {
    display: flex;
    border: 1px solid green;


  }
`;

const FlipListItem = styled.li `
  
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
    
`;


// 对外暴露出去
export {
    ButtonA,
    ButtonB,Img,
    GrobalStyle,
    HomeWrapper,
    FlipListItem
}
