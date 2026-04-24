getToken(messaging, { vapidKey: 'BIUhj36lFGfQTI7Ifiv65s31oTQcWvePTkxExIf6fVZ-KC5o7tlV8DovqAPqYdbHDWm9_TxR6QVzGQHL9OrRzQ' })
.then((currentToken) => {
    if (currentToken) {
        // C'est ce message qu'on veut voir !
        alert("TOKEN REÇU :\n\n" + currentToken);
        console.log("Token:", currentToken);
    } else {
        alert("Permission accordée, mais aucun token généré. Réessaie de rafraîchir la page.");
    }
}).catch((err) => {
    alert("Erreur lors de la récupération : " + err);
});
