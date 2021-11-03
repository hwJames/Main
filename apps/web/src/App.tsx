import React, { useState, useEffect, WheelEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  const [overScroll, setOverScroll] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const pageCnt = 3;
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: page * window.innerHeight, behavior: 'smooth' });
  }, [page]);

  return (
    <div
      className="container"
      onWheel={(e: WheelEvent<HTMLDivElement>) => {
        if (!isScroll && e.deltaX === 0) {
          if (page > 0 && e.deltaY < 0) {
            setPage(page - 1);
            console.log('up');
          }
          if (page < pageCnt - 1 && e.deltaY > 0) {
            console.log('down');
            setPage(page + 1);
          }
          if (e.deltaY !== 0) {
            setIsScroll(true);

            setTimeout(() => {
              setIsScroll(false);
            }, 1000);
          }
        }
      }}
    >
      <div className="wrap">1</div>
      <div className="wrap">2</div>
      <div className="wrap">3</div>
    </div>
  );
};

export default App;
