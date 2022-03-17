import React from "react";

export interface IGameCardProps {
  children: React.ReactNode;
  src: string;
}

function GameCard(props: IGameCardProps) {
  const { children, src } = props;

  return (
    <div className="game-card">
      <img className="game-card-image" src={src} />
      <div 
        style={{
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '14px',
          color: '#929292',
          textDecoration: 'underline',
        }}
      >
        {children}
      </div>
    </div>
  );
}


export default React.memo(GameCard);
