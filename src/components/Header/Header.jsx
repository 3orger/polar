import { Button } from '../Button/Button'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.scss'

export const Header = ({ data }) => {
  return (
    <header className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <img className={styles.logo} src='/images/logo.png' alt='Polar' />
          <Navigation menu={data.menu} />
          <Button>{data.button.text}</Button>
        </div>
      </div>
    </header>
  )
}
