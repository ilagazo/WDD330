// window.addEventListener("load", () => {
    function add(){
        let input = document.getElementById("input").value;
        document.getElementById("output").innerHTML = input;
    }
//   });
  function numArg() {
    let input = document.getElementById("input2").value;
      var total = 0;
      for (var i = 0; i <= input; i++) {
        total += i;
      }
      document.getElementById("output2").innerHTML = total;
  }

  function final() {
    let input1 = parseFloat(document.getElementById("input").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let input3 = parseFloat(document.getElementById("input3").value);
    let  sum = input1 + input2 + input3;
    document.getElementById("output3").innerHTML = sum;

}