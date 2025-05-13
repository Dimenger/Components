import { useEffect, useState } from "react";

// Форматировщик даты с русским языком
let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const getTime = (date) => date.toLocaleString().substring(11, 20);

export const MyComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date()); // Текущее время
  let date = new Date();

  useEffect(() => {
    console.log(date); // Логируем дату при первом рендеринге
  }, []); // Пустой массив зависимостей означает однократное выполнение эффекта

  setTimeout(() => {
    setCurrentTime(new Date());
  }, 1000);

  const formattedDate = formatter.format(date);
  const firstLetterCapitalized =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <div>
      <p>{firstLetterCapitalized}</p>
      <p>{getTime(currentTime)}</p>
    </div>
  );
};
