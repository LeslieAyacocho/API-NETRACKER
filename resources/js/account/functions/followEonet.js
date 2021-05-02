export default function followEonet(data){
    $.ajax({
                    
        type: "Post",
        url: "/api/Eonet",
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
            alert('Login first to bookmark event')
        }
    });
}