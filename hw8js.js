

document.documentElement.setAttribute("lang", "ru");

document.head.innerHTML = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Call to Action</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color:white;
      flex-direction: column;
    }
    .container1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    }
    .conttextp {
    padding-bottom: 35px;
    color:#8f8f8f;
    }
    .conttextH {
    margin: 0px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
    }
    .option {
      flex: 1;
      padding: 20px;
      text-align: center;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .option h2 {
      margin-bottom: 10px;
    }
    
    .freelancer {
      background-color:rgb(250, 248, 248);
    }
    .text1{
     color:rgb(173, 173, 173);
     font-weight: bold;
     }
    .text2 {
     color: #e1a61b;
     font-weight: bold;
     }
    .studio {
      background-color: #9650b3;
      color: white;
      hight:500px
    }
    .ptext2{
     color:rgb(212, 212, 212);
     padding-bottom: 35px;
     width: 60%;
    }
    .ptext1{
     color: #8f8f8f;
     padding-bottom: 35px;
     width: 60%;
    }
    .button1 {
      display: inline-block;
      padding: 10px 20px;
      color: #e1a61b;
      text-decoration: none;
      border-radius: 25px;
      border: solid;
     }
    .buttonp1 {
     color: black;
     margin: 0px;
     }
    .button2 {
      display: inline-block;
      padding: 10px 20px;
      color: #e1a61b;
      text-decoration: none;
      border-radius: 25px;
      border: solid;
     }
    .buttonp2 {
     color: white;
     margin: 0px;

     }
  </style>
`;

const container1 = document.createElement("div");
container1.classList.add("container1");
container1.innerHTML = `
<h1 class = "conttextH"> Choose Your Option </h1>
<p class = "conttextp">But i must explain to you how all this mistaken idea of denouncing</p>
`;

document.body.appendChild(container1);

const container = document.createElement("div");
container.classList.add("container");

const freelancerOption = document.createElement("div");
freelancerOption.classList.add("option", "freelancer");
freelancerOption.innerHTML = `
  <p class = "text1">Freelancer</p>
  <h1>Initially <br> designed to</h1>
  <p class = "ptext1">But I must explain to you how all this mistaken idea of denouncing</p>
  <a href="#" class="button1"><p class = "buttonp1">Start Here</p></a>
`;

const studioOption = document.createElement("div");
studioOption.classList.add("option", "studio");
studioOption.innerHTML = `
  <p class = "text2">Studio</p>
  <h1>Initially <br> designed to</h1>
  <p class = "ptext2">But I must explain to you how all this mistaken idea of denouncing</p>
  <a href="#" class="button2"><p class = "buttonp2">Start Here</p></a>
`;

container.appendChild(freelancerOption);
container.appendChild(studioOption);


document.body.appendChild(container);

