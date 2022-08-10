import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import LinkCard from '../components/LinkCard/LinkCard'
import Head from '../components/Head/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
    <Head title='Home'/>
    <Header />
    
    <div className={styles.container}>
   
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <LinkCard 
            href='https://nextjs.org/docs' 
            title='Documentation'
            text='Find in-depth information about Next.js features and API.' 
          />
          <LinkCard 
              href='https://nextjs.org/learn' 
              title='Learn'
              text='Learn about Next.js in an interactive course with quizzes!' 
          />
          <LinkCard 
              href='https://github.com/vercel/next.js/tree/canary/examples' 
              title='Examples'
              text='Discover and deploy boilerplate example Next.js projects.' 
          />
          <LinkCard 
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' 
              title='Deploy'
              text='Instantly deploy your Next.js site to a public URL with Vercel.' 
          />  
              
        </div>
      </main>
     
    </div>
    </>
  )
}

export default Home
