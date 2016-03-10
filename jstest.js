function score() {
	var q1 = document.getElementsByName("q1");
	var q2 = document.getElementsByName("q2");
	var q3 = document.getElementsByName("q3");
	var q4 = document.getElementsByName("q4");
	var q5 = document.getElementsByName("q5");
    sum = 0;

    if(q1[0].checked) {
    	sum++;
    }
    if(q2[2].checked) {
    	sum++;
    }
    if(q3[3].checked) {
    	sum++;
    }
    if (q4[0].checked == false && q4[1].checked && q4[2].checked == false && q4[3].checked) {
  sum++;
  }
    if (q5[2].checked == false && q5[1].checked && q5[3].checked == false && q5[0].checked) {
  sum++;
  }
	alert("Ваш результат:" + sum);
}