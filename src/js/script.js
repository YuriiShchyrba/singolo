
window.onload = function(){

    addTagsClickHandler();
}

const addTagsClickHandler = () =>{
    console.log(document.querySelector(".navigation"));
    document.querySelector(".navigation").addEventListener("click",(e)=>{
        console.log(e);
        if( e.target.classList.contains("navigation__link"))
        {
            console.log(e);
            let nav_tag = e.target;
            removeSelectedTags();
            addSelectedTag(nav_tag);
        }
    });
}

const removeSelectedTags=()=>{
    let nav_tags = document.querySelectorAll(".navigation .navigation__link");
    nav_tags.forEach( tag=> {
        tag.classList.remove("navigation__link_active");
        tag.classList.add("navigation__link_pasive");
    })
}
 

const addSelectedTag=(nav_tag)=>{
    tag.classList.remove("navigation__link_pasive");
        nav_tag.classList.add("navigation__link_active");
}


