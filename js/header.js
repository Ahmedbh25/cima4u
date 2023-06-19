const header = `
    <div class="container-1">
        <div class="logo">
            <img src="images/logo-cima.jpeg" alt="logo-cima" class="logo-cima" />
            <h1 class="title">Cima4u</h1>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">home</a></li>
            <li><a href="about.html">about</a></li>
            <li><a href="reservation.html">reservation</a></li>
            <li><a href="cinema.html">cinema</a></li>
            <li><a href="cinema.html">cinema us</a></li>
        </ul>
        <div class="auth">
            <button class="login">Login</button>
            <button class="register">Register</button>
        </div>
    </div>
    <div class="icon">Nav Icon</div>


    <div class="search">
        <input type="text" placeholder="Search ..." id="search">
    </div>
`;

const modalContent = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <li><a href="index.html">home</a></li>
            <li><a href="players.html">reservation</a></li>
            <li><a href="managers.html">movies</a></li>
            <li><a href="managers.html">tv series</a></li>
            <li><a href="#">contact us</a></li>
            <button class="login">Login</button>
            <button class="register">Register</button>
        </div>
`

document.querySelector(".navbar").innerHTML = header;
document.querySelector(".modal").innerHTML = modalContent;

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var button = document.querySelector(".icon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for button click
button.addEventListener("click", openModal);

// Event listener for close button click
span.addEventListener("click", closeModal);