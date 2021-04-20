export default function news(){
    console.log('working');

    let pageContent=`
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
    </div>
    `;

    $('#contentpage').html(pageContent);

    
$('.dropdown-item').on('click', (e) => {
    let id = e.currentTarget.dataset.id;

        $.ajax({
            type: 'GET',
            url: 'api/news/' + id,
            success: function (response) {
                let data = response.articles
                    console.log(data);
                    $('#news-list').html('');

                    data.forEach(element => {

                        var string = element.description;
                        var length =150;
                        var bodytrimmed = string.substring(0, length);
                    
                    
                    $('#news-list').append(`
                    <div class="card col"  style="">
                    <img src="${element.urlToImage}" class="card-img-top" alt="..."> 
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" target="_blank">${element.title}</a></h5>
                        <p class="card-text">${bodytrimmed}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${element.url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">READ MORE</button></a>
                    <span id="bookmark"><i class="fas fa-bookmark bookmarknews" id="bookmarknews" data-id="${element.id}" tabindex="0"></i></span>
                    </div>
                </div>
                    `)
                });
            }
        });
    
        
});

    
    
}