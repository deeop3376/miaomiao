<template>

<div class="messageBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
        <div @touchstart="handleCancel">{{cancel}}</div>
        <div @touchstart="handleOk">{{ok}}</div>
    </div>
</div>

</template>

<script>
export default {
    name:'messageBox'
}

</script>
<style scoped>
.messageBox{width:200px;height: 140px;border: 3px solid gray;border-radius: 4px;background-color: greenyellow;box-shadow: hotpink 3px 3px 3px 3px;position: absolute;left: 50%;top: 50%;margin:-100px 0 0 -100px}
.messageBox h2{text-align: center;line-height: 40px;font-size: 18px}
.messageBox p{text-align: center;line-height: 40px}
.messageBox>div{display: flex;position: absolute;bottom: 0;width:100%;border-top: 1px gray solid;}
.messageBox > div div{flex: 1;text-align: center;line-height: 30px;border-right: gray 1px solid}
.messageBox >div div:last-child{border:none}
</style>