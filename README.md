Proyecto: Crear un Sitio Web Simple con Flask

Este proyecto es una aplicación web sencilla creada con Flask en Python. Permite ingresar texto en una caja de entrada, mostrarlo en una ventana emergente y cambiar el color del fondo mediante un botón.

Estructura del Proyecto

crear-sitio-simple/
│── app.py            # Código principal de la aplicación Flask
│── templates/
│   └── index.html    # Página principal con HTML
│── static/
│   ├── styles.css    # Estilos de la página
│   └── script.js     # Lógica de interacción en JavaScript

Explicación de los Archivos

1️⃣ app.py (Servidor Flask)

Es el código principal que inicia el servidor.

Muestra la página web cuando accedemos a http://127.0.0.1:5000/.

2️⃣ templates/index.html (Página Web)

Contiene la estructura del sitio.

Tiene una caja de texto, botones y una ventana emergente.

Carga los archivos CSS y JS correctamente usando url_for('static', filename='styles.css').

3️⃣ static/styles.css (Estilos Visuales)

Define los colores, tamaños y diseño de la página.

Se usa para dar estilo a la ventana emergente y los botones.

4️⃣ static/script.js (Lógica en JavaScript)

Escucha el Enter en la caja de texto y muestra la ventana emergente con el texto ingresado.

Permite cambiar el color de fondo en la ventana emergente con un botón.

Cómo Ejecutar el Proyecto 🚀

Asegúrate de tener Python instalado.

Instala Flask si no lo tienes:

pip install flask

Corre el servidor ejecutando:

python app.py

Abre un navegador y visita:👉 http://127.0.0.1:5000/

Notas 📌

Si los estilos o scripts no cargan, revisa que styles.css y script.js estén en la carpeta static/.

Si hay errores 404 en la consola, asegúrate de que en index.html las rutas sean correctas:
