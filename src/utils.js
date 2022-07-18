// 콤마찍기
export const AddCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// 랜덤 카드 리스트
export const RandomSort = (array) => array.sort(() => Math.random() - 0.5);

// 그룹 한글 출력
export const groupList = (item) => {
  if (item === 'male') return '남자끼리';
  if (item === 'female') return '여자끼리';
  if (item === 'anyone') return '누구든지';
  if (item === 'family') return '자녀동반';
  return item;
};

// 테마 한글 출력
export const themeList = (item) => {
  if (item === 'culture') return '문화탐방';
  if (item === 'rest') return '휴양지';
  if (item === 'golf') return '골프';
  if (item === 'trek') return '트레킹';
  if (item === 'circuit') return '성지순례';
  return item;
};

// 패키지 한글 출력
export const styleList = (item) => {
  if (item === 'full') return '풀패키지';
  if (item === 'semi') return '세미패키지';
  if (item === 'bag') return '배낭패키지';
  return item;
};
