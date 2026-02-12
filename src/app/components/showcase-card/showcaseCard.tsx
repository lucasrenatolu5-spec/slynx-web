'use client';

import { useState } from 'react';
import styles from './showcaseCard.module.css';

export interface Tab {
  title: string;
  description: string;
}

export interface ShowcaseCardData {
  tabs: Tab[];
}

interface ShowcaseProps {
  cards: ShowcaseCardData[];
}

export default function Showcase({ cards }: ShowcaseProps) {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Card key={index} tabs={card.tabs} />
        ))}
      </div>
    </section>
  );
}

function Card({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.viewport}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {tabs.map((tab, index) => (
            <div key={index} className={styles.slide}>
              <h3 className={styles.title}>{tab.title}</h3>
              <p className={styles.description}>{tab.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.tabs}>
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`${styles.dot} ${
              index === active ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
