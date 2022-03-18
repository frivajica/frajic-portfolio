import waveTransition from 'src/assets/images/transition.svg';
import { IntroductionInfo } from 'src/components/IntroductionInfo';
import './Introduction.scss'

export const Introduction = () => {
	return(
		<div id='introduction'>
			<IntroductionInfo />
			<div className='transition'>
				<img src={waveTransition} alt="trasition" />
			</div>
		</div>
	);
};