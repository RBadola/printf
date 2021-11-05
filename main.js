
let home = document.getElementById("home");
let course = document.getElementById("courses");
let content = document.getElementById("content");
let testi = document.getElementById("test");
let about = document.getElementById("about")
let nav = document.getElementById("nav");
// HOME

home.addEventListener("click", function changehome() {
    content.innerHTML = ` 

<div class="logoback">

</div>
<div class="logoimg">
    <img src="img/print.png" alt="logo">

</div>
<div class="desc">
    <h1>Welcome to Printf//</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, asperiores cum. Accusamus error, ipsam
        corrupti optio asperiores dolores cupiditate officia.</p>
</div>`;

});
//  COurse
course.addEventListener("click", function changeCourse() {
    content.innerHTML = `
<section id="courses" class="courses">
<div class="h1">
    <h1>Courses:</h1>
</div>
<div class="cards1">
    <div class="card card1" style="width: 18rem;">
        <img src="img/lohp-category-business-v2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>

        <div class="card-body">
            <a href="#" class="card-link">Continue</a>

        </div>
    </div>
    <div class="card card2" style="width: 18rem;">
        <img src="img/lohp-category-design-v2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Design</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>

        <div class="card-body">
            <a href="#" class="card-link">Continue</a>

        </div>
    </div>
    <div class="card card3" style="width: 18rem;">
        <img src="img/lohp-category-development-v2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Programming </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>

        <div class="card-body">
            <a href="#" class="card-link">Continue</a>

        </div>
    </div>
    <div class="card card4" style="width: 18rem;">
        <img src="img/lohp-category-it-and-software-v2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>

        <div class="card-body">
            <a href="#" class="card-link">Continue</a>

        </div>
    </div>
    <div class="card card5" style="width: 18rem;">
        <img src="img/lohp-category-marketing-v2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Marketing</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>

        <div class="card-body">
            <a href="#" class="card-link">Continue</a>

        </div>
    </div>



    <div class="btn card6">
        <button>Explore more</button>
    </div>
</div></section> `;
});
nav.classList.add("visibl");
function myFunction(x) {
    x.classList.toggle("change");
    nav.classList.toggle("visibl");
}
//  Test 
testi.addEventListener("click", function changeTest() {
    content.innerHTML = ` 
<section class="testimonial" id="testimonial">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aut! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque molestiae, ab<br> harum laborum repellat suscipit ex eos veritatis nostrum, dignissimos totam a eum! Blanditiis<br> nemo minus qui recusandae in. Nesciunt nemo commodi ipsa officia nostrum molestias, rerum minus mollitia voluptatem tempore exercitationem accusamus. Porro consequuntur nulla sed harum asperiores adipisci ea assumenda! A sint debitis vel. Iusto iste dicta sequi reiciendis sint commodi sit id consequatur sed. A libero reprehenderit esse dignissimos cumque praesentium consectetur minus quia autem iure! <br>Illum aut porro nobis ea iste! Voluptas mollitia, aspernatur dolores ipsum fugit eius eveniet laudantium, sapiente temporibus totam culpa velit!
     </p>
<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-10">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-business-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Richard</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle ">
            <img src="img/lohp-category-design-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Raj</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-marketing-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Nitin</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-it-and-software-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Buddy</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>
<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-it-and-software-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Buddy</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>
<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-it-and-software-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Buddy</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>
<div class="card mb-3"  data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-it-and-software-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Buddy</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>
<div class="card mb-3" data-aos="fade-in" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 circle">
            <img src="img/lohp-category-it-and-software-v2.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Buddy</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
            
        </div>
    </div>
</div>
</section>`;
});
// about 
about.addEventListener("click", function changeAbout() {
    content.innerHTML = `
    <section id="about_page">
<h1>Printf// is a project made under AKTU BTECH curriculum</h1>
<p>This project is made by a team of four students (actually only one) from IMS Engineering college.</p>
<p>HTML, CSS and Javascript are used to build to full functional and responsive static website.
    Bootstrap, Vanta.js and Aos library have also been used to make UI much more interesting.
</p>
<p><span>Our team:</span></p>
<div class="cardCon">
<div class="aboutCard">
    <div class="imgbox">
    <img src="img/model2.jfif" >

    </div>
    <div class="devname">
        <h4>Roshan</h4>
        <p>Branch: IT</p>
        <p>Year: 2</p>
    </div>
</div>

<div class="aboutCard">
    <div class="imgbox">
    <img src="img/monkey.jfif" >

    </div>
    <div class="devname">
        <h4>Shresth</h4>
        <p>Branch: IT</p>
        <p>Year: 2</p>            </div>
</div>

<div class="aboutCard">
    <div class="imgbox">
    <img src="img/ape.jfif" >

    </div>
    <div class="devname">
        <h4>Vishu</h4>
        <p>Branch: IT</p>
        <p>Year: 2</p>            </div>
</div>

<div class="aboutCard">
    <div class="imgbox">
    <img src="img/photo-1413847394921-b259543f4872.jfif" >

    </div>
    <div class="devname">
        <h4>Rohit</h4>
        <p>Branch: IT</p>
        <p>Year: 2</p>            </div>
</div>
</div>
</section>`;
});