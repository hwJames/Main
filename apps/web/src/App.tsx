import React, {
  useState,
  useEffect,
  useCallback,
  WheelEvent,
  KeyboardEvent,
} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

const App: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  const pageCnt = 5;
  const [page, setPage] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    window.scroll({ top: page * window.innerHeight, behavior: 'smooth' });
  }, [page]);

  const pageUp = useCallback(() => {
    if (page > 0) {
      setPage(page - 1);
    }

    if (page > 4 || page === 3) {
      setColor('white');
    } else {
      setColor('black');
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

    if (page >= 3 || page === 1) {
      setColor('white');
    } else {
      setColor('black');
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
      className="container-custom"
      onWheel={onWheelEvent}
      tabIndex={0}
      onKeyDown={onKeyDownEvent}
    >
      <header
        className={color}
        style={{
          transition: 'all 0.8s ease',
          WebkitTransition: 'all 0.8s ease',
          MozTransition: 'all 0.8s ease',
        }}
      >
        <div className="header-f1">hwJames</div>
        <div className="header-f2 ml5">+82 10-4509-8036</div>
        <div className="header-f2 ml1">/</div>
        <div className="header-f2 ml1">hwjameshw@naver.com</div>
      </header>

      <article>
        {/* Home */}
        <section>
          <div className="wrap">
            <div className="home-f1">JIHOON KIM</div>
            <div className="home-f2">
              Hello World! <br />
              I&apos;m Developer
            </div>
          </div>
        </section>

        {/* Resume */}
        <section>
          <div className="wrap">
            <div className="resume-f1">Resume</div>
            <div className="resume-f2 mt1">Education</div>
            <hr />
            <div className="resume-wrap1">
              <div className="f2">2020.02 ~</div>
              <div className="f2">
                한국방송통신대학교
                <br />
                <div className="resume-f3">- 컴퓨터과학과</div>
              </div>
              <div className="br" />
              <div className="f2">2017.02 ~ 2020.02</div>
              <div className="f2">
                상일미디어고등학교
                <br />
                <div className="resume-f3">- 스마트소프트웨어과</div>
              </div>
            </div>
            <hr />
            <div className="resume-f2 mt1">Experience</div>
            <hr />
            <div className="resume-wrap2">
              <div className="f2">2020.02 ~</div>
              <div className="f2">
                피플벤처스
                <br />
                <div className="resume-f3">- Android / Web / RN Developer</div>
              </div>
              <div className="f4 ml20px">
                <div>
                  홍카페GO, 보이스프렌즈
                  <span className="resume-f3 ml5px">
                    (Android - Java, Kotlin)
                  </span>
                </div>
                <div className="resume-f4">MVVM + AAC 기반 네이티브앱 개발</div>

                <div className="mt10px">
                  홍카페, 홍스토어, MMA
                  <span className="resume-f3 ml5px">(CI4)</span>
                </div>
                <div className="resume-f4">
                  MVC 기반 서비스단, 어드민단 개발
                </div>

                <div className="mt10px">
                  보이스프렌즈2
                  <span className="resume-f3 ml5px">(React Native, CI4)</span>
                </div>
                <div className="resume-f4">API 개발 및 공통 컴포넌트 개발</div>
              </div>
            </div>
            <hr />
          </div>
        </section>

        {/* Stack */}
        <section className="stack-wrap white">
          <div className="black-wrap center">
            <div className="wrap">
              <div className="stack-f1">Stack</div>

              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="portfolio-wrap">
          <div className="wrap">
            <div className="portfolio-f1">Portfolio</div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-wrap white">
          <div className="black-wrap center">
            <div className="wrap">
              <div className="contact-f1">Contact Me</div>
              <div className="contact-f2">선생님들 연락주세요 :)</div>
              <Button className="mt1">연락주세요 ^^7</Button>
            </div>
          </div>
        </section>
      </article>
      <footer
        className={color}
        style={{
          transition: 'all 0.8s ease',
          WebkitTransition: 'all 0.8s ease',
          MozTransition: 'all 0.8s ease',
        }}
      >
        © 2021 JIHOON KIM
        <br />
        ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;
