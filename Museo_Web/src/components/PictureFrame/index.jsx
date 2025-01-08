const PictureFrame = ({ data }) => {
  const imageUrl = data.additionalImages && data.additionalImages.length > 0 
    ? data.additionalImages[Math.floor(Math.random() * data.additionalImages.length)] 
    : data.primaryImage || "https://via.placeholder.com/300"; // Imagen predeterminada si no hay imágenes disponibles

  return (
    <div className="w-96 h-96 cursor-pointer gap-y-4 bg-white text-black rounded-lg overflow-hidden shadow-md shadow-black hover:-translate-y-3 duration-300">
      <figure className="mb-2 w-full">
        <div className="h-72 w-full">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt={data.title}
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-1">{data.title}</h1>
        <div className="pl-3">
          <p className="text-lg font-medium">{data.artistDisplayName}</p>
          <p className="text-lg font-medium">painted on {data.objectDate}</p>
        </div>
      </figure>
    </div>
  );
};

export default PictureFrame;
