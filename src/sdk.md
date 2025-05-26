# SDK Quickstart

## Next.js + Kadena Snap Integration

This guide walks you through setting up a Kadena Snap-compatible dApp using the official SDK tools. We'll use the [`create-kadena-app`](https://github.com/kadena-community/create-kadena-app) CLI to scaffold a Next.js project and integrate the Kadena Snap via the wallet adapter.

---

### 1. Generate a New Project

We leverage the template creation helper tool `create-kadena-app` to quickly scaffold a Next.js project:

```bash
npx @kadena/create-kadena-app generate-project -t nextjs -n my-kadena-dapp
cd my-kadena-dapp
````

---

### 2. Install Dependencies

Use your preferred package manager to install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

---

### 3. Integrate Snap Wallet Adapter

To enable Snap wallet support, edit the file `pages/_app.tsx`:

```ts
import { snapAdapter } from '@kadena/wallet-adapter-snap';
import { AdapterFactory } from '@kadena/wallet-adapter-base';

const adapters: AdapterFactory[] = [
  snapAdapter(), // Add any other adapters here if needed
];
```

---

### 4. Run the Development Server

Start your local development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Your app should now be running at `http://localhost:3000`, ready to connect to MetaMask and use the Kadena Snap.

---

### 5. (Optional) Enable Testnet Faucet

To fund your account for development, visit:

🔗 [Kadena Testnet Faucet](https://tools.kadena.io/faucet/new)

Enter your `k:` address from MetaMask and request free testnet KDA.

---

## Resources

* 🔗 [create-kadena-app GitHub](https://github.com/kadena-community/create-kadena-app)
* 🔗 [Kadena Snap Documentation](https://github.com/kadena-community/kadena-snap)
* 🔗 [Wallet Adapter Snap Package](https://www.npmjs.com/package/@kadena/wallet-adapter-snap)

---

You're now ready to build full-stack Kadena applications with native MetaMask Snap support.

