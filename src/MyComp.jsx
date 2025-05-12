import { useEffect } from "react";

// Форматировщик даты с русским языком
let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const MyComponent = () => {
  const date = new Date();

  useEffect(() => {
    console.log(date); // Логируем дату при первом рендеринге
  }, []); // Пустой массив зависимостей означает однократное выполнение эффекта

  const formattedDate = formatter.format(date);
  const firstLetterCapitalized =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return <div> {firstLetterCapitalized}</div>;
};
