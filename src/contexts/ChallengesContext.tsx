import { createContext, useState, ReactNode } from 'react';

import challenges from '../../challenges.json';


interface Challenge {
   type: string;
   description: string;
   amount: number;
}

interface ChallengesContextData {
   level: number;
   currentExperience: number;
   activeChallenge: Challenge;
   challengesCompleted: number;
   levelUp: () => void;
   startNewChallenge: () => void;
}


interface ChallengesProvidesProps {
   children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProvidesProps) {

   const [level, setLevel] = useState(1);

   const [currentExperience, setCurrentExperience] = useState(0);

   const [challengesCompleted, setChallengesCompleted] = useState(0);

   const [activeChallenge, setActiveChallenge] = useState(null);

   function levelUp() {
      setLevel(level + 1);
   }

   function startNewChallenge() {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge()
   }

   return (
      <ChallengesContext.Provider value={{
         level,
         currentExperience,
         challengesCompleted,
         levelUp,
         startNewChallenge,
         activeChallenge
      }}>
         {children}
      </ChallengesContext.Provider >
   )

}
