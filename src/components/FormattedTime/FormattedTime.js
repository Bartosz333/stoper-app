import styles from './FormattedTime.module.scss';

const FormattedTime = (props) => {
  const hours = ('0' + Math.floor((props.time / 360000) % 24)).slice(-2) + ':';
  const minutes = ('0' + Math.floor((props.time / 6000) % 60)).slice(-2) + ':';
  const seconds = ('0' + Math.floor((props.time / 100) % 60)).slice(-2) + '.';
  const milliseconds = ('0' + ((props.time / 0.1) % 1000)).slice(-3);

  return (
    <div className={styles.timer}>
      <p>
        {hours}
        {minutes}
        {seconds}
        <span>{milliseconds}</span>
      </p>
    </div>
  );
};

export default FormattedTime;
