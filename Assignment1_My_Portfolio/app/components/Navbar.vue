<script setup>

</script>

<template>   
    <nav class="nav">
        <NuxtLink class="home" to="/">Home</NuxtLink>
        <NuxtLink class="project" to="/projects">Projects</NuxtLink>
        <NuxtLink class="contact" to="/contact"> Contact Me</NuxtLink>
        <NuxtLink class="sun" to="/weather"><img src="/Images/sun.png" alt="weather"/></NuxtLink>
    </nav>

</template>

<style scoped>

.nav{
  display: flex;
  position: fixed;
  z-index: 1000;
  gap: 1.5;
  text-align: center;
  align-items: center;
  justify-content:space-around;
  margin: 20px;
  left: 470px;
  width: 25%;
  padding: 0px;
  border: 1px solid rgb(6, 99, 95);
  box-shadow: 0px 8px 20px 1px rgb(6, 99, 95);
  border-radius: 40px;
  transition: transform 0.3s;
  background-color: transparent;
  font-family: "Almendra";

}

.nav:hover{
  transform: translateY(-5px);

}

.home {
  padding: 5px;
  color: rgb(6, 99, 95);
  text-decoration: none;
  position: relative;
  font-size: 20px;
}

.project {
  padding: 5px;
  color: rgb(6, 99, 95);
  text-decoration: none;
  position: relative;
  font-size: 20px;
}

.contact {
  padding: 5px;
  text-decoration: none;
  color: rgb(6, 99, 95);
  font-size: 20px;
}

.sun img{
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  cursor: pointer;
}

.contact:hover {
  background-color: rgb(6, 99, 95, 0.2);
  border-radius: 5px;
}

.home:hover {
  background-color: rgb(6, 99, 95, 0.2);
  border-radius: 5px;
}

.project:hover {
  text-decoration: none;
  background-color: rgb(6, 99, 95, 0.2);
  border-radius: 5px;
  
}

</style>