function Clock() {

    this.radius = 200;
    this.margin = 100;


    this.update = function() {
        this.seconds = second();
        this.minutes = minute();
        this.hours = hour();
        this.millis = millis();
    }

    this.show = function() {
        this.update();
        translate(width / 2, height / 2);

        push();
        noStroke();
        fill("#2A92FA");
        ellipse(0, 0, this.radius * 2 + this.margin, this.radius * 2 + this.margin);
        pop();


        ellipse(0, 0, 10, 10);


        let millisAngle = map(this.millis, 0, 1000, 0, 360);
        let secondsAngle = map(this.seconds, 0, 60, 0, 360);
        let minutesAngle = map(this.minutes,  0, 60, 0, 360);
        let hoursAngle = map(this.hours, 0, 12, 0, 360);

        noStroke();
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(0);
        for(let i = 1; i <= 12; i++) {
            let angle = map(i, 0, 12, -90, 270);
            let r = this.radius;
            let x = r * cos(angle);
            let y = r * sin(angle);

            text(i, x, y);
        }

        push();
        rotate(270);
        stroke("#112FD8");
        strokeWeight(5);
        noFill();
        arc(0, 0, this.radius * 2 + this.margin + 10, this.radius * 2 + this.margin + 10, 0, secondsAngle);

        stroke("#620EDB");
        line(0, 0, this.radius * cos(millisAngle), this.radius * sin(millisAngle));


        stroke(255, 0, 0);
        // strokeWeight(5);
        line(0, 0, this.radius * cos(secondsAngle), this.radius * sin(secondsAngle));

        strokeWeight(10);
        stroke(255);
        line(0, 0, this.radius * cos(minutesAngle), this.radius * sin(minutesAngle));

        strokeWeight(10);
        stroke(0);
        line(0, 0, this.radius * (cos(hoursAngle) / 2), this.radius * (sin(hoursAngle) / 2));
        pop();



    }

}
