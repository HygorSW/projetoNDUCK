

 btnMobile.addEventListener('click', () =>{
    menu.classList.toggle('active');

 });
const myObserver = new IntersectionObserver((entries) =>{
   entries.forEach((entry) =>{
      if(entry.isIntersecting){
         entry.target.classList.add('show')
      }else{
         entry.target.classList.add('show')
      }
   })
})
 const elements = document.querySelectorAll('.hidden2')
 const elementos = document.querySelectorAll('.hidden')

elements.forEach( (element)=> myObserver.observe(element))
elementos.forEach( (element)=> myObserver.observe(element))