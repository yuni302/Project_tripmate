import React, { useState } from 'react';
import { MainTitle, ButtonGroup, CardList, Box } from '../../../style/GroupStyle';
import GroupFilter from './GroupFilter';

function Group() {
	const [content, setContent] = useState('2030');

	const btnValue = (e) => {
		const {
			target: { name },
		} = e;
		if (name === '2030') {
			setContent('2030');
		} else if (name === '4050') {
			setContent('4050');
		} else if (name === '6070') {
			setContent('6070');
		} else if (name === '여자끼리') {
			setContent('여자끼리');
		} else if (name === '남자끼리') {
			setContent('남자끼리');
		} else if (name === '자녀동반') {
			setContent('자녀동반');
		}
	};

	return (
		<>
			<MainTitle>고투게더가 추천하는 그룹별 상품이에요</MainTitle>
			<Box>
				<ButtonGroup>
					<button
						type="button"
						onClick={btnValue}
						style={{ background: content === '2030' && '#0080C6', color: content === '2030' && '#ffffff' }}
						name="2030"
					>
						2030끼리
					</button>
					<button
						type="button"
						onClick={btnValue}
						style={{ background: content === '4050' && '#0080C6', color: content === '4050' && '#ffffff' }}
						name="4050"
					>
						4050끼리
					</button>
					<button
						type="button"
						onClick={btnValue}
						style={{ background: content === '6070' && '#0080C6', color: content === '6070' && '#ffffff' }}
						name="6070"
					>
						6070끼리
					</button>
					<button
						type="button"
						onClick={btnValue}
						style={{ background: content === '여자끼리' && '#0080C6', color: content === '여자끼리' && '#ffffff' }}
						name="여자끼리"
					>
						여자끼리
					</button>
					<button
						type="button"
						onClick={btnValue}
						style={{ background: content === '남자끼리' && '#0080C6', color: content === '남자끼리' && '#ffffff' }}
						name="남자끼리"
					>
						남자끼리
					</button>
					<button
						type="button"
						onClick={btnValue}
						style={{ background: content === '자녀동반' && '#0080C6', color: content === '자녀동반' && '#ffffff' }}
						name="자녀동반"
					>
						자녀동반
					</button>
				</ButtonGroup>
				<CardList>
					<GroupFilter content={content} />
				</CardList>
			</Box>
		</>
	);
}

export default Group;
