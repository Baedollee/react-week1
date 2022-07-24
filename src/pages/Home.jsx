import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Container>
        <div>홈</div>
        <div>react</div>
      </Container>

      <Form>
        <InputWrap>
          <h2>제목</h2>
          <InputAdd type="text" />
          <h2>내용</h2>
          <InputAdd type="text" />
        </InputWrap>

        <InputBtn>추가하기</InputBtn>
      </Form>

      <InputTitle>working</InputTitle>
    </div>
  );
};

const Container = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;

  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;
const InputWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const InputAdd = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const InputBtn = styled.button`
  background-color: orange;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
const InputTitle = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
`;

export default Home;
