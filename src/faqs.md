# Frequently Asked Questions (FAQ)

## How do I install snaK?

**For users:**

You can install snaK through the MetaMask Snaps Directory. After installation, access it through:
**MetaMask → Settings → Snaps → snaK**

**For developers integrating snaK:**

Ensure MetaMask is installed in your browser. snaK can be installed via a supported dApp or manually through the MetaMask Snaps Directory.

Note that Snaps have minimal UI. To unlock the full functionality, dApps must integrate directly with the Snap's RPC API. You can view our [demo app](https://github.com/kadena-community/kadena-snap) for reference and SDK usage.

---

## What are MetaMask Snaps?

MetaMask Snaps are secure, sandboxed extensions that add new features to MetaMask. Snaps can add support for new protocols (like Kadena),
handle signing flows, show custom notifications, or introduce new account models.

---

## Are Snaps safe to use?

Yes. Snaps are **sandboxed** and can only access what users explicitly approve. They cannot access your MetaMask private keys or seed phrase. Every Snap declares its required permissions during installation, and MetaMask handles consent.

---

## Can I interact with snaK directly in MetaMask?

Not directly. snaK is designed to be accessed through a dApp using the exposed Snap RPC methods. These methods enable account creation, balance queries, and transaction signing.

We provide a [reference frontend](https://snak.mindsend.xyz) for users to handle basic wallet operations and an SDK and wallet adapter to help dApps integrate snaK.

---

## Why is my snaK address different from my MetaMask address?

snaK generates a new Kadena key pair using **entropy provided by MetaMask**, not by accessing the seed phrase directly. This ensures your snaK account is **securely tied to your MetaMask account**, but operates independently from Ethereum addresses.

This snaK-generated account is stored securely in isolated state and used for signing Kadena transactions.

---

## Can I import an existing Kadena account?

**Not yet.** For now, snaK only supports **generating new Kadena accounts** using MetaMask-provided entropy. Importing external private keys is not currently supported, but may be added in a future release.

---

## What happens if I uninstall snaK?

If you uninstall snaK and later reinstall it while using the **same MetaMask seed phrase**, the same snaK account(s) will be restored automatically.

Your account derivation is based on MetaMask entropy, so snaK can recover accounts deterministically without storing them externally.

---

## Can I export the private key of my snaK account?

**Not yet.** For security reasons, snaK does not currently support exporting private keys. This may be supported in the future with proper UI/UX and user confirmation flows via MetaMask.

---

## Is snaK available on MetaMask Mobile?

Not yet. MetaMask Mobile does not currently support Snaps. snaK is available only in **desktop browser extensions** (Chrome, Firefox, Brave). MetaMask has announced upcoming support for Snaps on mobile.

---

## Where can I get support?

For general support and questions, please use these channels:

- [Mindsend Support Portal](https://support.mindsend.xyz/)
- [Kadena Community Discord](https://discord.gg/CZzZSKxzWP)

Our team monitors these channels and will respond to inquiries as quickly as possible.
