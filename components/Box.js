import styles from "./Box.module.css";

export default function Box({ title, items }) {
  return (
    <article>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {items.map((asset) => (
          <div className={styles.card} key={asset.symbol}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/icons/${asset.symbol.toLowerCase()}.svg`}
                alt={asset.name}
                height={32}
              />
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
                  backgroundColor: "#999",
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
