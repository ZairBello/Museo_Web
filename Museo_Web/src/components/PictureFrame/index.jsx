import images from "../../../public/Monalisa.jpg";
const PictureFrame = () => {
  return (
    <div className="w-96 h-96 cursor-pointer gap-y-4 bg-white text-black rounded-lg overflow-hidden shadow-md shadow-black hover:-translate-y-3 duration-300">
      <figure className="mb-2 w-full">
        <div className="h-72 w-full">
          <img
            src={images}
            className="w-full h-full object-cover "
            alt="Mona Lisa"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-1">Monalisa</h1>
        <div className="pl-3">
          <p className="text-lg font-medium">leonardo da vinci</p>
          <p className="text-lg font-medium">painting, 1503-1506</p>
        </div>
      </figure>
    </div>
  );
};

export default PictureFrame;
