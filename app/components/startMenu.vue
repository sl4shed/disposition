<script setup lang="ts">
import { APPS } from '~/registry/apps';
import { ICONS } from '~/registry/icons';
const manager = useWindowManager();
</script>

<template>
    <div class="startMenu">
        <div class="left">
            <div class="header">
                <img src="~/assets/logos/Disposition.png" alt="Disposition logo"/>
                <span>
                    <h1>Disposition</h1>
                    <p>a physical-media based ysws</p>
                </span>
            </div>

            <div class="apps">
                <template v-for="app in APPS"> 
                    <div v-if="!app.tool" class="app" @click="manager.open(app.appId)">
                        <img :src="ICONS[app.appId]" />
                        <p>{{ app.title }}</p>
                    </div>
                </template>

            </div>
        </div>

        <div class="right">

             <div class="menu-item">More button</div>
             <div class="menu-item">Sign Out</div>
           
           

                <div class="menu-profile">
                    
                <span>Username
                <img height="25px" width="25px" src="C:\Users\Hax\Desktop\disposition\app\assets\icons\profile.png"></img>
                </span>

                </div>

                
        </div>
    </div>
</template>

<style scoped>

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

.header {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.header span h1 {
    margin: 0;
    font-size: 26px;
}

.header span p {
    margin: 0;
    font-size: 12px;
}

.header img {
    height: 80px;
    width: 80px;
}

.right {
    height: 100%;
    width:35%;

    color:  white;

    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: end;
    padding-bottom: 10px;  

}

.menu-profile {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: end;
    padding: 2px;
    width: 90%;

}



.menu-item {
    padding: 2px;
    width: 90%;
    text-align: center;
    transition: 0.2s;
    
    user-select: none;
    

}

.menu-item:hover { 
    font-size: larger;
    font-weight: bold;
    cursor: pointer;
    
}
.apps {
    border: 2px solid #797979;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;

    width: 95%;
    height: 80%;

    user-select: none;
}

.app p {
    margin: 0;
    
}

.app {
    display: flex;
    flex-direction: row;
    gap: 15px;

    margin: 0;
    font-size: 20px;

    padding: 5px;
    padding-left: 10px;
    justify-content: start;
    align-items: center;
    transition: 0.2s;

    user-select: none;
}

.app img {
    width: 30px;
    height: 30px;
}

.app:hover {
    background-color: #1F1F1F;
    font-weight: bold;
    color: white;
    cursor: pointer;
}
</style>