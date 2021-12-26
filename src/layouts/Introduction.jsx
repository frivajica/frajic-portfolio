import waveTransition from '../assets/transition.svg';
import { IntroductionInfo } from '../components/IntroductionInfo';

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