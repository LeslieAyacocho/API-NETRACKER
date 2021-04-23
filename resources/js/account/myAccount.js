import getEonet from './getEonet';
import getNews from './getNews';
import getGlobalGiving from './getGlobalGiving';
export default function myAccount(){

    let pageContent=`
    <div id= myaccNav>
        <ul class="nav justify-content-center myaccNav">
        <li class="nav-item">
        <a class="nav-link acclink" data-id="getEonet" href="#">EONET</a>
        </li>
        <li class="nav-item">
        <a class="nav-link acclink" data-id="getNews" href="#">NEWS</a>
        </li>
        <li class="nav-item">
        <a class="nav-link acclink" data-id="getGlobalGiving" href="#">GLOBAL GIVING</a>
        </li>
        </ul>
    </div>
    

    
    <div id="content-account">
    </div>
    `;

    $('#contentpage').html(pageContent);

    $('.acclink').on('click', (e) => {
        var id = localStorage.getItem('user_id');
        const link = e.currentTarget.dataset.id;
        // console.log(link);
        


        $.ajax({
            type: "GET",
            url: "/api/" + link +"/"+ id,
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            dataType: 'json',
    
        success: function (response) {
        switch (link) {
            case "getEonet":
                getEonet(response);
                break;
    
            case "getNews":
                getNews(response);
                
                break;

            case "getGlobalGiving":
                getGlobalGiving(response);
                
                break;
    
            default:
                break;
            }
        },
        error: function(error) {
            console.log('error');
        }
        });
    });



}
