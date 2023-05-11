import { useEffect, useState } from 'react';
import Container from './components/Container/Container';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Button from './components/Button/Button';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    clearInterval(timer);
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  };

  useEffect(() => {
    return () => {
       if (timer) {
        clearInterval(timer);
       }
    };
  }, [timer]);

  return(
    <Container>
      <FormattedTime time={time} />
      <Button start={start}>Start</Button>
      <Button stop={stop}>Stop</Button>
      <Button reset={reset}>Reset</Button>
    </Container>
  );
};

export default App;
