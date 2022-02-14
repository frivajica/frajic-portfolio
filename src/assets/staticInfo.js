import { SiJavascript, SiExpress, SiRedux, SiPostgresql, SiMocha, SiSequelize, SiStyledcomponents, SiPassport } from "react-icons/si";
import { GrReactjs, GrMysql, GrArchlinux } from "react-icons/gr";
import { FaNodeJs, FaDatabase } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { DiScrum, DiSass, DiCss3, DiHtml5, DiNpm } from "react-icons/di";

export const tech = [
	{id: 1, name: "JavaScript", icon: <SiJavascript size="100%" />, color: "#f7e018"},
	{id: 2, name: "ReactJs", icon: <GrReactjs size="100%" />, color: "#5ccfee"},
	{id: 3, name: "NodeJs", icon: <FaNodeJs size="100%" />, color: "#62965e"},
	{id: 4, name: "ExpressJs", icon: <SiExpress size="100%" />},
	{id: 5, name: "Redux", icon: <SiRedux size="100%" />, color: "#7045b1"},
	{id: 6, name: "GitHub", icon: <BsGithub size="100%" />, color: "#171515"},
	{id: 7, name: "SQL", icon: <FaDatabase size="100%" />, color: "#006dbc"},
	{id: 8, name: "MySQL", icon: <GrMysql size="100%" />, color: "#005c84"},
	{id: 9, name: "PostgreSQL", icon: <SiPostgresql size="100%" />, color: "#2a5d8f"},
	{id: 10, name: "Mocha", icon: <SiMocha size="100%" />, color: "#8d6748"},
	{id: 11, name: "Sequelize", icon: <SiSequelize size="100%" />, color: "#2173b3"},
	{id: 12, name: "ArchLinux", icon: <GrArchlinux size="100%" />, color: "#118ecb"},
	{id: 13, name: "SCRUM", icon: <DiScrum size="100%" />, color: "#0195d4"},
	{id: 14, name: "Sass", icon: <DiSass size="100%" />, color: "#cf649a"},
	{id: 15, name: "CSS", icon: <DiCss3 size="100%" />, color: "#0098d8"},
	{id: 16, name: "HTML", icon: <DiHtml5 size="100%" />, color: "#e35d21"},
	{id: 17, name: "Styled Components", icon: <SiStyledcomponents size="100%" />, color: "#cd6da8"},
	{id: 18, name: "npm", icon: <DiNpm size="100%" />, color: "#c23535"},
	{id: 19, name: "PassportJs", icon: <SiPassport size="100%" />, color: "#171515"},
];

export const staticInfo = {
	position: "Full Stack Developer",
	greeting: "Hi! I'm Francisco and I'm a Full Stack Developer.",
	presentation: [
		{
			paragraph: 1, 
			text: "Discovering more efficient ways to do things, building solutions and giving everything an aesthetic look are some of my favourite parts of the job.",
		}, 
		{
			paragraph: 2, 
			text: "I specialize in ReactJs and NodeJs and love working on both sides. Also, given my Data Analysis background, I have strong understanding of relational databases and solid experience on SQL querying.",
		},
		{
			paragraph: 3, 
			text: "",
		},
	],
	meetFran: [
		{
			paragraph: 1, 
			text: "I discovered a special joy for programming after working as a Data Analyst in the food industry.", 
		},
		{
			paragraph: 2, 
			text: "I love building software that helps other work more comfortably and efficiently."
		}, 
		{
			paragraph: 3, 
			text: "One of the most important side effects of being curious is that you end up learning something, even if you're not even trying, so I enjoy it as my natural way to be."
		},
		{
			paragraph: 4, 
			text: "My core stack involves React, but at this moment I'm also interested on learning Ruby on Rails and Python.", 
		},
	],
};