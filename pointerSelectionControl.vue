<template>
    <div class="byl-check-box-wrap">
        <ul>
            <li v-for="(item,index) of theList" :key="index" :class="[item.disabled?'list-item-disabled':'list-item']" :style="{flexBasis:100/num+'%',marginLeft:index%num==0?'0px':-4/num+'px',boxSizing:'border-box',paddingRight:(index+1)%num==0?'0px':'10px'}">
                <div @click="checkedThisBox(item,index)" :style="{lineHeight:type=='date'?'16px':'32px'}" v-if="!item.disabled" :class="['byl-check-box',flagList[index]?'byl-checked-box':'']">
                    <img class="select-icon" v-if="item.imgurl" :src="item.imgurl" alt="">
                    <p class="point-select-content">
                        {{item.name}}
                    </p>
                    <p v-if="type=='date'">
                        {{item.week}}
                    </p>
                    <p v-if="flagList[index]" class="checked-border-wrap">
                        <i class="pulok">&#10003;</i> 
                    </p>
                </div>
                <div v-else class="byl-check-box-disabled">
                    {{item.name}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script src="./pointerSelectionControl.js"></script>
<style lang="less">
    @import url("./style.css");
</style>