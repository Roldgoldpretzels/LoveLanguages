import styles from './CreditCardModal.module.css';

export default function CreditCardModal({ onDismiss }) {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} pop-in`}>
        <div className={styles.header}>⚠ SYSTEM ALERT ⚠</div>

        <p className={styles.bodyText}>
          HALFWAY THROUGH!<br />
          VERIFY IDENTITY<br />
          TO UNLOCK RESULTS.
        </p>

        <div className={styles.cardScene}>
          <div className={styles.card}>
            <div className={styles.cardBank}>❤ LOVE BANK</div>
            <div className={styles.chip} />
            <div className={styles.cardNum}>**** **** **** ????</div>
            <div className={styles.cardFooter}>
              <span className={styles.cardName}>ADVENTURER</span>
              <span className={styles.cardExp}>VALID 12/99</span>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <p className={styles.label}>CARD NUMBER</p>
          <div className={styles.field}>4539 **** **** ****</div>
          <div className={styles.row}>
            <div>
              <p className={styles.label}>EXPIRY</p>
              <div className={styles.field}>**/**</div>
            </div>
            <div>
              <p className={styles.label}>CVV</p>
              <div className={styles.field}>***</div>
            </div>
            <div>
              <p className={styles.label}>ZIP</p>
              <div className={styles.field}>*****</div>
            </div>
          </div>
        </div>

        <button className={styles.btn} onClick={onDismiss}>
          <span className="blink">▶</span>&nbsp;NICE TRY
        </button>
      </div>
    </div>
  );
}
