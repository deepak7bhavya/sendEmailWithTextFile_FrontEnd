
var finalData = {}
var submit_data = function(){
    var dataset = {}
    console.log("c;")
    dataset.hostdata   = $("input[name='hostdata']:checked").val();
    dataset.bigdata    = $("input[name='bigdata']:checked").val();
    dataset.etldata    = $("input[name='etldata']:checked").val();
    dataset.mldata     = $("input[name='mldata']:checked").val();
    dataset.visdata    = $("input[name='visdata']:checked").val();
    dataset.speechdata = $("input[name='speechdata']:checked").val();



    finalData.data = dataset;
    finalData.sender_id = $("#myemail").val();
    finalData.sender_pass = $("#password").val();
    finalData.target_id = $("#target").val();
    
    console.log(finalData);
    ajaxCall(JSON.stringify(finalData));
}

function ajaxCall(finalData){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
        if (this.readyState == 4 && this.status == 400) {
            console.log(this.responseText);
        }
    };
    xhttp.open("POST", "http://127.0.0.1:5000/DataSet", true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(finalData);
}