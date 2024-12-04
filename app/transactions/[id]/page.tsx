export default function Transaction({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Transaction: {params.id} </h1>
    </div>
  );
}
