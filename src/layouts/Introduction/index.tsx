import React from 'react';
import waveTransition from 'src/assets/images/transition.svg';
import { IntroductionInfo } from 'src/components/IntroductionInfo';
import './Introduction.scss'

export const Introduction: React.FC = () => {
	return(
		<div id='introduction'>
			<IntroductionInfo />
			<div className='transition'>
				<img src={waveTransition} alt="trasition" />
			</div>
		</div>
	);
};