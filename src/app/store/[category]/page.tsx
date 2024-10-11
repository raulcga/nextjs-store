export interface CategoryProps {
  params: {
    category: string;
  };
  queryParams: {};
}

export default function Category(props: CategoryProps) {
  console.log(props);

  const { category } = props.params;
  return <h1>Category: {category}</h1>;
}
