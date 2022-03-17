import styled from 'styled-components';
import '../App.css';

export const PostingWrapBox = styled.div`
  background-color: #dcdcdc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostingUl = styled.ul`
  width: 1100px;
  > li:nth-child(1) {
    margin-top: 0;
  }
`;

export const PostingLi = styled.li`
  width: 1100px;
  margin-top: 30px;
  > span {
    font-size: 13px;
  }
`;

export const PostingBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  display: grid;
  place-items: center;
  > ul {
    height: 140px;
    display: grid;
    grid-template-columns: 140px 600px 300px;
    > li {
      margin-left: 10px;
    }
    > li:nth-child(1) {
      margin-left: 0;
      border-radius: 10px;
      background-color: gray;
    }
  }
`;

export const PostingBoxFirst = styled.li`
  /* background-image 넣으면 됨 */
`;

export const PostingBoxSecond = styled.li`
  > div:nth-child(1) {
    height: 85px;
    > h3 {
      font-size: 20px;
    }
    > span {
      font-size: 14px;
      color: gray;
      font-weight: bold;
    }
  }
  > div:nth-child(2) {
    > #tag {
      height: 35px;
      color: gray;
      > span {
        width: 80px;
        height: 25px;
        display: inline-block;
        background-color: #264d84;
        margin-left: 10px;
        border-radius: 20px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        font-size: 12px;
      }
    }
    > #country {
      color: gray;
    }
  }
`;

export const PostingBoxThird = styled.li`
  display: grid;
  grid-template-columns: 40px 80px 180px;
  color: gray;
  > div {
    font-size: 14px;
    > p {
      padding-top: 20px;
    }
    /* margin-left: 10px; */
  }
  > #bookmark {
    width: 20px;
    height: 20px;
    background-color: red;
  }
  > #title {
    > p:nth-child(1) {
      font-weight: bold;
    }
  }
  > #descript {
    text-align: right;
    > p:nth-child(1) {
      font-weight: bold;
    }
    > p:nth-child(3) {
      span {
        display: block;
      }
    }
  }
`;
