# Extension Backend

====================

## Description

---

The extension backend is a project that uses the Google Document AI API to process documents.

## Important Information

---

- **Version** : 1.0
- **Author** : 10D3
- **Creation Date** : 2022-01-01
- **Licence** : MIT

## Installation

---

To install the project, you need to have Node.js and npm installed on your machine. Then, you can run the following commands:

```bash
bun install
```

## Usage

---

To use the project, you need to create a .env file with your Google Document AI API keys, and a config folder with the [endless-*******].json file that you can find in the Google Cloud Console. Then, you can run the server with the following command:

```bash
bun server.ts
```

## Contribution

---

If you want to contribute to the project, you can create a new branch and submit a pull request.

## Acknowledgments

---

1. Google pour l'API de Document AI

## Configuration du serveur

---

Le serveur est configuré pour écouter sur le port 3050. Vous pouvez modifier ce paramètre dans le fichier **server.ts**.

## API

---

L'API est définie dans le fichier server.ts. Elle comprend les routes suivantes :

1. **/api** : renvoie des informations sur l'API
2. **/api/documentScan** : traite un document avec l'API de Google Document AI

## Dependencies

---

The project uses the following dependencies:

1. @google-cloud/documentai
2. express
3. dotenv
4. @types/express
5. @types/bun

```bash
I hope this helps! If you need any modifications or additions, don't hesitate to ask.
```