async function foo(){
    try{
    var api=await fetch("http://api.citybik.es/v2/networks ")
    var result= await api.json();
    console.log(result);

    var container=document.createElement("div")
        container.setAttribute("class","container")
        container.innerHTML=`<h1>Fetch Details From http://api.citybik.es/v2/networks</h1><br>`;
        document.body.append(container)

    result.networks.forEach(network => {
        console.log(network);
        
        var div = document.createElement("div");
        div.style.marginBottom="50px"
        div.innerHTML = `
                        <div class="card border-success mb-3 mx-2" >
  <div class="card-header bg-transparent border-success text-center fw-bold">Details</div>
  <div class="card-body text-dark">
  <h5><span style="color: rgb(5, 66, 90)" class="fs-4 fw-3">Company Name: </span>${network.name}</h5><br>
  <h5><span style="color: rgb(5, 66, 90)" class="fs-4 fw-3">Bike Id: </span>${network.id}</h5><br>

  <h5><span style="color: rgb(5, 66, 90)"class="fs-4 fw-3">City Name:  </span>${network.location.city}</h5><br>
 <h5><span style="color: rgb(5, 66, 90)"class="fs-4 fw-3">Country Name: </span> ${network.location.country}</h5><br>
  </div>
</div>`;
        document.body.append(div);
    });

}
catch (error){
    console.log(error);
}
}
foo()