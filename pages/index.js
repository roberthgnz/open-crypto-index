import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Box from "../components/Box";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [oci5, setOci5] = useState([]);
  const [oci10, setOci10] = useState([]);
  const [oci25, setOci25] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: oci5 } = await axios("/api/rebalance?index=5");
      setOci5(oci5);

      const { data: oci10 } = await axios("/api/rebalance?index=10");
      setOci10(oci10);

      const { data: oci25 } = await axios("/api/rebalance?index=25");
      setOci25(oci25);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Open Crypto Index</title>
        <meta name="description" content="Open Crypto Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section
          style={{
            textAlign: "center",
          }}
        >
          <h1 className={styles.title}>Open Crypto Index</h1>
          <p>Reflects the data calculated and provided by MVIS</p>
          <div className={styles.grid}>
            <Box title={"OCI5"} items={oci5} />
            <Box title={"OCI10"} items={oci10} />
            <Box title={"OCI25"} items={oci25} />
          </div>
        </section>
      </main>
    </div>
  );
}
