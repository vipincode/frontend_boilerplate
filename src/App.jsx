import { Global } from '@emotion/react';
import { resetStyle } from './styles/globals';
import { mainWrapper } from './styles/layout';
import { h1 } from './styles/typography';
import { Button } from './styles/button';

function App() {
  return (
    <>
      <Global styles={resetStyle} />
      <div css={mainWrapper}>
        <main>
          <h1 css={h1}>Proshop App</h1>
          <h2>Hello there</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            reprehenderit ducimus pariatur. Aperiam mollitia sint at? Assumenda
            eos ab expedita praesentium! Illum quaerat pariatur placeat, odio
            repellendus hic. Quam, delectus!
          </p>
          <a href="#">Hi there</a>
          <Button type="button">Contact us</Button>
        </main>
      </div>
    </>
  );
}

export default App;
