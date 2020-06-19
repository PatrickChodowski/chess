//jquery functions


$("document").ready(function(){

    $(".chessboard").on("click", clicked_chessboard)
    function clicked_chessboard() {
        $("body").append(this.id);
    }

    function clicked_figure() {
        $("body").append(this.id);
    }

    function highlight_ids(arr){
        jQuery.each( arr, function( i, val ) {
             $( "#" + val ).css("background-color", "yellow");
        });
     }
///woohooo
     function allow_drop(arr){
             jQuery.each( arr, function( i, val ) {
             $( "#" + val ).attr("ondragover", "allowDrop(event)");
        });
     }

/// reset the ondraggover/background color if the piece is not selected

    function pawn_legal_moves(color, position) {
        var position_array = position.split('');
        var pos_x = position_array[0];
        var pos_y = parseInt(position_array[1]);
        var possible_moves = [];
        if (color === 'white'){
            if (pos_y == 2){
                possible_moves.push(pos_x+(pos_y+1).toString())
                possible_moves.push(pos_x+(pos_y+2).toString())
            } else {
                possible_moves.push(pos_x+(pos_y+1).toString())
            }

        } else if (color === 'black'){
           if (pos_y == 7) {
                possible_moves.push(pos_x+(pos_y-1).toString())
                possible_moves.push(pos_x+(pos_y-2).toString())
           } else {
                possible_moves.push(pos_x+(pos_y-1).toString())
           }


        }
        highlight_ids(possible_moves)
        allow_drop(possible_moves)

    }


    function return_figure_info() {
        var classList = document.getElementById(this.id).className.split(/\s+/);
        // figure's square
        var figure_position = this.parentElement.id

        // figure's type
        var classList = document.getElementById(this.id).className.split(/\s+/);
        var index_figure = classList.indexOf('figure');
        if (index_figure !== -1) classList.splice(index_figure, 1);
        var figure_type = classList[0]
        var figure_color = classList[1]

        if (figure_type === 'pawn'){
            pawn_legal_moves(figure_color, figure_position)
        } else if (figure_type === 'bishop') {
            console.log('checking bishops legal moves')
        } else if (figure_type === 'knight') {
            console.log('checking knights legal moves')
        } else if (figure_type === 'rook') {
            console.log('checking rooks legal moves')
        } else if (figure_type === 'queen') {
            console.log('checking queens legal moves')
        } else if (figure_type === 'king') {
            console.log('checking kings legal moves')
        }
    }

    // events + functions
    $(".figure").on("click", return_figure_info)





    function list_figures_on_board(){

        var all_figures = $( ".chessboard" ).find( "figure" );
        console.log(all_figures)

    }

})


// how to allowDrop only on the selected ids

//only for selected fields:
//ondragover=allowDrop(event)






// js functions
function show_current_position(fig_class) {
    // list all figures and their positions:
    var figure_list = document.getElementsByClassName(fig_class);
    console.log("position for figure class:" + fig_class)
    for (let fig of figure_list) {
        console.log(fig.id, fig.parentElement.id);
    }
}


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
  //show_current_position("figure")
  //show_current_position("pawn")

}




