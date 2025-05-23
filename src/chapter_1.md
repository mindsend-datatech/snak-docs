# Kadena’s MetaMask Snap

## Introduction

Kadena’s Snap is an innovative integration that brings the unique capabilities of the Kadena blockchain ecosystem to the popular MetaMask wallet. By allowing users to interact with Kadena’s features directly through MetaMask, this Snap empowers users to manage their Kadena assets and participate in various blockchain activities with ease and efficiency, marking a significant step towards a more interconnected and user-friendly blockchain landscape.

## What is a Snap?

Kadena’s Snap leverages MetaMask’s security model to enable the ability to transfer and manage $KDA across Kadena’s 20 chains and sign transactions using your MetaMask wallet. The Snap is installed within the user’s MetaMask wallet and accessed via [Kadena’s separate Snap interface](https://wallet.kadena.io).

When signing a transaction, a MetaMask popup is triggered, requiring user confirmation within the wallet. Cross-chain transfers (across Kadena’s 20 chains) are supported and can make use of Kadena’s gas stations if needed.

Currently, Kadena’s Snap does not support NFTs or other Kadena tokens, but support may be added in future versions.

To learn more about Snaps, visit the [Metamask Snap Guide](https://docs.metamask.io/guide/snaps.html).

## What are some of the Kadena Snap features?

- **Create Kadena Accounts**:  
  Users can initiate account creation directly from a dApp by selecting [+ add account] and store it in the Snap.

- **Send and Receive $KDA**:  
  The Snap enables users to perform regular transactions, allowing for both sending and receiving $KDA.

- **Transaction Signing**:  
  Users can sign transactions initiated from integrated dApps, ensuring secure processing of on-chain activities.

- **Buy $KDA**:  
  Users can purchase Kadena’s native token, $KDA, using the Simplex onramp service. This process is initiated from a dApp.

- **Cross-Chain Transfers**:  
  The Snap supports cross-chain transfers, enabling seamless movement of $KDA across Kadena’s 20 chains.

- **Ledger Support**:  
  The Snap supports **storing Ledger accounts but not signing with them**. dApps can implement their own Ledger signing logic to sign with these hardware accounts.

- **Gas Station Usage**:  
  Users can leverage gas stations, which help manage transaction fees.

- **Show $KDA Balance and Activity**:  
  A dApp can display the $KDA balance and transaction history of accounts stored in a user’s Snap.

- **Web-Based Interface**:  
  The Snap operates through a web-based interface, ensuring ease of access and use for interacting with Kadena-based services.

## Official Snap Release

- [Install from MetaMask Snap Directory](https://snaps.metamask.io)
- Kadena’s Snap Npm Package: https://www.npmjs.com/package/@kadena/snap
- Kadena’s Snap Audit Report: [veridise.com](https://veridise.com/wp-content/uploads/2024/10/VAR_Kadena_240909_kadena_snap_V3.pdf)
