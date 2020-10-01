let socket = io();

var lblticket1 = $('#lblTicket1');
var lblticket2 = $('#lblTicket2');
var lblticket3 = $('#lblTicket3');
var lblticket4 = $('#lblTicket4');

var lblescritorio1 = $('#lblEscritorio1');
var lblescritorio2 = $('#lblEscritorio2');
var lblescritorio3 = $('#lblEscritorio3');
var lblescritorio4 = $('#lblEscritorio4');

var lbltickets = [lblticket1, lblticket2, lblticket3, lblticket4];
var lblescritorios = [lblescritorio1, lblescritorio2, lblescritorio3, lblescritorio4];

socket.on('estadoActual', function(resp) {

    actualizarHTML(resp.ultimosCuatro);
});

socket.on('ultimos4', function(resp) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHTML(resp.ultimosCuatro);
});

function actualizarHTML(ultimosCuatro) {
    for (let i = 0; i <= ultimosCuatro.length - 1; i++) {
        lbltickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        lblescritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio);
    }
}