function themetoggle(){
    let curr_stylesheet = document.getElementById("dark")
    if (curr_stylesheet.href.match("style1.css")){
        curr_stylesheet.href = "style.css"
    }
    else{
        curr_stylesheet.href="style1.css"
    }

}