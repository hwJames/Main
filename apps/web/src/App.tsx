import React, { useState, useEffect, WheelEvent } from 'react';
import './assets/css/App.css';

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
      <header>Header</header>
      <article>
        <section>1</section>
        <section>2</section>
        <section>3</section>
      </article>
      <footer>
        © 2021 JIHOON KIM
        <br />
        ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;
