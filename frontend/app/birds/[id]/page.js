export default function Page({ params, searchParams }) {
  const { id } = params;

  return (
    <div>
      <h1>Bird ID: {id}</h1>
    </div>
  );
}
