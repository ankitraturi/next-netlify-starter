import styles from './Footer.module.css'

const currentdate = new Date();
const year = currentdate.getFullYear();

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        &copy; {year} ankitraturi.com
      </footer>
    </>
  )
}
