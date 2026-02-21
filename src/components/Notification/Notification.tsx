// ==========================================================================================
// Компонент Notification, який буде показувати повідомлення про відсутність статистики.
// ==========================================================================================

// Імпорт модуля зі стилями компонента
import css from "./Notification.module.css";

// Компонент Notification
function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}

export default Notification;
