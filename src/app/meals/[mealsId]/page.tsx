type Params = {
  params: {
    mealsId: string;
  };
};
export default function mealsIdPage({ params }: Params) {
  return <div>This is {params.mealsId}</div>;
}
