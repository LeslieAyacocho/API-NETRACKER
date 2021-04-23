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

    console.log(all_result[0].eonetid);
        $.ajax({
            type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit&'+
        'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
            success: function (response) {
            
                let data = response.events

                for(let r=0; r<all_result.length; r++){
                    data.forEach(element => {
                        if (all_result[r].eonetid== element.id){
                            console.log(r);
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
                                <span id="bookmark"><i class="fas fa-trash follow-eonet" id="follow-eonet" style="color: #c05f5f;" data-id="${element.id}" tabindex="0"></i></span>
                                </div>
                            </div>
                            `)
                        }
                });
                }

            },
            error: function(error) {
                console.log('error');
            }
        });



}