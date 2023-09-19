document.addEventListener("DOMContentLoaded", function () {
    //on enregistre les information dans des constantes
    const formulaire = document.getElementById("formulaire");
    const ville = document.getElementById("ville");
    const information = document.getElementById("information");
    //lorsque le bouton "envoyez" est cliqué ->
    formulaire.addEventListener("submit", function (e) {
        e.preventDefault();
    //on enregistre la ville rentré par l'internaute dans une variable
        const city = ville.value;
    // on appel la methode Fetch qui va nous permettent de lire les données JSON
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=VOTRE_CLE_API`)
            .then(response => response.json())
            .then(data => {
                
            })
            .catch(error => {
                information.innerHTML = "La ville n'est pas connu. Veuillez vérifier l'orthographe.";
            });
    });
});
