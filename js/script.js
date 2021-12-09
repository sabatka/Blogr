const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuProduct = document.getElementById('product');
const menuCompany = document.getElementById('company');
const menuConnect = document.getElementById('connect');
const mobileDropImage1 = document.getElementById('mobileDropImage1');
const mobileDropImage2 = document.getElementById('mobileDropImage2');
const mobileDropImage3 = document.getElementById('mobileDropImage3');
const dropImage1 = document.getElementById('dropImage1');
const dropImage2 = document.getElementById('dropImage2');
const dropImage3 = document.getElementById('dropImage3');
const mobileProduct = document.getElementById('product-mobile');
const mobileCompany = document.getElementById('company-mobile');
const mobileConnect = document.getElementById('connect-mobile');
const productMobileBtn = document.getElementById('product-mobile-btn');
const companyMobileBtn = document.getElementById('company-mobile-btn');
const connectMobileBtn = document.getElementById('connect-mobile-btn');
const productBtn = document.getElementById('product-btn');
const companyBtn = document.getElementById('company-btn');
const connectBtn = document.getElementById('connect-btn');
let menuOpen = false;
let productOpen = false;
let companyOpen = false;
let connectOpen = false;
let mobileProductOpen = false;
let mobileCompanyOpen = false;
let mobileConnectOpen = false;

menuButton.addEventListener('click', ()=>{
    if(!menuOpen){
        mobileMenu.classList.remove('hidden');
        menuButton.classList.add('open');
        menuOpen = true;
    }else{
        menuButton.classList.remove('open');
        mobileMenu.classList.add('hidden');
        menuOpen = false;
    }
})

document.addEventListener('mouseup',function(e){
    if(!menuProduct.contains(e.target) && productOpen){
        menuProduct.classList.add('hidden');
        dropImage1.classList.add('dropImageDown');
        dropImage1.classList.remove('dropImageUp');
        productOpen = false;
    }

    if(!menuCompany.contains(e.target) && companyOpen){
        menuCompany.classList.add('hidden');
        dropImage2.classList.add('dropImageDown');
        dropImage2.classList.remove('dropImageUp');
        companyOpen = false;
    }

    if(!menuConnect.contains(e.target) && connectOpen){
        menuConnect.classList.add('hidden');
        dropImage3.classList.add('dropImageDown');
        dropImage3.classList.remove('dropImageUp');
        connectOpen = false;
    }
})

productBtn.addEventListener('click', ()=>{
    if(!productOpen){
        menuProduct.classList.remove('hidden');
        dropImage1.classList.add('dropImageUp');
        dropImage1.classList.remove('dropImageDown');
        productOpen = true;
    }else{
        menuProduct.classList.add('hidden');
        dropImage1.classList.add('dropImageDown');
        dropImage1.classList.remove('dropImageUp');
        productOpen = false;
    }
})

companyBtn.addEventListener('click', ()=>{
    if(!companyOpen){
        menuCompany.classList.remove('hidden');
        dropImage2.classList.add('dropImageUp');
        dropImage2.classList.remove('dropImageDown');
        companyOpen = true;
    }else{
        menuCompany.classList.add('hidden');
        dropImage2.classList.add('dropImageDown');
        dropImage2.classList.remove('dropImageUp');
        companyOpen = false;
    }
})

connectBtn.addEventListener('click', ()=>{
    if(!connectOpen){
        menuConnect.classList.remove('hidden');
        dropImage3.classList.add('dropImageUp');
        dropImage3.classList.remove('dropImageDown');
        connectOpen = true;
    }else{
        menuConnect.classList.add('hidden');
        dropImage3.classList.add('dropImageDown');
        dropImage3.classList.remove('dropImageUp');
        connectOpen = false;
    }
})

//mobile

productMobileBtn.addEventListener('click',()=>{
    if(!mobileProductOpen){
        mobileProduct.classList.remove('hidden');
        mobileDropImage1.classList.add('dropImageUp');
        mobileDropImage1.classList.remove('dropImageDown');
        mobileProductOpen = true;
    }else{
        mobileProduct.classList.add('hidden');
        mobileDropImage1.classList.add('dropImageDown');
        mobileDropImage1.classList.remove('dropImageUp');
        mobileProductOpen = false;
    }
})

companyMobileBtn.addEventListener('click',()=>{
    if(!mobileCompanyOpen){
        mobileCompany.classList.remove('hidden');
        mobileDropImage2.classList.add('dropImageUp');
        mobileDropImage2.classList.remove('dropImageDown');
        mobileCompanyOpen = true;
    }else{
        mobileCompany.classList.add('hidden');
        mobileDropImage2.classList.add('dropImageDown');
        mobileDropImage2.classList.remove('dropImageUp');
        mobileCompanyOpen = false;
    }
})

connectMobileBtn.addEventListener('click',()=>{
    if(!mobileConnectOpen){
        mobileConnect.classList.remove('hidden');
        mobileDropImage3.classList.add('dropImageUp');
        mobileDropImage3.classList.remove('dropImageDown');
        mobileConnectOpen = true;
    }else{
        mobileConnect.classList.add('hidden');
        mobileDropImage3.classList.add('dropImageDown');
        mobileDropImage3.classList.remove('dropImageUp');
        mobileConnectOpen = false;
    }
})