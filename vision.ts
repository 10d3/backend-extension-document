// Import des dépendances nécessaires
import * as dotenv from "dotenv";
// import * as fs from "fs";
import { DocumentProcessorServiceClient } from "@google-cloud/documentai";
const fs = require("fs");
const path = require("path");

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Récupérer la clé API à partir des variables d'environnement
const apiKey = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Vérification de l'existence de la clé API
if (!apiKey) {
  throw new Error(
    "La clé API Google Document AI est manquante dans le fichier .env"
  );
}

// Configuration du client Google Document AI
const client = new DocumentProcessorServiceClient({
  keyFilename: path.join(
    __dirname,
    "config",
    "endless-bolt-430416-h3-e0a89a12879b.json"
  ),
});

// Fonction pour traiter un document avec Google Document AI
export async function processDocument(filePath: string) {
  // ID du projet et du processeur dans Google Cloud
  const projectId = process.env.ProjectID;
  const processorId = process.env.ProcessorID;
  const location = "us"; // Ou 'eu' selon l'emplacement du processeur
  const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

  // Lire le fichier localement
  // const fs = require('fs');
  const imageFile = fs.readFileSync(filePath);

  // Créer une requête pour Google Document AI
  const request = {
    name: name,
    rawDocument: {
      content: imageFile.toString("base64"),
      mimeType: "application/pdf", // Ou 'image/jpeg', 'image/png' selon votre document
    },
  };

  // Appel à Google Document AI pour traiter le document
  const [result] = await client.processDocument(request);

  const { document } = result;

  // Afficher les informations extraites du document
  if (document) {
    // console.log("Document analysé avec succès :");
    // console.log(JSON.stringify(document.text, null, 2));
    // return JSON.stringify(document.text, null, 2);
    return document;
  } else {
    console.error("Aucun document renvoyé par Google Document AI.");
  }
}

// Exécuter la fonction de traitement avec un fichier d'exemple et un processeur Document AI
// processDocument("./path/to/your-document.pdf")
//   .then(() => console.log("Analyse terminée"))
//   .catch((error: string) =>
//     console.error("Erreur lors du traitement du document :", error)
//   );
