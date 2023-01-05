let newReview, reviews;
function start(){
    newReview = document.getElementById("review");
    reviews = document.getElementById("reviews");
}
function addReview(){
    if(newReview.value){
        const li = document.createElement("li");
        li.innerHTML=newReview.value;
        replyLikeDelete(li);
        reviews.appendChild(li);
        newReview.value=null;
    }
    

}
function replyLikeDelete(review){
    const reply = replyFun(review);
    const like = likeFun(review);
    const deleteBtn = deleteFun(review);
    review.append(reply,like,deleteBtn);
}

function replyFun(review){
    const reply = document.createElement("button");
    reply.innerHTML = "Reply";
    reply.addEventListener('click', (evt) => {
        createReply(review);
    });
    
    return reply;
}

function createReply(review){
    let cancel,add;
    const br = document.createElement("br");
    const textArea = document.createElement("TEXTAREA");
    cancel = cancelFun(br,textArea,add);
    add = addFun(br,textArea,cancel,review);
    review.append(br,textArea,add,cancel);
    

}

function addFun(br,textArea,cancel,review){
    const add = document.createElement("button");
    add.innerHTML = "Add";
    add.addEventListener("click",(evt) =>{
        if(textArea.value){
            const li = document.createElement("li");
            li.innerHTML = textArea.value;
            replyLikeDelete(li);
            br.remove();
            textArea.remove();
            cancel.remove();
            add.remove();
            const ul = document.createElement("ul");
            ul.appendChild(li);
            review.appendChild(ul);
            
        }
        
        

    });
    
    return add;
}

function cancelFun(br,textArea,add){
    const cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    cancel.addEventListener("click", (evt) =>{
        br.remove();
        textArea.remove();
        add.remove();
        cancel.remove();
       
    });
    return cancel;
    
}

function likeFun(review){
    const like = document.createElement('button');
    like.innerHTML = '0 Like';
    like.addEventListener('click', (evt) =>{
        let count = like.innerHTML.split(' ')[0];
        count++;
        like.innerHTML =count +" " + "Like" ;

    });
    return like;

}

function deleteFun(review){
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", (evt) =>{
        review.remove();
    })
    return deleteBtn;
}