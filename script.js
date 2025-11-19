 document.getElementById('y').textContent = new Date().getFullYear();

 
  document.addEventListener('DOMContentLoaded', function(){
    const faders = document.querySelectorAll('.fade-up');
    const options = { threshold: 0.18 };
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          
          const bars = entry.target.querySelectorAll('.bar');
          if(bars.length){
            bars.forEach(b => {
              const span = b.querySelector('span');
              const val = b.dataset.value || '';
              if(span && val){
                setTimeout(()=> span.style.width = val + '%', 120);
              }
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    faders.forEach(f => obs.observe(f));

    
    const skillsSection = document.getElementById('skills');
    if(skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight){
      const bars = skillsSection.querySelectorAll('.bar');
      bars.forEach(b => {
        const span = b.querySelector('span');
        const val = b.dataset.value || '';
        if(span && val) span.style.width = val + '%';
      });
    }
  });

  
  (function(){
    const wrapper = document.querySelector('.testi-wrap');
    if(!wrapper) return;
    const testi = wrapper.querySelector('.testi');
    const quotes = Array.from(testi.querySelectorAll('.quote'));
    const dotsContainer = document.getElementById('t-dots');
    const prevBtn = document.getElementById('t-prev');
    const nextBtn = document.getElementById('t-next');
    let idx = 0;
    const total = quotes.length;

   
    for(let i=0;i<total;i++){
      const b = document.createElement('button');
      if(i===0) b.classList.add('active');
      b.addEventListener('click', ()=> showSlide(i));
      dotsContainer.appendChild(b);
    }
    const dots = Array.from(dotsContainer.querySelectorAll('button'));

    
    function showSlide(i){
      idx = (i + total) % total;

      quotes.forEach((q, j) => {
        if (j >= idx && j < idx + 3) {
          q.style.display = 'block';
          q.classList.add('active');
        } else {
          q.style.display = 'none';
          q.classList.remove('active');
        }
      });

      dots.forEach((d, j) => d.classList.toggle('active', j === idx));
    }

   
    showSlide(0);
    prevBtn.addEventListener('click', ()=> showSlide(idx-1));
    nextBtn.addEventListener('click', ()=> showSlide(idx+1));

    setInterval(()=> showSlide(idx+1), 6000);
})();


window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-fill").forEach(bar => {
    let value = bar.style.width;
    bar.style.setProperty("--final-width", value);
  });
});

  
    document.getElementById("y").textContent = new Date().getFullYear();



    const modal = document.getElementById("contactModal");
    document.getElementById("openModal").onclick = () => modal.style.display = "flex";
    document.getElementById("closeModal").onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

   
    document.getElementById("contactForm").addEventListener("submit", function(e){
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const subError = document.getElementById("subError");
      const msgError = document.getElementById("msgError");

      [name, email, subject, message].forEach(i => i.classList.remove("error-input"));
      [nameError, emailError, subError, msgError].forEach(e => e.style.display="none");

      if(name.value.trim() === ""){ name.classList.add("error-input"); 
        nameError.style.display="block"; valid=false; 
      }
      const emailRegex = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;
      if(!emailRegex.test(email.value)){ email.classList.add("error-input"); 
        emailError.style.display="block"; valid=false; 
      }
      if(subject.value.trim() === ""){ subject.classList.add("error-input"); 
        subError.style.display="block"; 
        valid=false; 
      }
      if(message.value.trim() === ""){ 
        message.classList.add("error-input"); 
        msgError.style.display="block"; 
        valid=false; 
      }

      if(valid)
        { 
          alert(" Thanks! Your message has been sent."); 
          this.reset(); 
          modal.style.display="none"; 
        }
    });

    document.getElementById("y").textContent = new Date().getFullYear();



    document.getElementById("y").textContent = new Date().getFullYear();

    
    const form = document.getElementById('contact');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;

      document.querySelectorAll('.error').forEach(el => el.textContent = "");
      document.querySelectorAll('input, textarea').forEach(el => el.classList.remove("error-border"));

      const name = document.getElementById('name');
      if(name.value.trim() === ""){
        valid = false;
        name.classList.add("error-border");
        document.getElementById('nameError').textContent = "Name is required.";
      }

      const email = document.getElementById('email');
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!emailPattern.test(email.value.trim())){
        valid = false;
        email.classList.add("error-border");
        document.getElementById('emailError').textContent = "Enter a valid email address.";
      }

      const subject = document.getElementById('subject');
      if(subject.value.trim() === ""){
        valid = false;
        subject.classList.add("error-border");
        document.getElementById('subjectError').textContent = "Subject cannot be empty.";
      }

      const message = document.getElementById('message');
      if(message.value.trim() === ""){
        valid = false;
        message.classList.add("error-border");
        document.getElementById('messageError').textContent = "Message cannot be empty.";
      }

      if(valid){
        alert("Thanks! Your message has been sent.");
        form.reset();
      }
    });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  form.addEventListener("submit", function (e) {
    let valid = true;

    inputs.forEach(input => {
      const errorMsg = input.nextElementSibling;

      if (input.value.trim() === "") {
        input.classList.add("error");
        if (errorMsg && errorMsg.classList.contains("error-message")) {
          errorMsg.style.display = "block";
        }
        valid = false;
      } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
       
        input.classList.add("error");
        if (errorMsg && errorMsg.classList.contains("error-message")) {
          errorMsg.textContent = "Please enter a valid email";
          errorMsg.style.display = "block";
        }
        valid = false;
      } else {
        
        input.classList.remove("error");
        if (errorMsg && errorMsg.classList.contains("error-message")) {
          errorMsg.style.display = "none";
        }
      }
    });

    if (!valid) {
      e.preventDefault(); 
    } else {
      alert("Thanks! Your message has been sent.");
      form.reset();
    }
  });

 
  inputs.forEach(input => {
    input.addEventListener("input", function () {
      const errorMsg = input.nextElementSibling;
      if (input.value.trim() !== "") {
        input.classList.remove("error");
        if (errorMsg && errorMsg.classList.contains("error-message")) {
          errorMsg.style.display = "none";
        }
      }
    });
  });
});
