export default function eonet(){

    console.log('WORKING');
    let newsContent=`
    <div class="page-title">
        <h1> Earth Observatory Natural Event Tracker</h1>
        <h2>(EONET)</h2>
    </div>
    <div class="eonet-card-container" id="card-append">
        
    </div>
    `

    $('#contentpage').html(newsContent);

    $.ajax({
        type: 'GET',
        url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=10&'+
        'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
        success: function (response) {

            let data = response.events
                console.log(data);
                data.forEach(element => {
                $('#card-append').append(`
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

}