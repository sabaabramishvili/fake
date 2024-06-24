'use client'
import styles from "./page.module.css";
import Products from "./Components/Products/Products";
import Filters from "./Components/Filters/Filters";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <>
          <Filters />
          <Products />
        </>
      </div>
    </main>
  );
}
