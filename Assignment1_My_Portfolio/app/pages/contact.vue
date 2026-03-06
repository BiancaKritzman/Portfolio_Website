<!-- use netlify docs -->

<script setup>

</script>

<template>

<div class="body">
    <div class="container">
        <form class="form">
            <label class="label">Name</label>
            <input class="input">
            <br>
            <label class="label">Email</label>
            <input class="input">
            <br>
            <label class="label">Query</label>
            <input class="input">

            <button class="subBtn">Submit</button>
        </form>
    </div>
    </div>


</template>

<style scoped>

.body {
    background-image: url('/Images/background.png');
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
    /* border: 10px solid rgb(6, 99, 95); */
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

.subBtn {
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(6, 99, 95);
    color: white;
}

.form {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.input{
    border: 3px solid rgb(6, 99, 95);
}

</style>