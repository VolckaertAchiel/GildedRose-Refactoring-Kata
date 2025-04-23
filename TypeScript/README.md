
# 🧙‍♂️ Gilded Rose Kata (TypeScript)

This is a TypeScript implementation of the classic [Gilded Rose kata](https://github.com/emilybache/GildedRose-Refactoring-Kata). It includes business rules for a fictional shop that sells items with varying behaviors.

## 📁 Project Structure

```
├── app/                 # Application source code
├── test/                # Jest and Mocha unit tests
├── ...
```

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

---

## ✅ Running Tests

### Jest

Run tests once:

```bash
npm run test:jest
```

Run tests in watch mode:

```bash
npm run test:jest:watch
```
---

## 🧪 TextTest Fixture

You can run a "Golden Master" style test to compare outputs.

### Prerequisite

You may need to install `ts-node` globally:

```bash
npm install -g ts-node
```

### Run the TextTest script

Run for the default number of days:

```bash
npx ts-node test/golden-master-text-test.ts
```

Or with a custom number of days:

```bash
npx ts-node test/golden-master-text-test.ts 10
```

Make sure this works in your terminal before proceeding with full TextTest integration.

---

## 📜 Features Covered

- Regular items
- Aged Brie
- Sulfuras (legendary)
- Backstage passes
- Conjured items (degrade in quality twice as fast)

---

## 🧠 Kata Goals

This project is intended as a **refactoring and testing exercise**. You are encouraged to:
- Practice test-driven development (TDD)
- Improve code quality and structure
- Explore object-oriented vs procedural styles

---

## 💬 License

This project is open source and free to use for learning and practicing.
