const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectWithRetry = () => {
    const db = mysql.createPool({
        host: "db",
        user: "root",
        password: "root",
        database: "docker-library",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    db.getConnection((err, connection) => {
        if(err) {
            console.error('Erreur de connexion à MySQL: ', err);
            console.log("Nouvelle tentative de connexion dans 5 secondes...");
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log("Connecté à la base de données MySQL !");
            connection.release();
        }
    }); 
    return db;
};

const db = connectWithRetry();

app.get('/', (req, res) => {
    res.send("Bienvenue sur mon API Node.js avec Docker !");
});

app.get('/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if(err) {
            console.error('Erreur lors de la récupération des livres : ', err);
            res.status(500).json({ error : "Erreur Serveur" });
        } else {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.json(results);
        }
    });
});

app.post('/books', (req, res) => {
  const { titre, intro, auteur, genre } = req.body;
  const query = 'INSERT INTO books (titre, intro, auteur, genre) VALUES (?, ?, ?, ?)';
  db.query(query, [titre, intro, auteur, genre], (err, results) => {
    if(err) {
      console.error("Erreur lors de l'ajout du livre : ", err);
      return res.status(500).json({ error: "Erreur serveur lors de l'ajout du livre" });
    }
    res.status(201).json({ message: "Livre ajouté avec succès", bookId: results.insertId });
  });
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM books WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Erreur lors de la suppression du livre : ", err);
      return res.status(500).json({ error: "Erreur lors de la suppression" });
    }
    res.json({ message: "Livre supprimé avec succès" });
  });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
