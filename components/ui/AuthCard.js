import styles from "./AuthCard.module.css";

function AuthCard(props) {
  return <div className={styles.authCard}>{props.children}</div>;
}

export default AuthCard;
