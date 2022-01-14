$("#addBlogForm").submit(function(event){
    alert("Blog Added Successfully!");
})

// Delete Operation
if(window.location.pathname=="/"){
    $ondelete = $(".delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            "url" : `http://localhost:3000/api/blog/${id}`,
            "method" : "DELETE",
        }
        if(confirm("Delete one Blog?")){
            $.ajax(request).done(function(response){
                alert("Blog Deleted!");
                location.reload();
            })
        }
    })
}


$("#updateBlogForm").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data={}
    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data);
    var request = {
        "url" : `http://localhost:3000/api/blog/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated!");
    })
})