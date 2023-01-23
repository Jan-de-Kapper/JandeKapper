$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

    $(window).on('scroll load',function(){

      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }

    });

});

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

var Form1 =document.getElementById("Form1")
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4")

var Next1 = document.getElementById("Next1")
var Next2 = document.getElementById("Next2")
var Back1 = document.getElementById("Back1")
var Back2 = document.getElementById("Back2")

var progress = document.getElementById("progress")


Next1.onclick= function(){
  Form1.style.left = "-450px";
  Form2.style.left = "40px";
  progress.style.width = "180px"
};

Back1.onclick= function(){
  Form1.style.left = "40px";
  Form2.style.left = "0px";
  progress.style.width = "90px"
};

Next2.onclick= function(){
  Form2.style.left = "-450px";
  Form3.style.left = "-410px";
  progress.style.width = "270px"
};

Back2.onclick= function(){
  Form2.style.left = "40px";
  Form3.style.left = "0px";
  progress.style.width = "180px"
};

Next3.onclick= function(){
  Form3.style.left = "-900px";
  Form4.style.left = "-410px";
  progress.style.width = "360px"
};

Back3.onclick= function(){
  Form3.style.left = "-410px";
  Form4.style.left = "0px";
  progress.style.width = "270px"
};

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('Overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.container-pop.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

var form = document.getElementById('Form1');

form.addEventListener ('submit', function(event){
  event.preventDefault
});