function affect(r) {

    let a;

    let images = document.getElementsByClassName("aslide");

    let markings = document.getElementsByClassName("point");

    if (r > images.length) {bredy = 1}    

    if (r < 1) {bredy = images.length}

    for (a = 0; a < images.length; a++) {
      images[a].style.display = "none";  
    }

    for (a = 0; a < markings.length; a++) {
      markings[a].className = markings[a].className.replace(" action", "");
    }

    images[bredy-1].style.display = "block";  
    markings[bredy-1].className += " action";

  }
  let bredy = 1;
  affect(bredy);

  function MoveForward(r) {
    affect(bredy += r);
  }

  function MoveBackward(r) {
    affect(bredy = r);
  }