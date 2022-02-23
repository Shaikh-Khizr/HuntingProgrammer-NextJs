import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia et
          fugiat esse qui ipsam magni quod sunt quibusdam quaerat, eum, tenetur
          unde aliquid architecto sed cupiditate blanditiis. Eos, magnam eius.
        </div>
      </main>
    </div>
  );
};

export default slug;
