
window.onload = function(){
    console.log("Try test");

    addTagsClickHandler();
    addImageClickHandler();
}

const addTagsClickHandler = () =>{
    document.querySelector(".navigation").addEventListener("click",(e)=>{
        if( e.target.classList.contains("nav_tag"))
        {
            let nav_tag = e.target;
            removeSelectedTags();
            addSelectedTag(nav_tag);
        }
    });
}

const removeSelectedTags=()=>{
    let nav_tags = document.querySelectorAll(".navigation .nav_tag");
    nav_tags.forEach( tag=> {
        tag.classList.remove("active");
    })
}
 

const addSelectedTag=(nav_tag)=>{
    
        nav_tag.classList.add("active");
}


const addImageClickHandler = () =>{
    document.querySelector(".page_transfer_wrapper").addEventListener("click",(e)=>{
        console.log(e);
        if( e.target.classList.contains("page_transfer__sign"))
        {
            let d = document.querySelector(".phones .wrapper");
            if( d.classList.contains("active"))
            {
                d.classList.remove("active");
                d.classList.add("imgimg");
                //d.classList.add("phone_wrapper2");
            }
            else{
                d.classList.add("active");
                d.classList.remove("imgimg");
                //d.classList.remove("phone_wrapper2");
            }
            console.log(d);
            console.log(d.classList.contains("active"));
        }
    });
}


 