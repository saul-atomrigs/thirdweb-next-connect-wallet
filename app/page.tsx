"use client"

import { ThirdwebProvider } from "./components/ThirdwebProvider"
import {
 metamaskWallet,
 coinbaseWallet,
 walletConnect,
} from "@thirdweb-dev/react"
import { ConnectWallet } from "@thirdweb-dev/react"
import { MediaRenderer } from "@thirdweb-dev/react"

export default function Home() {
 return (
  <ThirdwebProvider
   supportedWallets={[
    metamaskWallet({
     recommended: true,
    }),
    coinbaseWallet(),
    walletConnect(),
   ]}
   clientId={process.env.THIRDWEB_API_KEY}>
   <ConnectWallet />

   <MediaRenderer src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X" />
  </ThirdwebProvider>
 )
}
