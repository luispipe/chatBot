var utter = new SpeechSynthesisUtterance();
var voices = [], j = 0, ast = ["👩", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👱‍♀️"];
var asistente = "👩", chatbox;

window.onload = function () { iniciarAnnyang(); }

function iniciarAnnyang() {
    if (annyang) {
        alert('si');
        var allVoices;
        window.speechSynthesis.onvoiceschanged = function () {
            allVoices = window.speechSynthesis.getVoices();
            console.log(allVoices);
            for (i in allVoices) {
                if (allVoices[i].lang == 'es-ES' || allVoices[i].lang == 'es-MX' ||
                    allVoices[i].lang == 'es-AR' || allVoices[i].lang == 'es-US') {
                    voices[j] = allVoices[i];
                    var asis = document.getElementById('asis');
                    assistant = document.createElement('button');
                    assistant.innerHTML = ast[j];
                    assistant.setAttribute('onclick', 'voz(' + j + ')');
                    asis.appendChild(assistant);
                    j++;
                }
            }
            console.log(voices);
        }

        var commands = {
            'hola': primero(),
            'definir siglas': definirSiglas(),
            'recorrer contenido': recorrerContenido(),
            'realizar actividades': realizarActividades(),
            'nada mas': fin()
        };

        annyang.addCommands(commands);
        annyang.start({ autoRestart: false, continuous: true });
        annyang.addCallback('result', function (phrases) {
            p = document.createElement("p");
            p.innerHTML = phrases[0];
            p.classList.add('user');
            chatbox.appendChild(p);
            console.log("I think the user said: ", phrases[0]);
        });

    } else alert('Hubo un error, por favor recarga la página');


}

function recarga() {
    location.reload();
}

function guardar() {
    var conf = document.getElementById('config');
    var conf2 = document.getElementById('conf');
    var cb = document.getElementById('cb');
    /* var msgU = document.getElementById('msgU'); */
    setUp();
    conf.style.display = (conf.style.display == 'none') ? 'block' : 'none';
    conf2.style.display = (conf2.style.display == 'block') ? 'none' : 'block';
    /* msgU.style.display = (msgU.style.display == 'block') ? 'none' : 'block'; */
    chatbox = document.createElement('div');
    chatbox.setAttribute('id', 'chatbox');
    cb.appendChild(chatbox);
    chatbox = document.getElementById('chatbox');
    chatbox.style.display = (chatbox.style.display == 'block') ? 'none' : 'block';
    primero();
}

function voz(j) {
    utter.voice = voices[j];
    asistente = ast[j];
}

function setUp() {
    utter.rate = document.getElementById('rate').value;
    utter.pitch = document.getElementById('pitch').value;
    utter.volume = document.getElementById('volume').value;
}

/* =======> Mensajes <======= */
function acciones() {
    utter.text = `¿En qué te puedo ayudar?`;
    window.speechSynthesis.speak(utter);
    p = document.createElement("p");
    p.innerHTML = asistente + utter.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* Definir Siglas */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'Definir siglas';
    btn1.classList.add('btn');
    chatbox.appendChild(btn1);
    btn1.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'Definir siglas';
        p.classList.add('user');
        chatbox.appendChild(p);
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
        p = document.createElement("p");
        p.innerHTML = 'Recorrer contenido';
        p.classList.add('user');
        chatbox.appendChild(p);
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
        p = document.createElement("p");
        p.innerHTML = 'Realizar actividades';
        p.classList.add('user');
        chatbox.appendChild(p);
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
        p = document.createElement("p");
        p.innerHTML = 'Nada más';
        p.classList.add('user');
        chatbox.appendChild(p);
        fin();
    }
    chatbox.appendChild(btn4);
    p = document.createElement('br');
    chatbox.appendChild(p);
}
function primero() { //Primer mensaje a mostrar
    utter.text = 'Hola, soy tu asistente AMID. ¿En qué te puedo ayudar?';
    window.speechSynthesis.speak(utter);
    p = document.createElement("p");
    p.innerHTML = asistente + utter.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* Definir Siglas */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'Definir Siglas';
    btn1.classList.add('btn');
    btn1.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'Definir siglas';
        p.classList.add('user');
        chatbox.appendChild(p);
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
        p = document.createElement("p");
        p.innerHTML = 'Recorrer contenido';
        p.classList.add('user');
        chatbox.appendChild(p);
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
        p = document.createElement("p");
        p.innerHTML = 'Realizar actividades';
        p.classList.add('user');
        chatbox.appendChild(p);
        realizarActividades();
    }
    chatbox.appendChild(btn3);
    p = document.createElement('br');
    chatbox.appendChild(p);
}
function definirSiglas() {
    utter.text = '¿Qué sigla no entiendes?';
    window.speechSynthesis.speak(utter);
    p = document.createElement("p");
    p.innerHTML = asistente + utter.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* TIC */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'TIC';
    btn1.classList.add('btn');
    btn1.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'TIC';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `TIC quiere decir tecnologías de la información y la comunicación`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
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
        p = document.createElement("p");
        p.innerHTML = 'TI';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `TI es Tecnologías de la información`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
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
        p = document.createElement("p");
        p.innerHTML = 'AMID';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `AMID quiere decir Alfabetización Mediática, Informacional y Digital`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
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
        p = document.createElement("p");
        p.innerHTML = 'AMI';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `AMI es Alfabetización Mediática e Informacional`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn4);
    p = document.createElement('br');
    chatbox.appendChild(p);
}
function recorrerContenido() {
    utter.text = `El software tiene módulos los cuales están compuestos por Unidades. Estas tienen contenido educativo, 
    actividades de retroalimentación y evaluación para comprobar el aprendizaje`;
    window.speechSynthesis.speak(utter);
    p = document.createElement("p");
    p.innerHTML = asistente + utter.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);
    acciones();
}
function realizarActividades() {
    utter.text = `¿Qué actividades quieres realizar?`;
    window.speechSynthesis.speak(utter);
    p = document.createElement("p");
    p.innerHTML = asistente + utter.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);

    /* Crucigrama */
    btn1 = document.createElement('button');
    btn1.innerHTML = 'Crucigrama';
    btn1.classList.add('btn');
    btn1.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'Crucigrama';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `En la parte de abajo del crucigrama encontraras las pistas, tanto verticales como horizontales, 
        identificadas con un número, para realizar la actividad`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn1);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Emparejar */
    btn2 = document.createElement('button');
    btn2.innerHTML = 'Emparejar';
    btn2.classList.add('btn');
    btn2.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'Emparejar';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `Debes hacer clic en los dos recuadros que estén relacionados, ya sea en palabra definición o en imágen y palabra`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn2);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Arrastrar */
    btn3 = document.createElement('button');
    btn3.innerHTML = 'Arrastrar';
    btn3.classList.add('btn');
    btn3.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'Arrastrar';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `Debes arrastrar las imágenes o las palabras correspondientes para relacionar los conceptos o completar una frase`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn3);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);

    /* Opción Múltiple */
    btn4 = document.createElement('button');
    btn4.innerHTML = 'Opción Múltiple';
    btn4.classList.add('btn');
    btn4.onclick = function () {
        p = document.createElement("p");
        p.innerHTML = 'Opción múltiple';
        p.classList.add('user');
        chatbox.appendChild(p);
        utter.text = `Debes seleccionar la unica respuesta correcta para la pregunta asociada`;
        window.speechSynthesis.speak(utter);
        p = document.createElement("p");
        p.innerHTML = asistente + utter.text;
        p.classList.add('chatb');
        chatbox.appendChild(p);
        acciones();
    }
    chatbox.appendChild(btn4);
    p = document.createElement('br');
    chatbox.appendChild(p);
    p = document.createElement('br');
    chatbox.appendChild(p);
}
function fin() {
    utter.text = `Fue un placer ayudar. ¡Continúa aprendiendo!`;
    window.speechSynthesis.speak(utter);
    p = document.createElement("p");
    p.innerHTML = asistente + utter.text;
    p.classList.add('chatb');
    chatbox.appendChild(p);
}