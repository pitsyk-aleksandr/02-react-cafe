// ==========================================================================================
// Компонент VoteOptions.
// Цей компонент відповідає за рендер кнопок для голосування (Good, Neutral, Bad)
// та кнопки Reset для скидання результатів
// ==========================================================================================

// Компонент приймає три пропси:
// ------------------------------------------------------------------------------------------
// onVote – функція, яка викликається при кліку на одну з кнопок голосування;
// onReset – функція, що викликається при кліку на кнопку Reset і відповідає за скидання голосів;
// canReset – булеве значення, яке визначає, чи потрібно показувати кнопку Reset.
// (На цьому етапі можеш передавати просто зі значенням true.)
// ------------------------------------------------------------------------------------------

// Імпорт модуля зі стилями компонента
import css from "./VoteOptions.module.css";

// Перелік допустимих рядкових значень можливого вибору
import { type VoteType } from "../../types/votes";

// Оголошення інтерфейса VoteOptionsProps, який описує типи для пропсів компонента.
interface VoteOptionsProps {
  onVote(type: VoteType): void;
  onReset(): void;
  canReset: boolean;
}

// Компонент VoteOptions
function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={() => onReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
