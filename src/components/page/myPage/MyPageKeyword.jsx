import React, { useState } from 'react';
import { KeywordListStyle } from 'style/myPageStyle/MyPageListStyle';
import { ReactComponent as Down } from 'img/Down.svg';
import { areaList, dayList, groupList, monthList, politicsList, religionList, styleList, themeList } from './MyPage';

const MyPageKeyword = () => {
  const [group, setGroup] = useState(false);
  const [area, setArea] = useState(false);
  const [theme, setTheme] = useState(false);
  const [politics, setPolitics] = useState(false);
  const [religion, setReligion] = useState(false);
  const [style, setStyle] = useState(false);
  const [month, setMonth] = useState(false);
  const [day, setDay] = useState(false);

  const Group = groupList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="checkbox" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Area = areaList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="checkbox" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Theme = themeList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="checkbox" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Politics = politicsList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="radio" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Religion = religionList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="radio" name="religion" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Style = styleList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="checkbox" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Month = monthList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="checkbox" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const Day = dayList.map((item) => (
    <div key={item}>
      <div className="select">
        <input type="checkbox" />
        <p>{item}</p>
      </div>
    </div>
  ));

  const groupClick = () => setGroup(!group);
  const areaClick = () => setArea(!area);
  const themeClick = () => setTheme(!theme);
  const politicsClick = () => setPolitics(!politics);
  const religionClick = () => setReligion(!religion);
  const styleClick = () => setStyle(!style);
  const monthClick = () => setMonth(!month);
  const dayClick = () => setDay(!day);

  return (
    <KeywordListStyle>
      <div className="keyword-title">????????? ??????</div>
      <p className="keyword">?????? ??????</p>
      <div>
        <button type="button" className="keyword-select" onClick={groupClick}>
          <span>???????????? ?????? ????????? ??????????????????.</span>
          <Down />
        </button>
        <div>{group && <div className="select-box">{Group}</div>}</div>
      </div>

      <p className="keyword">?????? ??????</p>
      <button type="button" className="keyword-select" onClick={areaClick}>
        <span>???????????? ?????? ????????? ??????????????????.</span>
        <Down />
      </button>
      <div>{area && <div className="select-box">{Area}</div>}</div>

      <div>
        <p className="keyword">?????? ??????</p>
        <button type="button" className="keyword-select" onClick={themeClick}>
          <span>???????????? ?????? ????????? ??????????????????.</span>
          <Down />
        </button>
        <div>{theme && <div className="select-box">{Theme}</div>}</div>
      </div>

      <div>
        <p className="keyword">?????? ??????</p>
        <button type="button" className="keyword-select" onClick={politicsClick}>
          <span>??????????????? ??????????????????.</span>
          <Down />
        </button>
        <div>{politics && <div className="select-box">{Politics}</div>}</div>
      </div>
      <div>
        <p className="keyword">??????</p>
        <button type="button" className="keyword-select" onClick={religionClick}>
          <span>????????? ??????????????????</span>
          <Down />
        </button>
        <div>{religion && <div className="select-box">{Religion}</div>}</div>
      </div>

      <div>
        <p className="keyword">?????? ?????????</p>
        <button type="button" className="keyword-select" onClick={styleClick}>
          <span>???????????? ?????????????????? ??????????????????.</span>
          <Down />
        </button>
        <div>{style && <div className="select-box">{Style}</div>}</div>
      </div>

      <div>
        <p className="keyword">?????? ???</p>
        <button type="button" className="keyword-select" onClick={monthClick}>
          <span>????????? ????????? ?????? ????????? ??????????????????</span>
          <Down />
        </button>
        <div>{month && <div className="select-box">{Month}</div>}</div>
      </div>

      <div>
        <p className="keyword">?????? ??????</p>
        <button type="button" className="keyword-select" onClick={dayClick}>
          <span>???????????? ??????????????? ??????????????????.</span>
          <Down />
        </button>
        <div>{day && <div className="select-box">{Day}</div>}</div>
      </div>

      <button type="button" className="btn-modify">
        ????????????
      </button>
    </KeywordListStyle>
  );
};
export default MyPageKeyword;
