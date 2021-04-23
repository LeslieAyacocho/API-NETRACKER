export default function globalgiving(){


// console.log('globalgiving');

let pageContent=`
    <div class="page-title">
        <h1>GLOBAL GIVING</h1>
    </div>


    
    <div id="globalgiving-list">
    </div>
    `;

    $('#contentpage').html(pageContent);

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
            
                        $.ajax({
                            
                            type: "Post",
                            url: "/api/GlobalGiving",
                            data: data,
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                            },
                            dataType: "json",
                            success: function(data) {
                                e.preventDefault();
                                console.log('success');
                            },
                            error: function(error) {
                                alert('Login first to bookmark charity')
                            }
                        });
            
                });
        }
    });

}