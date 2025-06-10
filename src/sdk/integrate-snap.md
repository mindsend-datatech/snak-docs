# Integrate snaK Wallet Adapter

To enable Snap wallet support, edit the file `pages/_app.tsx`:

```ts
import { snapAdapter } from '@kadena/wallet-adapter-snap';
import { AdapterFactory } from '@kadena/wallet-adapter-base';

const adapters: AdapterFactory[] = [
  snapAdapter(), // Add any other adapters here if needed
];
````

