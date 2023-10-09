import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("c449f0f4-9c93-4ba4-a6be-d5fcd60fc1c0");

  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
