const DataCard = ({ item }) => {
  return (
    <div>
      <div className="p-6 border-2 w-full  text-center rounded-lg">
        <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>
        <p className="text-gray-700 text-lg">{item.description}</p>
        <p className="text-gray-100 text-lg">{item.date}</p>
      </div>
    </div>
  );
};
export default DataCard;
