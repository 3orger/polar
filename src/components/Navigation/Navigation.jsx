/* eslint-disable react/prop-types */
import styles from './Navigation.module.scss'

export const Navigation = ({ menu }) => {
  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
