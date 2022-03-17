import React from "react";

export interface ITextProps {
  children: React.ReactNode;
  size: number;
  display?: string;
  height: number;
  weight?: number;
  color: string;
  textDecoration?: string;
}

function Text(props: ITextProps) {
  const { children, size, height, weight = 400, color, textDecoration, display } = props;

  return (
    <div 
      style={{
        fontSize: size,
        fontWeight: weight,
        lineHeight: `${height}px`,
        color: color,
        textDecoration: textDecoration,
        display: display
      }}
    >
      {children}
    </div>
  );
}


export default React.memo(Text);
