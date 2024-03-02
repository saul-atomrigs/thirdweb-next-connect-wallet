import {
 useCreateWalletInstance,
 useSetConnectionStatus,
 useSetConnectedWallet,
 // import the wallet you want to connect
 localWallet,
} from "@thirdweb-dev/react"

const walletConfig = localWallet()

export default function Example() {
 const createWalletInstance = useCreateWalletInstance()
 const setConnectionStatus = useSetConnectionStatus()
 const setConnectedWallet = useSetConnectedWallet()

 const handleConnect = async () => {
  // 1. create wallet instance
  const wallet = createWalletInstance(walletConfig)

  // perform additional steps that needs to be done before connecting the wallet
  // here, we will generate a random wallet
  await wallet.generate()

  try {
   setConnectionStatus("connecting")

   // 2. Call `connect` method on wallet instance
   await wallet.connect(
    connectOptions, // pass options required by the wallet (if any)
   )

   // 3. Set wallet instance as the connected wallet
   setConnectedWallet(wallet)
  } catch (e) {
   setConnectionStatus("disconnected")
   console.error("failed to connect", e)
   // show error UI or close modal using props.close()
  }
 }

 return <button onClick={handleConnect}> connect wallet </button>
}
