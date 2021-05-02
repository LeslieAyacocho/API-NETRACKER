export default function bookmarkNews(data){
    $.ajax({
        
        type: "Post",
        url: "/api/News",
        data: data,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        dataType: "json",
        success: function(data) {
            // e.preventDefault();
            console.log('success');

        },
        error: function(error) {
            alert('Login first to bookmark news')
        }
    });
}