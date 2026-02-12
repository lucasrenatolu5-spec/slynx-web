import NavBar from "./nav-bar/nav-bar"
import Icon from "@/app/components/icon";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        {/* TODO: add Slynx logo icon */}
        
        <h1 className={styles.title}>Slynx</h1>
      </div>

      <NavBar />

      <div className={styles.actions}>
        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:search-rounded" height={24} />
        </button>
        
        <button type="button" className={styles.getStartedBtn}>Get started</button>
        
        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:dark-mode-outline-rounded" height={24} />
        </button>
      </div>
    </header>
  )
}
