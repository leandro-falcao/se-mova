import styles from '../styles/components/CompleteChallenges.module.css';

export function CompletChallenges(){
   return( 
      <div className={styles.completeChallengesContainer}>
         <span>desafios completos</span>
         <span>3</span>
      </div>
   );
}