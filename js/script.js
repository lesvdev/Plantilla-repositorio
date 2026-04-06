/* ============================================
   MI PORTAFOLIO ESTUDIANTIL - JAVASCRIPT
   ============================================
   
   INSTRUCCIONES PARA ESTUDIANTES:
   
   Este archivo contiene todas las funciones que hacen
   que tu página sea interactiva. 
   
   SECCIÓN 1: CARRUSEL DE IMÁGENES
   - Controla el carrusel de la página artística
   
   SECCIÓN 2: EDITOR DE CÓDIGO PYTHON
   - Permite ejecutar código Python básico
   
   ⚠️  SECCIÓN 3: NO MODIFICAR
   - Funciones internas del sistema
   
   ============================================ */

// ============================================
// SECCIÓN 1: CARRUSEL DE IMÁGENES (Artística)
// ============================================
// Esta sección controla el carrusel de imágenes
// Puedes personalizar la velocidad de transición
// ============================================

class Carrusel {
    constructor() {
        this.slides = document.querySelectorAll('.carrusel-slide');
        this.indicadores = document.querySelectorAll('.indicador');
        this.slideActual = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        
        // TIEMPO DE TRANSICIÓN (en milisegundos)
        // Puedes cambiar este valor para que las imágenes 
        // cambien más rápido o más lento
        // 3000 = 3 segundos, 5000 = 5 segundos
        this.tiempoTransicion = 5000;
        
        this.inicializar();
    }
    
    inicializar() {
        // Si no hay slides, no hacer nada
        if (this.totalSlides === 0) return;
        
        // Mostrar el primer slide
        this.mostrarSlide(0);
        
        // Iniciar reproducción automática
        this.iniciarAutoPlay();
        
        // Agregar eventos a los botones
        const btnAnterior = document.querySelector('.carrusel-btn.anterior');
        const btnSiguiente = document.querySelector('.carrusel-btn.siguiente');
        
        if (btnAnterior) {
            btnAnterior.addEventListener('click', () => {
                this.anterior();
                this.reiniciarAutoPlay();
            });
        }
        
        if (btnSiguiente) {
            btnSiguiente.addEventListener('click', () => {
                this.siguiente();
                this.reiniciarAutoPlay();
            });
        }
        
        // Agregar eventos a los indicadores
        this.indicadores.forEach((indicador, index) => {
            indicador.addEventListener('click', () => {
                this.mostrarSlide(index);
                this.reiniciarAutoPlay();
            });
        });
    }
    
    mostrarSlide(index) {
        // Validar índice
        if (index < 0) index = this.totalSlides - 1;
        if (index >= this.totalSlides) index = 0;
        
        this.slideActual = index;
        
        // Ocultar todos los slides
        this.slides.forEach(slide => {
            slide.classList.remove('activo');
        });
        
        // Desactivar todos los indicadores
        this.indicadores.forEach(indicador => {
            indicador.classList.remove('activo');
        });
        
        // Mostrar el slide actual
        this.slides[this.slideActual].classList.add('activo');
        
        // Activar el indicador actual
        if (this.indicadores[this.slideActual]) {
            this.indicadores[this.slideActual].classList.add('activo');
        }
    }
    
    siguiente() {
        this.mostrarSlide(this.slideActual + 1);
    }
    
    anterior() {
        this.mostrarSlide(this.slideActual - 1);
    }
    
    iniciarAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.siguiente();
        }, this.tiempoTransicion);
    }
    
    reiniciarAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.iniciarAutoPlay();
    }
}

// ============================================
// SECCIÓN 2: EDITOR DE CÓDIGO PYTHON
// ============================================
// Esta sección permite ejecutar código Python
// básico directamente en el navegador
// ============================================

class EditorPython {
    constructor() {
        this.editor = document.getElementById('editor-codigo');
        this.consola = document.getElementById('consola-salida');
        this.btnEjecutar = document.getElementById('btn-ejecutar');
        this.btnLimpiar = document.getElementById('btn-limpiar');
        
        this.inicializar();
    }
    
    inicializar() {
        if (!this.editor || !this.consola) return;
        
        // Evento para ejecutar código
        if (this.btnEjecutar) {
            this.btnEjecutar.addEventListener('click', () => {
                this.ejecutarCodigo();
            });
        }
        
        // Evento para limpiar consola
        if (this.btnLimpiar) {
            this.btnLimpiar.addEventListener('click', () => {
                this.limpiarConsola();
            });
        }
        
        // Atajo de teclado: Ctrl+Enter para ejecutar
        this.editor.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                this.ejecutarCodigo();
            }
        });
    }
    
    ejecutarCodigo() {
        const codigo = this.editor.value;
        
        if (!codigo.trim()) {
            this.mostrarMensaje('⚠️ Escribe algún código antes de ejecutar.', 'error');
            return;
        }
        
        this.mostrarCargando();
        
        // Simular tiempo de ejecución
        setTimeout(() => {
            try {
                const resultado = this.interpretarPython(codigo);
                this.mostrarResultado(resultado);
            } catch (error) {
                this.mostrarMensaje(`❌ Error: ${error.message}`, 'error');
            }
        }, 500);
    }
    
    interpretarPython(codigo) {
        let salida = [];
        let variables = {};
        
        const lineas = codigo.split('\n');
        
        for (let linea of lineas) {
            linea = linea.trim();
            
            // Ignorar líneas vacías y comentarios
            if (!linea || linea.startsWith('#')) continue;
            
            // print()
            if (linea.startsWith('print(')) {
                const match = linea.match(/print\((.*)\)/);
                if (match) {
                    const contenido = match[1];
                    const resultado = this.evaluarExpresion(contenido, variables);
                    salida.push(resultado);
                }
            }
            // Asignación de variables
            else if (linea.includes('=') && !linea.includes('==')) {
                const partes = linea.split('=');
                const nombreVar = partes[0].trim();
                const valor = this.evaluarExpresion(partes[1].trim(), variables);
                variables[nombreVar] = valor;
            }
            // input()
            else if (linea.includes('input(')) {
                const match = linea.match(/(\w+)\s*=\s*input\((.*)\)/);
                if (match) {
                    const nombreVar = match[1];
                    const mensaje = this.evaluarExpresion(match[2], variables);
                    salida.push(`📝 ${mensaje}`);
                    // Simular entrada del usuario
                    variables[nombreVar] = "[entrada del usuario]";
                }
            }
            // Estructuras de control básicas (simplificadas)
            else if (linea.startsWith('if ') || linea.startsWith('elif ') || 
                     linea.startsWith('else:') || linea.startsWith('for ') ||
                     linea.startsWith('while ')) {
                salida.push(`⚠️ Nota: Las estructuras de control complejas requieren un intérprete completo.`);
            }
        }
        
        return salida.join('\n') || '✅ Código ejecutado (sin salida)';
    }
    
    evaluarExpresion(expresion, variables) {
        expresion = expresion.trim();
        
        // Quitar comillas de strings
        if ((expresion.startsWith('"') && expresion.endsWith('"')) ||
            (expresion.startsWith("'") && expresion.endsWith("'"))) {
            return expresion.slice(1, -1);
        }
        
        // Concatenación de strings con +
        if (expresion.includes('+')) {
            const partes = expresion.split('+').map(p => this.evaluarExpresion(p.trim(), variables));
            return partes.join('');
        }
        
        // Variables
        if (variables[expresion] !== undefined) {
            return variables[expresion];
        }
        
        // Operaciones matemáticas simples
        try {
            // Reemplazar variables en la expresión
            let expresionEval = expresion;
            for (let [nombre, valor] of Object.entries(variables)) {
                if (typeof valor === 'number') {
                    expresionEval = expresionEval.replace(new RegExp(`\\b${nombre}\\b`, 'g'), valor);
                }
            }
            
            // Evaluar solo si parece seguro
            if (/^[\d\s\+\-\*\/\(\)\.]+$/.test(expresionEval)) {
                return eval(expresionEval);
            }
        } catch (e) {
            // Ignorar errores de evaluación
        }
        
        return expresion;
    }
    
    mostrarResultado(resultado) {
        const fecha = new Date().toLocaleTimeString();
        this.consola.innerHTML = `🕐 ${fecha}\n${'='.repeat(40)}\n${resultado}\n${'='.repeat(40)}`;
        this.consola.classList.remove('error');
    }
    
    mostrarMensaje(mensaje, tipo) {
        this.consola.textContent = mensaje;
        if (tipo === 'error') {
            this.consola.classList.add('error');
        } else {
            this.consola.classList.remove('error');
        }
    }
    
    mostrarCargando() {
        this.consola.innerHTML = '<span class="cargando"></span> Ejecutando código...';
    }
    
    limpiarConsola() {
        this.consola.textContent = '📟 Consola lista para nuevos resultados...';
        this.consola.classList.remove('error');
    }
}

// ============================================
// SECCIÓN 3: FUNCIONES DE UTILIDAD
// ============================================
// ⚠️ NO MODIFICAR ESTA SECCIÓN
// Estas funciones son necesarias para el 
// funcionamiento correcto de la página
// ============================================

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrusel si existe
    const carruselElement = document.querySelector('.carrusel-container');
    if (carruselElement) {
        window.miCarrusel = new Carrusel();
    }
    
    // Inicializar editor Python si existe
    const editorElement = document.getElementById('editor-codigo');
    if (editorElement) {
        window.miEditor = new EditorPython();
    }
    
    // Agregar efectos de animación al scroll
    inicializarAnimacionesScroll();
});

// Animaciones al hacer scroll
function inicializarAnimacionesScroll() {
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    tarjetas.forEach(tarjeta => {
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(20px)';
        tarjeta.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(tarjeta);
    });
}

// Función para cargar código de ejemplo en el editor
function cargarEjemplo(tipo) {
    const editor = document.getElementById('editor-codigo');
    if (!editor) return;
    
    const ejemplos = {
        hola: `# Mi primer programa en Python
# Este código muestra un mensaje en pantalla

print("¡Hola, mundo!")
print("Mi nombre es [Tu nombre]")
print("Estoy aprendiendo a programar 🚀")`,
        
        variables: `# Trabajando con variables
# Las variables guardan información

nombre = "[Tu nombre]"
edad = 15
grado = "10°"

print("Nombre:", nombre)
print("Edad:", edad)
print("Grado:", grado)

# También podemos hacer operaciones
año_nacimiento = 2024 - edad
print("Año de nacimiento:", año_nacimiento)`,
        
        matematicas: `# Operaciones matemáticas en Python

# Suma
resultado1 = 10 + 5
print("10 + 5 =", resultado1)

# Resta
resultado2 = 20 - 8
print("20 - 8 =", resultado2)

# Multiplicación
resultado3 = 7 * 6
print("7 x 6 =", resultado3)

# División
resultado4 = 100 / 4
print("100 / 4 =", resultado4)

# ¡Puedes crear tus propias operaciones!
print("\n¡Ahora prueba con tus propios números!")`,
        
        personalizado: `# Escribe tu propio código aquí
# ¡Sé creativo!

print("¡Hola! Este es mi código personalizado")

# Agrega más líneas de código aquí
# Recuerda que puedes usar:
# - print() para mostrar mensajes
# - Variables para guardar datos
# - Operaciones matemáticas

`
    };
    
    editor.value = ejemplos[tipo] || ejemplos.personalizado;
}

// Función para cambiar entre temas de colores
function cambiarTema(tema) {
    const root = document.documentElement;
    
    const temas = {
        pastel: {
            primario: '#B5D8C7',
            secundario: '#F7DC6F',
            terciario: '#F8C471',
            acento: '#DDA0DD'
        },
        oceano: {
            primario: '#7FB3D5',
            secundario: '#AED6F1',
            terciario: '#85C1E9',
            acento: '#5DADE2'
        },
        atardecer: {
            primario: '#F5B7B1',
            secundario: '#FADBD8',
            terciario: '#F1948A',
            acento: '#EC7063'
        },
        bosque: {
            primario: '#A9DFBF',
            secundario: '#ABEBC6',
            terciario: '#82E0AA',
            acento: '#58D68D'
        }
    };
    
    const colores = temas[tema];
    if (colores) {
        root.style.setProperty('--color-primario', colores.primario);
        root.style.setProperty('--color-secundario', colores.secundario);
        root.style.setProperty('--color-terciario', colores.terciario);
        root.style.setProperty('--color-acento', colores.acento);
    }
}

// Exportar funciones para uso global
window.cargarEjemplo = cargarEjemplo;
window.cambiarTema = cambiarTema;
