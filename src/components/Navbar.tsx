export default function Navbar() {
  return (
    <div className="w-full border-b border-gray-200 mt-2">
      <nav className="flex justify-evenly items-center py-3 text-gray-300  text-xl">
        <div className="flex space-x-10 items-center">
          <svg
            className="vw1Ry MdcNY"
            viewBox="0 0 40 40"
            style={{
              height: "50",

              width: "50",
            }}
          >
            <g clipPath="url(#octant)">
              <path
                fill="#171717"
                fillRule="evenodd"
                d="M40 20C40 5.244 34.78 0 20 0 5.263 0 0 5.312 0 20c0 14.632 5.35 20 20 20 14.693 0 20-5.3 20-20Zm-27.067 6.058a6.06 6.06 0 0 0 5.588-3.715 9.095 9.095 0 0 0 7.854 6.697c.78.08.929-.056.929-.9v-3.62c0-.707.239-1.491 1.371-1.491h2.172c.468 0 .487-.01.752-.385 0 0 1.139-1.59 1.365-1.928.226-.338.203-.426 0-.716S31.6 18.106 31.6 18.106c-.266-.37-.288-.378-.752-.378h-2.893c-.473 0-.65.252-.65.757v2.627c0 .64 0 1.16-.93 1.16-1.35 0-2.082-1.017-2.082-2.272 0-1.1.816-2.227 2.083-2.227.852 0 .929-.204.929-.613v-5.49c0-.72-.314-.773-.93-.71a9.095 9.095 0 0 0-7.852 6.696A6.06 6.06 0 0 0 6.874 20a6.058 6.058 0 0 0 6.058 6.058Zm0-4.039a2.02 2.02 0 1 0 0-4.039 2.02 2.02 0 0 0 0 4.04Z"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="octant">
                <path fill="#fff" d="M0 0h40v40H0z"></path>
              </clipPath>
            </defs>
          </svg>

          <div className="text-gray-900 border-b border-green-700">home</div>
          <div className="hover:text-gray-500 ">metrics</div>
          <div className="hover:text-gray-500 ">projects</div>
        </div>
        
          
          <div className="border flex space-x-2 items-center px-5 py-2 bg-gray-100 text-md font-extrabold text-[#2d9b87] border-gray-100 rounded-2xl hover:border-green-300">
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#2d9b87"
          >
            <path
              d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
              stroke="#2d9b87"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
              stroke="#2d9b87"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7 2V6"
              stroke="#2d9b87"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
              stroke="#2d9b87"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg> 
          <div>Welcome to Epoch 8</div>
          </div>
        
        <div className="flex items-center space-x-5">
          <button className="px-3 py-3 border bg-black text-white text-lg rounded-3xl">
            connect-wallet
          </button>
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            className="w-8 h-8 text-gray-800"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              clipPath="url(#clip0)"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.124 9.66 4.666 6.048a2.05 2.05 0 0 1 2.898-2.897l.565.566.565-.566a2.048 2.048 0 1 1 2.897 2.897L8.124 9.66ZM5.313 19.035a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125ZM11.563 19.035a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125Z"></path>
              <path d="m.625 5.912 1.942 6.573a1.25 1.25 0 0 0 1.207.927h9.016a1.25 1.25 0 0 0 1.21-.927l2.698-10.128A1.875 1.875 0 0 1 18.51.965h.865"></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </nav>
    </div>
  );
}
