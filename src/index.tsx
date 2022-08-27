import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = <h1>Hello world</h1>

function App() {
  return (
    <div>
      {h1}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odio et deleniti impedit quae eos tempora voluptatem, ipsam officia laborum dolor quo vel quasi consequuntur sint nisi placeat? Consectetur, obcaecati?</p>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);
