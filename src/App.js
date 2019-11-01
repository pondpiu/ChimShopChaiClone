/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import logo from './logo.svg'
import './App.css'

const HeaderOptionContainer = styled.div`
  padding: 14px 15px;
  :hover {
    color: #213a8f;
  }
`
const Col12 = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
`
const Col4 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  box-sizing: border-box;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
const BlueBox = styled.button`
  font-family: TATSanaSuksaBold;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
  background-color: #213a8f;
  font-size: 24px;
  margin: 10px 0px;
  width: 900px;
  padding: 10px;
  @media (max-width: 769px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
    width: 100%;
  }
  :hover {
    background-color: #fbbc33;
    box-shadow: none;
  }
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-property: color, background-color, border-color, box-shadow;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  transition-delay: 0s, 0s, 0s, 0s;
`

const HeadTitle = styled.div`
  font-family: TATSanaSuksaBold;
  font-size: 36px;
  color: #e6332a;
  text-align: left;
  @media (max-width: 769px) {
    font-size: 24px;
    line-height: 1.3;
  }
`
const Bold = styled.div`
  font-family: TATSanaSuksaBold;
  font-weight: bold;
`
const LogoSmall = styled.img`
  width: 102px;
  @media (max-width: 577px) {
    width: 56px;
  }
`
const LogoSmallContainer = styled.div`
  display: inline-block;
  @media (max-width: 620px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`
const HeaderDesktop = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  font-family: TATSanaChon;
  font-size: 14px;
  @media (max-width: 620px) {
    display: none;
  }
`
const HeaderMobile = styled.div`
  display: flex;
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  font-family: TATSanaChon;
  font-size: 14px;
  @media (min-width: 620px) {
    display: none;
  }
  padding: 10px 20px;
`
const FooterHead = styled.div`
  font-weight: bold;
  color: #e6332a;
  margin-top: 24px;
  font-size: 16px;
`

const FooterItem = styled.div`
  @media (min-width: 576px) {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
`

const App = () => {
  return (
    <div className="App">
      <HeaderMobile>
        <img
          src="./chim/footer.png"
          css={css`
            width: 35px;
            height: 48px;
            padding: 0;
          `}
        />
        <div
          css={css`
            flex: 1;
          `}
        ></div>
        <img
          css={css`
            height: 30px;
            margin-top: 10px;
          `}
          src="https://img.icons8.com/android/24/000000/menu.png"
        ></img>
      </HeaderMobile>
      <HeaderDesktop>
        <HeaderOptionContainer>ลงทะเบียนเข้าร่วมโครงการ</HeaderOptionContainer>
        <HeaderOptionContainer>ขั้นตอนการเข้าร่วม</HeaderOptionContainer>
        <HeaderOptionContainer>ร้านค้าที่เข้าร่วม</HeaderOptionContainer>
      </HeaderDesktop>
      <div>
        <div
          css={css`
            position: relative;
            display: flex;
            justify-content: center;
            height: 350px;
            @media (max-width: 577px) {
              height: 221px;
            }
            @media (max-width: 769px) {
              height: 242px;
            }
            position: relative;
          `}
        >
          <Col4
            css={css`
              background-size: cover;
              flex: 1;
              background-image: url('./chim/banner-left.png');
            `}
          />
          <Col4
            css={css`
              background-size: cover;
              flex: 1;
              background-image: url('./chim/banner-center.png');
            `}
          />
          <Col4
            css={css`
              background-size: cover;
              flex: 1;
              background-image: url('./chim/banner-right.png');
            `}
          />
          <div
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <img
              css={css`
                @media (max-width: 577px) {
                  width: 110px;
                  height: 131px;
                  padding: 0;
                }
                @media (max-width: 769px) {
                  width: 146px;
                  height: 173px;
                }
                padding: 20px;
                width: 280px;
                margin: auto;
              `}
              src="./chim/banner.png"
              alt="banner"
            />
          </div>
        </div>
        <Row
          css={css`
            font-family: TATSanaSuksaBold;
          `}
        >
          <Col12
            css={css`
              margin-top: 26px;
            `}
          >
            ตั้งแต่วันที่
          </Col12>
          <Col12
            css={css`
              font-size: 48px;
              color: #e6332a;
            `}
          >
            27 ก.ย. - 31 ธ.ค. 62
          </Col12>
          <Col12>
            <BlueBox>
              ลงทะเบียน เฟส 2 <br />
              ตั้งแต่วันที่ 24 ต.ค. วันละ 2 รอบ เวลา 6.00 และ 18.00 น. <br />
              (จำกัดจำนวนผู้ ยนรอบละ 5 แสนคน รวม 1 ล้ายคนต่อวัน)
            </BlueBox>
          </Col12>
          <div
            css={css`
              margin: 70px auto;
              text-align: left;
              font-size: 14px;
              font-family: TATSanaSuksa;
            `}
          >
            <Container>
              <HeadTitle>
                มาตรการส่งเสริมการบริโภค <br />
                ในประเทศ “ชิมช้อปใช้”
              </HeadTitle>
              <div
                css={css`
                  margin-top: 1.5rem !important;
                `}
              >
                ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ “ชิมช้อปใช้”
                รับเงินผ่าน “เป๋าตัง” (G-Wallet) รวมจำนวน 13 ล้านคน
                ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ www.ชิมช้อปใช้.com <br />
                ตั้งแต่วันที่ 23 กันยายน - 15 พฤศจิกายน 2562 (รับลงทะเบียน เฟส 2
                ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1
                ล้านคนต่อวัน จนกว่าจะครบ 3 ล้านคน)
              </div>
              <div>
                <Bold
                  css={css`
                    margin-top: 1.5rem !important;
                  `}
                >
                  เงื่อนไขการเข้าร่วมมาตรการ
                </Bold>
                <p>
                  1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน <br />
                  2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน <br />
                  3.มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
                </p>
              </div>
            </Container>
          </div>
        </Row>
        <div
          css={css`
            display: flex;
            justify-content: center;
            img {
              width: 200px;
            }
            @media (max-width: 576px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <img src="./chim/Banner_KTB_SQ.png" />
          <img src="./chim/Banner_CGD_Sq.png" />
          <img src="./chim/Banner_TAT_Hotline_Sq.png" />
        </div>
        <Container
          css={css`
            display: flex;
            flex-direction: row;
            line-height: 1;
            margin: 100px auto;
            flex-wrap: wrap;
            justify-content: space-around;
          `}
        >
          <LogoSmallContainer>
            <LogoSmall src="./chim/MOF.png" />
          </LogoSmallContainer>
          <LogoSmallContainer>
            <LogoSmall src="./chim/FPO.png" />
          </LogoSmallContainer>
          <LogoSmallContainer>
            <LogoSmall src="./chim/CGD.png" />
          </LogoSmallContainer>
          <LogoSmallContainer>
            <LogoSmall src="./chim/Krungthai.png" />
          </LogoSmallContainer>
          <LogoSmallContainer>
            <LogoSmall src="./chim/MOTS.png" />
          </LogoSmallContainer>
          <LogoSmallContainer>
            <LogoSmall src="./chim/TAT.png" />
          </LogoSmallContainer>
        </Container>
      </div>
      <div>
        <div
          css={css`
            background: #fafafa;
            display: flex;
            width: 100%;
            @media (max-width: 576px) {
              flex-direction: column;
              text-align: left;
              padding-left: 20px;
            }
          `}
        >
          <FooterItem>
            <img
              css={css`
                width: 100px;
              `}
              src="./chim/footer.png"
            />
          </FooterItem>
          <FooterItem>
            <FooterHead>ข้อมูลลงทะเบียนประชาชน</FooterHead>
            <p>
              การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน” ติดต่อ
              ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144
            </p>
          </FooterItem>
          <FooterItem>
            <FooterHead>ข้อมูลลงทะเบียนผู้ประกอบการ</FooterHead>
            <p>
              เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ ติดต่อ โทร.0 2270 6400 กด 7
            </p>
          </FooterItem>
          <FooterItem>
            <FooterHead>ข้อมูลเที่ยวชิมช้อปใช้</FooterHead>
            <p>ติดต่อ ททท. โทร1672</p>
          </FooterItem>
        </div>
        <div
          css={css`
            padding: 10px;
            background: #213a8f;
            color: white;
            display: flex;
            justify-content: center;
            width: 100%;
            div {
              flex: 1;
            }
            @media (max-width: 576px) {
              flex-direction: column;
              text-align: left;
              padding-left: 20px;
              div {
                margin: 10px 0;
              }
            }
          `}
        >
          <div>Copyright @ 2003-2019</div>
          <div>ลงทะเบียนเข้าร่วมโครงการ</div>
          <div>ขั้นตอนการเข้าร่วมทั้งหมด</div>
          <div>รายชื่อร้านค้าที่เข้าร่วมรายการ</div>
        </div>
      </div>
    </div>
  )
}

export default App
