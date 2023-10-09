const slidesContent = document.getElementsByClassName("slide");

const arraySlidesContent = Array.from(slidesContent);

const swiper1 = document.getElementsByClassName('.swiper');

const commonSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>
</svg>
`
const svgArray = ['./assets/1.png','./assets/2.png','./assets/3.png','./assets/4.png','./assets/5.png'
,'./assets/6.png','./assets/7.png','./assets/8.png','./assets/9.png','./assets/10.png','./assets/11.png']



const updatedContent = arraySlidesContent.map((item,i)=>{

    item.innerHTML = `<img src='${svgArray[i]}'></img> ${commonSvg}`
    return item
})

