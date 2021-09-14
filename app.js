// setting constants
const page1Btn = document.querySelector('.page1Btn')
const threeCircles = document.querySelector('.threeCircles')
const settingsContainer = document.querySelector('.settingsContainer')
var msgsContainer = document.querySelector('.msgsContainer')








// this counter for counting masseges and diplay it to left side of navigation bar
var massegesCounter = 0
const msgsCount_1=()=>{
    massegesCounter+=1
    document.querySelector('.p2').innerHTML=`${massegesCounter} masseges`
}
msgsCount_1()









// this function returns you massege as elements
const myMsg = (text)=>{
    msgsCount_1()
    return `
                <div class="myMsg">
                    <div class="msgTop">you</div>
                    <div class="msgBody">${text}</div>
                </div>
            `
}
// this function returns bots massege as elements
const botResponse = (res)=>{
    msgsCount_1()
    return `
                <div class="Minionmsg">
                    <div class="msgTop">Minion Bot</div>
                    <div class="msgBody">${res}</div>
                </div>
    `
}






// first bot massege
msgsContainer.innerHTML+=botResponse('welcome , write me a massege and ill try hard to understand you😉.')









// page sliding animations when clicking the "lets talk" button
const animations=()=>{
    const pageSlider = document.querySelector('.page2')
    pageSlider.classList.add('animatePage2Slider')
}
page1Btn.addEventListener('click',()=>{
    animations()
})
threeCircles.addEventListener('click',()=>{
    settingsContainer.classList.toggle('showsettingsContainer')
})









// whenever ENTER button cliked your massege will show in masseges container
const newMsgInput = document.querySelector('.newMsgInput')
newMsgInput.addEventListener('keyup',(key)=>{
    if(key.key=="Enter"){
        msgsContainer.innerHTML+=myMsg(newMsgInput.value)
        newMsgInput.value=''

        const lC = msgsContainer.lastElementChild
        lC.scrollIntoView()
    }
})