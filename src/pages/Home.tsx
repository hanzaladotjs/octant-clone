import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center">
        <h1 className="text-extrabold text-5xl text-start mx-80 my-20">
          Welcome to Epoch 8
        </h1>
        <div className="flex space-x-60 justify-center mt-3 items-center">
          <div className="flex flex-col bg-gray-200 items-start t-start h-20 w-auto space-y-2 rounded-xl">
            {" "}
            <p>Current rewards</p> <p> 0 ETH </p>
          </div>
          <div className="flex flex-col bg-gray-200 items-start text-start h-20 w-auto space-y-2 rounded-xl">
            {" "}
            <p>Total rewards </p> <p> 0 ETH</p>
          </div>
          <div className="flex flex-col bg-gray-200  items-start text-start h-20 w-auto space-y-2 rounded-xl">
            {" "}
            <p>Rewards rate</p> <p> 3.8% </p>
          </div>
        </div>
      </div>
    </div>
  );
}
