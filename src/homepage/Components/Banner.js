@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.Jumbotron {
  padding-bottom: 60px;
  background-color: #fff;
}
.container {
  margin-top: 40px;
}
.SocialLinks1 {
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  position:fixed;
  /* position: absolute; */
  bottom: 260px;
  /* top:290px; */
  /* top: 45vh; */
  margin-right: 30px;
  z-index: 100000;
}

.Shift1 {
  color: #111;
  padding: 1%;
  margin: 7px 0px;
  padding: 3px 6px;
  z-index: 100000;
  background-color: #fff;
  border-radius: 10px;
  vertical-align: middle;
}

.divshift1 {
  background-color: #008dc8;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin: 3px 0;
  padding: 6px 5px;
  width: 44px;
}

.heading {
  font-family: "Arial";
  font-weight: 400;
  text-align: left;
  top: 50px !important;
  left: 50px;
  margin-bottom: 54px;
  font-size: 70px;
}
.containersmall {
  margin-top: 50px;
  display: none;
}
.Button {
  background-color: #008dc8;
  border: none;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  font-size: 22px;
  padding: 5px 30px 5px 30px;
  margin: 5px 0px 5px 0px;
  position: relative;
  float: left;
  top: 30px;
  left: 115px;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
}
a:hover {
  border: none;
  text-decoration: none;
}

a {
  offset: -700;
}
.Button:hover,
.Button:focus,
.Button:active {
  background-color: #008dc8;
  color: white;
  padding-right: 40px;
  padding-left: 40px;
}
.code {
  width: 450px;
  height: 450px;
  z-index: 1;
}
.girl {
  width: 500px;
  height: 350px;
  position: absolute;
  right: 200px;
  top: 100px;
  z-index: 2;
}
.rectangle {
  height: 5px;
  width: 110px;
  background-color: #008dc8;
  position: relative;
  bottom: 50px;
  float: right;
  right: 120px;
  /* right: 377px; */
}

@media screen and (min-width: 1199px) {
  .heading {
    position: relative;
    top: 9px;
  }
  .rectangle {
    top: -10px;
  }
}
@media screen and (max-width: 1199px) {
  .heading {
    position: relative;
    top: 35px;
  }
  .Button {
    font-size: 20px;
    left: 60px;
  }
  .rectangle {
    right: 100px;
    top: -10px;
  }
  .girl {
    right: 160px;
  }
}
@media screen and (max-width: 991px) and (min-width: 768px) {
  .Jumbotron {
    padding-bottom: 0px;
    margin-bottom: -60px;
  }
}
@media screen and (max-width: 991px) {
  .container {
    margin-left: 8%;
  }
  .align {
    display: none;
  }
  .heading {
    font-size: 54px;
    top: -20px !important;
  }
  .rectangle {
    top: -75px !important;
    left: -110px;
  }
  .code {
    width: 400px;
    height: 400px;
    position: relative;
    left: 70px;
    bottom: 75px;
    margin: 0px;
    z-index: 1;
  }
  .girl {
    width: 300px;
    height: 250px;
    left: -10px;
    top: 25px;
    z-index: 2;
  }
  .Button {
    font-size: 15px;
    top: -50px;
  }
}
@media screen and (max-width: 768px) {
  .Jumbotron {
    padding-bottom: 80px;
  }
  .container {
    display: none;
  }
  .containersmall {
    display: inline-block;
  }
  .heading {
    position: inherit;
    align-content: center;
  }
  .Button {
    font-size: 20px;
    padding: 5px 10px 5px 10px;
    margin: 5px;
    position: relative;
    top: 5%;
    left: 37%;
  }
  .Button:hover,
  .Button:focus,
  .Button:active {
    padding-right: 15px;
    padding-left: 15px;
  }

  .Rectsmall {
    height: 5px;
    width: 130px;
    background-color: #008dc8;
    position: sticky;
    bottom: 0px;
    float: right;
    right: 50px;
  }
}
@media screen and (max-width: 669px) and (min-width: 460px) {
  .Rectsmall {
    position: sticky;
    top: 750px;
    right: 300px;
  }
}
@media screen and (max-width: 629px) {
  .Button {
    left: 24%;
  }
  .container-sm {
    padding-left: 20px;
    padding-right: 20px;
  }
  #impact {
    margin-left: 30px;
  }
}
@media screen and (max-width: 503px) {
  .Button {
    left: 30%;
  }
}
@media screen and (max-width: 480px) {
  .rectangle {
    position: sticky;
    left: 75%;
  }
}
@media screen and (max-width: 450px) {
  .Button {
    left: 20%;
  }
  .heading {
    font-size: 50px;
  }
  .containersmall,
  .containerimpact {
    padding-left: 30px;
    padding-right: 30px;
  }
 
 
  /* .SocialLinks1 {
    font-size: 1.15rem;
    bottom: 30px;
  }
  .Shift1 {
    margin: 5px 7px;
  } */
  
}
@media screen and (max-width: 390px) {
  .Button {
    left: 18%;
  }
}
@media screen and (max-width: 320px) {
  .Button {
    left: 10%;
  }
}
@media screen and (max-width: 280px) {
  .Button {
    left: 4%;
  }
}
