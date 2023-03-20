
let war_list = {
    data: [
        {
            name: "Battle of Austerlizt",
            date: "December 2nd 1805",
            commanders: "La Grande armee:Napoleon Bonarparte;The Third Coalition:Alexander the 1st",
            army_size: "La Grande armee:74,500;The Third Coalition:72,890 ",
            casualties: "La Grande armee:8,770;The Third Coalition:28,970",
            loser: "The Third Coaltion",
            winner: "La Grande armee",
            location: "Austerlizt",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg"
        },
        {
            name: "Battle of Stallingrad",
            date: "August 23rd of 1942 to Feburary 2nd  ",
            commanders: "The Wehrmacht:Friedrich Paulus; The Red army:Georgy Zhukov",
            army_size: "The Wehrmacht:500,000; The Red army:1,143,000 ",
            casualties: "The Wehrmacht:500,000; The Red army:1,000,000",
            loser: "The Wehrmacht",
            winner: "The Red army:",
            location: "Stallingrad",
            image: "https://static.enlisted.net/upload/image/2022/03/art_stalingrad_1920x1080_d734ceae06e3aab39a296ad9eeacce8c.jpg"
        }, 
        {
            name: "Battle of Agincourt",
            date: "25th of october 1415",
            commanders: "The Brittish army:Henry V; The French army:Charles d'Albret",
            army_size: "The Brittish army:6,000;The French army:12,000 ",
            casualties: "The Brittish army:600;The French army:~5,000 ",
            loser: "The French army",
            winner: "The Brittish army",
            location: "Agincourt",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Schlacht_von_Azincourt.jpg/600px-Schlacht_von_Azincourt.jpg"
        }, 
        {
            name: "Battle of Isandlwana",
            date: "January 22th 1879",
            commanders: "The Brittish Empire:Lord Chelmsford; The Zulu empire:Ntshingwayo kaMahole Khoza",
            army_size: "The Brittish Empire:1,873; The Zulu empire:15,000 ",
            casualties: "The Brittish Empire:1,300; The Zulu empire:5,000",
            loser: "The Brittish empire",
            winner: "The Zulu empire",
            location: "Isandlwana",
            image: "https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Battle_of_Isandlwana.jpg"
        }, 
        {
            name: "Battle of Gettysburg",
            date: "July 1st 1863-July 3rd 1863 ",
            commanders: "Army of the Potomac:George Meade; Army of Northern Virginia:Robert E. Lee",
            army_size: "Army of the Potomac:104,000; Army of Northern Virginia:75,000 ",
            casualties: "Army of the Potomac:23,000; Army of Northern Virginia:28,000",
            loser: "Army of Northern Virginia",
            winner: "Army of the Potomac",
            location: "Gettysburg",
            image: "https://americanhistory.si.edu/sites/default/files/header-civilwar.jpg"
        }, 
        {
            name: "Battle of Verdun",
            date: "21st Febuary 1916-18th December 1916",
            commanders: "The German army:Erich von Falkenhayn; The French army:Joseph Joffre ",
            army_size: "The German army:500,000; The French army:750,000 ",
            casualties: "The German army:336,000; The French army:379,000",
            loser: "The German army",
            winner: "The French army",
            location: "Verdun",
            image: "https://www.historyhit.com/app/uploads/2020/07/verdun-7.jpg"
        },
    ]
}

localStorage.setItem('war_list', JSON.stringify(war_list.data));

var warList = localStorage.getItem('war_list');
var warArray = JSON.parse(warList);

warArray.forEach(items => {
    
    let card = document.createElement("div");
    card.classList.add("card");

    let img_container = document.createElement("div");
    img_container.classList.add("img_container");

    let pic = document.createElement("img");
    pic.setAttribute("src", items.image);
    img_container.appendChild(pic);
    card.appendChild(img_container);

    let container = document.createElement("div");
    container.classList.add("container");
    card.appendChild(container);
    let name = document.createElement("h1");
    name.classList.add("name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let date = document.createElement("h2");
    date.innerHTML = "<b>Date:</b>" + items.date;
    container.appendChild(date)

    let commanders = document.createElement("h3");
    commanders.innerHTML =  items.commanders;
    container.appendChild(commanders);

    let army_size = document.createElement("h4");
    army_size.innerHTML =  items.army_size;
    container.appendChild(army_size);


    document.getElementById("war_list").appendChild(card)
});

function admit() {
    var newName = document.getElementById('name').value;
    var newDate = document.getElementById('date').value;
    var newCommanders = document.getElementById('commanders').value;
    var newArmy_size = document.getElementById('army_size').value;
    var newCasualties = document.getElementById('casualties').value;
    var newWinner = document.getElementById('winner').value;
    var newLoser = document.getElementById('loser').value;
    var newImage = document.getElementById('image').value;
    alert("The information you've written down: \nname:" + newName + "\ndate:" + newDate + "\ncommander:" + newCommanders + "\narmy_size:" + newArmy_size + "\ncasualties:" + newCasualties + "\nwinner:" + mewWinner + "\nloser:" + newLoser +"\nimage" +newImage+ "\nthanks for the suggestion");
}
function invisible(id) {
    document.getElementById(id).style.display = "none";
}
function visible(id) {
    document.getElementById(id).style.display = "flex";
}
