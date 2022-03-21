import React from 'react';
import { Technologies } from 'src/layouts/Technologies';
import { staticInfo } from "src/assets/staticInfo";
import './About.scss'

export const About: React.FC = () => {
	return(
		<div id='about'>
			<div id='meet-fran'>
				<h2>Meet Fran</h2>
				{staticInfo.meetFran.map( e => <p key={e.paragraph}>{e.text}</p>)}
			</div>
			<Technologies />
		</div>
	);
};