import { staticInfo } from "src/assets/staticInfo";
import goodWork from "src/assets/images/good_work.svg";

export const IntroductionInfo = () => {
  return (
    <div id="introduction-info">
      <div className="name-and-position">
        <h1>Francisco Jiménez</h1>
        <h3>{staticInfo.position}</h3>
      </div>
      <div className="introduction-paragraphs">
        <p>{staticInfo.greeting}</p>
        {staticInfo.presentation.map((e) => (
          <p key={e.paragraph}>{e.text}</p>
        ))}
        <button id="download-resume-btn">Download Resume</button>
      </div>
      <img src={goodWork} alt="Good work" />
    </div>
  );
};
