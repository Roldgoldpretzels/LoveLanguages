import { useEffect, useState } from 'react';
import { LANGUAGES } from '../data/questions';
import { PixelArt } from './PixelArt';
import { ICON_ROWS, ICON_PALETTES } from '../data/sprites';
import styles from './ResultsScreen.module.css';

// Max score any language can reach given 50 questions / 10 pairs / 5 each
const MAX_SCORE = 20;

export default function ResultsScreen({ scores, onRestart }) {
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBarsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Sort languages by score descending
  const ranked = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const [primaryKey] = ranked[0];
  const primary = LANGUAGES[primaryKey];

  return (
    <div className={styles.wrapper + ' fade-in'}>
      <div className={styles.panel}>
        <div className={styles.completeTag}>★ QUEST COMPLETE ★</div>

        {/* Primary language icon */}
        <div className={styles.heroRow}>
          <div className={`${styles.iconFrame} float`} style={{ borderColor: primary.color }}>
            <PixelArt
              rows={ICON_ROWS[primaryKey]}
              palette={ICON_PALETTES[primaryKey]}
              scale={4}
            />
          </div>
        </div>

        <div className={styles.primarySection}>
          <p className={styles.primaryLabel}>YOUR LOVE LANGUAGE</p>
          <div className={styles.primaryName} style={{ color: primary.color }}>
            {primary.name.toUpperCase()}
          </div>
          <p className={styles.description}>{primary.description}</p>
        </div>

        <div className={styles.divider} />

        <p className={styles.statsLabel}>HEART STATS</p>

        <div className={styles.stats}>
          {ranked.map(([key, score]) => {
            const lang = LANGUAGES[key];
            const pct = barsVisible ? (score / MAX_SCORE) * 100 : 0;
            const isPrimary = key === primaryKey;
            return (
              <div key={key} className={`${styles.statRow} ${isPrimary ? styles.statPrimary : ''}`}>
                <span className={styles.statName}>{lang.short}</span>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{
                      width: `${pct}%`,
                      background: lang.color,
                      transition: barsVisible ? 'width 0.8s cubic-bezier(0.25,1,0.5,1)' : 'none',
                    }}
                  />
                </div>
                <span className={styles.statScore}>{score}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.divider} />

        <button className={styles.restartBtn} onClick={onRestart}>
          <span className={'blink'}>▶</span>&nbsp;PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
