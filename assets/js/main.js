//Manipulation du DOM
document.addEventListener("DOMContentLoaded", function () {
    //Stock les données dans les constantes 
    const formulaire = document.getElementById("formulaire");
    const ville = document.getElementById("ville");
    const information = document.getElementById("information");

    formulaire.addEventListener("submit", function (e) {
// Empêche la soumission du formulaire par défaut.
        e.preventDefault(); 

        // Vérification si le champ est vide
        if (ville.value.trim() === "") {
            alert("Veuillez saisir une ville avant de soumettre le formulaire.");
            return; // Ne pas continuer si le champ est vide.
        }

        const city = ville.value;
        const key = "8e87a9f44d79a17621443c268a024757";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(response => response.json())
            .then(data => {
                // Vérification si la ville existe
                if (data.cod === "404") {
                    information.innerHTML = "La ville n'est pas connue. Veuillez vérifier l'orthographe.";
                } else {
                    // On enregistre l'id de la ville pour pouvoir le mettre sur le lien 
                    const id = data.id;
                    const openWeatherMapURL = `https://openweathermap.org/city/${id}`;
                    // Redirection dans un nouvel onglet.
                    window.open(openWeatherMapURL, '_blank'); 
                }
            })
            .catch(error => {
                // Gestion de l'erreur lors de la récupération des données depuis l'API.
                information.innerHTML = "Une erreur s'est produite lors de la récupération des données. Veuillez réessayer plus tard.";
            });
    });
});
