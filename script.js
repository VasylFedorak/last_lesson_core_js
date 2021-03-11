$(document).ready(function () {
  $(".check").attr("disabled", true);
  $(".check").css("background", "grey");

  let Timer;

  $(".start").on("click", function () {
    $(".start").attr("disabled", true);
    $(".check").attr("disabled", false);
    $(".start").css("background", "grey");
    $(".check").css("background", "red");

    $(".box").sortable({
      connectWith: "#start, #drop",
    });

    Timer = setInterval(updateCountDown, 1000);

    let setTime = parseInt(document.querySelector(".timer").innerHTML);
    let startingMinutes = setTime;
    let timerTime = startingMinutes * 60;
    const countDounEl = document.querySelector(".timer");

    let sTime = parseInt(document.querySelector(".second_timer").innerHTML);
    let startMinutes = sTime;
    let tTime = startMinutes * 60;
    const counDounE = document.querySelector(".second_timer");

    function updateCountDown() {
      let minutes = Math.floor(timerTime / 60);
      let seconds = timerTime % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;

      countDounEl.innerHTML = `${minutes}:${seconds}`;

      if (timerTime > 0) {
        timerTime--;
      }
      let min = Math.floor(tTime / 60);
      let sec = tTime % 60;

      sec = sec < 10 ? "0" + sec : sec;
      counDounE.innerHTML = `${min}:${sec}`;
      if (tTime > 0) {
        tTime--;
      }

      /*перевірка при таймері*/
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let check = true;
      for (let i = 0; i < $(".partial").length; i++) {
        if ($(".partial").eq(i).text() != numbers[i]) {
          check = false;
          break;
        }
      }

      if (timerTime == 0 && check == false) {
        $('.modal_box').css('display', 'block')
        $(".modal").css("display", "none");
        $(".modal_result").css("display", "block");
        $(".modal_result_message").css("color", "red");
        $(".modal_result_message").text("Unfortunately u lose, try again later.");
        $(".new_game").on("click", function () {
          $(".modal").css("display", "block");
          $(".modal_box").css("display", "none");
          $('.modal_result').css("display", "none");
          $(".timer").text("01:00");
          $(".second_timer").text("01:00");
          $(".start").attr("disabled", false);
          $(".check").attr("disabled", true);
          $(".check").css("background", "grey");
          $(".start").css("background", "red");
          clearInterval(Timer);
        })
      }
      if (timerTime == 0 && check) {
        $('.modal_box').css('display', 'block')
        $(".modal").css("display", "none");
        $(".modal_result").css("display", "block");
        $(".modal_result_message").css("color", "green");
        $(".modal_result_message").text("WooHooo, You win, You did it.");
        $(".new_game").on("click", function () {
          $(".modal").css("display", "block");
          $(".modal_box").css("display", "none");
          $('.modal_result').css("display", "none");
          $(".timer").text("01:00");
          $(".second_timer").text("01:00");
          $(".start").attr("disabled", false);
          $(".check").attr("disabled", true);
          $(".check").css("background", "grey");
          $(".start").css("background", "red");
          clearInterval(Timer);
        })
      }



    }
    updateCountDown();




    let arrayRandom = [];

    $(".partial").each(function (index, elem) {
      arrayRandom.push(elem);
    });

    function randomSort(arrayRandom) {
      arrayRandom.sort(function () {
        return 0.5 - Math.random();
      });
    }
    randomSort(arrayRandom);

    $("#start").append(arrayRandom);
  });

  /*рандомне сортування*/

  $(".game").on("click", function () {
    $(".start").attr("disabled", false);
    $(".start").css("background", "red");
    $(".check").css("background", "grey");
    $(".check").attr("disabled", true);
    let arrayRandom = [];

    $(".partial").each(function (index, elem) {
      arrayRandom.push(elem);
    });

    function randomSort(arrayRandom) {
      arrayRandom.sort(function () {
        return 0.5 - Math.random();
      });
    }
    randomSort(arrayRandom);

    $("#start").append(arrayRandom);

    clearInterval(Timer);

    $(".timer").text("01:00");
    $(".second_timer").text("01:00");
  });

  /*Перевірка*/

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let check = true;
  $(".check").on("click", function () {
    $(".modal_box").css("display", "block");
    $(".r").on("click", function () {
      $(".modal_box").css("display", "none");
    });
    $(".g").on("click", function () {
      $(".modal").css("display", "none");
      $(".modal_result").css("display", "block");

      for (let i = 0; i < $(".partial").length; i++) {
        if ($(".partial").eq(i).text() != numbers[i]) {
          check = false;
          break;
        }
      }
      if (check) {
        $(".modal_result_message").css("color", "green");
        $(".modal_result_message").text("WooHooo, You win, You did it.");
        $(".new_game").on("click", function () {
          $(".modal").css("display", "block");
          $(".modal_box").css("display", "none");
          $('.modal_result').css("display", "none");
          $(".timer").text("01:00");
          $(".second_timer").text("01:00");
          $(".start").attr("disabled", false);
          $(".check").attr("disabled", true);
          $(".check").css("background", "grey");
          $(".start").css("background", "red");
          clearInterval(Timer);

        });
      } else {
        $(".modal_result_message").css("color", "red");
        $(".modal_result_message").text("Unfortunately u lose, try again later.");
        $(".new_game").on("click", function () {
          $(".modal").css("display", "block");
          $(".modal_box").css("display", "none");
          $('.modal_result').css("display", "none");
          $(".timer").text("01:00");
          $(".second_timer").text("01:00");
          $(".start").attr("disabled", false);
          $(".check").attr("disabled", true);
          $(".check").css("background", "grey");
          $(".start").css("background", "red");
          clearInterval(Timer);

        });
      }
      check = true;
    });
  });
});