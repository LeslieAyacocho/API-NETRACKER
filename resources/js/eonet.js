export default function eonet(){

    console.log('WORKING');

    let newsContent=`
    <div class="page-title">
        <h1> Earth Observatory Natural Event Tracker</h1>
        <h2>(EONET)</h2>
    </div>

    <div class="dropdown" id="category-drop">
    <button style="background-color:#3aafeb; color:#f3f7f9" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        CATEGORY
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="news-list-category">
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="drought">Drought</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="earthquakes">Earthquakes</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="floods">Floods</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="landslides">Landslides</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="severeStorms">Severe Storms</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="snow">Snow</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="volcanoes">Volcanoes</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="wildfires">Wildfires</a></li>
    </ul>
    </div>
    <div class="eonet-card-container" id="eonet-list">
        
    </div>
    `

    $('#contentpage').html(newsContent);

    $.ajax({
        type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=10&'+
        'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
        success: function (response) {

            let data = response.events
                // console.log(data);
                data.forEach(element => {
                $('#eonet-list').append(`
                <div class="card col"  style="">
                    <div class="card-title">
                    <a href="${element.sources[0].url}" target="_blank">${element.title}</a>
                    </div>
                    <div class="card-body">
                        <p><label>Category:</label> ${element.categories[0].title}</p>
                        <p><label>Date:</label> ${element.geometry[0].date}</p>
                        <p><label>Coordinates:</label> ${element.geometry[0].coordinates[0]} , ${element.geometry[0].coordinates[1]}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${element.sources[0].url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">MORE INFO</button></a>
                    <span id="bookmark"><i class="fas fa-bookmark bookmarknews" id="bookmarknews" data-id="${element.id}" tabindex="0"></i></span>
                    </div>
                </div>
                `)
			});
        }
    });


    
$('.dropdown-item').on('click', (e) => {
    let category = e.currentTarget.dataset.id;

        $.ajax({
        type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit&'+
        'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
        success: function (response) {

            let data = response.events;
            let x = 0;
            var matched_data = new Array();


            $('#eonet-list').html('');
            data.forEach(element => {
                if(category == element.categories[0].id){
                    matched_data[x] = element;
                    x++;
                }
            });

            if(matched_data.length>0){
                for(let i=0; i< matched_data.length; i++){

                    $('#eonet-list').append(`
                    <div class="card col"  style="">
                    <div class="card-title">
                    <a href="${matched_data[i].sources[0].url}" target="_blank">${matched_data[i].title}</a>
                    </div>
                    <div class="card-body">
                        <p><label>Category:</label> ${matched_data[i].categories[0].title}</p>
                        <p><label>Date:</label> ${matched_data[i].geometry[0].date}</p>
                        <p><label>Coordinates:</label> ${matched_data[i].geometry[0].coordinates[0]} , ${matched_data[i].geometry[0].coordinates[1]}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${matched_data[i].sources[0].url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">MORE INFO</button></a>
                    <span id="bookmark"><i class="fas fa-bookmark bookmarknews" id="bookmarknews" data-id="${matched_data[i].id}" tabindex="0"></i></span>
                    </div>
                </div>
                `)
    
                }
            }else{
                $('#eonet-list').append(`
                <div class="col-sm nodata"  style="width: 720px;">
                    
                    <h1>NO DATA</h1>
                
                </div>
            
                `)
            }
            
            


        }
    });
        
});


}
