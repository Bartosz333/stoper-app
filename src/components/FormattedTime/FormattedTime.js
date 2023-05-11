import { format } from 'date-fns';
import styles from './FormattedTime.module.scss'

const FormattedTime = ({ time }) => {
  const formattedTime = format(new Date(time), 'HH:mm:ss.SSS');
  return <div className={styles.timer}>{formattedTime}</div>;
};



export default FormattedTime;