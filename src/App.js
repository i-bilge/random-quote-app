import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Quote from './components/Quote';
import quotes from './data';

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const max = quotes.length - 1; 
    let newIndex = Math.floor(Math.random()*(max-0))
    setQuote(quotes[newIndex]);
  }

  return (
    <div className="App">
      <Card>
        <Quote quote={ quote} />
      </Card>
      <Button onClick={ randomQuote} />
    </div>
  );
}

export default App;
