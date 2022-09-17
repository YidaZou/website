function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
   	    page_style = "duck.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}

function light_mode()
{
    localStorage.setItem("page_stylesheet_name", "light.css");
    load_style();
}

function dark_mode()
{
    localStorage.setItem("page_stylesheet_name", "duck.css");
    load_style();
}

load_style();