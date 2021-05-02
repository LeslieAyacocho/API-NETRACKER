export default function getGlobalGiving(response){

    let newsContent=`
    <div class="page-title">
        <h1>GLOBAL GIVING</h1>
    </div>
    <div id="globalgiving-list" >
        <h1>No bookmarked projects</h1>
    </div>
    `

    $('#content-account').html(newsContent);

    var i = 0;
    var all_result = new Array();
    response.forEach(data => {            
        all_result[i] = data;
        i++;
    });

    // console.log(all_result[0].globalgivingid);

        $.ajax({
            type: 'GET',
            url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
            accepts:{
                'accept':'application/json',
            },
            dataType: 'json' ,
            success: function (response) {
            
                let data = response.projects.project;

                $('#globalgiving-list').html(' ');
                for(let r=0; r<all_result.length; r++){
                    data.forEach(element => {
                        if (all_result[r].globalgivingid== element.id){

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
                        <span id="bookmark"><i class="fas fa-trash delete-global" id="delete-global" style="color: #c05f5f;" data-id="${all_result[r].id}" tabindex="0"></i></span>
                        </div>
                        </div>
                        `)
        
                        }
                });
                }

                $('.delete-global').on('click', (e) => {
                    var id = $(e.currentTarget).attr('data-id');
        
                    console.log(id);
                    console.log('delete');
        
                    $.ajax({
                                    
                        type: "DELETE",
                        url: "/api/GlobalGiving/" + id,
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
            },
            error: function(error) {
                console.log('error');
            }
        });



}