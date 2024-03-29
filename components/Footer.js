import Link from "next/link";
import styles from "../styles/Footer.module.css";
import LogoIcon from "./LogoIcon";
import Logo from "../svgs/Logo";
import data from "../public/metadata";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.links}>
          <div className={styles.section}>
            <code>Links</code>
            <ul>
              {data.navLinks.map(({ name, link }, i) => (
                <li key={i}>
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <code>Other</code>
            <ul>
              {data.footer.otherLinks.map(({ name, link }, i) => (
                <li key={i}>
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.lower}>
          <p>
            Designed & created by <Link href="/">{data.shortname}</Link> with 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
