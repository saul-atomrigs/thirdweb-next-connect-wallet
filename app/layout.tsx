"use client"

import {
 ThirdwebProvider,
 metamaskWallet,
 coinbaseWallet,
 walletConnect,
} from "@thirdweb-dev/react"

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <html lang="en">
   <ThirdwebProvider
    supportedWallets={[
     metamaskWallet({
      recommended: true,
     }),
     coinbaseWallet(),
     walletConnect(),
    ]}
    clientId="<your_client_id>">
    <body>{children}</body>
   </ThirdwebProvider>
  </html>
 )
}
