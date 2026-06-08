export default function loadHome(){
    const content= document.querySelector("#content");
    const info = document.createElement('div');
    info.id="info";
    content.appendChild(info);
    const tagLine= document.createElement('p');
    tagLine.id='tagLine';
    tagLine.textContent="Gotham's Finest";
    const weBeenSince= document.createElement('p');
    weBeenSince.id='weBeenSince';
    weBeenSince.textContent='Serving Japanese food to Gothamites since 1995';
    const comeBook= document.createElement('p');
    comeBook.id='comeBook';
    comeBook.textContent="Why don't you book a table?";
    const bookNow= document.createElement('button');
    bookNow.id='bookNow';
    bookNow.textContent="Book Now"
    info.appendChild(tagLine);
    info.appendChild(weBeenSince);
    info.appendChild(comeBook);
    info.appendChild(bookNow);
}
