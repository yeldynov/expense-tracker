import AddTransaction from '@/components/AddTransaction'
import Balance from '@/components/Balance'
import Guest from '@/components/Guest'
import IncomeExpense from '@/components/IncomeExpense'
import TransactionList from '@/components/TransactionList'
import { currentUser } from '@clerk/nextjs/server'

const HomePage = async () => {
  const user = await currentUser()
  console.log(user)

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h2>
        Welcome,{' '}
        {user.firstName || user.emailAddresses[0].emailAddress.split('@')[0]}{' '}
      </h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  )
}

export default HomePage
