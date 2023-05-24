/*


██████╗░██████╗░███████╗███╗░░██╗██████╗░░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔════╝████╗░██║██╔══██╗██╔══██╗████╗░██║
██████╦╝██████╔╝█████╗░░██╔██╗██║██║░░██║███████║██╔██╗██║ 
██╔══██╗██╔══██╗██╔══╝░░██║╚████║██║░░██║██╔══██║██║╚████║
██████╦╝██║░░██║███████╗██║░╚███║██████╔╝██║░░██║██║░╚███║
╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝

*/

$(document).ready(function() {
    $("#lHidden").animate({
      opacity: 1,
      left: "0"
    }, 800); 
    $("#rHidden")
        .animate({
            opacity: 1,
            right: "0"
        }, 800)
        .animate({
            transition: ".4s"
        });
        
  });