//jquery functions


$("document").ready(function(){

    $(".chessboard").on("click", clicked_chessboard)
    function clicked_chessboard() {
        $("body").append(this.id);
    }

    $(".figure").on("click", clicked_figure)
    function clicked_figure() {
        $("body").append(this.id);
    }


    function list_figures_on_board(){

    var all_figures = $( ".chessboard" ).find( "figure" );


    }

})








// js functions
function show_current_position(fig_class) {
    // list all figures and their positions:
    var figure_list = document.getElementsByClassName(fig_class);
    console.log("position for figure class:" + fig_class)
    for (let fig of figure_list) {
        console.log(fig.id, fig.parentElement.id);
    }
}

//class figure


//class pawn


//class Figure {
//    constructor(type) {
//        this.type = type;
//    }
//
//    current_position_square(){
//
//    }
//
//
//    list_possible_moves(){
//    }
//
//}
//
//
//class Pawn extends Figure {
//
//}





function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var content =  document.getElementById("log_window").innerHTML + '\r\n' + data + ' -> ' + ev.target.id;
  document.getElementById("log_window").innerHTML = content;
  show_current_position("figure")
  show_current_position("pawn")

}




