import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import MainPage from 'page/main/MainPage';
import SearchPage from 'page/search/SearchPage';
import RecommendedListPage from 'page/list/RecommendedListPage';
import ThemeListPage from 'page/list/ThemeListPage';
import AreaListPage from 'page/list/AreaListPage';
import DetailPage from 'page/product/DetailPage';
import SignUpPage from 'page/sign/SignUpPage';
import KeywordPage from 'page/keyword/KeywordPage';
import MyPage from 'page/mypage/MyPage';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import GroupListPage from 'page/list/GroupListPage';
import LogInPage from 'page/sign/LogInPage';
// page

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/recommendedlist" element={<RecommendedListPage />} />
      <Route path="/grouplist" element={<GroupListPage />} />
      <Route path="/themelist" element={<ThemeListPage />} />
      <Route path="/arealist" element={<AreaListPage />} />
      <Route path="/list/:id" element={<DetailPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/keyword" element={<KeywordPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>

    <Footer />
  </>
);

export default App;
