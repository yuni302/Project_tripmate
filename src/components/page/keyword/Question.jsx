import React, { useState, useEffect } from 'react';
import { KeywordButtonStyle } from 'style/keywordStyle/KeywordButtonStyle';
import AddInfoLogo from 'img/KeywordAddInfoLogo.svg';
import KeywordButton from './KeywordButton';

const Question = ({ event, page, setPage, maxPage }) => {
  const [oneCheck, setOneCheck] = useState(true);
  const checkBox = document.getElementsByClassName('button');
  const [answerList, setAnswerList] = useState([]);
  const [prevList, setPrevList] = useState([]);

  // 한개 이상 체크 되었는지 확인
  const checkSelect = () => {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    const temp = [...checkBox].filter((data) => data.checked);
    if (temp.length !== 0) {
      setOneCheck(false);
    } else {
      setOneCheck(true);
    }
  };
  useEffect(() => {
    [...checkBox].forEach((element) => {
      element.checked = false;
      element.disabled = false;
    });
    if (prevList.length !== 0) {
      if (prevList[0].includes('anyone')) {
        [...checkBox].forEach((element) => {
          if (element.id !== 'anyone') {
            element.checked = false;
            element.disabled = true;
          }
        });
      }
      prevList[0].forEach((element) => {
        document.getElementById(element).checked = true;
      });
      setPrevList([]);
    }
    checkSelect();
  }, [page]);

  // 추가 정보 on, off
  const switchDisplay = () => {
    const hoverBox = document.getElementById('hover-box');
    if (hoverBox.style.display === 'block') {
      hoverBox.style.display = 'none';
    } else {
      hoverBox.style.display = 'block';
    }
  };

  // Anyone 선택시 다른 선택지 false
  const handleAnyOne = (e) => {
    if (e.target.checked === true) {
      [...checkBox].forEach((element) => {
        if (element.id !== 'anyone') {
          element.checked = false;
          element.disabled = true;
        }
      });
    } else {
      [...checkBox].forEach((element) => {
        if (element.id !== 'anyone') {
          element.checked = false;
          element.disabled = false;
        }
      });
    }
    checkSelect();
  };

  return (
    <>
      <span className="page">{event.page + 1}/8</span>
      <span className="title">{event.title}</span>
      <span className="add-info">
        {event.addinfo ? (
          <>
            <button type="button" id="add-info" onClick={switchDisplay}>
              <img src={AddInfoLogo} alt="addInfoLogo" />
            </button>
            <div id="hover-box">
              <span className="box-name">{event?.addinfo.title}</span>
              <div className="box-content">
                {event?.addinfo.contents.map((data) => (
                  <div>
                    <span className="box-content-title">{data[0]}</span>
                    <span>{data[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </span>
      <div className={`${event?.que} choose`}>
        {event.list.map((data) => (
          <div>
            {data[0] !== 'anyone' ? (
              <input
                type={event.overlap ? 'checkbox' : 'radio'}
                className={`${data[0]} button`}
                id={data[0]}
                name={event.overlap ? null : event?.que}
                onClick={checkSelect}
              />
            ) : (
              <input
                type={event.overlap ? 'checkbox' : 'radio'}
                className={`${data[0]} button`}
                id={data[0]}
                onClick={(checkSelect, handleAnyOne)}
              />
            )}
            <label htmlFor={data[0]}>
              <span />
              {data[1]}
            </label>
          </div>
        ))}
      </div>
      <KeywordButtonStyle className="submit-button">
        <KeywordButton
          currentPage={page}
          page={page}
          setPage={setPage}
          oneCheck={oneCheck}
          maxPage={maxPage}
          answerList={answerList}
          setAnswerList={setAnswerList}
          prevList={prevList}
          setPrevList={setPrevList}
        />
      </KeywordButtonStyle>
    </>
  );
};

export default Question;
