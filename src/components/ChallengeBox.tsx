import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  const contextData = useContext(ChallengesContext);


  return (
    <div className={styles.ChallengeBoxContainer}>

      { activeChallenge ? (

        <div className={styles.challengeActive}>
          <header>{activeChallenge.amount} </header>


          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />

            <strong>novo desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>

            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              {contextData}-falhei
              </button>

            <button
              type="butto"
              className={styles.challengeSucceededButton}
            >
              completei
              </button>

          </footer>

        </div>
      )
        : (

          <div className={styles.ChallengeNotActive}>
            <strong>
              finalize um ciclo para receber um desafio
              </strong>
            <p>
              <img src="icons/level-up.svg" alt="level up" />
                avance de level completando desafios
              </p>
          </div>
        )
      }

    </div>
  );
}