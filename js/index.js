'use strict'
//team members

//CREAre ARRAY DI OBJECTS
const teamMembers =
[
{ 
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto : 'wayne-barnett-founder-ceo.jpg'
},
{
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto : 'angela-caroll-chief-editor.jpg'
},
{
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto : 'walter-gordon-office-manager.jpg'
 },
 {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto : 'angela-lopez-social-media-manager.jpg'
 },
 {
   nome: 'Scott Estrada',
   ruolo: 'Developer',
   foto : 'scott-estrada-developer.jpg'
},
{
   nome: 'Barbara Ramos',
   ruolo: 'Graphic Designer',
   foto : 'barbara-ramos-graphic-designer.jpg'
}
]

//INSERIRE NEL DOM


//member 1
 const team1 = document.getElementById('team1');
 team1.innerText = teamMembers[0].nome;
 team1.innerText += '  ' + teamMembers[0].ruolo;
 team1.innerText += '  ' + teamMembers[0].foto;
   console.log(teamMembers[0]);



//member 2
const team2 = document.getElementById('team2');
team2.innerText = teamMembers[1].nome;
team2.innerText += '  ' + teamMembers[1].ruolo;
team2.innerText += '  ' + teamMembers[1].foto;
console.log(teamMembers[1]);

   
//member 3
const team3 = document.getElementById('team3');
team3.innerText = teamMembers[2].nome;
team3.innerText += '  ' + teamMembers[2].ruolo;
team3.innerText += '  ' + teamMembers[2].foto;
console.log(teamMembers[2]);


//member 4
const team4 = document.getElementById('team4');
team4.innerText = teamMembers[3].nome;
team4.innerText += '  ' + teamMembers[3].ruolo;
team4.innerText += '  ' + teamMembers[3].foto;
console.log(teamMembers[3]);
  

//member 5
const team5 = document.getElementById('team5');
team5.innerText = teamMembers[4].nome;
team5.innerText += '  ' + teamMembers[4].ruolo;
team5.innerText += '  ' + teamMembers[4].foto;
console.log(teamMembers[4]);

//member 5
const team6 = document.getElementById('team6');
team6.innerText = teamMembers[5].nome;
team6.innerText += '  ' + teamMembers[5].ruolo;
team6.innerText += '  ' + teamMembers[5].foto;
console.log(teamMembers[5]);










//ERRORE
// for (let i = 0; i < teamMembers.length; i++){
//     const member = teamMembers[i];
//     console.log(member);
//     const team1 = document.getElementById('team1');
//     team1.innerText = member;
   
// }


//member2
//  const teamMember2 ={
//      nome: 'Angela Caroll',
//      ruolo: 'Chief Editor',
//      foto : 'angela-caroll-chief-editor.jpg'
//  }
//  for (let key in teamMember2){
//      console.log(teamMember2[key]);
//  }

// //member3
// const teamMember3 ={
//     nome: 'Walter Gordon',
//     ruolo: 'Office Manager',
//     foto : 'walter-gordon-office-manager.jpg'
// }
// for (let key in teamMember3){
//     console.log(teamMember3[key]);
// }

// //member4
// const teamMember4 ={
//     nome: 'Angela Lopez',
//     ruolo: 'Social Media Manager',
//     foto : 'angela-lopez-social-media-manager.jpg'
// }
// for (let key in teamMember4){
//     console.log(teamMember4[key]);
// }

// //member5
// const teamMember5 ={
//     nome: 'Scott Estrada',
//     ruolo: 'Developer',
//     foto : 'scott-estrada-developer.jpg'
// }
// for (let key in teamMember5){
//     console.log(teamMember5[key]);
// }

// //member6
// const teamMember6 ={
//     nome: 'Barbara Ramos',
//     ruolo: 'Graphic Designer',
//     foto : 'barbara-ramos-graphic-designer.jpg'
// }
// for (let key in teamMember6){
//     console.log(teamMember6[key]);
// }


//array team members
//   const team =[teamMember1,teamMember2];
//   console.log(team)

  
 