if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");//SUCCESSFUL
        console.log(registration);
    }).catch(error=> {
        console.log("SW Registration Failed :(");
        console.log(error);
    });
}
else{

}