// Variables controladoras
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');


// El valor 50 es el radio del infospot
// Crea y agrega el primer infospot

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

// Establecen las coordenadas x, y, z (posición tridimensional del infospot dentro de la panorámica)
// Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);

// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText("Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles " +
    "horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. " +
    "En las especificaciones de los televisores, las resoluciones generalmente se muestran como “3840 x 2160” para televisores 4K.", 
    -60
);

// Personalización del contenido del infospot con HTML y estilos CSS en línea
infospot1.element.innerHTML = 
    '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; ' +
    'padding: 10px; font-size: 14px; width: 200px;">' +
    'Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles ' +
    'horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. ' +
    'En las especificaciones de los televisores, las resoluciones generalmente se muestran como “3840 x 2160” para televisores 4K.' +
    '</div>';

// Agrega el infospot a la panorámica
panorama.add(infospot1);


// Crea y agrega el segundo infospot
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(1000, -100, 1000);
infospot2.addHoverText('Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,255,0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).</div>';
panorama.add(infospot2);




// Crea y agrega el tercer infospot
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info); // El valor 50 es el radio del infospot

// Establecer las coordenadas x, y y z (posición tridimensional del infospot dentro de la panorámica)
infospot3.position.set(-430, 50, -1000);

// Agregar texto al infospot
infospot3.addHoverText('', -60); // -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.

// Insertar el reproductor de video de YouTube en el Infospot
infospot3.element.innerHTML = `
    <div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 720px;">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/e-lQYKYbOtI"></iframe>
    </div>
`;

// Agregar el infospot a la panorámica
panorama.add(infospot3);


// Crear el infospot4
var infospot4 = new PANOLENS.Infospot(250, 'imagenes/info.png');
infospot4.position.set(-4500, -650, -3500);
// Agregar texto de información al infospot
infospot4.addHoverText('', -60);
// Cambiar el contenido del infospot al pasar el mouse
infospot4.element.innerHTML = `
    <div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">
        Un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).
        <br><br>
        <img src="imagenes/pc.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>
`;

panorama.add(infospot4);



// Crea y agrega el sexto infospot
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot5.position.set(265, 50, 940);
// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('Un audio MP3 multimedial...', -60);
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);



// Crea y agrega el sexto infospot
var infospot6 = new PANOLENS.Infospot(50, 'imagenes/info2.png');
infospot6.position.set(-480, -134, 500);
// Agregar texto al hover y poner una posición diferente al texto
infospot6.addHoverText('Entrar al PDF.', 100);
// Crear el contenido del infospot
infospot6.element.innerHTML = `
    <div style="background-color: rgba(0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        Entrar al PDF. El proceso de creación de un sitio web, una aplicación o un software.
    </div>
`;

panorama.add(infospot6);







// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen', // Habilita salida en pantalla completa
    autoHideInfospot: false
});

viewer.add(panorama);