# 🎓 Mi Portafolio Estudiantil

¡Bienvenido a tu portafolio estudiantil digital! Este proyecto te permitirá mostrar tu información personal, tus proyectos de arte, y practicar programación con Python.

---

## 📁 Estructura del Proyecto

```
mi-portafolio-estudiantil/
│
├── 📄 index.html              ← Página principal (Home)
├── 📄 artistica.html          ← Galería de arte
├── 📄 tecnologia.html         ← Sección de tecnología
│
├── 📁 css/
│   └── 📄 styles.css          ← Estilos de la página
│
├── 📁 js/
│   └── 📄 script.js           ← Funcionalidades interactivas
│
├── 📁 images/                 ← Guarda aquí tus fotos e imágenes
│   ├── mi-foto.png           ← Tu foto de perfil
│   └── escudo.png            ← Escudo de la institución
│
├── 📁 python-files/           ← Archivos .py de ejemplo
│   └── ejemplo_basico.py
│
├── 📁 projects/               ← Proyectos futuros
│
└── 📄 README.md               ← Este archivo (instrucciones)
```

---

## 🚀 Cómo Empezar

### Paso 1: Personaliza tu información

Abre cada archivo `.html` y busca los textos entre corchetes `[ ]`. Reemplázalos con tu información:

| Campo | Archivo | Ejemplo |
|-------|---------|---------|
| Nombre | Todos los `.html` | `[Tu Nombre Completo]` → `María García` |
| Grado | Todos los `.html` | `[Tu Grado]` → `10° B` |
| Institución | Todos los `.html` | `[Nombre de tu Institución]` → `Colegio San José` |
| Foto | `images/mi-foto.png` | Sube tu foto a la carpeta `images` |
| Escudo | `images/escudo.png` | Sube el escudo de tu colegio |

### Paso 2: Personaliza los colores

Abre `css/styles.css` y busca la **SECCIÓN 1: PALETA DE COLORES**. Cambia los colores por tus favoritos:

```css
:root {
    --color-primario: #B5D8C7;      /* Cambia este color */
    --color-secundario: #F7DC6F;    /* Cambia este color */
    --color-terciario: #F8C471;     /* Cambia este color */
    --color-acento: #DDA0DD;        /* Cambia este color */
}
```

**Herramientas para elegir colores:**
- [Color Hunt](https://colorhunt.co) - Paletas de colores profesionales
- [Coolors](https://coolors.co) - Generador de paletas
- [Adobe Color](https://color.adobe.com) - Herramienta avanzada

### Paso 3: Agrega tu contenido

#### En `index.html`:
- **Sección "Sobre Mí"**: Escribe una descripción sobre ti
- **Sección "Mis Pasatiempos"**: Lista tus hobbies
- **Sección "Lo Que Deseo Aprender"**: Escribe tus objetivos

#### En `artistica.html`:
- Sube tus obras de arte a GitHub
- Copia los enlaces "raw" de GitHub
- Reemplaza las URLs en el carrusel

---

## 🎨 Personalización Avanzada

### Cambiar la tipografía

En `css/styles.css`, busca:

```css
--fuente-principal: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--fuente-titulos: 'Georgia', serif;
```

Puedes usar fuentes de [Google Fonts](https://fonts.google.com).

### Cambiar el tiempo del carrusel

En `js/script.js`, busca:

```javascript
this.tiempoTransicion = 5000;  // 5000 = 5 segundos
```

Cambia el número a tu preferencia (en milisegundos).

---

## 🐍 Cómo Conectar GitHub

### Para archivos Python:

1. Crea una cuenta en [GitHub](https://github.com)
2. Crea un nuevo repositorio
3. Sube tus archivos `.py`
4. Abre el archivo en GitHub
5. Haz clic en "Raw" para obtener el enlace directo
6. Copia esa URL y pégala en `index.html`

**Ejemplo:**
```html
<a href="https://raw.githubusercontent.com/TU_USUARIO/TU_REPO/main/mi_archivo.py" 
   target="_blank" class="btn-ver">Ver código</a>
```

### Para imágenes:

1. Sube las imágenes a tu repositorio de GitHub
2. Abre la imagen en GitHub
3. Haz clic derecho → "Copiar dirección de imagen"
4. Pega la URL en `artistica.html`

**Ejemplo:**
```html
<img src="https://raw.githubusercontent.com/TU_USUARIO/TU_REPO/main/images/obra1.jpg" 
     alt="Mi obra de arte" class="carrusel-imagen">
```

---

## 📱 Vista Previa

Para ver tu portafolio:

1. **Opción 1 - Doble clic**: Haz doble clic en `index.html`
2. **Opción 2 - VS Code**: Instala la extensión "Live Server" y haz clic en "Go Live"
3. **Opción 3 - Navegador**: Arrastra el archivo `index.html` a tu navegador

---

## ⚠️ Zonas de No Tocar

Para evitar que tu página se dañe, **NO MODIFIQUES**:

| Archivo | Sección | Razón |
|---------|---------|-------|
| `styles.css` | SECCIÓN 3: DISEÑO RESPONSIVO | Hace que tu página se vea bien en celulares |
| `styles.css` | Selectores con `:` (pseudoclases) | Controlan estados como hover |
| `script.js` | SECCIÓN 3: FUNCIONES DE UTILIDAD | Funciones internas del sistema |
| Todos los `.html` | Etiquetas `<html>`, `<head>`, `<body>` | Estructura básica de la página |

---

## 🎯 Funcionalidades del Editor Python

El editor en `index.html` puede ejecutar:

✅ **Funciona:**
- `print()` - Mostrar mensajes
- Variables y asignaciones
- Operaciones matemáticas básicas
- Concatenación de strings

⚠️ **Limitado:**
- Estructuras de control (if, for, while)
- Funciones definidas por el usuario
- Importación de librerías

💡 **Tip:** Usa los botones de ejemplo para cargar código predefinido.

---

## 🆘 Solución de Problemas

### Las imágenes no se ven
- Verifica que el nombre del archivo sea exactamente igual
- Asegúrate de que la imagen esté en la carpeta correcta
- Usa extensiones en minúscula: `.jpg`, `.png`, `.jpeg`

### Los colores no cambian
- Guarda el archivo después de editar
- Refresca la página con `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
- Verifica que no haya errores de sintaxis en el CSS

### El carrusel no funciona
- Asegúrate de que haya al menos una imagen
- Verifica que `script.js` esté correctamente enlazado
- Abre la consola del navegador (F12) para ver errores

---

## 📚 Recursos de Aprendizaje

### HTML y CSS
- [MDN Web Docs](https://developer.mozilla.org/es/) - Documentación oficial
- [W3Schools](https://www.w3schools.com/) - Tutoriales interactivos
- [freeCodeCamp](https://www.freecodecamp.org/) - Cursos gratuitos

### Python
- [Python.org](https://docs.python.org/es/3/) - Documentación oficial
- [Codecademy](https://www.codecademy.com/) - Aprende a programar
- [Automate the Boring Stuff](https://automatetheboringstuff.com/) - Libro gratuito

### GitHub
- [GitHub Guides](https://guides.github.com/) - Tutoriales oficiales
- [GitHub Learning Lab](https://lab.github.com/) - Aprende con práctica

---

## 🌟 Ideas para Expandir tu Portafolio

### Página de Inicio
- [ ] Agregar una sección de logros o reconocimientos
- [ ] Incluir un formulario de contacto
- [ ] Agregar enlaces a redes sociales

### Artística
- [ ] Agregar más imágenes al carrusel
- [ ] Crear categorías (dibujo, pintura, fotografía)
- [ ] Agregar videos de procesos creativos

### Tecnología
- [ ] Crear una galería de proyectos Python
- [ ] Agregar un blog técnico
- [ ] Incluir certificados o diplomas digitales

---

## 📝 Licencia

Este proyecto es de uso educativo. Puedes modificarlo y compartirlo libremente.

---

## 🙋‍♂️ ¿Necesitas Ayuda?

Si tienes dudas o problemas:

1. Revisa los comentarios en el código
2. Consulta con tu profesor de Informática
3. Busca en los recursos de aprendizaje
4. Pide ayuda a tus compañeros

---

**¡Diviértete creando tu portafolio!** 🚀✨

*Creado con ❤️ para estudiantes de informática*
