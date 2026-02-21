// ==========================================================================================
// Компонент App є контейнером для решти компонентів
// ==========================================================================================

// Імпорт модуля useState - для роботи зі станом з REACT
import { useState } from "react";

// Імпорт модуля зі стилями компонента
import css from "./App.module.css";

// Імпорт інтерфейса стану
import { type Votes, type VoteType } from "../../types/votes";

// Імпорт компонента CafeInfo
import CafeInfo from "../CafeInfo/CafeInfo";

// Імпорт компонента VoteOptions
import VoteOptions from "../VoteOptions/VoteOptions";

// Імпорт компонента VoteStats
import VoteStats from "../VoteStats/VoteStats";

// Імпорт компонента Notification
import Notification from "../Notification/Notification";

// Компонент App
function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція handleVote(type) - для оновлення стану голосів.
  // Використовується тип VoteType для типізації її параметра.
  function handleVote(type: VoteType): void {
    if (type === "good") {
      setVotes({
        ...votes,
        good: votes.good + 1,
      });
    }
    if (type === "neutral") {
      setVotes({
        ...votes,
        neutral: votes.neutral + 1,
      });
    }
    if (type === "bad") {
      setVotes({
        ...votes,
        bad: votes.bad + 1,
      });
    }
  }

  // Функція resetVotes() – для скидання стану.
  function resetVotes(): void {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  // Підрахунок загальної кількості відгуків – це просто сума станів
  const totalVotes: number = votes.good + votes.neutral + votes.bad;

  // Встановлюємо булеве значення для відображення кнопки Reset
  const canReset: boolean = totalVotes > 0 ? true : false;

  // Підрахунок відсотка позитивних відгуків
  const positiveRate: number = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={canReset}
        />
        {totalVotes > 0 ? (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

// Експорт за замовчуванням компонента App
export default App;
