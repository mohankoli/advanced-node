# 🚀 Node.js Cluster-Based Fibonacci Express App

This project is a Node.js application built using **Express** and the **Cluster module** to compute Fibonacci numbers efficiently in a multi-core environment.

---

## 📚 What is Node.js Cluster Module?

- A single instance of Node.js runs in a **single thread**.
- The **Cluster module** helps utilize **multi-core CPUs** by **forking child processes**.
- All child processes (workers) **share the same server port**, increasing concurrency.
- Each worker runs independently, enabling **isolated memory and instance creation**.

---

## 🧠 Project Purpose

In single-threaded apps, exporting a singleton (like `new FibonacciSeries()`) may cause shared state or performance issues under load.

Using the **Cluster module**, each worker:
- Gets its **own instance** of the Fibonacci logic.
- Can independently handle requests.
- Helps resolve the **singleton pattern problem** in CPU-bound computations.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Cluster Module
- JavaScript (recursive Fibonacci logic)

---

## 🔧 How It Works

- On start, the master process forks multiple **workers** equal to the number of CPU cores.
- Each worker listens on the same port (`3000`).
- Incoming requests are handled by the OS and passed to available workers.
- Each worker uses its own `FibonacciSeries` instance (no shared singleton).

---

## 🌐 API Endpoint

```http
GET http://localhost:3000?number=10
