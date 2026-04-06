# 📘 GUÍA RÁPIDA DE PERSONALIZACIÓN

## ✅ Checklist de Personalización

Usa esta lista para asegurarte de personalizar todo tu portafolio:

### Información Básica (en todos los archivos HTML)
- [ ] Nombre completo
- [ ] Grado/curso
- [ ] Nombre de la institución
- [ ] Foto de perfil (carpeta `images/`)
- [ ] Escudo de la institución (carpeta `images/`)

### Página de Inicio (`index.html`)
- [ ] Descripción en "Sobre Mí"
- [ ] Lista de pasatiempos
- [ ] Objetivos de aprendizaje
- [ ] URLs de archivos Python en GitHub

### Página Artística (`artistica.html`)
- [ ] URLs de imágenes desde GitHub
- [ ] Títulos de cada obra
- [ ] Descripciones de cada obra

### Colores (`css/styles.css`)
- [ ] Color primario
- [ ] Color secundario
- [ ] Color terciario
- [ ] Color de acento

---

## 🎨 Paletas de Colores Sugeridas

### Opción 1: Pastel Clásico (Default)
```css
--color-primario: #B5D8C7;      /* Verde menta */
--color-secundario: #F7DC6F;    /* Amarillo */
--color-terciario: #F8C471;     /* Naranja */
--color-acento: #DDA0DD;        /* Lila */
```

### Opción 2: Océano
```css
--color-primario: #7FB3D5;      /* Azul claro */
--color-secundario: #AED6F1;    /* Azul más claro */
--color-terciario: #85C1E9;     /* Azul medio */
--color-acento: #5DADE2;        /* Azul intenso */
```

### Opción 3: Atardecer
```css
--color-primario: #F5B7B1;      /* Rosa salmón */
--color-secundario: #FADBD8;    /* Rosa claro */
--color-terciario: #F1948A;     /* Coral */
--color-acento: #EC7063;        /* Rojo tomate */
```

### Opción 4: Bosque
```css
--color-primario: #A9DFBF;      /* Verde pastel */
--color-secundario: #ABEBC6;    /* Verde claro */
--color-terciario: #82E0AA;     /* Verde menta */
--color-acento: #58D68D;        /* Verde esmeralda */
```

---

## 🔗 Cómo Obtener URLs de GitHub

### Para Archivos Python:

1. Ve a tu repositorio en GitHub
2. Abre el archivo `.py`
3. Haz clic en el botón **"Raw"** (arriba a la derecha)
4. Copia la URL de la barra de direcciones
5. Pégala en tu HTML

**Ejemplo de URL Raw:**
```
https://raw.githubusercontent.com/usuario/repo/main/archivo.py
```

### Para Imágenes:

1. Ve a tu repositorio en GitHub
2. Abre la imagen
3. Haz clic derecho sobre la imagen
4. Selecciona **"Copiar dirección de imagen"**
5. Pégala en tu HTML

**Ejemplo de URL de imagen:**
```
https://raw.githubusercontent.com/usuario/repo/main/images/foto.jpg
```

---

## 📝 Plantillas de Texto

### Sobre Mí
```
¡Hola! Soy [nombre] y tengo [edad] años. 
Me caracterizo por ser [cualidad 1], [cualidad 2] y [cualidad 3].
Nací en [ciudad] y actualmente estudio en [colegio].

Lo que más me gusta de la escuela es [actividad favorita].
En mi tiempo libre disfruto de [pasatiempo 1] y [pasatiempo 2].

Mi comida favorita es [comida] y mi color preferido es [color].
Un dato curioso sobre mí es que [dato interesante].
```

### Descripción de Obra de Arte
```
Título: [Nombre de la obra]
Técnica: [Dibujo/Pintura/Fotografía/Digital]
Materiales: [Lápiz, acuarela, óleo, etc.]
Año: [Año de creación]

Descripción:
[Explica el significado de tu obra, qué te inspiró,
qué representa y cualquier detalle importante]
```

---

## 🐍 Comandos Python Básicos para el Editor

### Print (Mostrar mensajes)
```python
print("Hola, mundo!")
print("Mi nombre es", nombre)
print("Tengo", 15, "años")
```

### Variables
```python
nombre = "María"
edad = 15
altura = 1.65
es_estudiante = True
```

### Operaciones Matemáticas
```python
suma = 10 + 5        # 15
resta = 10 - 5       # 5
multi = 10 * 5       # 50
div = 10 / 5         # 2.0
potencia = 2 ** 3    # 8
```

### Concatenar Texto
```python
nombre = "Ana"
edad = 14
print("Hola, soy " + nombre + " y tengo " + str(edad) + " años")
# O también:
print("Hola, soy", nombre, "y tengo", edad, "años")
```

---

## 🆘 Solución Rápida de Problemas

| Problema | Solución |
|----------|----------|
| La página se ve en blanco | Verifica que todos los archivos estén en sus carpetas correctas |
| Las imágenes no cargan | Revisa que los nombres de archivo coincidan exactamente (mayúsculas/minúsculas) |
| Los colores no cambian | Guarda el archivo CSS y refresca con `Ctrl+F5` |
| El carrusel no funciona | Verifica que `script.js` esté en la carpeta `js/` |
| El código Python no ejecuta | Asegúrate de usar sintaxis básica (print, variables, operaciones) |

---

## 📂 Estructura de Archivos Recomendada en GitHub

```
mi-portafolio/
├── 📁 images/
│   ├── mi-foto.png
│   ├── escudo.png
│   ├── obra1.jpg
│   ├── obra2.jpg
│   └── obra3.jpg
├── 📁 python/
│   ├── ejemplo1.py
│   ├── ejemplo2.py
│   └── proyecto_final.py
└── 📄 README.md
```

---

## 🎯 Atajos de Teclado Útiles

### En el Editor de Código
| Atajo | Función |
|-------|---------|
| `Ctrl + Enter` | Ejecutar código |
| `Tab` | Indentar (agregar espacios) |
| `Ctrl + A` | Seleccionar todo |
| `Ctrl + C` | Copiar |
| `Ctrl + V` | Pegar |
| `Ctrl + Z` | Deshacer |

### En el Navegador
| Atajo | Función |
|-------|---------|
| `F5` o `Ctrl + R` | Refrescar página |
| `Ctrl + F5` | Refrescar sin caché |
| `F12` | Abrir consola de desarrollador |
| `Ctrl + +` | Aumentar zoom |
| `Ctrl + -` | Disminuir zoom |

---

## 💡 Consejos Pro

1. **Guarda frecuentemente** - Usa `Ctrl + S` cada pocos minutos
2. **Prueba en diferentes dispositivos** - Abre tu página en celular y tablet
3. **Haz copias de seguridad** - Guarda versiones anteriores antes de cambios grandes
4. **Comenta tu código** - Agrega `#` al inicio de líneas para dejar notas
5. **Sé consistente** - Usa los mismos colores y estilos en todas las páginas

---

**¡Recuerda: La práctica hace al maestro!** 🚀
