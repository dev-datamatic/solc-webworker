// solc-worker.js
self.onmessage = function (e) {
  importScripts('https://binaries.soliditylang.org/bin/soljson-latest.js')

  // Wait for the solc object to be available
  Module.onRuntimeInitialized = () => {
    const solc = solcjs // solcjs refers to the Solidity compiler

    const input = e.data // Receive the input from the main thread

    // Compile the contract
    const output = JSON.parse(solc.compile(JSON.stringify(input)))

    // Send the output back to the main thread
    self.postMessage(output)
  }
}
