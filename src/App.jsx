import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Header from './components/Header';
import Footer from './components/Footer';
// page
import MainPage from './page/main/MainPage';
import SearchPage from './page/search/SearchPage';
import ListPage from './page/list/ListPage';
import DetailPage from './page/detail/DetailPage';
import LogInPage from './page/sign/LogInPage';
import SignUpPage from './page/sign/SignUpPage';
import MyPage from './page/mypage/MyPage';
import KeywordPage from './page/keyword/KeywordPage';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/list" element={<ListPage />} />
				<Route path="/list/:id" element={<DetailPage />} />
				<Route path="/login" element={<LogInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/keyword" element={<KeywordPage />} />
				<Route path="/mypage" element={<MyPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
