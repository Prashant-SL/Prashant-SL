import styles from "../styles/Message.module.css";
import useOnScreen from "../utils/useOnScreen";
import data from "../public/metadata.json";
import Link from "next/link";
import GitHubBlue from "../svgs/GitHubBlue";
import EmailBlue from "../svgs/EmailBlue";
import LinkedInBlue from "../svgs/LinkedInBlue";
import TwitterBlue from "../svgs/TwitterBlue";
import PhoneBlue from "../svgs/PhoneBlue";

export default function Message() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });

  return (
    <>
      <div
        className={`${styles.message} ${visible && "fadeBottom"}`}
        style={{ "--delay": 5 }}
        ref={ref}
        id="message"
      >
        <div className={styles.wrapper}>
          <code>&#128172; Something in mind?</code>
          <h2>Contact me</h2>
          <p>
            I'm actively looking for any new opportunities, in
            frontend/full-stack web development. <br />
            Feel free to ping me anytime and I would reply back in under 29
            minutes(see, faster than Dominos). I would be grateful if you are
            here to hire me. See you in my inbox &#9996;&#65039;.
          </p>
          <div className={styles.divider}>
            <div className={styles.form}>
              <div className={styles.contactBox}>
                <PhoneBlue />
                <Link href={`tel:${data.phone_number}`}>
                  {data.phone_number}
                </Link>
              </div>
              <div className={styles.contactBox}>
                <GitHubBlue />
                <Link href={data.social[0].link}>
                  {data.social[0].username}
                </Link>
              </div>
              <div className={styles.contactBox}>
                <TwitterBlue />
                <Link href={data.social[1].link}>
                  {data.social[1].username}
                </Link>
              </div>
              <div className={styles.contactBox}>
                <LinkedInBlue />
                <Link href={data.social[2].link}>
                  {data.social[2].username}
                </Link>
              </div>
              <div className={styles.contactBox}>
                <EmailBlue />
                <Link href={data.social[4].link}>
                  {data.social[4].username}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
