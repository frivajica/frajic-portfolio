import React from 'react';
import { ImageSlider } from 'src/components/ImageSlider';
import './Projects.scss'

export const Projects: React.FC = () => {
	return(
		<div id='projects'>
			<div>
				<h2>Projects</h2>
				<ImageSlider />
			</div>
		</div>
	);
};