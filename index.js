const PADDING_OFFSET = 20;

function scrollToElement(e) {
    const targetId = e.currentTarget.dataset.target;
    const target = document.getElementById(targetId);

    const nav = document.getElementById("navigation");
    const navOffset = nav.offsetHeight;
    
    window.scrollTo({
        "behavior": "smooth",
        "top": target.offsetTop - navOffset - PADDING_OFFSET
    });

    e.currentTarget.blur();
}

document.getElementById("hero-link").addEventListener("click", scrollToElement);
document.getElementById("about-link").addEventListener("click", scrollToElement);
document.getElementById("portfolio-link").addEventListener("click", scrollToElement);
document.getElementById("contact-link").addEventListener("click", scrollToElement);