<script>
document.getElementById('input').addEventListener('change', () => {


    if (document.body.className.indexOf('dark') === -1) {

        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')

    }
})

</script>


<template>
    <label class="switch">
        <input type="checkbox" id='input'>
        <span class="slider"></span>
    </label>
</template>

<style lang="css" scoped>
body {
    background-color: #C2BEDB;
}

.dark {
    background-color: #2A2734;
}

.switch {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #9A86FD;
    border-radius: 34px;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #FFB870;
}

input:focus+.slider {
    box-shadow: 0 0 1px #FFB870;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
</style>