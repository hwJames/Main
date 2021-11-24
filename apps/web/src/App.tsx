import React, {
  useState,
  useEffect,
  useCallback,
  WheelEvent,
  KeyboardEvent,
} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Carousel, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

const App: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  const pageCnt = 5;
  const [page, setPage] = useState(0);
  const [color, setColor] = useState('black');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [portfolio, setPortfolio] = useState([]);

  const renderTooltip = ({ text, ...props }: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

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

        {/* Skill */}
        <section className="skill-wrap white">
          <div className="black-wrap center">
            <div className="wrap">
              <div className="skill-f1">Skill</div>
              <div className="skill-f2">
                <div className="mt10px">Fontend</div>
                <div className="mt5px">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({ text: 'HTML5를 다룰줄 압니다' })}
                  >
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: '간단한 정렬, 수정을 해본적이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'jQuery 를 활용한 데이터 처리, 이벤트 처리를 할 수 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white" />
                  </OverlayTrigger>
                </div>

                <div className="mt10px">Backend</div>
                <div className="mt5px">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'NestJS를 활용한 프로젝트를 진행한 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'CI4 프로젝트에 참여한 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/CI4-EF4223?style=for-the-badge&logo=CodeIgniter&logoColor=white" />
                  </OverlayTrigger>
                </div>

                <div className="mt10px">Mobile</div>
                <div className="mt5px">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'MVC, MVVM 패턴의 앱을 제작한 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=Android&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'React Native 를 사용한 앱을 제작한 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
                  </OverlayTrigger>
                </div>

                <div className="mt10px">DevOps</div>
                <div className="mt5px">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'Github Actions를 활용한 서비스 배포 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'Docker를 활용한 서비스 배포 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'K3S를 활용한 무중단 서비스 배포 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/K3S-326CE5?style=for-the-badge&logo=Kubernetes&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'Bitrise를 활용한 Android 앱 자동 배포 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/Bitrise-683D87?style=for-the-badge&logo=Bitrise&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'Fastlane를 활용한 iOS(RN) 자동 배포 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/Fastlane-00F200?style=for-the-badge&logo=Fastlane&logoColor=white" />
                  </OverlayTrigger>
                </div>

                <div className="mt10px">VSC</div>
                <div className="mt5px">
                  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white" />
                  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white" />
                  <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=white" />
                </div>

                <div className="mt10px">Server</div>
                <div className="mt5px">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: 'AWS(EC2) 를 통한 서버 구축 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white" />
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip({
                      text: '라즈베리파이를 통한 개인 서버 구축 경험이 있습니다.',
                    })}
                  >
                    <img src="https://img.shields.io/badge/Raspberry Pi-A22846?style=for-the-badge&logo=Raspberry Pi&logoColor=white" />
                  </OverlayTrigger>
                </div>

                <div className="mt10px">DB</div>
                <div className="mt5px">
                  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" />
                  <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" />
                  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section>
          <div className="wrap">
            <div className="portfolio-f1">Portfolio</div>
            {portfolio && portfolio.length > 0 ? (
              <Carousel variant="dark" className="-f2">
                {portfolio.map((data, index) => {
                  return (
                    <Carousel.Item
                      className="portfolio-f2"
                      key={`portfolio_${index}`}
                    >
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <div className="portfolio-f3 center">
                등록된 포트폴리오가 없습니다.
              </div>
            )}
          </div>
        </section>

        {/* Contact */}
        <section className="contact-wrap white">
          <div className="black-wrap center">
            <div className="wrap">
              <div className="contact-f1">Contact Me</div>
              <div className="contact-f2">선생님들 연락주세요 :)</div>
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
