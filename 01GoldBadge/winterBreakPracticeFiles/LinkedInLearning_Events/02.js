//mouse click event

document.querySelector('.grid').addEventListener('click', function(e){
    // console.log(e.target)
    // console.dir(e.target)
    if (e.target.tagName === "IMG"){
        var howmany = this.querySelectorAll('li').length;
        // console.log(this);
        if (howmany > 1){
            var removeTarget = e.target.parentNode;
            removeTarget.parentNode.removeChild(removeTarget);
        } else {
            var photoTitle = e.target.alt;
            document.querySelector('#art p').innerHTML = "<p>You've picked: " + photoTitle + "</p>";
        }   //howmany 
    }  //check to see that I clicked on IMG only
}); //click event