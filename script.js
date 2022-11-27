function redirect2about(){
    location.href = "about.html";
}

function redirect2projects(){
    location.href ="projects.html";
}

function redirect2home(){
    location.href ="index.html";
}



function openProject(index){
    filename = "/resources/p"+index +"/index.html";
    location.href = filename;
}
