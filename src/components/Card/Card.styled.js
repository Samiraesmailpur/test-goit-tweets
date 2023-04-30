import styled from "styled-components";
import picture from "../../images/picture.png";
import logo from "../../images/Logo.png";

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 14px 56px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  font-family: "Montserrat";
  cursor: pointer;
`;

export const Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  p:nth-of-type(1) {
    margin-bottom: 16px;
    margin-top: 26px;
  }
  p:nth-of-type(2) {
    margin-bottom: 26px;
  }
`;

export const Background = styled.div`
  background-image: url(${logo}), url(${picture});
  background-position: left 20px top 20px;
  background-repeat: no-repeat;
  background-size: 76px 22px, 308px 168px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ::after {
    content: "";
    position: absolute;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    width: 100%;
    height: 8px;
    transform: translate(0px, -50px);
  }
`;

export const BorderImg = styled.div`
  display: flex;
  margin: 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgb(235, 216, 255);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50px;

  img {
    border-radius: 50px;
  }
`;
