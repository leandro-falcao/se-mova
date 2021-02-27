import styles from '../styles/components/Profile.module.css';

export function Profile(){
   return(
      <div className={styles.profileContainer}>
         <img src="https://github.com/leandro-falcao.png" 
            alt="minha foto leandro" 
         />

         <div>
            <strong> leandro falcao</strong>
            <p>
               <img src="icons/level.svg" alt="icone level" />
               leval 1</p>
         </div>

      </div>
   );
}