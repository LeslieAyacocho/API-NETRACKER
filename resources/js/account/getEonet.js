import showDetails from './functions/showDetails';
import showModalDetails from './functions/showModalDetails';

export default function getEonet(response){

    console.log('EONET');
    let newsContent=`
    <div class="page-title">
        <h1> Earth Observatory Natural Event Tracker</h1>
        <h2>(EONET)</h2>
    </div>
    <div id="eonet-list">
        
    </div>
    `

    $('#content-account').html(newsContent);

    var i = 0;
    var all_result = new Array();
    response.forEach(data => {            
        all_result[i] = data;
        i++;
    });

    // console.log(all_result[0].eonetid);
        $.ajax({
            type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit&'+
        'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
            success: function (response) {
            
                let data = response.events

                // console.log(data);  
                var x = all_result.length 
                var all_result_events = new Array();

                    var v = 0
                    data.forEach(element=>{

                        all_result_events[v] = element;
                    
                        v++;
                    });


                
                // var x = 0
                showEonet();
            function showEonet() { console.log(all_result);
                if (x == 0){
                    $('#eonet-list').html(`<h1>NO BOOKMARKED EVENTS</h1>`);
                }
                else{
                    for(let r=0; r<x; r++){
                        data.forEach(element => {
                            if (all_result[r].eonetid== element.id){
                                // console.log(all_result[r].id);
                                $('#eonet-list').append(`
                                <div class="card col" >
                                    <div class="card-title">
                                    <a href="${element.sources[0].url}" target="_blank">${element.title}</a>
                                    </div>
                                    <div class="card-body" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#showDetails">
                                        <p><label>Category:</label> ${element.categories[0].title}</p>
                                        <p><label>Date:</label> ${element.geometry[0].date}</p>
                                        <p><label>Coordinates:</label> ${element.geometry[0].coordinates[0]} , ${element.geometry[0].coordinates[1]}</p>
                                    </div>
                                    <div class="card-footer">
                                    <a href="${element.sources[0].url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">MORE INFO</button></a>
                                    <span id="bookmark"><i class="fas fa-trash delete-eonet" id="delete-eonet" style="color: #c05f5f;" data-id="${all_result[r].id}" tabindex="0"></i></span>
                                    </div>
                                </div>
                                `)
                            }
                    });
                    }}

                    $('.delete-eonet').on('click', (e) => {
                        var id = $(e.currentTarget).attr('data-id');

                        console.log(id);
                        console.log('delete');

                        $.ajax({
                                        
                            type: "DELETE",
                            url: "/api/Eonet/" + id,
                            data: data,
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                            },
                            dataType: "json",
                            success: function(data) {
                                e.preventDefault();
                                console.log('success');
                                // showEonet();
                            },
                            error: function(error) {
                                alert('error')
                            }
                        });
                    });
                }

                

                $('#contentpage').append(showDetails);

                $('#showDetails').on('show.bs.modal', function(e) {
                    var card_id = $(e.relatedTarget).attr('data-id');
    
                    // console.log(card_id); 
                    // console.log(all_result_events);
                    showModalDetails(card_id, all_result_events);
                });

            },
            error: function(error) {
                console.log('error');
            }
        });



}