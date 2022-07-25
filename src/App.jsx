import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
// page
import MainPage from 'page/main/MainPage';
import SearchPage from 'page/search/SearchPage';
import RecommendedListPage from 'page/list/RecommendedListPage';
import ThemeListPage from 'page/list/ThemeListPage';
import AreaListPage from 'page/list/AreaListPage';
import DetailPage from 'page/product/DetailPage';
import SignUpPage from 'page/sign/SignUpPage';
import KeywordPage from 'page/keyword/KeywordPage';
import MyPage from 'page/mypage/MyPage';
import GroupListPage from 'page/list/GroupListPage';
import LogInPage from 'page/sign/LogInPage';
import InformationPage from 'page/information/InformationPage';
import AddCartPage from 'page/addCart/AddCartPage';

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
      <Route path="/list/:productNum" element={<DetailPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/keyword" element={<KeywordPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/information" element={<InformationPage />} />
      <Route path="/addcart" element={<AddCartPage />} />
    </Routes>

    <Footer />
  </>
);

export default App;
