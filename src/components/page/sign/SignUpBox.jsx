import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { joinUser } from 'store/joinSlice';

import { SignUpStyle } from 'style/signStyle/SignStyle';
import { Day, Month, Year } from './Birth';

const regExpId = /^[0-9a-z]+$/;
const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const SignUpBox = () => {
  const navigation = useNavigate();
  const USER = useSelector((state) => state.join);
  const dispatch = useDispatch();
  // useState
  const [disable, setDisable] = useState(true);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  // birth
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [birth, setBirth] = useState(year + month + day);

  // 아이디
  const handleChangeId = (e) => setId(e.target.value);
  const emailCheck = (userName) => emailRegEx.test(userName);

  // 패스워드
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordCheck = (e) => setPasswordCheck(e.target.value);
  // 이름
  const handleChangeName = (e) => setName(e.target.value);
  // 성별
  const handleChangeMale = () => setGender('male');
  const handleChangeFemale = () => setGender('female');
  // 생일
  const handleChangeYear = (e) => setYear(e.target.value);
  const handleChangeMonth = (e) => setMonth(e.target.value);
  const handleChangeDay = (e) => setDay(e.target.value);

  const handleBirth = (i) => {
    if (i < 10) {
      return String(`0${i}`);
    }
    return String(i);
  };
  useEffect(() => {
    setBirth(Number(year + handleBirth(month) + handleBirth(day)));
  }, [year, month, day]);

  const Submit = async (e) => {
    e.preventDefault();
    setDisable(false);
    const body = {
      id,
      password,
      name,
      gender,
      birth,
    };
    try {
      await axios.post('https://stfe-gotogether.herokuapp.com/user/register', body);
      dispatch(joinUser(body));
      navigation('/keyword');
    } catch (err) {
      console.err('Error : ', err);
    }
  };

  return (
    <SignUpStyle>
      <div className="title">회원가입</div>
      <p className="name">이메일</p>
      <input
        type="text"
        className="input"
        placeholder="사용하실 이메일을 입력해주세요."
        value={id}
        onChange={handleChangeId}
        required
      />
      <p className="name">비밀번호</p>
      <input
        type="password"
        className="input"
        placeholder="사용하실 비밀번호를 입력해주세요."
        value={password}
        onChange={handleChangePassword}
        required
      />
      <input
        type="password"
        className="input"
        placeholder="사용하실 비밀번호를 재입력해주세요."
        value={passwordCheck}
        onChange={handleChangePasswordCheck}
      />
      <p className="name">이름</p>
      <input
        type="text"
        className="input"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={handleChangeName}
        required
      />
      <p className="name">생년월일</p>
      <select value={year} onChange={handleChangeYear}>
        <option value="1">년도</option>
        {Year.map((y) => (
          <option key={y.year} value={y.year}>
            {y.year}
          </option>
        ))}
      </select>
      <select className="select" value={month} onChange={handleChangeMonth} required>
        <option>월</option>
        {Month.map((m) => (
          <option key={m.month} value={m.month}>
            {m.month}
          </option>
        ))}
      </select>
      <select value={day} onChange={handleChangeDay} required>
        <option>일</option>
        {Day.map((m) => (
          <option key={m.day} value={m.day}>
            {m.day}
          </option>
        ))}
      </select>
      <p className="name">성별</p>
      <div>
        <label htmlFor="male" className="gender">
          <input type="radio" id="male" className="type" name="gender" value={gender} onClick={handleChangeMale} />
          <span>남성</span>
        </label>
        <label htmlFor="female" className="gender">
          <input type="radio" id="female" className="type" name="gender" value={gender} onClick={handleChangeFemale} />
          <span>여성</span>
        </label>
      </div>
      <p className="i">
        고투게더 <Link to="/">이용약관</Link> 확인하기
      </p>
      <button type="button" onClick={Submit}>
        회원가입
      </button>
    </SignUpStyle>
  );
};

export default SignUpBox;
