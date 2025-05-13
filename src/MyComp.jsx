import { useEffect, useState } from "react";

// Форматировщик даты с русским языком
let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const getTime = (date) =>
  date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const MyComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date()); // Текущее время

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = formatter.format(currentTime);
  const firstLetterCapitalized =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <div>
      {/* Отображаем дату */}
      <p>{firstLetterCapitalized}</p>
      {/* Отображаем текущее время */}
      <p>{getTime(currentTime)}</p>
    </div>
  );
};
