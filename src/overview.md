# Getting Started with Kadena Snap

The Kadena Snap is a MetaMask extension that brings Kadena-native capabilities—like account creation, transaction signing, and cross-chain transfers—directly into your MetaMask wallet.

This guide walks you through installing the Snap and using it via dApps that support it.

## Installation

Before you can use the Kadena Snap, you must have MetaMask installed and configured in your browser.

1. Visit the official [MetaMask Snap Directory](https://snaps.metamask.io) and locate **Kadena Snap**.
2. Click **Install** to grant permissions and enable the Snap.
3. The Snap will now be available inside your MetaMask under the “Snaps” section.

> 💡 When installed, the Snap runs isolated from other extensions, using MetaMask’s permissioned execution model for enhanced security.

## Using the Snap

Once installed, the Kadena Snap can be accessed via supported decentralized applications (dApps). You don’t interact with it directly through MetaMask—it activates automatically when the connected site uses Snap methods.

> 🚧 A dedicated web interface for interacting with the Snap is under development and will be available at a future domain.

Here’s what you can do with the Snap-enabled dApp:

- **Create a Kadena Account**:  
  Click “+ Add Account” to generate a new Kadena account managed by the Snap.

- **Send and Receive $KDA**:  
  Use the dApp’s interface to send and receive KDA tokens across any of Kadena’s 20 chains.

- **Sign Transactions Securely**:  
  When a dApp sends a transaction request, MetaMask will trigger a secure popup for approval.

- **Perform Cross-Chain Transfers**:  
  The Snap abstracts the complexity of transferring KDA between Kadena’s braided chains.

- **Buy $KDA**:  
  Integrated onramp support (e.g., Simplex) allows you to purchase KDA within the dApp.

- **Use Gas Stations**:  
  Fee abstraction via Kadena’s gas stations ensures transactions can be executed without the sender owning KDA initially.

- **Ledger Support**:  
  The Snap can store Ledger-based Kadena accounts (signing must be handled manually by the dApp).

- **View Balances & Activity**:  
  The dApp can show balances and recent transactions using Snap-stored accounts.

> Learn More
> - Kadena Snap NPM Package: https://www.npmjs.com/package/@kadena/snap  
> - Kadena Snap Audit Report: [View PDF](https://veridise.com/wp-content/uploads/2024/10/VAR_Kadena_240909_kadena_snap_V3.pdf)  
> - MetaMask Snap Docs: [docs.metamask.io/guide/snaps.html](https://docs.metamask.io/guide/snaps.html)
