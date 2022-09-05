import styles from './App.module.scss'
import Cart1 from './component/Cart/Cart1'
import Cart2 from './component/Cart/Cart2'

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.cartBox}>
        <Cart1 />
        <Cart2 />
      </div>
    </div>
  )
}

export default App
