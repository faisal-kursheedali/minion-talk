var translate=document.querySelector("#trans-id");
var txt=document.querySelector("#txt-id");
var outputdiv=document.querySelector("#output");
var serverName="https://api.funtranslations.com/translate/minion.json"
function errorHandler(error){
    console.log("ERROR OCCERED!!!!")
    alert("TRY NEXT TIME")
}
function constructurl(Text){
    return serverName + "?" + "text=" + Text
}



function clickHandler(){
    var inputtext=txt.value
    fetch(constructurl(inputtext))
        .then(response => response.json())
        .then(json => 
            {var translatedtxt=json.contents.translated
            outputdiv.innerText=translatedtxt})
        .catch(errorHandler)



};
translate.addEventListener("click", clickHandler);
