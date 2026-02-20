// ==========================================================================================
// Компонент CafeInfo - це компонент із назвою та коротким описом кав’ярні
// ==========================================================================================

// Імпорт модуля зі стилями компонента
import css from "./CafeInfo.module.css";

// Компонент CafeInfo
function CafeInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}

export default CafeInfo;
