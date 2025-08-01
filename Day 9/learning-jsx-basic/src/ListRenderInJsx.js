let fruits = ['Apple', 'Banana', 'Cherry']

function ListRenderInJsx() {
  return (
    <ul>
      {fruits.map((fruits, index) => (
        <li key={index}>{fruits}</li>
      ))}
    </ul>
  );
}

export {ListRenderInJsx}