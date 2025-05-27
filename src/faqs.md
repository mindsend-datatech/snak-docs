# Frequently Asked Questions (FAQ)

## How do I install the Kadena Snap?

**For developers integrating the Snap:**

Ensure MetaMask is installed in your browser. The Kadena Snap can be installed via a supported dApp or manually through the MetaMask Snaps Directory.

Note that Snaps have minimal UI. To unlock the full functionality, dApps must integrate directly with the Snap's RPC API. You can view our [demo app](https://github.com/kadena-community/kadena-snap) for reference and SDK usage.

**For users:**

You can install the Snap through the MetaMask Snaps Directory. After installation, access it through:
**MetaMask → Settings → Snaps → Kadena Snap**

---

## What are MetaMask Snaps?

MetaMask Snaps are secure, sandboxed extensions that add new features to MetaMask, including support for new blockchains, transaction logic, and account models — all without requiring changes to MetaMask's core codebase.

---

## What is a Snap?

A Snap is an isolated JavaScript module that interacts with MetaMask through a restricted permissioned API. Snaps can add support for new protocols (like Kadena), handle signing flows, show custom notifications, or introduce new account models.

---

## Are Snaps safe to use?

Yes. Snaps are **sandboxed** and can only access what users explicitly approve. They cannot access your MetaMask private keys or seed phrase. Every Snap declares its required permissions during installation, and MetaMask handles consent.

---

## Can I interact with Kadena Snap directly in MetaMask?

Not directly. The Snap is designed to be accessed through a dApp using the exposed Snap RPC methods. These methods enable account creation, balance queries, and transaction signing.

We provide a [reference frontend](https://github.com/kadena-community/kadena-snap) and SDK to help dApps integrate the Snap.

---

## Why is my Kadena Snap address different from my MetaMask address?

Kadena Snap generates a new Kadena key pair using **entropy provided by MetaMask**, not by accessing the seed phrase directly. This ensures your Snap account is **securely tied to your MetaMask account**, but operates independently from Ethereum addresses.

This Snap-generated account is stored securely in isolated state and used for signing Kadena transactions.

---

## Can I import an existing Kadena account?

**Not yet.** For now, Kadena Snap only supports **generating new Kadena accounts** using MetaMask-provided entropy. Importing external private keys is not currently supported, but may be added in a future release.

---

## What happens if I uninstall the Snap?

If you uninstall the Snap and later reinstall it while using the **same MetaMask seed phrase**, the same Kadena Snap account(s) will be restored automatically.

Your account derivation is based on MetaMask entropy, so the Snap can recover accounts deterministically without storing them externally.

---

## Can I export the private key of my Snap account?

**Not yet.** For security reasons, Kadena Snap does not currently support exporting private keys. This may be supported in the future with proper UI/UX and user confirmation flows via MetaMask.

---

## Is Kadena Snap available on MetaMask Mobile?

Not yet. MetaMask Mobile does not currently support Snaps. The Kadena Snap is available only in **desktop browser extensions** (Chrome, Firefox, Brave). MetaMask has announced upcoming support for Snaps on mobile.
