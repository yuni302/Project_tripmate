import React, { useState } from 'react';
import { PrivacyStyle } from 'style/myPageStyle/MyPageListStyle';
import { Day, Month, Year } from './MyPage';

const MyPagePrivacy = () => {
  const [id, setId] = useState('abcd@gotogether-s.com');
  const [password, setPassword] = useState('tofhdnsqlalfqjsghdpdy');
  const [passwordCheck, setPasswordCheck] = useState('tofhdnsqlalfqjsghdpdy');
  const [name, setName] = useState('홍길동');

  const onChangeId = (e) => setId(e.target.value);
  const onChangePw = (e) => setPassword(e.target.value);
  const onChangePwc = (e) => setPasswordCheck(e.target.value);
  const onChangeNa = (e) => setName(e.target.value);

  const YearList = Year.map((year) => (
    <option key={year.year} value={year.year}>
      {year.year}
    </option>
  ));

  const MonthList = Month.map((month) => (
    <option key={month.month} value={month.month}>
      {month.month}
    </option>
  ));

  const DayList = Day.map((day) => (
    <option key={day.day} value={day.day}>
      {day.day}
    </option>
  ));
  return (
    <PrivacyStyle>
      <span className="privacy-title">개인 정보 수정</span>
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800"
        alt="profile"
        className="profile-photo"
      />
      <p className="user-name">이미숙</p>
      <p className="photo">사진 수정</p>

      <p className="input-title">이메일</p>
      <input
        type="text"
        className="input-check"
        placeholder="이메일을 입력해주세요."
        value={id}
        onChange={onChangeId}
      />

      <p className="input-title">새로운 비밀번호</p>
      <input
        type="password"
        className="input"
        placeholder="새로운 비밀번호를 입력해주세요."
        value={password}
        onChange={onChangePw}
      />

      <p className="input-title">비밀번호 확인</p>
      <input
        type="password"
        className="input-check"
        placeholder="비밀번호를 재입력해주세요."
        value={passwordCheck}
        onChange={onChangePwc}
      />

      <p className="input-title">이름</p>
      <input
        type="text"
        className="input-check"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={onChangeNa}
      />

      <p className="input-title">생년월일</p>
      <div className="birth-check">
        <select className="input-birth">{YearList}</select>
        <select className="input-birth">{MonthList}</select>
        <select className="input-birth">{DayList}</select>
      </div>

      <p className="input-title">성별</p>
      <div className="gender-club">
        <div className="gender">
          <input type="radio" name="gender" className="gender-select" />
          <span>남성</span>
        </div>
        <div className="gender">
          <input type="radio" name="gender" className="gender-select" />
          <span>여성</span>
        </div>
      </div>

      <p className="terms">
        고투게더 <span>이용약관</span> 확인하기
      </p>

      <button type="button" className="btn-modify">
        수정하기
      </button>
    </PrivacyStyle>
  );
};

export default MyPagePrivacy;
