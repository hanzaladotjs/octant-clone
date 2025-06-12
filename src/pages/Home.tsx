import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-extrabold text-4xl md:text-5xl text-start z-50  ml-2 md:mx-80 my-10">
        Welcome to Epoch 8
      </h1>
      <br></br>
      <div className="flex flex-col items-center justify-center   ">
        <div className="flex justify-center items-center space-x-4 md:space-x-10 h-10 md:p-0 py-16 mx-4 rounded-2xl bg-gray-100 md:bg-white ">
          <div className="flex-grow md:hover:border rounded">
            <div className="flex flex-col bg-gray-100 items-start pl-5 pt-5  space-y-2 text-start h-30 md:w-132  md:rounded-xl">
              {" "}
              <p className="text-md text-gray-500">Current rewards</p>{" "}
              <p className="text-2xl"> 0 ETH </p>
            </div>
          </div>
          <div className="flex-grow md:hover:border  rounded">
            <div className="flex flex-col  bg-gray-100 items-start  pl-5 pt-5 space-y-2 text-start h-30 md:w-132  md:rounded-xl ">
              {" "}
              <p className="text-md text-gray-500">Total rewards </p>{" "}
              <p className="text-2xl"> 0 ETH</p>
            </div>
          </div>
          <div className="flex-grow md:hover:border  rounded">
            <div className="flex flex-col   bg-gray-100  items-start pl-5 pt-5  space-y-2 text-start h-30 md:w-132 md:rounded-xl">
              {" "}
              <p className="text-md text-gray-500">Rewards rate</p>{" "}
              <p className="text-2xl"> 3.8% </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
