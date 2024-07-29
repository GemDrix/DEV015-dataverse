

export const renderItems = (data) => {
  const tarjetas = data.map(campeona => {
    const tarjeta = document.createElement("ul");  // Crea un elemento "ul" para cada campeona
    tarjeta.classList.add("tarjeta");              // Asigna una clase "tarjeta" para utilizarlo con CSS

    // Imagen de la tarjeta
    const imgTarjeta = document.createElement("li"); // Crea un elemento "li" que contiene la imagen
    const imgElemento = document.createElement("img"); // Crea el elemento "img" y se asignan sus atributos
    imgElemento.src = campeona.imageUrl;           // Establece la fuente de la imagen
    imgElemento.alt = campeona.name;               // Texto alternativo si no carga la imagen
    imgElemento.width = 300;                       // Ancho de la imagen
    imgElemento.height = 240;                      // Alto de la imagen
    imgElemento.classList.add("imagen");           // Asigna una clase "imagen" para utilizarlo con CSS
    imgTarjeta.appendChild(imgElemento);           // Añade la imagen al 'li'
    tarjeta.appendChild(imgTarjeta);               // Añade el 'li' con la imagen a la tarjeta

    // Información visible inicialmente
    const infoTarjeta = document.createElement("li");
    tarjeta.classList.add("tarjeta");                // Crea un 'li' que contendrá la información adicional
    const infoVisible = [                             // Se crea un array con la información a mostrar
      campeona.name,
      campeona.shortDescription,
      campeona.facts.frase,
      "Dificultad: " + campeona.facts.dificultadDeUso,
      "Tipo de Daño: " + campeona.facts.tipoDeDano,
      "Carril: " + campeona.facts.carril
    ];

    infoVisible.forEach((texto, index) => {             // Recorrer el array y crear un <li> para cada elemento
      const infocampeona = document.createElement('li'); // Crear un nuevo elemento <li>
      infocampeona.id = `elementoVisible${index + 1}`;          // Asignar un ID único a cada <li>
      infocampeona.textContent = texto;                  // Agregar texto al <li>
      tarjeta.appendChild(infocampeona);                 // Añadir el <li> al <ul>
    });

    tarjeta.appendChild(infoTarjeta);                    // Añade la información visible a la tarjeta

    // Información adicional oculta inicialmente
    const inicialOculta = document.createElement("li");  // Crea un 'li' para la información adicional
    inicialOculta.classList.add("inicialOculta");        // Se asigna la clase "inicialOculta"
    inicialOculta.style.display = "none";                // Inicialmente oculta

    const infoOculta = [                          // Se crea un array con la información oculta
      "Descripción: " + campeona.description,
      "Dato Curioso: " + campeona.facts.datoCurioso,
      campeona.extraInfo,

    ];

    infoOculta.forEach((texto, index) => {                // Recorre el array y se crea un <li> para cada elemento
      const infocampeona = document.createElement('li'); // Se crea un nuevo elemento <li>
      infocampeona.id = `elementoOculto${index + 1}`;    // Asigna un ID único a cada <li>
      infocampeona.textContent = texto;                  // Agrega texto al <li>
      inicialOculta.appendChild(infocampeona);           // Añadir el <li> al contenedor de información oculta
    });

    tarjeta.appendChild(inicialOculta);                  // Añade la información inicial oculta a la tarjeta

    // Creacion boton leer mas y leer menos
    const btnLeerMas = document.createElement("button"); // Crear un botón
    btnLeerMas.textContent = "Leer más";                 // Asigna un name inicial al boton
    btnLeerMas.addEventListener("click", () => {         // Se añade el evento clic al boton
      if (inicialOculta.style.display === "none") {      // Oculta la informacion inicial
        inicialOculta.style.display = "block";           // Muestra la información inicial
        btnLeerMas.textContent = "Leer menos";           // name secundario del boton 
      } else {                                           // Si la información inicial está visible
        inicialOculta.style.display = "none";            // Ocultar la información adicional
        btnLeerMas.textContent = "Leer más";             // Cambiar el texto del botón a "Leer más"
      }
    });

     


    tarjeta.appendChild(btnLeerMas);                     // pone el botón a la tarjeta

    return tarjeta;                                      // Retorna el elemento "ul" creado
  });

  return tarjetas;    // Retorna la lista completa de las tarjetas
};