let fruits = ['Apple', 'Banana', 'Cherry']

function ListRenderInJsx() {
  let fruits = ['Apple', 'Banana', 'Cherry']
  return (
    <ul>
      {fruits.map((fruits, index) => (
        <li key={index}>{fruits}</li>
      ))}
    </ul>
  );
}

export {ListRenderInJsx}