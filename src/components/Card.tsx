import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode; 
  bg: string; 
}

const Card: React.FC<CardProps> = ({ children, bg = '#b3cde0' }) => {
  return (
    <div style={{ backgroundColor: bg }} className="p-6 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;

{/*const Card = ({ children, bg = '#b3cde0' }) => {
  return (
    <div style={{backgroundColor:bg}}className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card*/}