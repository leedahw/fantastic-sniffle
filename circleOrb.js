var lambb = (function (lambb) {
  lambb.secondFunction = function () {
    zog("hola");
  };

  lambb.orb = class extends Circle {
    constructor(color = pink, radius = 200) {
      //all the parts that go into the class
      super();

      var semi = new Circle({ radius: 200, color: pink, percent: 50 }).center();
    }
  };

  return lambb; //returns takes our obj and passes it with ns
})(lambb || {});

// make a half circle - or any percent of a circle
