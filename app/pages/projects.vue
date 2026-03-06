<script setup>
import { ref } from 'vue'

const repo = ref(null)
const loading = ref(false)
const activeRepo = ref(false)

const getRepo = async (repoName) => {
  loading.value = true
  repo.value = null
  activeRepo.value = repoName

  const data = await $fetch(`https://api.github.com/repos/BiancaKritzman/${repoName}`)

  repo.value = data
  loading.value = false
}
</script>

<template>   

<div class="projects">
    <div class="head1">
        <h1>My Projects</h1>
        </div>
        <br>
        <div class="head1">
            <h2>Project 1</h2>
            <p>I was learning javascript in the holidays and coded a retro snake game</p>
            <img src="/Images/download.svg" @click="getRepo('SnakeGame')" alt="github">
            <div v-if="loading">Loading...</div>
            <div v-if="activeRepo === 'SnakeGame'" && repo>
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank" class="githubLink">Open on GitHub</a>
            </div>
        </div>
        <br>
        <div class="head1">
            <h2 >Project 2</h2>
            <p>Coded an application for Kwik Printing</p>
            <img src="/Images/download.svg" @click="getRepo('Kwik-Printing-GUI')" alt="github">
            <div v-if="loading">Loading...</div>
            <div v-if="activeRepo === 'Kwik-Printing-GUI'" && repo>
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank" class="githubLink">Open on GitHub</a>
            </div>
        </div>
        <br>
        <div class="head1">
            <h2 >Project 3</h2>
            <p>Developed an Airline Website</p>
        </div>
    </div>
</template>

<style scoped>

.projects {
    top: 0;
    background-image: url('/Images/background.png');
    background-size: cover;
    background-position: center;
    font-family: "Almendra";
}

.head1 {
    margin: 0;
    border-radius: 20px;
    padding: 100px;
    gap: 10px;
    text-align: center;
    color: rgb(6, 99, 95);
    border: 2px solid rgb(6, 99, 95);
    box-shadow:0 10px 30px rgba(0,0,0,0.2);
    backdrop-filter:blur(4px);
    background-color: rgba(255, 255, 255, 0.5);
}

.colour{
    color: rgb(6, 99, 95);
}

.githubLink{
    padding: 5px;
    background-color: rgb(6, 99, 95);
    color: white;
    text-decoration: none;
    border-radius: 10px;
}



</style>