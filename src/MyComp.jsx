import { useEffect, useMemo, useState } from "react";

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

// Получаем случайное целое число между min и max (включительно)
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const MyComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date()); // Текущее время
  const [randomNum, setRandomNum] = useState(getRandomNum(1, 10)); // Случайное число

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const numIntervalId = setInterval(() => {
      setRandomNum(getRandomNum(1, 10));
    }, 2000);

    // Очищаем интервал при размонтировании компонента
    return () => {
      clearInterval(timeIntervalId);
      clearInterval(numIntervalId);
    };
  }, []);

  /* Получаем текущую дату с заглавной буквы. Мемоизация обработки даты */
  const formattedDate = formatter.format(currentTime);
  const firstLetterCapitalized = useMemo(
    () => `${formattedDate.charAt(0).toUpperCase()}${formattedDate.slice(1)}`,
    [formattedDate]
  );

  return (
    <div>
      {/* Отображаем дату */}
      <p>{firstLetterCapitalized}</p>
      {/* Отображаем текущее время */}
      <p>{getTime(currentTime)}</p>
      {/* Отображаем случайное число */}
      <p>{randomNum}</p>
    </div>
  );
};
