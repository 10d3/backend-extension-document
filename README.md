# Extension Backend

====================

## Description

---

L'extension backend est un projet qui utilise l'API de Google Document AI pour traiter des documents.

## Informations importantes

---

- **Version** : 1.0
- **Auteur** : Anshl
- **Date de création** : [Votre date de création]
- **Licence** : [Votre licence]

## Installation

---

Pour installer le projet, vous devez avoir Node.js et npm installés sur votre machine. Ensuite, vous pouvez exécuter les commandes suivantes :

```bash
npm install
```

## Utilisation

---

Pour utiliser le projet, vous devez créer un fichier **.env** avec vos clés API de Google Document AI. Ensuite, vous pouvez exécuter le serveur avec la commande suivante :

```bash
node server.ts
```

## Contribuer

---

Si vous souhaitez contribuer au projet, vous pouvez créer une nouvelle branche et soumettre une pull request.

## Remerciements

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

## Dépendances

---

Le projet utilise les dépendances suivantes :

1. @google-cloud/documentai
2. express
3. dotenv
4. @types/express
5. @types/bun

```bash
J'espère que cela vous aidera ! Si vous avez besoin de modifications ou d'ajouts, n'hésitez pas à me demander.
```
