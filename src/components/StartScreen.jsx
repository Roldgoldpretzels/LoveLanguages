import styles from './StartScreen.module.css';

export default function StartScreen({ onStart }) {
  return (
    <div className={styles.wrapper + ' fade-in'}>
      <div className={styles.panel}>
        {/* Twinkling stars */}
        <div className={styles.stars} aria-hidden="true">
          {Array.from({ length: 24 }, (_, i) => (
            <span key={i} className={styles.star + ' blink'} style={{
              left: `${Math.sin(i * 37.3) * 45 + 50}%`,
              top:  `${Math.cos(i * 53.1) * 40 + 50}%`,
              animationDelay: `${(i * 0.37) % 2}s`,
              color: ['#c97cf5','#56e88a','#4acfff','#ffd34a','#ff6b8a'][i % 5],
              fontSize: i % 3 === 0 ? '7px' : '4px',
            }}>★</span>
          ))}
        </div>

        <div className={styles.badge}>RPG EDITION</div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>5 LOVE</span>
          <span className={styles.titleLine2}>LANGUAGES</span>
        </h1>

        <div className={styles.subtitle}>~ QUEST FOR CONNECTION ~</div>

        <div className={styles.langBadges} aria-hidden="true">
          {[
            { label: 'WORDS',  color: '#c97cf5' },
            { label: 'ACTS',   color: '#56e88a' },
            { label: 'GIFTS',  color: '#ffd34a' },
            { label: 'TIME',   color: '#4acfff' },
            { label: 'TOUCH',  color: '#ff6b8a' },
          ].map(({ label, color }) => (
            <span key={label} className={styles.langBadge} style={{ color }}>
              {label}
            </span>
          ))}
        </div>

        <div className={styles.divider} />

        <p className={styles.intro}>
          A wanderer seeks to understand their heart.<br />
          30 sacred choices await. Which path speaks<br />
          to your soul?
        </p>

        <div className={styles.divider} />

        <button className={styles.startBtn} onClick={onStart}>
          <span className={'blink ' + styles.cursor}>▶</span>
          &nbsp;BEGIN QUEST
        </button>

        <p className={styles.hint}>30 questions · ~5 min</p>
      </div>
    </div>
  );
}
