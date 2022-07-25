import React from 'react';
import { useNavigate } from 'react-router-dom';

const checkAnswer = (array) => array.filter((data) => data.checked === true);

const KeywordButton = (props) => {
  const navigate = useNavigate();
  const { currentPage, page, setPage, oneCheck, maxPage, answerList, setAnswerList, setPrevList } = props;
  const answer = [...document.getElementsByTagName('input')];

  const addAnswer = (ans) => {
    const temp = [...answerList, ans];
    setAnswerList(temp);
  };
  const removeAnswer = () => {
    setPrevList(answerList.slice(-1));
    setAnswerList(answerList.slice(0, -1));
  };

  const increasePage = () => {
    if (page === maxPage - 1) {
      navigate('/login');
      console.log(answerList);
    } else {
      addAnswer(checkAnswer(answer).map((data) => data.classList[0]));
      // 값 초기화
      const checkBox = document.getElementsByClassName('button');
      [...checkBox].forEach((element) => {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        element.checked = false;
        element.disabled = false;
      });
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
