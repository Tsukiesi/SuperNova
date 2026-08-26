import Header from "@/shared/ui/Header.tsx";
import LinkButton from "@/shared/ui/LinkButton";
function HomePage() {
  return (
    <>
      <Header></Header>
      <div
        className={
          "flex items-center justify-center absolute top-20 left-0 right-0 bottom-0 z-0 bg-cover bg-center bg-[url('/background-blackhole.jpg')]"
        }
      >
        <LinkButton to="/space">Explore Solar System</LinkButton>
      </div>
    </>
  );
}

export default HomePage;
