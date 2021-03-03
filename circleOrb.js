var lambb = function (lambb) {

  var physics = new Physics (0);



  lambb.secondFunction = function () {
    zog("hola");
  };

  lambb.OrbP = class extends Container {
    constructor(color1 = pink, color2 = green, radius = 100) {
      //all the parts that go into the class
      super();
      this._color1 = color1;
      this._color2 = color2;
      this._radius = radius;
        this.semiP = new Circle({
          color:color1,
          radius:radius,
          percent: 50
        }).center(this).addPhysics();
      this.semiN = new Circle({
        color:color2,
        radius:radius,
        percent: 50
      }).center(this).rot(180).addPhysics();
      physics.join(
        this.semiP,
        this.semiN,
        null,
        new Point(),
        null,
        null,
        "weld"
      );

      

    }
  };



  return lambb; //returns takes our obj and passes it with ns
} (lambb || {});

// make a half circle - or any percent of a circle
