

const cartModal = document.getElementById('cartModal');

let flag = 0;
function openForm() {
    if(flag == 0){
        document.getElementById("popupForm").classList.add("visible");
        flag = 1;
    }
}
function openFormFeedback() {
    if(flag == 0) {
        document.getElementById("popupFormFeedback").classList.add("visible");
        flag = 1;
    }
}

const lol = function (event) {
    console.log('lol')
    const idCard = event.currentTarget.id;
    const newId = 'popup' + String(idCard);
    document.getElementById(newId).classList.add("visible");
    const closeIcon = document.querySelectorAll('.cancelX');
    let btnClose = closeIcon[0];

    for (let i = 0; i < closeIcon.length; i++) {
        if (closeIcon[i]) {
            closeIcon[i].addEventListener('click', () => {
                console.log(newId)
                document.getElementById(newId).classList.remove("visible");
            })
        }
    }
}

function visionPopup (id) {
    document.getElementById(id).classList.add("visible");
}


        function openPopupCart() {
            if(flag == 0) {
                document.getElementById("popupCart").classList.add("visible");
                showCart()
                flag=1;
            }
        }
      function openPopup2() {
        if(flag == 0) document.getElementById("popupFormMain2").style.display = "block";
         flag = 1;
      }

      function openPopup21() {
        if(flag == 0){
            document.getElementById("popupFormMain21").classList.add("visible");
             flag = 1;
        }
      }
      function openPopup22() {
        if(flag == 0) {
            document.getElementById("popupFormMain22").classList.add("visible");
            flag = 1;
        }
      }
      function openPopup19() {
        if(flag == 0){
            document.getElementById("popupFormMain19").classList.add("visible");
            flag = 1;
        }
      }
      function openPopup20() {
        if(flag == 0) {
            document.getElementById("popupFormMain20").classList.add("visible");
            flag = 1;
        }
      }

        function popupabout() {
            if(flag == 0){
                document.getElementById("popupabout").classList.add("visible");
                 flag = 1;
            }
        }


      function closePopup() {
        document.getElementById("popupFormMain").style.display = "none";
        document.getElementById("popupFormMain2").style.display = "none";
        document.getElementById("popupFormMain3").style.display = "none";
        document.getElementById("popupFormMain4").style.display = "none";
        document.getElementById("popupFormMain5").style.display = "none";
        document.getElementById("popupFormMain6").style.display = "none";
        document.getElementById("popupFormMain7").style.display = "none";
        document.getElementById("popupFormMain8").style.display = "none";
        document.getElementById("popupFormMain9").style.display = "none";
        document.getElementById("popupFormMain10").style.display = "none";
        document.getElementById("popupFormMain11").style.display = "none";
        document.getElementById("popupFormMain12").style.display = "none";
        document.getElementById("popupFormMain13").style.display = "none";
        document.getElementById("popupFormMain14").style.display = "none";
        document.getElementById("popupFormMain15").style.display = "none";
        document.getElementById("popupFormMain16").style.display = "none";
        document.getElementById("popupFormMain17").style.display = "none";
        document.getElementById("popupFormMain18").style.display = "none";
        document.getElementById("popupFormMain19").style.display = "none";
        document.getElementById("popupFormMain20").style.display = "none";
        document.getElementById("popupFormMain22").style.display = "none";
        document.getElementById("popupCart").style.display = "none";
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("popupFormFeedback").style.display = "none";
        flag = 0;
      }



 function closePopup_ser() {
    document.getElementById("popupFormMain21").classList.remove("visible");
    flag = 0;
 }

  function closePopup_scaf() {
    document.getElementById("popupFormMain22").classList.remove("visible");
    flag = 0;
 }

   function closePopup_brush() {
    document.getElementById("popupFormMain19").classList.remove("visible");
    flag = 0;
 }
 function closePopup_gel() {
    document.getElementById("popupFormMain20").classList.remove("visible");
    flag = 0;
 }
 function closePopup_feedback() {
    document.getElementById("popupFormFeedback").classList.remove("visible");
    flag = 0;
 }

function closePopup_vhod() {
    document.getElementById("popupForm").classList.remove("visible");
    flag = 0;
 }

 function closePopup_ser2() {
    document.getElementById("popupabout").classList.remove("visible");
    flag = 0;
 }

 function closePopup1() {
    document.getElementById("1").classList.remove("visible");
    flag = 0;
 }

 function closePopup_card() {
    document.getElementById("popupCart").classList.remove("visible");
    flag = 0;
 }


