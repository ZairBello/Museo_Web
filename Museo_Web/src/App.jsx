import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PictureFrame from "./components/PictureFrame";

// Función para obtener IDs aleatorios de una lista
const getRandomIDs = (array, num) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function App() {
  const [items, setItems] = useState(null);


  useEffect(() => {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.objectIDs) {
          const totalIDs = data.objectIDs.slice(0, 4000);
          const randomIDs = getRandomIDs(totalIDs, 100);

          const fetchPromises = randomIDs.map((id) =>
            fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            ).then((response) => response.json())
          );

          Promise.all(fetchPromises).then((objects) => {
            // Filtrar objetos duplicados por objectID
            const uniqueObjects = objects.filter(
              (obj, index, self) =>
                index === self.findIndex((o) => o.objectID === obj.objectID)
            );
            setItems(uniqueObjects);
          });
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="bg-white h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-blue-100 to-red-100 pb-4">
        <Navbar />
        <section className="h-screen w-full grid grid-cols-6 gap-16 p-4">
          <h1 className="font-bold text-3xl col-span-6 text-center">Home</h1>
          {items && items.length > 0 ? (
            items.map((item) => (
              <div className="col-span-2 flex justify-center" key={item.objectID}>
                <PictureFrame data={item} />
              </div>
            ))
          ) : (
            <p className="col-span-6 text-center">No hay elementos para mostrar.</p>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
