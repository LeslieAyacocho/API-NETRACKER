export default function getEonet(response){

    let newsContent=`
    <div class="page-title">
        <h1>NEWS</h1>
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
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="storms">Severe Storms</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="snowstorm">Snow</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="volcanoes">Volcanoes</a></li>
        <li><a class="dropdown-item" href="#" onclick="return false;" target="_blank" data-id="wildfires">Wildfires</a></li>
    </ul>
    </div>
    <div id="news-list">
    <h1>CHOOSE CATEGORY</h1>
    </div>
    `

    $('#content-account').html(newsContent);

    var i = 0;
    var all_result = new Array();
    response.forEach(data => {            
        all_result[i] = data;
        i++;
    });

    console.log(all_result);

$('.dropdown-item').on('click', (e) => {
    let id = e.currentTarget.dataset.id;

        $.ajax({
            type: 'GET',
            url: 'api/news/' + id,
            success: function (response) {
                let data = response.articles
                    console.log(data);
                    $('#news-list').html('NO DATA');

                    for(let r=0; r<all_result.length; r++){
                        data.forEach(element => {
                            if (all_result[r].newsid== element.url){
                    
                        var string = element.description;
                        var length =150;
                        var bodytrimmed = string.substring(0, length);
                    
                        $('#news-list').html('');
                    $('#news-list').append(`
                    <div class="card col"  style="">
                    <img src="${element.urlToImage}" class="card-img-top" alt="..."> 
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" target="_blank">${element.title}</a></h5>
                        <h6 class="card-title2"><a href="#" target="_blank">by ${element.author}</a></h6>
                        <p class="card-text">${bodytrimmed}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${element.url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">READ MORE</button></a>
                    <span id="bookmark"><i class="fas fa-trash bookmarknews" id="bookmarknews" style="color: #c05f5f;" data-id="${element.url}" tabindex="0"></i></span>
                    </div>
                </div>
                    `)
                            }
                });
            }
            }
        });

    });

}