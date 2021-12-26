import waveTransition from '../assets/transition.svg';

export const Presentation = () => {
	return(
		<div id='presentation'>
			<div className='info'>

			</div>
			<div className='transition'>
				<img src={waveTransition} alt="trasition" />
			</div>
		</div>
	);
};