
  const subMenu = document.querySelectorAll('.subMenui li')
  const hdSubCtg = document.querySelector('.header_ctg_sub')
  const hdSubCtgBtn = document.querySelectorAll('.hctg_wrp li')



  subMenu.forEach(subMenubtn => {
      subMenubtn.addEventListener('click', () => {
          const subMenuCtg = subMenubtn.querySelector('a')
          removeActiveClases()
          hdSubCtg.setAttribute('data-id', subMenuCtg.textContent )
          subMenubtn.classList.add('wh_active')
      })
  })

  function removeActiveClases() {
      subMenu.forEach(subMenubtn => {
          subMenubtn.classList.remove('wh_active')
      })
  }



  hdSubCtgBtn.forEach(hdSubCtgBtns => {
      hdSubCtgBtns.addEventListener('click', () => {
          hdSubCtgBtns.classList.add('wh_active')
          hdSubCtgBtns.classList.add('r_active')
      })
  })


  const spanAppend = document.querySelectorAll('.hctg_wrp li')

  spanAppend.forEach(spanAppended => {
    spanAppended.addEventListener('click', () => {
        const findSpan = spanAppended.querySelector('span')
        if(!findSpan) {
            const spanCreate = document.createElement('SPAN')
            spanCreate.classList.add('xBtn')
            spanCreate.textContent='+';
            spanAppended.append(spanCreate);
        }
    })
  })

window.addEventListener('click', (e) => {
     
    if(e.target.classList.contains('xBtn')) {
       let findli =  e.target.parentElement
       findli.classList.remove('wh_active')
       e.target.remove()
    }

})

//   $(spanAppend).click(function(e){
//       console.log(e.target);
//       $(".hctg_wrp li.wh_active").append("<span class='xbtn'>+<span/>");
          
//   });



  const Xspan = document.querySelectorAll('.hctg_wrp ul li span')


  Xspan.forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
          closeBtn.classList.remove('wh_active')
          console.log('hello');
      })
  })


  $('.precio').click(function() {
    $('.li_blk ul:nth-child(2) li:nth-child(2)').toggleClass('price');
    $('.li_blk_menu ul:nth-child(2) li:nth-child(2)').toggleClass('price');
    $('.li_blk ul:nth-child(2) li:nth-child(3)').toggleClass('price');
    $('.li_blk_menu ul:nth-child(2) li:nth-child(3)').toggleClass('price');
})
$('.ocultar').click(function() {
    $('.li_blk ul:nth-child(2) li:nth-child(2)').toggleClass('price2');
    $('.li_blk_menu ul:nth-child(2) li:nth-child(2)').toggleClass('price2');
})

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


const fltActive = document.querySelectorAll('#myBtnContainer .btn')
if (fltActive) {
fltActive.forEach(fltActiveClass => {
    fltActiveClass.addEventListener('click', () => {
        removeActiveC()
        fltActiveClass.classList.add('active')
    })
})

function removeActiveC() {
    fltActive.forEach(fltActiveClass => {
        fltActiveClass.classList.remove('active')
    })
}

}