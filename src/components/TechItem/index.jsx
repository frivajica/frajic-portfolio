import './TechItem.scss'

export const TechItem = ({ data }) => {
  return (
    <div className="tech-item" style={{ color: data.color }}>
      {data.icon}
    </div>
  );
};
