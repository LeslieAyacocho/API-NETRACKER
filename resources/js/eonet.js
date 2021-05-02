import showDetails from './functions/showDetails';
import followEonet from './functions/followEonet';
import showModalDetails from './functions/showModalDetails';

export default function eonet(){

    // console.log('WORKING');

    let newsContent=`
    <div class="page-title">
        <h1> Earth Observatory Natural Event Tracker</h1>
        <h2>(EONET)</h2>
    </div>

    
    <div class="row" id="searchBar">
        <div class="col-sm">
                <div class="dropdown" >
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
        </div>

        <div class="col-sm d-flex flex-row-reverse" id="category-drop">
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" id="eonet-search" />
                    <button type="button" class="btn btn-primary searchEonet" style="background-color:#3aafeb; color:#f3f7f9" >
                    <i class="fas fa-search"></i>
                    </button>
            </div>
        </div>
    </div>
    

    <div class="eonet-card-container" id="eonet-list">
        <h1>NO DATA</h1>
    </div>
    `

    $('#contentpage').html(newsContent);
    $('#contentpage').append(showDetails);

    var all_result = new Array();

    $.ajax({
        type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?&'+
        'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
        success: function (response) {
            $('#eonet-list').html('');
            let data = response.events
                data.forEach(element => {
                $('#eonet-list').append(`
                <div class="card col"  >
                    <div class="card-title">
                    <a href="#" target="_blank">${element.title}</a>
                    </div>
                    <div class="card-body" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#showDetails">
                        <p><label>Category:</label> ${element.categories[0].title}</p>
                        <p><label>Date:</label> ${element.geometry[0].date}</p>
                        <p><label>Coordinates:</label> ${element.geometry[0].coordinates[0]} , ${element.geometry[0].coordinates[1]}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${element.sources[0].url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">MORE INFO</button></a>
                    <span id="bookmark"><i class="fas fa-bookmark follow-eonet" id="follow-eonet" data-id="${element.id}" tabindex="0"></i></span>
                    </div>
                </div>
                `)

                var i = 0;
    
                data.forEach(data => {            
                    all_result[i] = data;
                    i++;
                });
			});

        
            

            $('.follow-eonet').on('click', (e) => {
                
                var eonetid = $(e.currentTarget).attr('data-id');
            
                var userid = localStorage.getItem('user_id');
            
                    let datainput= `
                    <form action="" id="addEonet">
                    <input type="text" id="eonetid" name="eonetid" value="${eonetid}">
                    <input type="text" id="user_id" name="user_id" value="${userid}">
                    </form>
                    `;
            
                    var data = $(datainput).serialize();
                    console.log(data);


                        followEonet(data);

            
                
            
            });

            $('#showDetails').on('show.bs.modal', function(e) {
                var card_id = $(e.relatedTarget).attr('data-id');

                showModalDetails(card_id, all_result);

            });


        }
    
    });

    $('.searchEonet').on('click', (e) => {
                
        var temp = document.getElementById("eonet-search").value
        console.log(temp);

        var allEvents = new Array()
        var i;
        for( i=0;i<all_result.length;i++){
            allEvents[i] = [all_result[i].id, 
                            all_result[i].title, 
                            all_result[i].categories[0],
                            all_result[i].geometry[0].date,
                            all_result[i].geometry[0].coordinates,
                            all_result[i].sources[0].url
                        ];
        }

        var regex = new RegExp(  temp + "*", "gim");


        const matches = allEvents.filter(value=>regex.test(value));
        console.log(matches);

        $('#eonet-list').html('');
        for(let i=0; i< matches.length; i++){

            $('#eonet-list').append(`
            <div class="card col"  >
            <div class="card-title">
            <a href="${matches[i][5]}" target="_blank">${matches[i][1]}</a>
            </div>
            <div class="card-body" data-id="${matches[i][0]}" data-bs-toggle="modal" data-bs-target="#showDetails">
                <p><label>Category:</label> ${matches[i][2].title}</p>
                <p><label>Date:</label> ${matches[i][3]}</p>
                <p><label>Coordinates:</label> ${matches[i][4][0]} , ${matches[i][4][1]}</p>
            </div>
            <div class="card-footer">
            <a href="${matches[i][5]}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">MORE INFO</button></a>
            <span id="bookmark"><i class="fas fa-bookmark follow-eonet2" id="follow-eonet2" data-id="${matches[i][0]}" tabindex="0"></i></span>
            </div>
        </div>
        `)

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
                console.log(matched_data);
                if(matched_data.length>0){
                    for(let i=0; i< matched_data.length; i++){

                        $('#eonet-list').append(`
                        <div class="card col"  data-id="${matched_data[i].id}" data-bs-toggle="modal" data-bs-target="#showDetails">
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
                        <span id="bookmark"><i class="fas fa-bookmark follow-eonet2" id="follow-eonet2" data-id="${matched_data[i].id}" tabindex="0"></i></span>
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

    
        $('.follow-eonet2').on('click', (e) => {
                
            
            
                if(localStorage.getItem('acces_token') === !null){
                    var eonetid = $(e.currentTarget).attr('data-id');
    
                    var userid = localStorage.getItem('user_id');
    
                let datainput= `
                <form action="" id="addEonet">
                <input type="text" id="eonetid" name="eonetid" value="${eonetid}">
                <input type="text" id="user_id" name="user_id" value="${userid}">
                </form>
                `;
    
                var data = $(datainput).serialize();
                // console.log(data);
                    followEonet(data);
                }else{
                    alert("LOGIN FIRST");
                }
            
    
        });

        $('#showDetails').on('show.bs.modal', function(e) {
            var card_id = $(e.relatedTarget).attr('data-id');

            showModalDetails(card_id, all_result);

        });
    });


    


}
