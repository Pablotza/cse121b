document.addEventListener("DOMContentLoaded", () => {
    /* Declare and initialize global variables */
    const templesElement = document.querySelector("#temples");
    let templeList = [];
  
    /* async displayTemples Function */
    const displayTemples = (temples) => {
      temples.forEach((temple) => {
        // Create an HTML <article> element
        const article = document.createElement("article");
  
        // Create an HTML <h3> element and add the temple's templeName property
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
  
        // Create an HTML <img> element and set src and alt attributes
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
  
        // Append <h3> and <img> elements to the <article> element
        article.appendChild(h3);
        article.appendChild(img);
  
        // Append the <article> element to the templesElement
        templesElement.appendChild(article);
      });
    };
  
    /* async getTemples Function using fetch() */
    const getTemples = async () => {
      const response = await fetch(
        "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
      );
      templeList = await response.json();
      displayTemples(templeList);
    };
  
    /* reset Function */
    const reset = () => {
      templesElement.innerHTML = "";
    };
  
    /* sortBy Function */
    const sortBy = (temples) => {
      reset();
      const filter = document.querySelector("#sortBy").value;
      switch (filter) {
        case "utah":
          displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
          break;
        case "notutah":
          displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
          break;
        case "older":
          displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
          break;
        case "all":
          displayTemples(temples);
          break;
      }
    };
  
    /* Event Listener */
    document.querySelector("#sortBy").addEventListener("change", () => {
      sortBy(templeList);
    });
  
    getTemples();
  });
  