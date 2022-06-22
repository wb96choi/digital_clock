$(function () {
  
  // 실시간으로 시간표시 = setInterval함수 사용
  setInterval(function() {
    let d = new Date();
    let h = d.getHours(); // 시간 변수
    let m = d.getMinutes(); // 분 변수
    let s = d.getSeconds(); // 초 변수
  
    $(".hour").html(h);
    $(".min").html(m);
    $(".sec").html(s);
  
    // 0~9초 까지는 01 09로 표시
    if (m > 9) {
        $(".min").html(m);
      } else {
        $(".min").html(`0${m}`);
      };
    if (s > 9) {
      $(".sec").html(s);
    } else {
      $(".sec").html(`0${s}`);
    };



    //오전 오후
    if (h > 11) {
        $(".ampm").html(`PM`);
    } else {
        $(".ampm").html(`AM`);
    };


    // if( h > 11) {
    //   $('.hour').html(`PM${h}`);
    // } else {
    //   $('.hour').html(`AM${h}`);
    // }

    // 알람기능: 50분이 되면 쉬는시간 경고창 띄우기
    if (m == 50) {
        alert('휴식 시간입니다.');
    }
  }, 1000);
});

