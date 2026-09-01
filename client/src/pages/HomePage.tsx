import Header from "@/shared/ui/Header.tsx";
import LinkButton from "@/shared/ui/LinkButton";
function HomePage() {
  return (
    <>
      <Header />
      <div
        className={
          "flex items-center justify-center absolute top-20 left-0 right-0 bottom-0 z-0 bg-cover bg-center bg-[url('/background-blackhole.jpg')]"
        }
      >
        <LinkButton to="/space">Explore Solar System</LinkButton>
        <div className="-z-1 absolute w-48 h-48 flex items-center flex-col rounded-full bg-transparent animate-spin">
          <div className="absolute -right-2 w-4 h-4 rounded-full bg-primary" />
        </div>
        <div className="-z-1 absolute w-48 h-48 flex items-center flex-col rounded-full bg-transparent animate-spin-oposite">
          <div className="absolute -left-2 w-4 h-4 rounded-full bg-primary" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
