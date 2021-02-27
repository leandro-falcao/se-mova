import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';


import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';


export default function Home() {

  return(
    <div className={styles.container}>
      <Head>
        <title> mova se - inicio </title>
      </Head>

      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletChallenges />
          <CountDown />
        </div>
        

        <div>
          <ChallengeBox />
        </div>

      </section>
    </div>
  );
}


