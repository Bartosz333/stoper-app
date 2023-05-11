import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button className={styles.btn} onClick={props.action}>{props.childern}</button>
    );
};

export default Button;