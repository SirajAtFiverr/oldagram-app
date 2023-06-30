
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },

    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },

    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const mainSectionEl = document.querySelector("main");

function renderPost(postObj, id){

    const post = `
                        <article class="post">

                            <section class="post-header">
                                <img src="${postObj.avatar}" alt="avatar-of-post-owner" class="avatar">
                                <section class="post-owner-info-section">
                                    <h4>${postObj.name}</h4>
                                    <p>${postObj.location}</p>
                                </section>
                            </section>

                            <section>
                                <img src="${postObj.post}" alt="post" class="post-image"
                                 ondblclick="likeThePost(${id})">
                            </section>

                            <section class="post-footer">
                                <section class="icons-section">
                                    <img src="images/icon-heart.png" alt="likes-icon" class="icon like-icon"
                                    onclick="likeThePost(${id})">
                                    <img src="images/icon-comment.png" alt="comment-icon" class="icon comment-icon">
                                    <img src="images/icon-dm.png" alt="dm-icon" class="icon dm-icon">
                                </section>
                                <h4>${postObj.likes} likes</h4>
                                <p><span class="user-name">${postObj.username}</span> ${postObj.comment}</p>
                            </section>

                    </article>
                        
                 `

    mainSectionEl.innerHTML += post;
}

function renderPosts(posts){
    let count = 0;
    posts.forEach(post => {
        renderPost(post, count);
        count++;
    });
}

function likeThePost(index){

    const likesEl = document.querySelectorAll(".post-footer h4")[index];
    const likeIconEl = document.querySelectorAll(".like-icon")[index];

    const previousLikes = Number(likesEl.textContent.split(" ")[0]);

    if(likeIconEl.classList.contains("liked")){
        likeIconEl.classList.remove("liked");
        likeIconEl.src = "images/icon-heart.png";
        
        likesEl.textContent = `${previousLikes-1} likes` 
    }else{

        likeIconEl.classList.add("liked");
        likeIconEl.src = "images/icon-heart-hover.png";
            
        likesEl.textContent = `${previousLikes+1} likes` 
    }
}


renderPosts(posts);
