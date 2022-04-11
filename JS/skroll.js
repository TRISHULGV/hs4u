// components
const app = Vue.createApp({});

app.component('the-nav' , {
    template: `
    <nav class="navbar">
    <a class="us" href="contact.html">Book Now</a>
        <div class="logo"></div>
    </nav>
    <button class="open"></button>
    <div class="ham">
        <button class="close"></button>
            <h1><a href="index.html">HOME</a></h1>
            <h1>HOMESTAYS</h1>
            <ul>
                <li><a href="HTML/chikmaglur/chikmaglur.html">CHIKMAGALUR</a></li>
                <li><a href="HTML/coorg/coorg.html">COORG</a></li>
                <li><a href="HTML/sakleshpoora/sakleshpoora.html">SAKLESHPUR</a></li>
                <li><a href="HTML/gokarna/gokarna.html">GOKARNA</a></li>
            </ul>
            <h1 class="h1">PLACES TO VISIT</h1>
            <ul>
                <li><a href="HTML/places/chikmaglur.html">CHIKMAGALUR</a></li>
                <li><a href="HTML/places/coorg.html">COORG</a></li>
                <li><a href="HTML/places/sakleshpoora.html">SAKLESHPUR</a></li>
                <li><a href="HTML/places/gokarna.html">GOKARNA</a></li>
              </ul>
              <br>
              <br>
              <ul>
                <div class="socials">
                    <li><a href="mailto:homestayforyou18@gmail.com" target="_blank"><div class="mail"></div></a></li>
                    <li><a href="https://www.instagram.com/homestay_for_you/?hl=en" target="_blank"><div class="insta"></div></a></li>
                    <li><a href="https://www.facebook.com/Homestayforyouindia/" target="_blank"><div class="fb"></div></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=918088003032&text=hello" target="_blank"><div class="whats"></div></a></li>
                </div>
                </ul>
    </div>
</nav>
`
,
});
app.component('the-nav1' , {
    template: `
    <nav class="navbar">
    <a class="us" href="../../contact.html">Book Now</a>
        <div class="logo"></div>
    </nav>
    <button class="open"></button>
    <div class="ham">
        <button class="close"></button>
            <h1><a href="../../index.html">HOME</a></h1>
            <h1>HOMESTAYS</h1>
            <ul>
                <li><a href="../../HTML/chikmaglur/chikmaglur.html">CHIKMAGALUR</a></li>
                <li><a href="../../HTML/coorg/coorg.html">COORG</a></li>
                <li><a href="../../HTML/sakleshpoora/sakleshpoora.html">SAKLESHPUR</a></li>
                <li><a href="../../HTML/gokarna/gokarna.html">GOKARNA</a></li>
            </ul>
            <h1 class="h1">PLACES TO VISIT</h1>
            <ul>
                <li><a href="../../HTML/places/chikmaglur.html">CHIKMAGALUR</a></li>
                <li><a href="../../HTML/places/coorg.html">COORG</a></li>
                <li><a href="../../HTML/places/sakleshpoora.html">SAKLESHPUR</a></li>
                <li><a href="../../HTML/places/gokarna.html">GOKARNA</a></li>
              </ul>
              <br>
              <br>
              <ul>
                <div class="socials">
                    <li><a href="mailto:homestayforyou18@gmail.com" target="_blank"><div class="mail"></div></a></li>
                    <li><a href="https://www.instagram.com/homestay_for_you/?hl=en" target="_blank"><div class="insta"></div></a></li>
                    <li><a href="https://www.facebook.com/Homestayforyouindia/" target="_blank"><div class="fb"></div></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=918088003032&text=hello" target="_blank"><div class="whats"></div></a></li>
                </div>
                </ul>
    </div>
</nav>`
,
});
app.component('the-contact' , {
    template: `<section id="contact">
    <h1>Book Homestay</h1>
    <h1>Enter Your Details</h1>
    <form action="https://formsubmit.co/homestayforyou18@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Enter Your Name" class="input" required>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Enter Your Email" class="input" required>
        <label for="email">Phone</label>
        <input type="tel" name="tel" placeholder="Enter Your Phone Number" class="input" required>
        <label for="homestay">Select Your Homestay</label>
        <select name="homestay" id="homestay" required>
            <option value="chikmaglur">Chikmagalur</option>
            <option value="Sakleshpoora">Sakleshpur</option>
            <option value="Coorg">Coorg</option>
            <option value="Gokarna">Gokarna</option>
        </select>
        <label for="adult">Number of Adults</label>
        <input type="number" required>
        <label for="kids">Number of Children(5-12 years)</label>
        <input type="number" >
        <label for="date">Check in</label>
        <input type="date" class="date" placeholder="Select Date" required>
        <label for="date">Check out</label>
        <input type="date" class="date" required>
        <input type="hidden" name="_next" value="https://homestayforyou.com/thankyou.html">
        <button type="submit">send</button>
   </form>
   <ul>
       <h1>Or Contact Us</h1>
<div class="socials">
    <li><a href="mailto:homestayforyou18@gmail.com" target="_blank"><div class="mail"></div></a></li>
    <li><a href="https://www.instagram.com/homestay_for_you/?hl=en" target="_blank"><div class="insta"></div></a></li>
    <li><a href="https://www.facebook.com/Homestayforyouindia/" target="_blank"><div class="fb"></div></a></li>
    <li><a href="https://api.whatsapp.com/send?phone=918088003032&text=hello" target="_blank"><div class="whats"></div></a></li>
</div>
</ul>
</section>`
,
});

app.component('the-cancel' , {
    template: `<div class="cancel">
    <h2><span class="red">*</span>Cancellation Policy and Procedure</h2>
    <ul>
        <li> > 1<sup>st</sup> night charges non-refundable</li>
        <li> > Cancellation before 15 days of check-in: <br> 90% of balance refund</li>
        <li> > Cancellation before 7 to 14 days of check-in: <br> 75% of balance refund</li>
        <li> > Cancellation within 7 days of check-in: <br> No-refund</li>
        <br>
        <p>Any Change in number of Guest is to be informed atleast 2 days before the visit. <br>If uninformed charges will remain the same as fixed earlier.</p>
        <br>
        <p>Please let us know the arrival time 1 day early.</p>
        <br>
        <span class = "center"><p>Thanks Regards</p>
        <p>Homestayforyou</p></span>
    </ul>
</div>`
,
});
app.component('the-call' , {
    template: `<a href="tel:8088003032" class="call"></a>`
,
});
app.component('the-footer' , {
    template: `<footer>
    <div class="left">
        <li>Mail: homestayforyou18@gmail.com</li>
        <li>Phone Number: 8088003032</li>
    </div>
    <div class="center">
        Copyright ©2022 All rights reserved to Homestays For You
    </div>
    <div class="right">
        Address: <br>
        Chikmagalur <br>
        -577101.
    </div>
</footer>`
,
});

app.mount('.app');

// loader

var loade = document.getElementById("loader");

        window.addEventListener("load", function(){
            loader.style.display = "none";
        })

// smooth scroll 
$('.btn').on('click', function(event) {
        if(this.hash !== '' ){
            event.preventDefault();
            const hash = this.hash;
            $('html, body'). animate(
                {
                    scrollTop: $(hash).offset().top
                },
                700
            );
        }
    });

//gsap nav

const button = document.querySelector('.open')
button.addEventListener('click', () => {
   gsap.to('.ham',{x:350, y:0, ease:'power2', duraion:1.5})
   gsap.from('.ham > h1',{y:50, opacity:0, stagger: .2})
   gsap.from('.ham > ul > li> a',{opacity:0, stagger: .2})
})

const btn = document.querySelector('.close')
   btn.addEventListener('click', () => {
       gsap.to('.ham',{x:-100, y:0, duration:.5})
   })


// gsap scrolltrigers

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
                 trigger: [".img"],
                 toggleActions: "restart none none none",
                 duration: '=+1'
            },
    });

    tl.from([".img"], {
    y:110,
    opacity:0
    });

    tl.to([".img"], {
    y:0,
    opacity:1
    });