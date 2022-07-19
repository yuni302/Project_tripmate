import React, { useState } from 'react';
import { GroupAskStyle } from 'style/informationStyle/GroupAskStyle';

const GroupAsk = () => {
  const [isComplete, setIsComplete] = useState(true);
  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  return (
    <GroupAskStyle>
      <div className="group-wrap">
        <span className="title">단체문의</span>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">
            이름
            <input type="text" id="name" placeholder="이름을 입력해주세요." />
          </label>
          <label htmlFor="contact">
            연락처
            <input type="text" id="contact" placeholder="-제외 숫자만 입력해주세요." />
          </label>
          <label htmlFor="email">
            이메일
            <input type="text" id="email" placeholder="이메일을 입력해주세요" />
          </label>
          <label htmlFor="region">
            여행 지역
            <select id="region">
              <option value="" selected disabled>
                여행 지역을 선택해주세요
              </option>
              <option value="sea">동남아시아</option>
              <option value="nea">동북-중앙아시아</option>
              <option value="pacific">서남아시아-태평양</option>
              <option value="eu">유럽-코카서스</option>
              <option value="america">북미-중남미</option>
              <option value="africa">아프리카-중동</option>
              <option value="anyone">어디든지</option>
            </select>
          </label>
          <label htmlFor="person-count">
            여행 인원
            <input type="text" id="person-count" placeholder="여행 인원을 입력해주세요." />
          </label>
          <label htmlFor="start">
            출발 예정일(한국 출발)
            <input type="date" id="start" />
          </label>
          <label htmlFor="end">
            도착 예정일(한국 도착)
            <input type="date" id="end" />
          </label>
          <label htmlFor="category">
            여행 유형
            <select id="category">
              <option value="category" selected disabled>
                여행 유형을 선택해주세요
              </option>
              <option value="full">풀패키지</option>
              <option value="semi">세미 패키지</option>
              <option value="bag">배낭 패키지</option>
            </select>
          </label>
          <label htmlFor="rating">
            숙소 등급 (호텔 기준)
            <select id="rating">
              <option value="rating" selected disabled>
                숙소 등급을 선택해주세요
              </option>
              <option value="class1">1등급</option>
              <option value="class2">2등급</option>
              <option value="class3">3등급</option>
            </select>
          </label>
          <label htmlFor="price">
            1인 예상 경비
            <input type="text" id="price" placeholder="1인 예상 경비를 입력해주세요" />
          </label>
          <div className="terms">
            개인정보 수집 및 이용 동의
            <div>
              주식회사 더샤이니(이하 &apos;당사&apos;)는 고객님의 개인정보처리방침을 매우 중요시하며, 『정보통신망
              이용촉진 및 정보보호에 관한 법률』상의 개인정보보호 규정 및 행정안전부가 제정한 『개인정보보호법』을
              준수하고 있습니다. 당사는 개인정보취급(처리)방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와
              방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </div>
            <label htmlFor="terms" className="terms">
              <input type="checkbox" id="terms" onClick={handleComplete} />
              <p>개인정보 수집 및 이용에 동의합니다</p>
            </label>
          </div>
          <button type="button" className="submit" disabled={isComplete}>
            문의하기
          </button>
        </form>
      </div>
    </GroupAskStyle>
  );
};

export default GroupAsk;
