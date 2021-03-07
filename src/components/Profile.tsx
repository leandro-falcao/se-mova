import styles from '../styles/components/Profile.module.css';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/leandro-falcao.png"
        alt="Leandro Falcao"
      />
      <div>
        <strong>Leandro Falcao </strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
        </p>
      </div>
    </div>
  );
}
