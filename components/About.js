import styles from "../styles/About.module.css";
import createMarkup from "../utils/markup";
import useOnScreen from "../utils/useOnScreen";
import data from "../public/metadata";
import Img from "./Img";

export default function About() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  return (
    <div
      className={`${styles.about} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="about"
    >
      <div className={styles.intro}>
        <code>&#129299; Little bit</code>
        <h2>About Me</h2>
        {data.about.descriptions.map(
          (each, i) =>
            i < data.about.descriptions.length - 1 && (
              <p key={i} dangerouslySetInnerHTML={createMarkup(each)} />
            )
        )}
        <p>{data.about.descriptions[data.about.descriptions.length - 1]}</p>
        <p className={styles.listName}>
          Here are some of the technologies I can work on
        </p>
        <ul className={styles.list}>
          {data.about.skills.map((each, i) => (
            <li className={styles.item} key={i}>
              {each}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Img
          img={data.about.illustration}
          imgAlt={data.about.illustrationAlt}
          layout
          objectFit="contain"
        />
      </div>
    </div>
  );
}
