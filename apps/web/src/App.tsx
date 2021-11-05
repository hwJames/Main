import React, {
  useState,
  useEffect,
  useCallback,
  WheelEvent,
  KeyboardEvent,
} from 'react';
import './assets/css/App.css';

const App: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  const pageCnt = 5;
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.scroll({ top: page * window.innerHeight, behavior: 'smooth' });
  }, [page]);

  const pageUp = useCallback(() => {
    if (page > 0) {
      setPage(page - 1);
    }

    setIsScroll(true);

    setTimeout(() => {
      setIsScroll(false);
    }, 1000);
  }, [page]);

  const pageDown = useCallback(() => {
    if (page < pageCnt - 1) {
      setPage(page + 1);
    }

    setIsScroll(true);

    setTimeout(() => {
      setIsScroll(false);
    }, 1000);
  }, [page]);

  const onWheelEvent = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      if (!isScroll && e.deltaX === 0) {
        if (e.deltaY < 0) {
          pageUp();
        }
        if (e.deltaY > 0) {
          pageDown();
        }
      }
    },
    [isScroll, pageUp, pageDown],
  );

  const onKeyDownEvent = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!isScroll) {
        if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
          pageUp();
        }
        if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
          pageDown();
        }
      }
    },
    [isScroll, pageUp, pageDown],
  );

  return (
    <div
      className="container"
      onWheel={onWheelEvent}
      tabIndex={0}
      onKeyDown={onKeyDownEvent}
    >
      <header>Header</header>
      <article>
        <section>HELLO WORLD</section>
        <section>ABOUT</section>
        <section>RESUME</section>
        <section>PORTFOLIO</section>
        <section>CONTACT US</section>
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
