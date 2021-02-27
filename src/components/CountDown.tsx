import { useState, useEffect, useContext } from 'react';

//impotando e com erro aqui
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CountDown.module.css';

let countDownTimeout: NodeJS.Timeout;
//erro na linha 15

export function CountDown() {

   const { startNewChallenge } = useContext(ChallengesContext);

   const [time, setTime] = useState(0.1 * 60);
   const [isActive, setIsActive] = useState(false);
   const [hasFinished, setHasFinished] = useState(false);

   // tempo do relogio contados dado em minutos X segundos
   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   function startCountDown() {
      setIsActive(true);
   }

   // resetar para os 25 novamente!
   function resetCountDown() {
      clearTimeout(countDownTimeout);
      setIsActive(false)
      setTime(0.1 * 60)
   }

   useEffect(() => {
      if (isActive === true && time > 0) {
         countDownTimeout = setTimeout(() => {
            setTime(time - 1)
         }, 1000);
      }
      else if (isActive && time === 0) {
         setHasFinished(true);
         setIsActive(false);
         startNewChallenge();

      }
   }, [isActive, time])


   return (
      <div>

         <div className={styles.countDownContainer}>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>

            <span>:</span>

            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>

         </div>

         { hasFinished ?
            (
               <button
                  disabled
                  type="button"
                  className={styles.countDownButton}
                  onClick={resetCountDown}>
                  Ciclo Encerrado
               </button>
            ) : (
               <>
                  {isActive ? (
                     <button type="button"
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}

                        onClick={resetCountDown}>
                        Reset Ciclo
                     </button>
                  )

                     :

                     (
                        <button type="button"
                           className={styles.countDownButton}
                           onClick={startCountDown}>
                           Start Cico
                        </button>
                     )
                  }
               </>
            )}

      </div>
   )
}