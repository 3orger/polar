import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './Layout.module.scss'

export const Layout = ({ data, children }) => {
  return (
    <>
      <Header data={data.header} />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </>
  )
}
