const sidebar = `
    <aside class="aside">
        <h1>Our List</h1>
        <ul>
            <li id="list-1"><a href="#">list of movies.</a></li>
            <li id="list-2"><a href="#">list of tv series.</a></li>
            <li id="list-3"><a href="#">list of documentaries.</a></li>
            <li id="list-4"><a href="#">top 250 movies all time.</a></li>
            <li id="list-5"><a href="#">top 250 tv series all time</a></li>
            <li id="list-6"><a href="#">list of actors.</a></li>
            <li id="list-7"><a href="#">list of directors.</a></li>
            <li id="list-8"><a href="#">cima4u Reviews</a></li>
        </ul>
        
    </aside>
    <article class="article">
        <div class="inside-article"></div>
    </article>
`;

const list1 = `
    <h1> list of movies : </h1>
    <ul>
        <li>the godfather</li>
        <li>the shawshank redemption</li>
        <li>12 angry man</li>
        <li>inception</li>
        <li>lord of the rings I</li>
        <li>city of god</li>
        <li>lord of the rings II</li>
        <li>leon the professional</li>
        <li>lord of the rings III</li>
        <li>the dark knight rises</li>
        <li>batman begin</li>
        <li>americain history x</li>
        <li>no country for old man</li>
        <li>psyco</li>
    </ul>
`;

const list2 = `
    <h1>list of tv series :</h1>
    <ul>
        <li>breaking bad</li>
        <li>game of thrones</li>
        <li>narcos</li>
        <li>sharlock</li>
        <li>stranger things</li>
        <li>the last kingdom</li>
        <li>dexter</li>
        <li>hannibal</li>
        <li>marco polo</li>
        <li>house of dragon</li>
        <li>sons of anarkey</li>
        <li>mouse</li>
    </ul>
    `;

const list3 = `
    <h1>list of documentaries:</h1>
    <ul>
        <li>the lest dance</li>
        <li>Man on Wire</li>
        <li>Bowling for Columbine</li>
        <li>The Act of Killing</li>
        <li>The Cove</li>
        <li>Waltz with Bashir</li>
    </ul>
`;

const list4 = `
    <h1>top 250 movies all time : </h1>
    <ul>
        <li>the godfather</li>
        <li>the shawshank redemption</li>
        <li>12 angry man</li>
        <li>inception</li>
        <li>lord of the rings I</li>
        <li>city of god</li>
        <li>lord of the rings II</li>
        <li>leon the professional</li>
        <li>lord of the rings III</li>
        <li>the dark knight rises</li>
        <li>batman begin</li>
        <li>americain history x</li>
        <li>no country for old man</li>
        <li>psyco</li>
    </ul>
`;

const list5 = `
    <h1>top 250 tv series all time : </h1>
    <ul>
        <li>breaking bad</li>
        <li>game of thrones</li>
        <li>narcos</li>
        <li>sharlock</li>
        <li>stranger things</li>
        <li>the last kingdom</li>
        <li>dexter</li>
        <li>hannibal</li>
        <li>marco polo</li>
        <li>house of dragon</li>
        <li>sons of anarkey</li>
        <li>mouse</li>
    </ul>
`;

const list6 = `
    <h1>list of actors : </h1>
    <ul>
        <li>Tom Hanks</li>
        <li>Leonardo DiCaprio</li>
        <li>Robert De Niro</li>
        <li>Johnny Depp</li>
        <li>Al Pacino</li>
        <li>Morgan Freeman</li>
        <li>Denzel Washington</li>
        <li>robert dinero</li>
        <li>Matt Damon</li>
        <li>henry fonda</li>
        <li>Jack Nicholson</li>
    </ul>
`;

const list7 = `
    <h1>list of directors :</h1>
    <ul>
        <li>Christopher Nolan</li>
        <li>Rajkumar Hirani</li>
        <li>Frank Darabont</li>
        <li>Quentin Tarantino</li>
        <li>Stanley Kubrick</li>
        <li>David Fincher</li>
        <li>Sam Mendes</li>
        <li>Peter Jackson</li>
        <li>Edward Yang</li>
    </ul>
`;

const list8 = `
    <h1>cima4u Reviews :</h1>
    <ul>
        <li>The Godfather is the best movie all time</li>
        <li>no country for old man is mad movie shiiittttt....</li>
        <li>bearking bad make me crazy wft, it is absolutly peace of art</li>
        <li>i love The Godfather part1 and part2 movie</li>
        <li>Game of thrones last saison like shit.</li>
        <li>please, christopher Nolan, make new movie, i love movies of this man</li>
    </ul>
`;


document.querySelector(".section-home").innerHTML = sidebar;

const l1 = document.querySelector("#list-1");
const l2 = document.querySelector("#list-2");
const l3 = document.querySelector("#list-3");
const l4 = document.querySelector("#list-4");
const l5 = document.querySelector("#list-5");
const l6 = document.querySelector("#list-6");
const l7 = document.querySelector("#list-7");
const l8 = document.querySelector("#list-8");

const optionsList = [{ list: l1, html: list1 }, { list: l2, html: list2 }, { list: l3, html: list3 }, { list: l4, html: list4 }, { list: l5, html: list5 }, { list: l6, html: list6 }, { list: l7, html: list7 }, { list: l8, html: list8 }];


addEventListener("load", ()=>{
    document.querySelector(".inside-article").innerHTML = list1;
});

optionsList.forEach((item) => {
    item.list.addEventListener("click", () => {
        document.querySelector(".inside-article").innerHTML = item.html;
    })
})
//document.querySelector(".inside-article").innerHTML = sidebar;



