import Link from "next/link";
import styles from "../styles/SocialLinks.module.css";
import LinkedIn from "../svgs/LinkedIn";
import Twitter from "../svgs/Twitter";
import Instagram from "../svgs/Instagram";
import Icon from "./Icon";
import Email from "../svgs/Email";

const data = [
  "https://twitter.com/pacchyaaa/",
  "https://linkedin.com/in/Prashant-SL",
  "https://www.instagram.com/pacchyaaa/",
  "mailto:prashantslxmath@gmail.com",
];

export default function SocialLinks() {
  function getIcon(i) {
    let icons = [
      <Twitter key={i} />,
      <LinkedIn key={i} />,
      <Instagram key={i} />,
      <Email key={i} />,
    ];
    return icons[i];
  }

  return (
    <div className={`${styles.icons} sideFadeBottom`} style={{ "--delay": 15 }}>
      {data.map((each, i) => (
        <Link key={each} href={each} passHref>
          <a target={"_blank"}>
            <Icon>{getIcon(i)}</Icon>
          </a>
        </Link>
      ))}
    </div>
  );
}
