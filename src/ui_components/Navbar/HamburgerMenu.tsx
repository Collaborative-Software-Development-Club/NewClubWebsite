import styles from './Navbar.module.css'

interface HamburgerMenuProps {
    isOpen: boolean;
    setIsOpen: React.MouseEventHandler<HTMLDivElement>
}

const HamburgerMenu = ({setIsOpen}: HamburgerMenuProps) => {
  return (
    <div className={styles.menu} onClick={setIsOpen}>
        <div className={styles.menuBar}></div>
        <div className={styles.menuBar}></div>
        <div className={styles.menuBar}></div>
    </div>
  )
}

export default HamburgerMenu