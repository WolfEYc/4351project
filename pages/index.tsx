import type { NextPage } from 'next'
import { CreateBooking } from '../components/createBooking'
import { CreateUser } from '../components/createUser'
import { DisplayUser } from '../components/displayUser'
import { GetBookings } from '../components/getBookings'
import { SetPoints } from '../components/setPoints'

const Home: NextPage = () => {
  return (
    <div>
        <CreateBooking />
        <br />
        <CreateUser />
        <br />
        <SetPoints />
        <br />
        <GetBookings />
        <br />
        <DisplayUser />
    </div>
  )
}

export default Home
