var orderButton = document.querySelector(".featured__btn");
var modalPopup = document.querySelector(".modal-content");
var modalOverlay = document.querySelector(".modal-overlay");
var modalForm = modalPopup.querySelector(".size-form");
var checkboxFormArr = modalForm.querySelectorAll("input");

var checkbox = modalForm.querySelector(".size-form__checkbox");
// var inputWrapper = modalForm.querySelector(".size-form__items");

function unCheckAll(x) {
  var n = x.length;
  for (var i = 0; i < n; i++) {
    x[i].checked = false;
  }
};

function checkOne(x, id) {
  var n = x.length;
  for (var k = 0; k < n; k++) {
    console.log (x[k].checked);
    console.log (k);
    if (id !== x[k].id)
      x[k].checked = false;
  }
};


orderButton.addEventListener("click", function(event) {
  event.preventDefault(); //отменяем действие по умолчанию у ссылки href, чтобы успел сработать скрипт
  modalPopup.classList.add("modal-content--show");
  modalOverlay.classList.add("modal-overlay--show");
  // анчек всех чекбоксов при помощи forEach
  // checkboxFormArr.forEach (function(i) {
  //   i.checked = false;
  //   return;
  // });
  unCheckAll(checkboxFormArr);
});

// обработчик инпута , делаем чтобы выбирался один - функция checkone
modalForm.addEventListener("click", function(event) {
  if (event.target.nodeName == "INPUT") {
    console.log (event.target.id);
    var inputId = event.target.id;
    checkOne(checkboxFormArr, inputId);
  }
});

modalForm.addEventListener("submit", function(event) {
  event.preventDefault();
  modalPopup.classList.remove("modal-content--show");
  modalOverlay.classList.remove("modal-overlay--show");
});


window.addEventListener("keydown", function(event) {    // нажатие на ESC
    if (event.keyCode === 27) {
        if (modalPopup.classList.contains("modal-content--show")) {
            modalPopup.classList.remove("modal-content--show");
            modalOverlay.classList.remove("modal-overlay--show");
        }
    }
});
