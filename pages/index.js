import Head from "next/head";
import { useFetch } from "../hooks/useFetch";

import styles from "../styles/Home.module.css";

import Box from "../components/Box";

export default function Home() {
  const [oci5, loadingOci5] = useFetch("/api/rebalance?index=5");

  const [oci10, loadingOci10] = useFetch("/api/rebalance?index=10");

  const [oci25, loadingOci25] = useFetch("/api/rebalance?index=25");

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
            <Box title={"OCI5"} length={5} items={oci5} loading={loadingOci5} />
            <Box
              title={"OCI10"}
              length={10}
              items={oci10}
              loading={loadingOci10}
            />
            <Box
              title={"OCI25"}
              length={25}
              items={oci25}
              loading={loadingOci25}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
