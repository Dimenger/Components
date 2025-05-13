import { useState } from "react";

export const MyButton = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <button onClick={() => setValue(value + 1)}>Значение: {value}</button>
    </>
  );
};
