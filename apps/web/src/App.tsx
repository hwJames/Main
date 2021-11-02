import React, { useState } from 'react';
import './App.css';

enum ContentType {
  MAIN = 'MAIN',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
}

const App: React.FC = () => {
  const [type, setType] = useState(ContentType.MAIN);

  return (
    <div className="container">
      <div className="wrap">
        <aside className="side"></aside>
        <section className="content-wrap">
          <article
            className={type === ContentType.MAIN ? 'content show' : 'content'}
          >
            MAIN
          </article>
          <article
            className={type === ContentType.ABOUT ? 'content show' : 'content'}
          >
            ABOUT
          </article>
          <article
            className={
              type === ContentType.CONTACT ? 'content show' : 'content'
            }
          >
            CONTACT
          </article>
        </section>
      </div>
    </div>
  );
};

export default App;
