import { staticInfo } from "../assets/staticInfo";

export const IntroductionInfo = () => {
  return (
    <div id="introduction-info">
      <h1>Francisco Jiménez</h1>
      <h3>{staticInfo.position}</h3>
      <p>{staticInfo.greeting}</p>
        {staticInfo.presentation.map( e => <p key={e.paragraph}>{e.text}</p> )}
      <button id="download-resume-btn">Download Resume</button>
    </div>
  );
};