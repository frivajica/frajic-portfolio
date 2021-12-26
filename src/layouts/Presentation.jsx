import waveTransition from '../assets/transition.svg';
import { PresentationInfo } from '../components/PresentationInfo';

export const Presentation = () => {
	return(
		<div id='presentation'>
			<PresentationInfo />
			<div className='transition'>
				<img src={waveTransition} alt="trasition" />
			</div>
		</div>
	);
};