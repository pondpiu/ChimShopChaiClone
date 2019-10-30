/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header
        css={css`
          color: blue;
          display: flex;
          justify-content: center;
          background-color: green;
        `}
      >
        <div>ลงทะเบียนเข้าร่วมโครงการ</div>
        <div>ขั้นตอนการเข้าร่วม</div>
        <div>ร้านค้าที่เข้าร่วม</div>
      </header>
      <div>
        body
        <div
          css={css`
            display: flex;
            justify-content: center;
            height: 20em;
            img {
              flex: 1;
            }
          `}
        >
          <img src="./chim/banner-left.png" alt="banner-left" />
          <img src="./chim/banner-center.png" alt="banner-center" />
          <img src="./chim/banner-right.png" alt="banner-right" />
        </div>
        <div>
          MAIN
          <div>ตั้งแต่วันที่</div>
          <div>27 ก.ย. - 31 ธ.ค. 62</div>
          <div>
            ลงทะเบียน เฟส 2 <br />
            ตั้งแต่วันที่ 24 ต.ค. วันละ 2 รอบ เวลา 6.00 และ 18.00 น. <br />
            (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้ายคนต่อวัน)
          </div>
          <div>
            มาตรการส่งเสริมการบริโภค <br />
            ในประเทศ “ชิมช้อปใช้”
          </div>
          <div>
            ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ “ชิมช้อปใช้”
            รับเงินผ่าน “เป๋าตัง” (G-Wallet) รวมจำนวน 13 ล้านคน
            ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ www.ชิมช้อปใช้.com <br />
            ตั้งแต่วันที่ 23 กันยายน - 15 พฤศจิกายน 2562 (รับลงทะเบียน เฟส 2
            ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1 ล้านคนต่อวัน
            จนกว่าจะครบ 3 ล้านคน)
          </div>
          <div>
            เงื่อนไขการเข้าร่วมมาตรการ
            <p>
              1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน <br />
              2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน <br />
              3.มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
            </p>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            img {
              width: 200px;
            }
          `}
        >
          <img src="./chim/Banner_KTB_SQ.png" />
          <img src="./chim/Banner_CGD_Sq.png" />
          <img src="./chim/Banner_TAT_Hotline_Sq.png" />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            img {
              width: 80px;
            }
          `}
        >
          <img src="./chim/MOF.png" />
          <img src="./chim/FPO.png" />
          <img src="./chim/CGD.png" />
          <img src="./chim/Krungthai.png" />
          <img src="./chim/MOTS.png" />
          <img src="./chim/TAT.png" />
        </div>
      </div>
      <div>
        Footer
        <div
          css={css`
            background: #fafafa;
            display: flex;
            div {
              flex: 1;
            }
          `}
        >
          <div>
            <img
              css={css`
                width: 100px;
              `}
              src="./chim/banner.png"
            />
          </div>
          <div>
            ข้อมูลลงทะเบียนประชาชน
            <p>
              การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน” ติดต่อ
              ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144
            </p>
          </div>
          <div>
            ข้อมูลลงทะเบียนผู้ประกอบการ
            <p>
              เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ ติดต่อ โทร.0 2270 6400 กด 7
            </p>
          </div>
          <div>
            ข้อมูลเที่ยวชิมช้อปใช้
            <p>ติดต่อ ททท. โทร1672</p>
          </div>
        </div>
        <div
          css={css`
            background: #213a8f;
            color: white;
            display: flex;
            justify-content: center;
            div {
              flex: 1;
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
