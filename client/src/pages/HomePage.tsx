import Header from "@/shared/ui/Header.tsx";
function HomePage() {
  return (
    <>
      <Header></Header>
      <div
        className={
          "flex items-center justify-center absolute top-24 left-0 right-0 bottom-0 z-0 bg-cover bg-center bg-[url('/background-blackhole.jpg')]"
        }
      >
        <h1>Welcome!</h1>
      </div>
    </>
  );
}

export default HomePage;
