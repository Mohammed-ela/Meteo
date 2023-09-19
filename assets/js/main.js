//Manipulation du DOM avec les id 
document.addEventListener("DOMContentLoaded", function () {
        //on enregistre les information dans des constantes
    const formulaire = document.getElementById("formulaire");
    const ville = document.getElementById("ville");
    const information = document.getElementById("information");
//lorsque le bouton "envoyez" est cliqué ->
    formulaire.addEventListener("submit", function (e) {
        e.preventDefault();
  //on enregistre la ville rentré par l'internaute dans une variable et notre key
        const city = ville.value;
        const key = "8e87a9f44d79a17621443c268a024757";

          // on appel la methode Fetch qui va nous permettent de lire les données JSON 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(response => response.json())
            .then(data => {
                // si il y'a une erreur dans les données JSON
                if (data.cod === "404") {
                     // affichage dans le DOM avec l'erreur 
                    information.innerHTML = "La ville n'est pas connue. Veuillez vérifier l'orthographe.";
                } else {
                // la ville existe bien ! , on recupere donc l'id de la ville rentrer 
                const id = data.id;
                // on recuperer l'url a redirigé 
                const openWeatherMapURL = `https://openweathermap.org/city/${id}`;
                  // Redirection 
                  window.open(openWeatherMapURL, '_blank');
                        /* window.location.href = openWeatherMapURL; */
                }
              
            })
            .catch(error => {
               // erreur au niveau de l'api
                information.innerHTML = "Une erreur s'est produite lors de la récupération des données. Veuillez réessayer plus tard.";
            });
    });
});
