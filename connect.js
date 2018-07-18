let Board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

var CurrentPlayer = "Black";
var NextPlayer = "Red";
var PlayerBlackSelections = new Array();
var PlayerRedSelections = new Array()
//Places Checkers Based on Current Player's Color
handleClick = function (event) {

    var Cell = event.target.id;
    var CellElement = document.getElementById(Cell);
    Cell.innerHTML = CurrentPlayer;
    let Column = Cell[10];
    let Value = lowestVal(Cell);
    Cell = ("row-" + Value + " col-" + Column);
    // console.log(cell+" New")
    CellElement = document.getElementById(Cell);
    //Keeps player from overriding placement 
    if (CellElement.className === "Black") {
        alert("Invalid Placement");
        return
    } else if (CellElement.className === "Red") {
        alert("Invalid Placement");
        return
    }

    if (CurrentPlayer === "Black") {
        Board[Value][Column] = "Black"
        console.log("kjhkhj" + Board[Value][Column])
        CellElement.className = "Black";
        Board[Value][Column] = "Black";
        NextPlayer = "Red";
    } else {
        Board[Value][Column] = "Red"
        console.log("kjhkhj" + Board[Value][Column])
        CellElement.className = "Red";
        Board[Value][Column] = "Red"
        NextPlayer = "Black";
    }
    console.log(Board)
    CurrentPlayer = NextPlayer;
}
var Cells = document.querySelectorAll("td");
for (var i = 0; i < Cells.length; i++) {
    Cells[i].addEventListener('click', handleClick)
}

function lowestVal(Cell, Column) {
    for (i = 5; i >= 0; i--) {
        let Column = Cell[10];
        if (Board[i][Column] === 0) {
            return (i);
        }
    }
}