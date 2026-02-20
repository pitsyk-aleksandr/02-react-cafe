// ==========================================================================================
// Компонент VoteStats - відображає статистику голосів.
// ==========================================================================================

// Для того, щоб компонент VoteStats міг динамічно відображати статистику голосування,
// зібрану з кліків на кнопки голосування, він приймає три пропси:
// ------------------------------------------------------------------------------------------
// votes – об'єкт, що містить кількість голосів для кожної категорії: good, neutral, bad;
// totalVotes – загальна кількість голосів ;
// positiveRate – відсоток позитивних голосів .
// ------------------------------------------------------------------------------------------

// Імпорт модуля зі стилями компонента
import styles from "./VoteStats.module.css";

// Імпорт інтерфейса стану
import { type Votes } from "../../types/votes";

// Оголошення інтерфейса VoteStatsProps, який описує типи для пропсів компонента
interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

// Компонент VoteStats
function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
