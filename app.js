$(".todoInput").on("keyup",function(e){
    if(e.keyCode== 13 && $(".todoInput").val() !=""){
        let task = $("<div class='todoList'></div>").text($(".todoInput").val());
        
        let del = $("<div class='buttons'><i class='fa-sharp fa-solid fa-trash'></i></div>")
        .click(function(){
            let p = $(this).parent();
            p.remove() 
        })
        
        task.append(del)
        $(".todoLists").append(task)
    }
})



