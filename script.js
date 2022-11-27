function redirect2about(){
    location.href = "about.html";
}

function redirect2projects(){
    location.href ="projects.html";
}

function redirect2home(){
    location.href ="index.html";
}

projects = ["3D-Planet-Gallery", "CSV-Workbench"];

function openProject(index){
    filename = projects[index]+"/index.html";
    location.href = filename;
}
