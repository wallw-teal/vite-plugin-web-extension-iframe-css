import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import Frame from 'react-frame-component';

const style = document.createElement('style');

// This is obviously kinda dumb from a UX perspective, but just so we
// can see both
const css = `
#extension-iframe {
  width: 300px;
  height: 400px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 111111;
}
`;

style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Frame
      id="extension-iframe"
      head={[
        <link
          key="1"
          rel="stylesheet"
          href={chrome.runtime.getURL('style.css')}
        ></link>,
      ]}
    >
      <App />
    </Frame>
  </React.StrictMode>
);
