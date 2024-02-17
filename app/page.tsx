"use client"

import { ConnectWallet } from "@thirdweb-dev/react"
import { MediaRenderer } from "@thirdweb-dev/react"

export default function Home() {
 return (
  <div>
   <ConnectWallet />

   <MediaRenderer src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X" />
  </div>
 )
}
