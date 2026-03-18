/**
 * SIMULADOR DE EXAMEN - GENERACIÓN DE CÓDIGO INTERMEDIO (TAC)
 * Desarrollador: Antigravity AI
 * Tema: Unidad 2 - Generación de Código Intermedio
 */

const BANCO_PREGUNTAS = [
    // --- TEORÍA (1-20): Conceptos de Código Intermedio y TAC ---
    {
        pregunta: "¿Cuál es el objetivo principal de la generación de código intermedio en un compilador?",
        opciones: [
            "Optimizar el código fuente antes de ser analizado sintácticamente",
            "Servir como una representación independiente de la arquitectura para facilitar la optimización y portabilidad",
            "Convertir el código directamente a lenguaje máquina binario",
            "Eliminar todos los comentarios y espacios en blanco del programa"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Por qué se denomina 'Código de Tres Direcciones' (TAC)?",
        opciones: [
            "Porque solo puede ejecutarse en tres tipos de procesadores distintos",
            "Porque cada instrucción tiene como máximo tres direcciones: dos operandos y un resultado",
            "Porque utiliza tres niveles de memoria: caché, RAM y disco",
            "Porque el programa se divide en tres secciones: inicio, cuerpo y fin"
        ],
        correcta: 1
    },
    {
        pregunta: "En el contexto de TAC, ¿qué es un 'temporal' (ej. t1, t2)?",
        opciones: [
            "Una variable global que dura toda la ejecución del programa",
            "Una dirección de memoria fija definida por el programador",
            "Una variable generada por el compilador para almacenar resultados de subexpresiones",
            "Un error de compilación que ocurre por falta de memoria"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Cuál de las siguientes es una ventaja de utilizar Código Intermedio?",
        opciones: [
            "Hace que el compilador sea más lento pero más seguro",
            "Permite aplicar optimizaciones que son difíciles de realizar en el código fuente o en el lenguaje máquina",
            "Reduce el tamaño del archivo fuente original",
            "Evita que el programador tenga que declarar variables"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué diferencia principal hay entre un 'Cuádruplo' y un 'Tríplo'?",
        opciones: [
            "El cuádruplo usa cuatro temporales y el tríplo solo tres",
            "El cuádruplo almacena el resultado en un campo explícito; el tríplo usa la posición de la instrucción como referencia",
            "El tríplo es más rápido de generar pero imposible de optimizar",
            "No hay diferencia, son sinónimos en la teoría de compiladores"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué función cumple la instrucción 'Goto L1' en un esquema TAC?",
        opciones: [
            "Finaliza la ejecución del programa",
            "Realiza un salto incondicional hacia la etiqueta denominada L1",
            "Llama a una función externa llamada L1",
            "Define una nueva variable local llamada L1"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Para qué se utilizan las instrucciones 'PushParam' en TAC?",
        opciones: [
            "Para borrar una variable de la memoria",
            "Para colocar los argumentos de una función en la pila antes de realizar la llamada",
            "Para recibir el valor de retorno de una función",
            "Para incrementar el valor de un puntero"
        ],
        correcta: 1
    },
    {
        pregunta: "En la instrucción TAC 'IfZ t1 Goto L1', ¿cuándo se realiza el salto?",
        opciones: [
            "Siempre que se alcance la instrucción",
            "Cuando el valor del temporal t1 es igual a cero (falso)",
            "Cuando el valor del temporal t1 es mayor a cero",
            "Cuando la variable t1 no existe en la tabla de símbolos"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué significa la instrucción 't1 = *(t2)' en el manejo de punteros TAC?",
        opciones: [
            "Multiplicar t1 por el valor de t2",
            "Asignar a t1 el contenido de la dirección de memoria apuntada por t2",
            "Declarar t1 como un puntero hacia t2",
            "Referenciar la dirección física del temporal t1"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el propósito de las instrucciones 'BeginFunc' y 'EndFunc'?",
        opciones: [
            "Indicar el inicio y fin del análisis léxico",
            "Delimitar el bloque de instrucciones que pertenecen al cuerpo de una función",
            "Crear una nueva tabla de símbolos global",
            "Cargar librerías externas al inicio del programa"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué representa una etiqueta (Label) en el código de tres direcciones?",
        opciones: [
            "Un comentario para el programador",
            "Un punto de entrada o destino para instrucciones de salto (Goto)",
            "El nombre de una variable de tipo String",
            "Un marcador de error en el código intermedio"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Para qué sirve la instrucción 'PopParams' después de un 'LCall'?",
        opciones: [
            "Para imprimir los resultados de la función",
            "Para limpiar o retirar de la pila el espacio ocupado por los parámetros pasados",
            "Para guardar el valor de retorno en la memoria RAM",
            "Para reiniciar el contador de temporales"
        ],
        correcta: 1
    },
    {
        pregunta: "Al traducir 'a = b + c * d', ¿cuál es la jerarquía correcta en TAC?",
        opciones: [
            "Primero b + c, luego el resultado * d",
            "Primero c * d, luego b + el resultado",
            "Se pueden realizar en cualquier orden siempre",
            "Depende del tipo de procesador utilizado"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué instrucción se usa para llamar a una función global o de biblioteca conocida por el compilador?",
        opciones: [
            "ACall",
            "LCall",
            "JumpFunc",
            "Invoke"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es una VTable en la generación de código para lenguajes orientados a objetos?",
        opciones: [
            "Una tabla que almacena todas las variables locales",
            "Una estructura que permite el despacho dinámico de métodos (polimorfismo)",
            "Un tipo de dato para manejar arreglos multidimensionales",
            "Una técnica para optimizar ciclos While"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué instrucción TAC se asocia típicamente con el retorno de un valor desde una función?",
        opciones: [
            "Exit t1",
            "Return t1",
            "Pop t1",
            "Result t1"
        ],
        correcta: 1
    },
    {
        pregunta: "En la traducción de 'arr[i] = 10', ¿por qué se suele calcular 't1 = i * 4'?",
        opciones: [
            "Porque el índice se debe multiplicar por el tamaño en bytes del tipo (ej. int = 4 bytes)",
            "Porque solo se permiten índices pares en TAC",
            "Para asegurar que el índice no sea negativo",
            "Es el offset obligatorio para cualquier arreglo"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es la 'reutilización de temporales'?",
        opciones: [
            "Usar el mismo nombre de temporal para diferentes propósitos una vez que su valor previo ya no es necesario",
            "Copiar el valor de t1 en t2 siempre",
            "Declarar todos los temporales como constantes",
            "Un error donde dos variables apuntan al mismo temporal"
        ],
        correcta: 0
    },
    {
        pregunta: "¿En qué nivel de la jerarquía de representaciones intermedias (IR) se sitúa generalmente el TAC?",
        opciones: [
            "Nivel muy alto (cercano al código fuente)",
            "Nivel medio-bajo (cercano al ensamblador pero genérico)",
            "Nivel físico (cercano a los voltajes del CPU)",
            "Nivel semántico (cercano al árbol sintáctico decorado)"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el formato estándar de una asignación en TAC?",
        opciones: [
            "x = y op z",
            "x := y + z + w",
            "x = op y",
            "x = y op z (donde op es un operador binario)"
        ],
        correcta: 3
    },

    // --- PRÁCTICA: EXPRESIONES Y ASIGNACIONES (21-40) ---
    {
        pregunta: "Convertir a TAC: x = a + b * c - d",
        opciones: [
            "t1 = a + b\nt2 = t1 * c\nt3 = t2 - d\nx = t3",
            "t1 = b * c\nt2 = a + t1\nt3 = t2 - d\nx = t3",
            "t1 = c - d\nt2 = b * t1\nt3 = a + t2\nx = t3",
            "t1 = a + b\nt2 = c - d\nx = t1 * t2"
        ],
        correcta: 1
    },
    {
        pregunta: "Convertir a TAC: y = (a + b) / (c - d)",
        opciones: [
            "t1 = a + b\nt2 = c - d\nt3 = t1 / t2\ny = t3",
            "t1 = a + b / c - d\ny = t1",
            "t1 = a + b\nt2 = t1 / c\nt3 = t2 - d\ny = t3",
            "t1 = c - d\nt2 = a + b / t2\ny = t2"
        ],
        correcta: 0
    },
    {
        pregunta: "Dada la expresión Java: 'int x = 10 * 5 + 2;', ¿cuál es su TAC correcto?",
        opciones: [
            "t1 = 10 * 5\nt2 = t1 + 2\nx = t2",
            "t1 = 5 + 2\nt2 = 10 * t1\nx = t2",
            "t1 = 10\nt2 = 5\nt3 = 2\nx = t1 * t2 + t3",
            "x = 50 + 2"
        ],
        correcta: 0
    },
    {
        pregunta: "Convertir a TAC: z = a % b + c * d / e",
        opciones: [
            "t1 = a % b\nt2 = c * d\nt3 = t2 / e\nt4 = t1 + t3\nz = t4",
            "t1 = c * d\nt2 = a % b\nt3 = t2 + t1\nt4 = t3 / e\nz = t4",
            "t1 = a % b + c\nt2 = t1 * d\nt3 = t2 / e\nz = t3",
            "t1 = d / e\nt2 = c * t1\nt3 = a % b\nt4 = t3 + t2\nz = t4"
        ],
        correcta: 0
    },
    {
        pregunta: "C: 'float res = (a + b) * (a + b);', ¿cuál es la traducción TAC mecánica?",
        opciones: [
            "t1 = a + b\nt2 = a + b\nt3 = t1 * t2\nres = t3",
            "t1 = a + b\nt2 = t1 * t1\nres = t2",
            "t1 = a * a\nt2 = b * b\nt3 = t1 + t2\nres = t3",
            "t1 = a + b\nt2 = a + b\nres = t1 * t2"
        ],
        correcta: 0
    },
    {
        pregunta: "Convertir a TAC: x = -a + b * -c",
        opciones: [
            "t1 = - a\nt2 = - c\nt3 = b * t2\nt4 = t1 + t3\nx = t4",
            "t1 = a + b\nt2 = t1 * c\nx = - t2",
            "t1 = - a\nt2 = b * c\nt3 = t1 + t2\nx = t3",
            "t1 = a\nt2 = c\nt3 = b * t2\nx = t1 + t3"
        ],
        correcta: 0
    },
    {
        pregunta: "Python: 'resultado = x ** 2 + y ** 2', ¿cómo se representa en TAC estándar?",
        opciones: [
            "t1 = x ** 2\nt2 = y ** 2\nt3 = t1 + t2\nresultado = t3",
            "t1 = x * x\nt2 = y * y\nt3 = t1 + t2\nresultado = t3",
            "t1 = pow(x, 2)\nt2 = pow(y, 2)\nt3 = t1 + t2\nresultado = t3",
            "Todas las anteriores son válidas dependiendo de cómo el compilador maneje el operador **"
        ],
        correcta: 3
    },
    {
        pregunta: "Convertir a TAC (asociatividad izquierda): a = b + c + d + e",
        opciones: [
            "t1 = b + c\nt2 = t1 + d\nt3 = t2 + e\na = t3",
            "t1 = d + e\nt2 = c + t1\nt3 = b + t2\na = t3",
            "t1 = b + c + d\nt2 = t1 + e\na = t2",
            "t1 = b + c\nt2 = d + e\na = t1 + t2"
        ],
        correcta: 0
    },
    {
        pregunta: "Convertir a TAC (corto-circuito): x = (a > b) && (c < d)",
        opciones: [
            "t1 = a > b\nt2 = c < d\nt3 = t1 && t2\nx = t3",
            "t1 = a > b\nIfZ t1 Goto L1\nt2 = c < d\nx = t2\nGoto L2\nL1: x = 0\nL2: End",
            "t1 = a > b\nt2 = c < d\nx = t1 & t2",
            "x = (a > b) & (c < d)"
        ],
        correcta: 1
    },
    {
        pregunta: "Convertir a TAC: val = a == b || a == c",
        opciones: [
            "t1 = a == b\nt2 = a == c\nt3 = t1 || t2\nval = t3",
            "t1 = a == b\nIf t1 Goto L1\nt2 = a == c\nIfZ t2 Goto L2\nL1: val = 1\nGoto L3\nL2: val = 0\nL3:",
            "val = (a == b) | (a == c)",
            "t1 = a == b\nIf t1 Goto L1\nt2 = a == c\nIf t2 Goto L1\nval = 0\nGoto L2\nL1: val = 1\nL2: End"
        ],
        correcta: 1
    },
    {
        pregunta: "Convertir a TAC la asignación: x = a[i]",
        opciones: [
            "t1 = i * 4\nt2 = a + t1\nt3 = *(t2)\nx = t3",
            "t1 = a[i]\nx = t1",
            "t1 = i\nx = a + t1",
            "x = *a + i"
        ],
        correcta: 0
    },
    {
        pregunta: "Convertir a TAC: a[i] = b + c",
        opciones: [
            "t1 = b + c\nt2 = i * 4\nt3 = a + t2\n*(t3) = t1",
            "a[i] = b + c",
            "t1 = i * 4\nt2 = a + t1\nt3 = b + c\n*(t2) = t3",
            "t1 = b + c\nt2 = i * 4\n*(a + t2) = t1"
        ],
        correcta: 2
    },
    {
        pregunta: "PHP: '$msg = \"Hola \" . $nombre;', ¿cómo se traduce la concatenación formal en TAC?",
        opciones: [
            "t1 = \"Hola \" + nombre\nmsg = t1",
            "PushParam nombre\nPushParam \"Hola \"\nt1 = LCall _StringConcat\nPopParams 8\nmsg = t1",
            "t1 = \"Hola \" . nombre\nmsg = t1",
            "t1 = \"Hola \"\nt2 = nombre\nmsg = t1 + t2"
        ],
        correcta: 1
    },
    {
        pregunta: "Traducir a TAC: x = a + b * (c + d) / e",
        opciones: [
            "t1 = c + d\nt2 = b * t1\nt3 = t2 / e\nt4 = a + t3\nx = t4",
            "t1 = b * c\nt2 = t1 + d\nt3 = t2 / e\nt4 = a + t3\nx = t4",
            "t1 = c + d\nt2 = t1 / e\nt3 = b * t2\nt4 = a + t3\nx = t4",
            "t1 = a + b\nt2 = c + d\nt3 = t1 * t2\nx = t3 / e"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir a TAC: x = y = z + 1",
        opciones: [
            "t1 = z + 1\ny = t1\nx = y",
            "t1 = z + 1\nx = t1\ny = t1",
            "t1 = z + 1\ny = t1\nx = t1",
            "t1 = z + 1\nt2 = t1\ny = t2\nx = t2"
        ],
        correcta: 2
    },
    {
        pregunta: "Convertir a TAC: a = (b + c) * (b + c) - (b + c)",
        opciones: [
            "t1 = b + c\nt2 = b + c\nt3 = t1 * t2\nt4 = b + c\nt5 = t3 - t4\na = t5",
            "t1 = b + c\nt2 = t1 * t1\nt3 = t2 - t1\na = t3",
            "t1 = b + c\nt2 = t1 + t1\nt3 = t2 - t1\na = t3",
            "t2 = b + c\nt1 = t2 * t2\na = t1 - t2"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el TAC para: v = 10 + ReadInteger()?",
        opciones: [
            "t1 = LCall _ReadInteger\nt2 = 10 + t1\nv = t2",
            "v = 10 + _ReadInteger()",
            "t1 = 10\nt2 = LCall _ReadInteger\nv = t1 + t2",
            "PushParam 10\nt1 = LCall _ReadInteger\nv = t1"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: x = a.campo (acceso a atributo de objeto en offset 4)",
        opciones: [
            "t1 = a + 4\nx = *(t1)",
            "x = a.campo",
            "t1 = *(a + 4)\nx = t1",
            "t1 = a\nx = *(t1 + 4)"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: a.campo = 5 (atributo en offset 4)",
        opciones: [
            "t1 = a + 4\n*(t1) = 5",
            "a.campo = 5",
            "t1 = 5\n*(a + 4) = t1",
            "*(a + 5) = 4"
        ],
        correcta: 0
    },
    {
        pregunta: "C: 'int x = sizeof(int);', ¿cómo se vería en TAC si el compilador ya sabe que int=4?",
        opciones: [
            "t1 = 4\nx = t1",
            "t1 = LCall _SizeOf\nx = t1",
            "x = 4",
            "t1 = sizeof(int)\nx = t1"
        ],
        correcta: 0
    },

    // --- PRÁCTICA: CONDICIONALES Y CICLOS (41-60) ---
    {
        pregunta: "Convertir a TAC: if (a < b) x = a; else x = b;",
        opciones: [
            "t1 = a < b\nIfZ t1 Goto L1\nx = a\nGoto L2\nL1:\nx = b\nL2:\nEnd",
            "t1 = a < b\nIf t1 Goto L1\nx = b\nGoto L2\nL1:\nx = a\nL2:\nEnd",
            "If a < b Goto L1\nx = b\nGoto L2\nL1: x = a\nL2:\nEnd",
            "t1 = a < b\nIfZ t1 Goto L1\nx = b\nGoto L2\nL1: x = a\nL2:\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir a TAC: while (a < 10) a = a + 1;",
        opciones: [
            "L1:\nt1 = a < 10\nIfZ t1 Goto L2\nt2 = a + 1\na = t2\nGoto L1\nL2:\nEnd",
            "L1:\nt1 = a < 10\nIf t1 Goto L2\nGoto L3\nL2:\na = a + 1\nGoto L1\nL3:\nEnd",
            "t1 = a < 10\nL1: IfZ t1 Goto L2\na = a + 1\nGoto L1\nL2:\nEnd",
            "L1: IfZ a < 10 Goto L2\na = a + 1\nGoto L1\nL2:\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Python: 'if x: print(x)', ¿TAC correcto (considerando truthy)?",
        opciones: [
            "IfZ x Goto L1\nPushParam x\nLCall _PrintInt\nPopParams 4\nL1:\nEnd",
            "t1 = x == 0\nIf t1 Goto L1\nPushParam x\nLCall _PrintInt\nPopParams 4\nL1:\nEnd",
            "t1 = bool(x)\nIfZ t1 Goto L1\nPushParam x\nLCall _PrintInt\nPopParams 4\nL1:\nEnd",
            "t1 = x != 0\nIfZ t1 Goto L1\nPushParam x\nLCall _PrintInt\nPopParams 4\nL1:\nEnd"
        ],
        correcta: 1
    },
    {
        pregunta: "Convertir a TAC: for (i=0; i<5; i++) suma += i;",
        opciones: [
            "i = 0\nL1:\nt1 = i < 5\nIfZ t1 Goto L2\nt2 = suma + i\nsuma = t2\nt3 = i + 1\ni = t3\nGoto L1\nL2:\nEnd",
            "i = 0\nL1:\nt1 = i < 5\nIf t1 Goto L2\nGoto L3\nL2:\nsuma = suma + i\ni = i + 1\nGoto L1\nL3:\nEnd",
            "i = 0\nt1 = i < 5\nL1: IfZ t1 Goto L2\nsuma = suma + i\ni = i + 1\nGoto L1\nL2:\nEnd",
            "i = 0\nL1: If i >= 5 Goto L2\nsuma = suma + i\ni = i + 1\nGoto L1\nL2:\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: if (a > b && c > d) x = 1;",
        opciones: [
            "t1 = a > b\nt2 = c > d\nt3 = t1 && t2\nIfZ t3 Goto L1\nx = 1\nL1:\nEnd",
            "t1 = a > b\nIfZ t1 Goto L1\nt2 = c > d\nIfZ t2 Goto L1\nx = 1\nL1:\nEnd",
            "t1 = a > b\nt2 = c > d\nx = t1 & t2\nIfZ x Goto L1\nx = 1\nL1:\nEnd",
            "t1 = a > b\nIfZ t1 Goto L1\nt2 = c > d\nx = t2\nL1:\nEnd"
        ],
        correcta: 1
    },
    {
        pregunta: "Traducir: if (a == 1 || b == 2) x = 0;",
        opciones: [
            "t1 = a == 1\nt2 = b == 2\nt3 = t1 || t2\nIfZ t3 Goto L1\nx = 0\nL1:\nEnd",
            "t1 = a == 1\nIf t1 Goto L2\nt2 = b == 2\nIfZ t2 Goto L1\nL2:\nx = 0\nL1:\nEnd",
            "t1 = a == 1\nt2 = b == 2\nx = t1 | t2\nIfZ x Goto L1\nx = 0\nL1:\nEnd",
            "t1 = a == 1\nIf t1 Goto L2\nt2 = b == 2\nIf t2 Goto L2\nGoto L1\nL2: x = 0\nL1: End"
        ],
        correcta: 1
    },
    {
        pregunta: "Convertir a TAC: do { x = x - 1; } while (x > 0);",
        opciones: [
            "L1:\nt1 = x - 1\nx = t1\nt2 = x > 0\nIf t2 Goto L1\nEnd",
            "L1:\nx = x - 1\nt1 = x > 0\nIfZ t1 Goto L2\nGoto L1\nL2:\nEnd",
            "t1 = x - 1\nx = t1\nL1: If x > 0 Goto L1\nEnd",
            "L1: x = x - 1\nIf x > 0 Goto L1\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: if (a) { b = 1; } else if (c) { b = 2; }",
        opciones: [
            "IfZ a Goto L1\nb = 1\nGoto L2\nL1:\nIfZ c Goto L2\nb = 2\nL2:\nEnd",
            "If a Goto L1\nIf c Goto L2\nGoto L3\nL1: b = 1; Goto L3\nL2: b = 2\nL3:\nEnd",
            "IfZ a Goto L1\nb = 1\nL1: IfZ c Goto L2\nb = 2\nL2:\nEnd",
            "t1 = a\nIfZ t1 Goto L1\nb = 1\nGoto L2\nL1: t2 = c\nIfZ t2 Goto L2\nb = 2\nL2:\nEnd"
        ],
        correcta: 3
    },
    {
        pregunta: "¿Qué TAC representa 'continue' dentro de un bucle while?",
        opciones: [
            "Goto L_inicio_bucle (donde se evalúa la condición nuevamente)",
            "Goto L_fin_bucle",
            "EndFunc",
            "Return"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué TAC representa 'break' dentro de un bucle for?",
        opciones: [
            "Goto L_fin_bucle (después de la salida del bucle)",
            "Goto L_inicio_bucle",
            "Return 0",
            "Halt"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: switch(x) { case 1: y=1; break; }",
        opciones: [
            "t1 = x == 1\nIfZ t1 Goto L_next\ny = 1\nGoto L_end_switch\nL_next: ...\nL_end_switch:\nEnd",
            "If x == 1 Goto L1\nGoto L2\nL1: y = 1\nL2:\nEnd",
            "Switch(x)\nCase 1: y = 1\nGoto EndSwitch\nEnd",
            "t1 = x\nIf t1 != 1 Goto L1\ny = 1\nGoto L2\nL1: ... L2:\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: a = (b > c) ? b : c;",
        opciones: [
            "t1 = b > c\nIfZ t1 Goto L1\na = b\nGoto L2\nL1:\na = c\nL2:",
            "If b > c a = b else a = c",
            "t1 = b\nt2 = c\nt3 = t1 > t2\nIfZ t3 Goto L1\na = t1\nGoto L2\nL1: a = t2\nL2: End",
            "t1 = b\nt2 = c\na = t1 > t2 ? t1 : t2"
        ],
        correcta: 0
    },
    {
        pregunta: "Java: 'if (obj instanceof String) ...', ¿cómo se traduce?",
        opciones: [
            "PushParam \"String\"\nPushParam obj\nt1 = LCall _InstanceOf\nPopParams 8\nIfZ t1 Goto L1",
            "t1 = obj instanceof String",
            "If obj is String Goto L1",
            "t1 = LCall _TypeCheck(obj, \"String\")\nIfZ t1 Goto L1"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir a TAC: if (!(a > b)) x = 1;",
        opciones: [
            "t1 = a > b\nt2 = t1 == 0\nIfZ t2 Goto L1\nx = 1\nL1:",
            "t1 = a > b\nIf t1 Goto L1\nx = 1\nL1:",
            "t1 = a <= b\nIfZ t1 Goto L1\nx = 1\nL1:\nEnd",
            "t1 = a > b\nt2 = NOT t1\nIfZ t2 Goto L1\nx = 1\nL1:\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: while (true) { ... }",
        opciones: [
            "L1:\nt1 = 1\nIfZ t1 Goto L2\n...\nGoto L1\nL2:\nEnd",
            "L1:\n...\nGoto L1",
            "t1 = 1\nL1:\nIfZ t1 Goto L2\n...\nGoto L1\nL2: End",
            "Goto L1\nL1: ...\nEnd"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir a TAC: x = a + (b > 0 ? 10 : 20)",
        opciones: [
            "t1 = b > 0\nIfZ t1 Goto L1\nt2 = 10\nGoto L2\nL1: t2 = 20\nL2:\nt3 = a + t2\nx = t3",
            "t1 = b > 0\nIfZ t1 Goto L1\nx = a + 10\nGoto L2\nL1: x = a + 20\nL2:",
            "t1 = 10\nIf b > 0 Goto L1\nt1 = 20\nL1: x = a + t1\nEnd",
            "t1 = b > 0\nIf t1 Goto L1\nt1 = 10\nGoto L2\nL1: t1 = 20\nL2: x = a + t1"
        ],
        correcta: 0
    },
    {
        pregunta: "Representar un bucle que se ejecuta exactamente 3 veces:",
        opciones: [
            "i = 0\nL1: t1 = i < 3; IfZ t1 Goto L2; ... i = i + 1; Goto L1; L2:\nEnd",
            "i = 3\nL1: IfZ i Goto L2; ... i = i - 1; Goto L1; L2:\nEnd",
            "i = 0\nL1: ... i = i + 1; If i < 3 Goto L1\nEnd",
            "i = 0\nL1: If i == 3 Goto L2\n...\ni = i + 1\nGoto L1\nL2: End"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: if (a == b) { if (c == d) x = 1; }",
        opciones: [
            "t1 = a == b\nIfZ t1 Goto L1\nt2 = c == d\nIfZ t2 Goto L1\nx = 1\nL1:\nEnd",
            "t1 = a == b\nIf t1 Goto L2\nGoto L1\nL2: t2 = c == d; If t2 Goto L3; Goto L1; L3: x = 1\nL1:\nEnd",
            "t1 = a == b\nt2 = c == d\nt3 = t1 & t2\nIfZ t3 Goto L1\nx = 1\nL1:\nEnd",
            "t1 = a == b\nIfZ t1 Goto L1\nt2 = c == d\nIf t2 Goto L2\nGoto L1\nL2: x = 1\nL1: End"
        ],
        correcta: 0
    },
    {
        pregunta: "Python: 'while i < len(lista):', ¿TAC correcto?",
        opciones: [
            "L1:\nPushParam lista\nt1 = LCall _Len\nPopParams 4\nt2 = i < t1\nIfZ t2 Goto L2\n...\nGoto L1\nL2:\nEnd",
            "L1:\nt1 = len(lista)\nt2 = i < t1\nIfZ t2 Goto L2\nGoto L1\nL2:\nEnd",
            "PushParam lista\nt1 = LCall _Len\nPopParams 4\nL1: t2 = i < t1; IfZ t2 Goto L2; ...; i = i + 1; Goto L1; L2:\nEnd",
            "L1: t1 = len(lista); t2 = i < t1; IfZ t2 Goto L2; ...; Goto L1; L2: End"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué sucede con las etiquetas después de la generación de código?",
        opciones: [
            "Se convierten en direcciones de memoria relativas o absolutas",
            "Se borran y el código se vuelve lineal",
            "Se quedan como strings en el binario",
            "El CPU las lee directamente"
        ],
        correcta: 0
    },

    // --- PRÁCTICA: FUNCIONES Y LLAMADAS (61-80) ---
    {
        pregunta: "Convertir a TAC: function suma(a, b) { return a + b; }",
        opciones: [
            "_suma:\nBeginFunc 8\nt1 = a + b\nReturn t1\nEndFunc",
            "suma = a + b",
            "Begin suma(a, b)\nReturn a + b\nEnd",
            "LCall _suma"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir el llamado: r = suma(5, 3);",
        opciones: [
            "PushParam 3\nPushParam 5\nt1 = LCall _suma\nPopParams 8\nr = t1",
            "PushParam 5\nPushParam 3\nt1 = LCall _suma\nPopParams 8\nr = t1",
            "t1 = 5\nt2 = 3\nPushParam t2\nPushParam t1\nt3 = LCall _suma\nPopParams 8\nr = t3",
            "PushParam 5, 3\nt1 = LCall _suma\nr = t1"
        ],
        correcta: 1
    },
    {
        pregunta: "Convertir a TAC: function saludar() { print(\"hola\"); }",
        opciones: [
            "_saludar:\nBeginFunc 4\nPushParam \"hola\"\nLCall _PrintString\nPopParams 4\nEndFunc",
            "_saludar:\nPushParam \"hola\"\nLCall _PrintString\nPopParams 4",
            "saludar: print(\"hola\")",
            "PushParam saludar\nLCall _Print"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: return a * b + c;",
        opciones: [
            "t1 = a * b\nt2 = t1 + c\nReturn t2",
            "Return a * b + c",
            "t1 = a * b + c\nReturn t1",
            "Return (a * b + c)"
        ],
        correcta: 0
    },
    {
        pregunta: "PHP: 'echo suma(1, 2);', traducción TAC:",
        opciones: [
            "PushParam 2\nPushParam 1\nt1 = LCall _suma\nPopParams 8\nPushParam t1\nLCall _PrintInt\nPopParams 4",
            "t1 = LCall _suma(1, 2)\nPushParam t1\nLCall _PrintInt",
            "PushParam 1, 2\nt1 = Call suma\nPrint t1",
            "t1 = suma(1, 2)\necho t1"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: function f(x) { if (x <= 0) return 1; return x * f(x-1); } (Recursividad)",
        opciones: [
            "_f:\nBeginFunc\nt1 = x > 0\nIf t1 Goto L1\nReturn 1\nL1:\nt2 = x - 1\nPushParam t2\nt3 = LCall _f\nPopParams 4\nt4 = x * t3\nReturn t4\nEndFunc",
            "Recursividad no se puede representar en TAC",
            "Se debe usar un bucle while",
            "_f: If x <= 0 Return 1 else Return x * f(x-1)"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir llamado a método de objeto: obj.metodo(5)",
        opciones: [
            "t1 = *(obj)\nt2 = *(t1 + 4)\nPushParam 5\nPushParam obj\nACall t2\nPopParams 8",
            "PushParam 5\nt1 = LCall obj.metodo\nPopParams 4",
            "obj.metodo(5)",
            "No es posible llamar métodos en TAC"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué significa 'PopParams 12'?",
        opciones: [
            "Que la función tenía 3 parámetros de 4 bytes cada uno",
            "Que se borran 12 variables temporales",
            "Que la función retornó el número 12",
            "Que el puntero de pila bajó 12 posiciones de memoria"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: return; (función void)",
        opciones: [
            "Return",
            "EndFunc",
            "Exit",
            "Halt"
        ],
        correcta: 0
    },
    {
        pregunta: "Convertir a TAC: x = f(g(1))",
        opciones: [
            "PushParam 1\nt1 = LCall _g\nPopParams 4\nPushParam t1\nt2 = LCall _f\nPopParams 4\nx = t2",
            "t1 = g(1)\nx = f(t1)",
            "PushParam g(1)\nx = LCall f",
            "t1 = LCall g(1); t2 = LCall f(t1); x = t2"
        ],
        correcta: 0
    },
    {
        pregunta: "Cómo se representa una función que no recibe nada: 'function test() { }'",
        opciones: [
            "_test:\nBeginFunc 0\nEndFunc",
            "_test:\nLCall _test",
            "test()",
            "function test { }"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué indica el número en 'BeginFunc 16'?",
        opciones: [
            "El tamaño en bytes reservado para variables locales y temporales",
            "Que la función tiene 16 líneas de código",
            "Que la función recibe 16 parámetros",
            "El ID de la función en la tabla de símbolos"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: x = a + f(b)",
        opciones: [
            "PushParam b\nt1 = LCall _f\nPopParams 4\nt2 = a + t1\nx = t2",
            "t1 = LCall _f\nPushParam b\nt2 = a + t1\nx = t2",
            "PushParam b\nt1 = LCall _f\nt2 = a + t1\nx = t2",
            "t1 = a + f(b)\nx = t1"
        ],
        correcta: 0
    },
    {
        pregunta: "Diferencia entre 'LCall' y 'ACall':",
        opciones: [
            "LCall es para etiquetas fijas (estático); ACall es para direcciones en registros (dinámico)",
            "LCall es para funciones Locales; ACall es para funciones Anónimas",
            "LCall no retorna nada; ACall siempre retorna",
            "No hay diferencia operativa"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: a = b + c();",
        opciones: [
            "t1 = LCall _c\nPopParams 0\nt2 = b + t1\na = t2",
            "t1 = c()\na = b + t1",
            "PushParam b\nt1 = LCall _c\na = t1",
            "t1 = LCall _c\nt2 = b + t1\na = t2"
        ],
        correcta: 0
    },
    {
        pregunta: "Cómo se manejan múltiples retornos: 'if (a) return 1; return 2;'",
        opciones: [
            "IfZ a Goto L1\nReturn 1\nL1:\nReturn 2",
            "Return (a ? 1 : 2)",
            "If a Return 1 else Return 2",
            "t1 = a; IfZ t1 Goto L1; Return 1; L1: Return 2"
        ],
        correcta: 0
    },
    {
        pregunta: "En una llamada 'PushParam x', ¿'x' puede ser un temporal?",
        opciones: [
            "Sí, puede ser cualquier r-value (variable o temporal)",
            "No, solo pueden ser constantes",
            "No, solo pueden ser variables de usuario",
            "Solo si x es un entero"
        ],
        correcta: 0
    },
    {
        pregunta: "Traducir: x = 5; f(x); x = 10;",
        opciones: [
            "x = 5\nPushParam x\nLCall _f\nPopParams 4\nx = 10",
            "x = 5\nLCall _f\nx = 10",
            "x = 5\nPushParam 5\nLCall _f\nx = 10",
            "x = 5\nPushParam x\nLCall _f\nPopParams 4; x = 10"
        ],
        correcta: 0
    },
    {
        pregunta: "Si una función retorna un String, ¿qué guarda el temporal receptor?",
        opciones: [
            "La dirección de memoria donde comienza la cadena",
            "Todo el texto de la cadena",
            "El primer carácter solamente",
            "El número de caracteres de la cadena"
        ],
        correcta: 0
    },
    {
        pregunta: "Por qué es importante el 'BeginFunc' para el depurador?",
        opciones: [
            "Permite identificar dónde empieza el marco de pila (stack frame)",
            "No tiene ninguna importancia para el depurador",
            "Para saber cuántos parámetros tiene",
            "Para cambiar el color del código"
        ],
        correcta: 0
    }
];

// --- LÓGICA DEL SIMULADOR ---

const CONFIG = {
    preguntasExamen: 25,
    duracionAnimacion: 400
};

let estado = {
    seleccionadas: [],
    respuestas: [],
    indiceActual: 0,
    finalizado: false
};

const STORAGE_KEY = 'tac_simulador_save';

function guardarProgreso() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function cargarProgreso() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        estado = JSON.parse(saved);
        return true;
    }
    return false;
}

function borrarProgreso() {
    localStorage.removeItem(STORAGE_KEY);
}

// Selectores
const DOM = {
    pantallaInicio: document.getElementById('pantalla-inicio'),
    pantallaExamen: document.getElementById('pantalla-examen'),
    pantallaResultados: document.getElementById('pantalla-resultados'),
    contenedorPregunta: document.getElementById('contenedor-pregunta'),
    indicadorProgreso: document.getElementById('indicador-progreso'),
    barraProgreso: document.getElementById('barra-progreso'),
    btnIniciar: document.getElementById('btn-iniciar'),
    btnAnterior: document.getElementById('btn-anterior'),
    btnSiguiente: document.getElementById('btn-siguiente'),
    btnFinalizar: document.getElementById('btn-finalizar'),
    btnFinalizarYa: document.getElementById('btn-finalizar-ya'),
    btnReiniciar: document.getElementById('btn-reiniciar'),
    btnRevisar: document.getElementById('btn-revisar'),
    contenedorRevision: document.getElementById('contenedor-revision'),
    listaRevision: document.getElementById('lista-revision'),
    calificacion: document.getElementById('calificacion'),
    aciertos: document.getElementById('aciertos'),
    totalPreguntas: document.getElementById('total-preguntas'),
    mensajeDinamico: document.getElementById('mensaje-dinamico'),
    circleProgress: document.getElementById('circle-progress')
};

// Inicialización
function init() {
    DOM.btnIniciar.addEventListener('click', comenzarSimulacion);
    DOM.btnSiguiente.addEventListener('click', siguientePregunta);
    DOM.btnAnterior.addEventListener('click', anteriorPregunta);
    DOM.btnFinalizar.addEventListener('click', completarExamen);
    DOM.btnFinalizarYa.addEventListener('click', () => {
        if (confirm("¿Estás seguro de que deseas terminar el examen ahora?")) completarExamen();
    });
    DOM.btnReiniciar.addEventListener('click', reiniciarSimulador);
    DOM.btnRevisar.addEventListener('click', toggleRevision);

    // Recuperar sesión si existe
    if (cargarProgreso()) {
        if (estado.finalizado) {
            mostrarResultadosInmediato();
        } else {
            // Eliminar active de inicio y mostrar examen
            DOM.pantallaInicio.classList.remove('active');
            DOM.pantallaExamen.classList.add('active');
            renderizarPregunta();
        }
    }
}

function mostrarResultadosInmediato() {
    DOM.pantallaInicio.classList.remove('active');
    completarExamen(false); 
}

function comenzarSimulacion() {
    borrarProgreso();
    // Mezclar y elegir preguntas
    estado.seleccionadas = [...BANCO_PREGUNTAS]
        .sort(() => Math.random() - 0.5)
        .slice(0, CONFIG.preguntasExamen);
    
    estado.respuestas = new Array(CONFIG.preguntasExamen).fill(null);
    estado.indiceActual = 0;
    estado.finalizado = false;

    guardarProgreso();

    DOM.pantallaInicio.classList.remove('active');
    setTimeout(() => {
        DOM.pantallaExamen.classList.add('active');
        renderizarPregunta();
    }, 500);
}

/** 
 * FORMATEO DINÁMICO DE CÓDIGO 
 * Detecta si el texto es código y le aplica estilos cyberpunk
 */
function formatQuestion(text) {
    if (text.includes(':')) {
        const parts = text.split(':');
        const intro = parts[0].trim();
        let code = parts.slice(1).join(':').trim();
        
        if (code.length > 0) {
            // Si tiene llaves, punto y coma o múltiples líneas, lo tratamos como "código real"
            const esCodigoLargo = code.includes('{') || code.includes(';') || code.includes('\n');
            
            if (esCodigoLargo) {
                // Formatear líneas para que se vea como código real
                const formattedCode = code.replace(/\{/g, ' {<br>&nbsp;&nbsp;')
                                          .replace(/\}/g, '<br>}')
                                          .replace(/;/g, ';<br>&nbsp;&nbsp;')
                                          .replace(/<br>&nbsp;&nbsp;<br>/g, '<br>'); // limpiar dobles saltos
                
                return `${intro}: <div class="code-block">${formattedCode}</div>`;
            } else {
                // Si es corto, solo resaltamos en una línea
                return `${intro} <code class="accent">${code}</code>`;
            }
        }
    }
    return text.replace(/\n/g, '<br>');
}

function formatOption(text) {
    // Si contiene múltiples líneas o patrones típicos de TAC (t1 =, Label:, Goto)
    if (text.includes('\n') || /t\d\s*=/.test(text) || /L\d:/.test(text) || /Goto/.test(text)) {
        return `<span class="tac-block">${text.replace(/\n/g, '<br>')}</span>`;
    }
    return text.replace(/\n/g, '<br>');
}

function renderizarPregunta() {
    const pregunta = estado.seleccionadas[estado.indiceActual];
    
    // Animación de salida/entrada
    DOM.contenedorPregunta.style.opacity = '0';
    
    setTimeout(() => {
        DOM.contenedorPregunta.innerHTML = `
            <div class="question-header">
                <p class="question-text">${formatQuestion(pregunta.pregunta)}</p>
            </div>
            <div class="options-list">
                ${pregunta.opciones.map((opt, i) => `
                    <div class="option ${estado.respuestas[estado.indiceActual] === i ? 'selected' : ''}" 
                         onclick="seleccionarRespuesta(${i})">
                        <div class="option-indicator"></div>
                        <span class="user-ans">${formatOption(opt)}</span>
                    </div>
                `).join('')}
            </div>
        `;
        DOM.contenedorPregunta.style.opacity = '1';
        actualizarUI();
    }, 200);
}

window.seleccionarRespuesta = (indice) => {
    estado.respuestas[estado.indiceActual] = indice;
    guardarProgreso();
    const opciones = document.querySelectorAll('.option');
    opciones.forEach((opt, i) => {
        if (i === indice) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
};

function actualizarUI() {
    DOM.indicadorProgreso.innerText = `${estado.indiceActual + 1} / ${CONFIG.preguntasExamen}`;
    const porcentaje = ((estado.indiceActual + 1) / CONFIG.preguntasExamen) * 100;
    DOM.barraProgreso.style.width = `${porcentaje}%`;

    DOM.btnAnterior.style.visibility = estado.indiceActual === 0 ? 'hidden' : 'visible';
    
    if (estado.indiceActual === CONFIG.preguntasExamen - 1) {
        DOM.btnSiguiente.classList.add('hidden');
        DOM.btnFinalizar.classList.remove('hidden');
    } else {
        DOM.btnSiguiente.classList.remove('hidden');
        DOM.btnFinalizar.classList.add('hidden');
    }
}

function siguientePregunta() {
    if (estado.indiceActual < CONFIG.preguntasExamen - 1) {
        estado.indiceActual++;
        guardarProgreso();
        renderizarPregunta();
    }
}

function anteriorPregunta() {
    if (estado.indiceActual > 0) {
        estado.indiceActual--;
        guardarProgreso();
        renderizarPregunta();
    }
}

function completarExamen(conAnimacion = true) {
    estado.finalizado = true;
    guardarProgreso();

    let aciertos = 0;
    estado.seleccionadas.forEach((p, i) => {
        if (estado.respuestas[i] === p.correcta) aciertos++;
    });

    const porcentaje = Math.round((aciertos / CONFIG.preguntasExamen) * 100);
    
    DOM.calificacion.innerText = porcentaje;
    DOM.aciertos.innerText = aciertos;
    DOM.totalPreguntas.innerText = CONFIG.preguntasExamen;

    // Animación de círculo
    const circulo = DOM.circleProgress;
    const dashValue = (porcentaje / 100) * 100;
    circulo.setAttribute('stroke-dasharray', `${dashValue}, 100`);

    // Mensaje dinámico
    if (porcentaje >= 90) DOM.mensajeDinamico.innerText = "¡ESTADO EXCELENTE! Has demostrado un dominio absoluto de TAC.";
    else if (porcentaje >= 70) DOM.mensajeDinamico.innerText = "ANÁLISIS COMPLETADO. Los parámetros son estables, pero hay margen de optimización.";
    else DOM.mensajeDinamico.innerText = "FALLO EN EL SISTEMA. Se recomienda revisar la jerarquía de operaciones y el manejo de temporales.";

    DOM.pantallaExamen.classList.remove('active');
    DOM.pantallaExamen.classList.add('hidden'); // Asegurar que no estorbe
    
    if (conAnimacion) {
        setTimeout(() => {
            DOM.pantallaResultados.classList.add('active');
        }, 500);
    } else {
        DOM.pantallaResultados.classList.add('active');
    }
}

function toggleRevision() {
    if (DOM.contenedorRevision.classList.contains('hidden')) {
        generarRevision();
        DOM.contenedorRevision.classList.remove('hidden');
        DOM.btnRevisar.innerText = "OCULTAR REVISIÓN";
    } else {
        DOM.contenedorRevision.classList.add('hidden');
        DOM.btnRevisar.innerText = "REVISAR RESPUESTAS";
    }
}

function generarRevision() {
    DOM.listaRevision.innerHTML = estado.seleccionadas.map((p, i) => {
        const esCorrecta = estado.respuestas[i] === p.correcta;
        return `
            <div class="revision-item ${esCorrecta ? 'correct' : 'incorrect'}">
                <div class="status-tag ${esCorrecta ? 'correct' : 'incorrect'}">
                    ${esCorrecta ? 'Correcto' : 'Fallo'}
                </div>
                <div class="revision-q">${formatQuestion(p.pregunta)}</div>
                <div class="revision-ans">
                    <span class="user-ans">
                        Tu respuesta: ${estado.respuestas[i] !== null ? formatOption(p.opciones[estado.respuestas[i]]) : 'No respondida'}
                    </span>
                    ${!esCorrecta ? `<br><span class="correct-ans">Respuesta correcta: ${formatOption(p.opciones[p.correcta])}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function reiniciarSimulador() {
    borrarProgreso();
    DOM.pantallaResultados.classList.remove('active');
    DOM.contenedorRevision.classList.add('hidden');
    DOM.btnRevisar.innerText = "REVISAR RESPUESTAS";
    setTimeout(() => {
        location.reload(); // Recargar para limpiar todo y volver al inicio limpio
    }, 500);
}

// Iniciar script
document.addEventListener('DOMContentLoaded', init);
