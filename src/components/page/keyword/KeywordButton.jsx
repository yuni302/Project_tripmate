import React, { useState } from 'react';

const checkAnswer = (array) => array.filter((data) => data.checked === true);

const KeywordButton = ({ currentPage, page, setPage, oneCheck, maxPage }) => {
  const answer = [...document.getElementsByTagName('input')];
  const [answerList, setAnswerList] = useState([]);

  const addAnswer = (ans) => {
    const temp = [...answerList, ans];
    setAnswerList(temp);
  };
  const removeAnswer = () => {
    setAnswerList(answerList.slice(0, -1));
  };

  const increasePage = () => {
    if (page === maxPage - 1) {
      // 키워드 선택 완료 추후 api 연결 요망
      console.log(answerList);
    } else {
      addAnswer(checkAnswer(answer).map((data) => data.classList[0]));
      setPage(currentPage + 1);
    }
  };
  const decreasePage = () => {
    removeAnswer(checkAnswer);
    setPage(currentPage - 1);
  };

  return currentPage === 0 ? (
    <button type="button" disabled={oneCheck} onClick={increasePage}>
      다음으로
    </button>
  ) : (
    <>
      <button type="button" onClick={decreasePage}>
        이전으로
      </button>
      <button type="button" disabled={oneCheck} onClick={increasePage}>
        다음으로
      </button>
    </>
  );
};
export default KeywordButton;
