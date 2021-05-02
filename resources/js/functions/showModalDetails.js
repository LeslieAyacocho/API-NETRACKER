import followGlobal from './followGlobal';
import followEonet from './followEonet';
import bookmarkNews from './bookmarkNews';

export default function showModalDetails(card_id, all_result){
    
        
    
        // console.log(card_id);
        var category_id;
        
        // console.log( all_result);
    
        for(let r=0; r<all_result.length; r++){
            if (all_result[r].id == card_id){
                $('.modal-header').html(`<div class="card-title"><a href="#" target="_blank">${all_result[r].title}</a></div>`)
                $('.modal-event').html(`
                    
                    <div class="card-body">
                        <p><label>Category:</label> ${all_result[r].categories[0].title}</p>
                        <p><label>Date:</label> ${all_result[r].geometry[0].date}</p>
                        <p><label>Coordinates:</label> ${all_result[r].geometry[0].coordinates[0]} , ${all_result[r].geometry[0].coordinates[1]}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${all_result[r].sources[0].url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">MORE INFO</button></a>
                    
                    </div>
                </div>
                `)
        
                category_id = all_result[r].categories[0].id;
            }
        }
        
        console.log(category_id);
    
        $.ajax({
            type: 'GET',
            url: 'api/news2/' + category_id,
            success: function (response) {
                let data = response.articles
                    // console.log(data);
                    $('#eonet-news').html('');

                    data.forEach(element => {

                    
                        var string = element.description;
                        var length =150;
                        var bodytrimmed = string.substring(0, length);
                    
                    
                    $('#eonet-news').append(`
                    <div class="card col"  style="">
                    <img src="${element.urlToImage}" class="card-img-top" alt="..."> 
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" target="_blank">${element.title}</a></h5>
                        <h6 class="card-title2"><a href="#" target="_blank">by ${element.author}</a></h6>
                        <p class="card-text">${bodytrimmed}</p>
                    </div>
                    <div class="card-footer">
                    <a href="${element.url}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">READ MORE</button></a>
                    <span id="bookmark"><i class="fas fa-bookmark bookmarknews" id="bookmarknews" data-id="${element.url}" tabindex="0"></i></span>
                    </div>
                </div>
                    `)
                });

                $('.bookmarknews').on('click', (e) => {
        
                    var newsid = $(e.currentTarget).attr('data-id');
            
                    var userid = localStorage.getItem('user_id');
                    
                    let datainput= `
                    <form action="" id="bookmarkNews">
                    <input type="text" id="newsid" name="newsid" value="${newsid}">
                    <input type="text" id="user_id" name="user_id" value="${userid}">
                    </form>
                    `;

                    var data = $(datainput).serialize();
                    console.log(newsid);
            
                    bookmarkNews(data);
                        
            
                });
            }
        });

        $.ajax({
            type: 'GET',
            url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
            accepts:{
                'accept':'application/json',
            },
            dataType: 'json' ,
            success: function (response) {
                let data = response.projects.project;
                    $('#eonet-charity').html('');
    
                    data.forEach(element => {
    
                    
                            var string = element.summary;
                            var length =150;
                            var bodytrimmed = string.substring(0, length);
                        
                        
                        $('#eonet-charity').append(`
                        <div class="card col"  style="">
                        <img src="${element.imageLink}" class="card-img-top" alt="..."> 
                        <div class="card-body">
                            <h5 class="card-title"><a href="#" target="_blank">${element.title}</a></h5>
                            <h6 class="card-title2"><a href="${element.contactUrl}" target="_blank">by ${element.contactAddress}</a></h6>
                            <p class="card-text">${bodytrimmed}</p>
                        </div>
                        <div class="card-footer">
                        <a href="${element.projectLink}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">READ MORE</button></a>
                        <span id="bookmark"><i class="fas fa-bookmark follow-global" id="follow-global" data-id="${element.id}" tabindex="0"></i></span>
                        </div>
                        </div>
                        `)
    
                    });

                    $('.follow-global').on('click', (e) => {
        
                        var globalgivingid = $(e.currentTarget).attr('data-id');
                
                        var userid = localStorage.getItem('user_id');
                
                            let datainput= `
                            <form action="" id="bookmarkNews">
                            <input type="text" id="globalgivingid" name="globalgivingid" value="${globalgivingid}">
                            <input type="text" id="user_id" name="user_id" value="${userid}">
                            </form>
                            `;
                
                            var data = $(datainput).serialize();
                            console.log(globalgivingid);

                            followGlobal(data);
                            
                
                    });
            }
        });
    
//     });
}