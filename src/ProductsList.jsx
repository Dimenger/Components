const products = [
  { id: "an11", name: "cat" },
  { id: "an12", name: "dog" },
  { id: "an13", name: "mouse" },
];

export const ProductsList = () => {
  return (
    <>
      <ul className="productslist">
        {products.map(({ id, name }) => (
          <li key={id}>
            {id} <span>- </span>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};
