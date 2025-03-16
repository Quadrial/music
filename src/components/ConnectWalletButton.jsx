import React, { useState } from "react";
import { useWeb3 } from "../context/Web3Context";

const ConnectWalletButton = () => {
  const { walletAddress, connectWallet, disconnectWallet, isWalletConnected } = useWeb3();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isWalletConnected ? (
        <div>
          <p>
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </p>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-500 text-white rounded-md mt-2"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={toggleModal}
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 me-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            Connect wallet
          </button>

          {/* Custom Modal */}
          {isModalOpen && (
            <div
              id="crypto-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Connect wallet
                    </h3>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Connect with one of our available wallet providers or create a new one.
                    </p>
                    <ul className="my-4 space-y-3">
                      <li>
                        <button
                          onClick={() => {
                            connectWallet("metamask");
                            toggleModal();
                          }}
                          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                          <span className="flex-1 ms-3 whitespace-nowrap">Extension wallet</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            connectWallet("walletconnect");
                            toggleModal();
                          }}
                          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                          <span className="flex-1 ms-3 whitespace-nowrap">Mobile wallet</span>
                        </button>
                      </li>
                      {/* Add additional wallet providers as needed */}
                    </ul>
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                      >
                        Why do I need to connect with my wallet?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ConnectWalletButton;
