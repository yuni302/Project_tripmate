import React, { useState, useEffect } from 'react';
import { KeywordButtonStyle } from 'style/keywordStyle/KeywordButtonStyle';
import AddInfoLogo from 'img/KeywordAddInfoLogo.svg';
import KeywordButton from './KeywordButton';

const Question = ({ event, page, setPage, maxPage }) => {
  const [oneCheck, setOneCheck] = useState(true);
  const [anyOneCheck, setAnyOneCheck] = useState(false);
  const checkBox = document.getElementsByClassName('button');

  // 추가 정보 on, off
  const switchDisplay = () => {
    const hoverBox = document.getElementById('hover-box');
    if (hoverBox.style.display === 'block') {
      hoverBox.style.display = 'none';
    } else {
      hoverBox.style.display = 'block';
    }
  };
  // 한개 이상 체크 되었는지 확인
  const checkSelect = () => {
    const temp = [...checkBox].filter((data) => data.checked);
    if (temp.length !== 0) {
      setOneCheck(false);
    } else {
      setOneCheck(true);
    }
  };
  // Anyone 선택시 다른 선택지 false
  const handleAnyOne = () => {
    [...checkBox].slice(0, -1).forEach((element) => {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      element.checked = false;
    });
    setAnyOneCheck(!anyOneCheck);
    checkSelect();
  };
  // 다음 페이지 이동시 선택지 false
  useEffect(() => {
    [...checkBox].forEach((element) => {
      element.checked = false;
    });
    checkSelect();
    setAnyOneCheck(false);
  }, [page]);

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
                disabled={anyOneCheck}
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
        <KeywordButton currentPage={page} page={page} setPage={setPage} oneCheck={oneCheck} maxPage={maxPage} />
      </KeywordButtonStyle>
    </>
  );
};

export default Question;
