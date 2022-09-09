import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CreateBooking } from '../components/createBooking'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
        <CreateBooking />    

    </>
  )
}

export default Home
