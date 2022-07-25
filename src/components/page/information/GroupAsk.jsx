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
              이용촉진 및 정보보호&quot;에 관한 법률』상의 개인정보보호 규정 및 행정안전부가 제정한 『개인정보보호법』을
              준수하고 있습니다. 당사는 개인정보취급(처리)방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와
              방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. *개인정보의
              수집,제공 및 활용에 동의하지 않을 권리가 있으며, 미동의시 회원가입 및 여행서비스의 제공이 제한됩니다. ■
              개인정보의 수집방법 및 항목 당사는 여행 서비스와 회원 서비스 제공을 위해 아래와 같이 필요한 최소한의
              개인정보만을 수집합니다. ① 회원가입 시 1. 수집/이용 항목 - 필수 * 회원가입 : 성명, 성별, 생년월일,
              ID(이메일주소), 비밀번호, 전화번호, 프로필, 배송지 * 자동생성정보 : 기기정보(기기종류, OS버전),
              이용기록(IP주소, 쿠키, 서비스 이용기록 등) * 환불 시 : 환불계좌 * 예약자 정보(예약자 이름, 이메일 주소,
              휴대전화 번호) - 선택 * 위치정보 * 특가 상품 및 할인 혜택 안내 * 여행목적 2. 수집/이용 목적 * 서비스 가입
              및 이용 * 맞춤형 컨텐츠 추천 * 서비스 이용에 따른 이용실적 정보 통계·분석·서비스개선 * 불법·부정이용방지,
              고객상담 ② 여행상품 예약 시 1-1. 수집/이용 항목 * 성명(국문/영문), 생년월일, 성별, 여권번호, 여권만료일,
              여권발급일, 비자소지여부, 이 메일, 연락처, 주소 1-2. 수집/이용 목적 * 여행상품 예약 및 상담, 출국가능여부
              파악, 경품배송, 만족도조사 2-1. 수집/이용 항목 * 성명, 생년월일, 성별, 여권번호 2-2. 수집/이용 목적 *
              여행자보험 가입 3-1. 수집/이용 항목 * 성명, 신용카드번호, 유효기간, 계약자와의관계, 계좌번호 3-2.
              수집/이용 목적 * 대금결제, 정산, 환불 4-1. 수집/이용 항목 * 성명, 생년월일, 성별, 연락처, 회원번호 4-2.
              수집/이용 목적 * 마일리지 서비스 제공 및 회원확인 ■ 개인정보 수집방법 당사에서 운영하는
              홈페이지(www.gotogether-s.com)와 전화, 팩스등과 당사 상품을 판매하는 제휴사에서 홈페이지회원, 여행회원,
              투어마일리지(상담)신청서, 상품예약(구매) 및 그 외 본인 확인, 제휴사로부터의 당사제공 등의 방법으로
              개인정보를 수집합니다.
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
