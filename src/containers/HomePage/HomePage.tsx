import React from 'react';
import Card from '../../components/Card';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App-home">
      <Card>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Card>
    </div>
  );
}

export default HomePage;
