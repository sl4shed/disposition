<script setup lang="ts">

</script>

<template>
    <div class="startMenu">
        <div class="left">
            <div class="header">
                <img height="100px" width="100px" src="~/assets/logos/Disposition.png" alt="Disposition logo"/>
                <span>
                    <h1>Disposition</h1>
                    <p>a physical-media based ysws</p>
                </span>
            </div>

            <div class="apps">
                
            </div>
        </div>

        <div class="right">
            <button>Sign Out</button> 
            <span>
                Username
                <img>TODO: user pfp</img>
            </span>
        </div>
    </div>
</template>

<style>

.startMenu {
    background: linear-gradient(0deg, #525252 0%, #050505 100%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 2px solid #797979;
    
    width: 350px;
    height: 450px;

    display: flex;
    flex-direction: row;
}

.left {
    height: 100%;
    width: 65%;

    padding: 2px;

    color: white;

    display: flex;
    flex-direction: column;
}

.right {
    height: 100%;
    width: 35%;

    color:  white;

    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: end;
}
</style>