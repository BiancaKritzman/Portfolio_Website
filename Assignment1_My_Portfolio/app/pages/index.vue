<script setup>
</script>

<template>
    <div class="body">

        <div class="container">
            <h1 class="welcome">Welcome to My Portfolio</h1>
            <img class="image" src="/Images/profile.jpg" alt="portrait">
            <h1 class="name">
                Hey I'm <br> Bianca Kritzman
            </h1>
            <div class="github">
                <a href="https://github.com/BiancaKritzman/" target="_blank"><img src="/Images/download.svg" alt="Github"/></a>
                <br>
            </div>
            <div>
                <h2 class="about"><strong>About Me</strong></h2>
            </div>
            <p class="bio">I am studying BSc Information and Knowledge Systems 
                in pursuit of creating the extraordinary;<br> I am a creative individual that loves attention to detail and functionality;<br>
                I love that tech equips you with the tools to put thoughts into reality;
            </p>
        </div>
    </div>
</template>

<style scoped>

.body {
    background-image: url('/Images/background.png');
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
    border: 10px solid rgb(6, 99, 95);
    border-radius: 10px;
    font-family: "Almendra";
}

.container{
    margin: 200px;
    border: 5px solid rgb(6, 99, 95);
    backdrop-filter: blur(4px);
    border-radius: 20px;
    box-shadow: 0px 8px 20px 1px rgb(6, 99, 95);
    transition: transform 0.3s;
  
}

.container:hover{
  transform: translateY(-5px);
}

.github {
    background-color: rgba(255, 255, 255,0.5);
    border-radius: 20px;
    display: inline-block;
    margin: -100px 0px 200px 380px;
    padding: 10px;
    border: 2px solid rgb(6, 99, 95);
    margin-top: -50px;

}

.image {
    border-radius: 50%;
    margin: 0px 0px 0px 265px;
    border: 20px solid rgb(6, 99, 95);
    width: 30%;
    height: auto;

}

.image:active{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: bubbleAround 10s 2s 1 ease-in-out;
}

@keyframes bubbleAround {
  from {offset-distance: 0%;}
  to {offset-distance: 100%;}
}

.welcome{
  text-align: center;
  color: rgb(6, 99, 95);
  font: ui-monospace;
  padding: 30px;
  font-size: 50px;
}

.name{
  text-align: center;
  color: rgb(6, 99, 95);
  padding: 30px;
  border: 2px solid rgb(6, 99, 95);
  /* background-color: rgb(250, 223, 68); */
  display: inline-block;
  margin: 150px 260px;
  margin-top: 10px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  transition: transform 0.3s ease;
  font-size: 35px;
  white-space: nowrap;
  background-color: rgba(255,255,255,0.3);

}

.name:hover {
  transform: translateY(-8px);
}

.about {
  color: rgb(6, 99, 95);
  margin-top: -50px;
  margin-left: 30px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  border: 2px solid rgb(6, 99, 95);


}

.bio {
  color: white;
  background-color: rgb(6, 99, 95);
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 50px;
  margin-left: 30px;
  display: inline-block;
  font-size: 19px;
  border: 2px solid rgb(255, 255, 255);

}

</style>