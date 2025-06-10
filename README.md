# snaK Documentation Book

This repository contains the official documentation for **snaK**, a MetaMask Snap integration that enables direct interaction with the Kadena blockchain from within MetaMask.

The book is built using [mdBook](https://rust-lang.github.io/mdBook) and covers:

- What snaK is and how it works
- Step-by-step user guide for MetaMask integration
- SDK quickstart for building Snap-compatible dApps
- Best practices for integration and testing

---

## 📚 View the Book

📖 [https://mindsend-datatech.github.io/snak-docs/](https://mindsend-datatech.github.io/snak-docs/)

---

## 🛠 Getting Started

### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- `mdbook` installed (check the ![official page](https://rust-lang.github.io/mdBook/guide/installation.html) for instructions)

### Running Locally

```bash
mdbook serve
```

This will build and host the book at `http://localhost:3000`.

---

## 📁 Structure

```
src/
├── intro.md                # General intro to snaK
├── user-guide/             # MetaMask + Snap onboarding flow
├── sdk/                    # Developer quickstart and integration guide
└── SUMMARY.md              # Table of contents
```

---

## 🤝 Contributing

We welcome contributions!

* Fix typos and broken links
* Improve clarity or accuracy
* Add new integration examples or edge case handling

To contribute:

1. Fork this repository
2. Make changes in `src/`
3. Run `mdbook build` or `mdbook serve` to test locally
4. Open a pull request 🚀

---

## 📄 License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
