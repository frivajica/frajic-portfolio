import React from 'react';
import { tech } from "src/assets/staticInfo";
import { TechItem } from "src/components/TechItem";
import './Technologies.scss';

export const Technologies: React.FC = () => {
	return(
		<div id='technologies'>
			<h2>Skills & Technologies</h2>
			<div className='tech-container'>
				{tech?.map( e =>  <TechItem key={e.id} data={e}/>)}
			</div>
		</div>
	);
};