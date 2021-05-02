import followGlobal from './functions/followGlobal';
export default function globalgiving(){


// console.log('globalgiving');

let pageContent=`
    <div class="page-title">
        <h1>GLOBAL GIVING</h1>
    </div>

    <div class="w-25 p-3" id="category-drop">
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" id="global-search" />
                    <button type="button" class="btn btn-primary searchGiving" style="background-color:#3aafeb; color:#f3f7f9" >
                    <i class="fas fa-search"></i>
                    </button>
            </div>
        </div>
    
    <div id="globalgiving-list">
    </div>
    `;

    $('#contentpage').html(pageContent);

    var all_giving = new Array();
    $.ajax({
        type: 'GET',
        url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
        accepts:{
            'accept':'application/json',
        },
        dataType: 'json' ,
        success: function (response) {
            let data = response.projects.project;
                // console.log(data);
                // console.log('data');
                // $('#globalgiving-list').html('');

                data.forEach(element => {

                
                    // if(element.active == true){
                        var string = element.summary;
                        var length =150;
                        var bodytrimmed = string.substring(0, length);
                    
                    
                    $('#globalgiving-list').append(`
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

                    // }
                    var i = 0;
    
                    data.forEach(data => {            
                        all_giving[i] = data;
                        i++;
                    });
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

                $('.searchGiving').on('click', (e) => {
                
                    var temp = document.getElementById("global-search").value
                    console.log(temp);
            
                    var allEvents = new Array()
                    var i;
                    for( i=0;i<all_giving.length;i++){
                        allEvents[i] = [all_giving[i].id,
                                        all_giving[i].imageLink,
                                        all_giving[i].title,
                                        all_giving[i].contactUrl,
                                        all_giving[i].contactAddress,
                                        all_giving[i].projectLink,
                                        all_giving[i].summary,
                                    ];
                    }
            
                    var regex = new RegExp(  temp + "*", "gim");
            
            
                    const matches = allEvents.filter(value=>regex.test(value));
                    console.log(matches);

                
                
                    $('#globalgiving-list').html('');
                    for(let i=0; i< matches.length; i++){
                        var string = matches[i][6];
                        var length =150;
                        var bodytrimmed = string.substring(0, length);

                        $('#globalgiving-list').append(`
                        <div class="card col"  style="">
                        <img src="${matches[i][1]}" class="card-img-top" alt="..."> 
                        <div class="card-body">
                            <h5 class="card-title"><a href="#" target="_blank">${matches[i][2]}</a></h5>
                            <h6 class="card-title2"><a href="${matches[i][3]}" target="_blank">by ${matches[i][4]}</a></h6>
                            <p class="card-text">${bodytrimmed}</p>
                        </div>
                        <div class="card-footer">
                        <a href="${matches[i][5]}" target="_blank"><button type="button" class="btn" style="background-color:#3aafeb; color:#f3f7f9">READ MORE</button></a>
                        <span id="bookmark"><i class="fas fa-bookmark follow-global" id="follow-global" data-id="${matches[i][0]}" tabindex="0"></i></span>
                        </div>
                        </div>
                `)}
            
            });
        }
    });

}