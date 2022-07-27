import React from 'react';
import styled from 'styled-components';

const Todo = () => {
  const [Complete, setComplete] = useState(second);
  return (
    <ListWrapper>
      <TodoContainer>
        <div>
          <TodoTitle>리액트 공부하기</TodoTitle>
          <div>리액트 기초를 공부해봅시다.</div>
        </div>
        <ButtonSet>
          <TodoDeleteBtn onClick={() => {}}>삭제하기</TodoDeleteBtn>
          <TodoCompleteteBtn>완료</TodoCompleteteBtn>
        </ButtonSet>
      </TodoContainer>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;
const TodoTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const TodoDeleteBtn = styled.button`
  background-color: #fff;
  border: 2px solid red;

  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;
const TodoCompleteteBtn = styled.button`
  background-color: #fff;
  border: 2px solid red;

  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

export default Todo;
