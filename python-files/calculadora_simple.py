# ============================================
# CALCULADORA SIMPLE
# ============================================
# Este programa es una calculadora básica
# que realiza operaciones matemáticas simples.
# 
# INSTRUCCIONES:
# 1. Copia este código al editor
# 2. Modifica los números para hacer tus propias operaciones
# 3. Agrega más operaciones si lo deseas
# ============================================

print("=" * 40)
print("🧮 CALCULADORA SIMPLE")
print("=" * 40)

# Definir los números
numero1 = 25
numero2 = 7

print("\nNúmeros a operar:")
print("Primer número:", numero1)
print("Segundo número:", numero2)
print("-" * 40)

# Realizar operaciones
suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2
division = numero1 / numero2
division_entera = numero1 // numero2
residuo = numero1 % numero2
potencia = numero1 ** 2

# Mostrar resultados
print("\n📊 RESULTADOS:")
print("-" * 40)
print("Suma (+):", suma)
print("Resta (-):", resta)
print("Multiplicación (*):", multiplicacion)
print("División (/):", round(division, 2))
print("División entera (//):", division_entera)
print("Residuo (%):", residuo)
print("Potencia al cuadrado:", potencia)

# Calcular promedio
promedio = (numero1 + numero2) / 2
print("\n📈 PROMEDIO:", promedio)

# Calcular área de un rectángulo
print("\n📐 ÁREA DE RECTÁNGULO:")
print("Base:", numero1)
print("Altura:", numero2)
area = numero1 * numero2
print("Área:", area)

print("\n" + "=" * 40)
print("¡Prueba cambiando los números!")
print("=" * 40)
