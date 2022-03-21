import React from 'react';
import './TechItem.scss';

type TechItemProps = {
  data: {
    id: number;
    name: string;
    icon: any;
    color?: any;
  };
}

export const TechItem: React.FC<TechItemProps> = ({ data }) => {
  return (
    <div className="tech-item" style={{ color: data.color }}>
      {data.icon}
    </div>
  );
};
