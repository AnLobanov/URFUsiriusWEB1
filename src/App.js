/** @jsxImportSource  @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import imgLogo from './jingu-logo-512.png'
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations'
import MediaQuery from 'react-responsive'

function App() {
    const textStyle = css`
    position: absolute;
    width: 789.89px;
    height: 135px;
    left: 250px;
    top: 172px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 114.894px;
    line-height: 135px;
    text-align: center;
    color: #000000;
    `
    const textMobile = css`
    position: absolute;
    width: 275px;
    height: 47px;
    left: 50px;
    top: 417px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    `
    const rocketStyle = css`
    position: absolute;
    width: 205px;
    height: 205px;
    left: 250px;
    top: 408px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 205px;
    line-height: 240px;
    `
    const rocketMobile = css`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 147px;
    top: 551px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 80px;
    line-height: 94px;
    `
    const logoStyle = css`
    position: absolute;
    width: 210px;
    height: 210px;
    left: 1460px;
    top: 145px;
    border-radius: 105px;
    `
    const logoMobile = css`
    position: absolute;
    width: 210px;
    height: 210px;
    left: 82px;
    top: 121px;
    border-radius: 105px;
    `
  const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;
  return (<div>
    <MediaQuery maxWidth='1224px'>
      <div css={textMobile}>Anton Lobanov</div>
      <Pulse><div css={rocketMobile}>🚀</div></Pulse>
      <img css={logoMobile} src={imgLogo} alt='' />
    </MediaQuery>
    <MediaQuery minWidth='1224px'>
      <div css={textStyle}>Anton Lobanov</div>
      <Pulse><div css={rocketStyle}>🚀</div></Pulse>
      <img css={logoStyle} src={imgLogo} alt='' />
    </MediaQuery>
  </div>) 
}

export default App;
