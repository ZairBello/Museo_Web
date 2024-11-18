import Navbar from "./components/Navbar";
import PictureFrame from "./components/PictureFrame";

function App() {
  return (
    <>
      <div className="bg-white h-screen overflow-y-auto bg-gradient-to-b from-blue-100 to-red-100 pb-4">
        <Navbar />
        <section className="h-screen w-full grid grid-cols-6 gap-4 p-4">
          <h1 className="font-bold text-3xl col-span-6 text-center">Home</h1>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
          <div className="col-span-2 flex justify-center ">
          <PictureFrame />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
