import React from 'react';
import './App.css';

import Ball from './components/Ball';
import Button from './components/Button';
import Quote from './components/Quote';
import Notice from './components/Notice';

const App = () =>
        <div>
          <Ball />
          <Button new="123">Click me!</Button>
          <Notice>
            Test notice... annusha uje razlila maslo!
          </Notice>
          <Quote>Woooaa, this is so cool!!!</Quote>
        </div>;

export default App;
