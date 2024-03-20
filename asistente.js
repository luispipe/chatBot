var msg = new SpeechSynthesisUtterance();
var voices = [], fnc = [], ast = ["👩", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👱‍♀️"];
var asistente = "👩";
var chatbox = document.getElementById('chatbox');
var p, ms, cont = 0;
var funciones = [''];

window.onload = function () {
    cont++;
    var assistant;
    var v = window.speechSynthesis.getVoices();
    var j = 0;

    console.log(v);
    for (i in v) {
        if (v[i].lang == 'es-ES' || v[i].lang == 'es-MX' || v[i].lang == 'es-AR' || v[i].lang == 'es-US') {
            voices[j] = v[i];
            j++;
        }
    }
    console.log(voices);
    if (cont <= 1) {
        for (i in voices) {
            var asi = document.getElementById('asis');
            assistant = document.createElement('button');
            assistant.innerHTML = asistente;
            assistant.setAttribute('onclick', persona(i));
            asi.appendChild(assistant);
        }
    }
}

function config() { //Función para acceder al panel de configuración
    var conf = document.getElementById('config');
    conf.style.display = (conf.style.display == 'none') ? 'block' : 'none';
}

function talk() { //Establece las configuraciones de la voz
    msg.lang = 'es-ES';
    msg.volume = 1; // 0 to 1
    msg.rate = document.getElementById("rate").value; // 0.1 to 10
    msg.pitch = document.getElementById("pitch").value; //0 to 2
    msg.volume = document.getElementById("volume").value; //0 to 2
}

function persona(a) { //Selecciona el asistente
    asistente = ast[a];
    msg.voice = voices[a];
}

function mensaje() { //Captura mensaje escrito y ejecuta la función
    ms = document.getElementById('usermsg').value;
    p = document.createElement("p");
    p.innerHTML = ms;
    p.classList.add('user');
    chatbox.appendChild(p);
    document.getElementById('usermsg').value = "";
}

if (annyang) {
    //Definimos los comandos a utilizar.
    var commands = {
        'hola': primero(),
        'definir siglas': definirSiglas(),
        'recorrer contenido': recorrerContenido(),
        'realizar actividades': realizarActividades(),
        'nada más': fin()
    };

    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestar: false, continuous: true });

    //Esto nos sirve para ver que escucha el programa en tiempo real.
    annyang.addCallback('result', function (phrases) {
        p = document.createElement("p");
        p.innerHTML = phrases[0];
        p.classList.add('user');
        chatbox.appendChild(p);
        console.log("I think the user said: ", phrases[0]);
    });
} else {
    alert('Lo siento, tu navegador no soporta la entrada de voz');
}

/* =======> Mensajes <======= */
function acciones() {
    msg.text = `¿En qué te puedo ayudar?`;
    window.speechSynthesis.speak(msg);
    p = document.createElement("p");
    p.innerHTML = asistente + msg.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* Definir Siglas */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'Definir Siglas';
    btn1.classList.add('btn');
    chatbox.appendChild(btn1);
    btn1.onclick = function () {
        definirSiglas();
    }
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Recorrer Contenido */
    btn2 = document.createElement('button');
    btn2.innerHTML = 'Recorrer contenido';
    btn2.classList.add('btn');
    btn2.onclick = function () {
        recorrerContenido();
    }
    chatbox.appendChild(btn2);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Realizar Actividades */
    btn3 = document.createElement('button');
    btn3.innerHTML = 'Realizar Actividades';
    btn3.classList.add('btn');
    btn3.onclick = function () {
        realizarActividades();
    }
    chatbox.appendChild(btn3);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Nada Más */
    btn4 = document.createElement('button');
    btn4.innerHTML = 'Nada más';
    btn4.classList.add('btn');
    btn4.onclick = function () {
        fin();
    }
    chatbox.appendChild(btn4);
}
function primero() { //Primer mensaje a mostrar
    talk();
    msg.text = 'Hola, soy tu asistente AMID. ¿En qué te puedo ayudar?';
    window.speechSynthesis.speak(msg);
    p = document.createElement("p");
    p.innerHTML = asistente + msg.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* Definir Siglas */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'Definir Siglas';
    btn1.classList.add('btn');
    btn1.onclick = function () {
        definirSiglas();
    }
    chatbox.appendChild(btn1);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Recorrer Contenido */
    btn2 = document.createElement('button');
    btn2.innerHTML = 'Recorrer contenido';
    btn2.classList.add('btn');
    btn2.onclick = function () {
        recorrerContenido();
    }
    chatbox.appendChild(btn2);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Realizar Actividades */
    btn3 = document.createElement('button');
    btn3.innerHTML = 'Realizar Actividades';
    btn3.classList.add('btn');
    btn3.onclick = function () {
        realizarActividades();
    }
    chatbox.appendChild(btn3);
    p = document.createElement('br');
    chatbox.appendChild(p);
}
function definirSiglas() {
    talk();
    msg.text = '¿Qué sigla no entiendes?';
    window.speechSynthesis.speak(msg);
    p = document.createElement("p");
    p.innerHTML = asistente + msg.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* TIC */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'TIC';
    btn1.classList.add('btn');
    btn1.onclick = function () {
        msg.text = `TIC quiere decir tecnologías de la información y la comunicación`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn1);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* TI */
    btn2 = document.createElement('button');
    btn2.innerHTML = 'TI';
    btn2.classList.add('btn');
    btn2.onclick = function () {
        msg.text = `TI es Tecnologías de la información`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn2);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* AMID */
    btn3 = document.createElement('button');
    btn3.innerHTML = 'AMID';
    btn3.classList.add('btn');
    btn3.onclick = function () {
        msg.text = `AMID quiere decir Alfabetización Mediática, Informacional y Digital`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn3);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* AMI */
    btn4 = document.createElement('button');
    btn4.innerHTML = 'AMI';
    btn4.classList.add('btn');
    btn4.onclick = function () {
        msg.text = `AMI es Alfabetización Mediática e Informacional`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn4);
    p = document.createElement('br');
    chatbox.appendChild(p);
}
function recorrerContenido() {
    talk();
    msg.text = `El software tiene módulos los cuales están compuestos por Unidades. Estas tienen contenido educativo, 
    actividades de retroalimentación y evaluación para comprobar el aprendizaje`;
    window.speechSynthesis.speak(msg);
    p = document.createElement("p");
    p.innerHTML = asistente + msg.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);
    acciones();
}
function realizarActividades() {
    talk();
    msg.text = `¿Qué actividades quieres realizar?`;
    window.speechSynthesis.speak(msg);
    p = document.createElement("p");
    p.innerHTML = asistente + msg.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* Crucigrama */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'Crucigrama';
    btn1.classList.add('btn');
    btn1.onclick = function () {
        msg.text = `En la parte de abajo del crucigrama encontraras las pistas, tanto verticales como horizontales, 
        identificadas con un número, para realizar la actividad`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
    }
    chatbox.appendChild(btn1);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Emparejar */
    btn2 = document.createElement('button');
    btn2.innerHTML = 'Emparejar';
    btn2.classList.add('btn');
    btn2.onclick = function () {
        msg.text = `Debes hacer clic en los dos recuadros que estén relacionados, ya sea en palabra definición o en imágen y palabra`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
    }
    chatbox.appendChild(btn2);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Arrastrar */
    btn3 = document.createElement('button');
    btn3.innerHTML = 'Arrastrar';
    btn3.classList.add('btn');
    btn3.onclick = function () {
        msg.text = `Debes arrastrar las imágenes o las palabras correspondientes para relacionar los conceptos o completar una frase`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
    }
    chatbox.appendChild(btn3);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Opción Múltiple */
    btn4 = document.createElement('button');
    btn4.innerHTML = 'Opción Múltiple';
    btn4.classList.add('btn');
    btn4.onclick = function () {
        msg.text = `Debes seleccionar la unica respuesta correcta para la pregunta asociada`;
        window.speechSynthesis.speak(msg);
        p = document.createElement("p");
        p.innerHTML = asistente + msg.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
    }
    chatbox.appendChild(btn4);
    p = document.createElement('br');
    chatbox.appendChild(p);

    acciones();
}
function fin() {
    talk();
    msg.text = `Fue un placer ayudar. ¡Continúa aprendiendo!`;
    window.speechSynthesis.speak(msg);
    p = document.createElement("p");
    p.innerHTML = asistente + msg.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);
}