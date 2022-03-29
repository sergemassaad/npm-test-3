import React from 'react';

const Highlighter = ({ children }) => {
  return (
    <div className={'hoverHighlight'}>
      {children}
      <style jsx>
        {`
          .hoverHighlight {
            filter: brightness(1);
            background-color: red;
            transition: all 1s;
            width: 100%;
            height: 100%;
          }
          .hoverHighlight:hover {
            filter: brightness(1.5);
            transition: all 1s;
          }
        `}
      </style>
    </div>
  );
};
export default Highlighter;
