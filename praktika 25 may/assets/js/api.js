var area=document.querySelector(".area");
fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/podca')
.then(res=>res.json())
.then(json=>{
    console.log(json)
    json.forEach(el => {
        area.innerHTML +=`
        <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${el.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body mt-4">
                            <h5 class="card-title">${el.name}</h5>
                            <p class="card-text"><small class="text-muted">${el.date}</small></p>
                            <p class="card-text">${el.about}</p>
                            <div class="video d-flex">
                                <div><i class="las la-play"></i></div>
                                <div>
                                    <p>00:00</p>
                                </div>
                                <div class="gray"></div>
                                <div>
                                    <p>00:00</p>
                                </div>
                                <div><i class="las la-volume-up"></i></div>
                                <div class="white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    });
})