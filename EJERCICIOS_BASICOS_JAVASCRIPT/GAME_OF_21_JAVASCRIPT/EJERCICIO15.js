//EJERCICIO 15: 
alert("GAME OF 21")
let player1_ronda1 = Number(Math.floor(Math.random() * 10) + 1)
alert("Primera carta PLAYER 1: "+player1_ronda1)
let player2_ronda1 = Number(Math.floor(Math.random() * 10) + 1)
alert("Primera carta PLAYER 2: "+player2_ronda1)
let player1_ronda2 = Number(Math.floor(Math.random() * 10) + 1)
alert("Segunda carta PLAYER 1: "+player1_ronda2)
let player2_ronda2 = Number(Math.floor(Math.random() * 10) + 1)
alert("Segunda carta PLAYER 2: "+ player2_ronda2)
let player1_ronda3 = 0
let player2_ronda3 = 0
let parcial_player1 = player1_ronda1 + player1_ronda2
let parcial_player2 = player2_ronda1 + player2_ronda2
alert('Marcador parcial PLAYER 1: '+ parcial_player1)
alert('Marcador parcial PLAYER 2: '+ parcial_player2)
let decision_p1 = prompt("J1 Desea pedir otra carta? 1)SI  2)NO")
if(decision_p1 == 1){
    player1_ronda3 = Number(Math.floor(Math.random() * 10) + 1)
    alert("Su ultima carta es: "+ player1_ronda3)
    parcial_player1 += player1_ronda3
    alert("Marcador final PLAYER 1: "+ parcial_player1)
}else{
    alert("HA PLANTADO")
}
let decision_p2 = prompt("J2 Desea pedir otra carta? 1)SI  2)NO")
if(decision_p2 == 1){
    player2_ronda3 = Number(Math.floor(Math.random() * 10) + 1)
    alert("Su ultima carta es: "+ player2_ronda3)
    parcial_player2 += player2_ronda3
    alert("Marcador final PLAYER 2: "+ parcial_player2)
}else{
    alert("HA PLANTADO")
}

let total_p1 = player1_ronda1 + player1_ronda2 + player1_ronda3
let total_p2 = player2_ronda1 + player2_ronda2 + player2_ronda3
alert("Marcador final PLAYER 2: "+ total_p2)
if(total_p1 > 21){
    total_p1 = 0
}
if(total_p2 > 21){
    total_p2 = 0
}
if(total_p1 > total_p2){
    alert("GANADOR PLAYER 1")
}else if(total_p1 < total_p2){
    alert("GANADOR PLAYER 2")
}
