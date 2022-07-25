import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SignInStyle } from 'style/signStyle/SignStyle';
import { loginUser } from 'store/userSlice';

import { ReactComponent as Apple } from 'img/Apple.svg';
import { ReactComponent as Naver } from 'img/Naver.svg';
import { ReactComponent as Kakao } from 'img/Kakao.svg';

const SignInBox = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.user);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = (e) => setId(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  const get = async (body) => {
    try {
      const res = await axios.post('https://stfe-gotogether.herokuapp.com/user/login', body);
      dispatch(loginUser(body));
      localStorage.setItem('token', JSON.stringify({ token: res.data.userInfo.token }));
      navigation('/');
    } catch (err) {
      console.error(err);
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    const body = {
      id,
      password,
      isLogin: USER.isLogin,
    };
    get(body);
  };

  return (
    <SignInStyle>
      <span className="title">로그인</span>
      <p className="sub-title">고투게더에 오신 것을 환영합니다!</p>

      <div className="container">
        <form className="box" onSubmit={Submit}>
          <span className="log-in">고투게더 로그인</span>
          <input
            type="text"
            className="input"
            placeholder="이메일을 입력해주세요."
            name="id"
            value={id}
            onChange={handleChangeId}
          />
          <input
            type="password"
            className="input"
            placeholder="비밀번호를 입력해주세요."
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button type="submit" className="btn">
            로그인
          </button>

          <p className="sign-up">
            고투게더가 처음이신가요? 고투게더에 <Link to="/signup">회원가입</Link>해보세요!
          </p>
        </form>

        <div className="box">
          <span className="log-in">SNS 로그인</span>
          <button type="button" className="sub-log-in">
            <p>
              <Apple />
              <p>애플 아이디로 시작하기</p>
            </p>
          </button>
          <button type="button" className="sub-log-in">
            <p>
              <Kakao />
              <p>카카오 아이디로 시작하기</p>
            </p>
          </button>
          <button type="button" className="sub-log-in">
            <p>
              <Naver />
              <p>네이버 아이디로 시작하기</p>
            </p>
          </button>
          <p className="sign-up">
            고투게더에서 <span>나의 성향과 맞는 동행자</span>를 만나보세요!
          </p>
        </div>
      </div>
    </SignInStyle>
  );
};

export default SignInBox;
