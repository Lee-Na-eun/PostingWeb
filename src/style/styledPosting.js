import styled from 'styled-components';

export const PostingWrapBox = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostingUl = styled.ul`
  width: 1100px;
  background-color: orange;
  > li:nth-child(1) {
    margin-top: 0;
  }
`;

export const PostingLi = styled.li`
  width: 1100px;
  margin-top: 30px;
  background-color: pink;
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
    background-color: orange;
    > li {
      margin-left: 10px;
      background-color: green;
    }
    > li:nth-child(1) {
      margin-left: 0;
    }
  }
`;

export const PostingImg = styled.div``;
