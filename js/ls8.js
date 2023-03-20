function admit() {
    var newName = document.getElementById('name').value;
    var newDate = document.getElementById('date').value;
    var newCommanders = document.getElementById('commanders').value;
    var newStarts = document.getElementById('army_size').value;
    var newCasualties = document.getElementById('casualties').value;
    var newWinner = document.getElementById('winner').value;
    var newLoser = document.getElementById('loser').value;
    var newImage = document.getElementById('image')
    alert("The information you've written down: \nname of war:" + war + "\nname of battle:" + battle + "\nbattle location:" + location + "\nbattle starts:" + starts + "\nbattle ends:" + ends + "\nwinner:" + winner + "\nloser:" + loser + "\nthanks for the suggestion");
}
function invisible(id) {
    document.getElementById(id).style.display = "none";
}
function visible(id) {
    document.getElementById(id).style.display = "flex";
}