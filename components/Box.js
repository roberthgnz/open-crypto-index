import styles from "./Box.module.css";

export default function Box({ length, title, items, loading }) {
  if (loading) {
    return (
      <article>
        <h2 className={styles.placeholderTitle}>
          <div className={styles.activity}></div>
        </h2>
        <div className={styles.grid}>
          {Array.from({ length }).map((_, i) => (
            <div key={i} className={styles.placeholderCard}></div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {(items || []).map((asset) => (
          <div className={styles.card} key={asset.name}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginLeft: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                <strong>{asset.symbol}</strong>
                <div>{asset.name}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.indexHoldBar}>
              <div
                style={{
                  width: `${asset.weight}%`,
                  backgroundColor: "#7332ff",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                justifySelf: "flex-end",
                textAlign: "right",
              }}
            >
              <span>WEIGHT</span>
              <span>{asset.weight}%</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
