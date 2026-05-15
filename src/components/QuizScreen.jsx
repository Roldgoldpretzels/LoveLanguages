import { useState, useEffect } from 'react';
import { PixelArt } from './PixelArt';
import { ICON_ROWS, ICON_PALETTES } from '../data/sprites';
import { LANGUAGES } from '../data/questions';
import styles from './QuizScreen.module.css';

export default function QuizScreen({ question, index, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [animKey, setAnimKey]   = useState(0);
  const [flash, setFlash]       = useState(false);

  useEffect(() => {
    setSelected(null);
    setAnimKey(k => k + 1);
    setFlash(false);
  }, [question.id]);

  function handleSelect(option) {
    if (selected) return;
    setSelected(option);
    setFlash(true);
    setTimeout(() => setFlash(false), 800);
    setTimeout(() => onAnswer(option.lang), 1000);
  }

  const progress  = selected ? ((index + 1) / total) * 100 : (index / total) * 100;
  const langColor = selected ? LANGUAGES[selected.lang].color : null;

  return (
    <div className={styles.wrapper}>
      {/* Progress header */}
      <div className={styles.header}>
        <span className={styles.questLabel}>QUEST</span>
        <span className={styles.counter}>{index + 1} / {total}</span>
      </div>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{
            width: `${progress}%`,
            ...(flash && langColor ? { background: langColor } : {}),
          }}
        />
      </div>

      {/* Icon floats over the quest bar on selection */}
      {selected && (
        <div className={styles.floatingIconWrap} key={selected.lang}>
          <div
            className={`${styles.floatingIcon} pop-in`}
            style={{ borderColor: langColor, boxShadow: `4px 4px 0 #000, 0 0 20px ${langColor}` }}
          >
            <PixelArt
              rows={ICON_ROWS[selected.lang]}
              palette={ICON_PALETTES[selected.lang]}
              scale={4}
            />
          </div>
        </div>
      )}

      {/* Dialog panel */}
      <div key={animKey} className={styles.panel + ' fade-in'}>
        <div className={styles.panelHeader}>
          CHOOSE WHAT RESONATES MORE
        </div>

        <div className={styles.options}>
          <button
            className={`${styles.option} ${selected === question.optionA ? styles.chosen : ''} ${selected && selected !== question.optionA ? styles.dim : ''}`}
            onClick={() => handleSelect(question.optionA)}
            disabled={!!selected}
            style={{ '--lang-color': LANGUAGES[question.optionA.lang].color }}
          >
            <span className={styles.optionLabel}>A</span>
            <span className={styles.optionText}>{question.optionA.text}</span>
            {selected === question.optionA && <span className={styles.checkmark}>✓</span>}
          </button>

          <div className={styles.orDivider}>~ OR ~</div>

          <button
            className={`${styles.option} ${selected === question.optionB ? styles.chosen : ''} ${selected && selected !== question.optionB ? styles.dim : ''}`}
            onClick={() => handleSelect(question.optionB)}
            disabled={!!selected}
            style={{ '--lang-color': LANGUAGES[question.optionB.lang].color }}
          >
            <span className={styles.optionLabel}>B</span>
            <span className={styles.optionText}>{question.optionB.text}</span>
            {selected === question.optionB && <span className={styles.checkmark}>✓</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
