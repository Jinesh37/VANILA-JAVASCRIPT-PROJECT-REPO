const qrForm=document.getElementById('qrForm');
const qrImageEl=document.getElementById('qrImage');
console.log(qrImageEl);
const qrContainerEl=document.getElementById('qrContainer');
const qrInputTextEl=document.getElementById('qrInputText');
console.log(qrInputTextEl.value);
const generateBtnEl=document.getElementById("generateBtn");
const renderQRCode=(url)=>{
    if(!url){
        return;
    }
    generateBtnEl.innerText="Generating Qr Code...";    
    qrImageEl.src=url;
    const onImageLoad=()=>{
        const interval=setInterval(()=>{
            qrContainerEl.classList.add('show');
            clearInterval(interval);
            generateBtnEl.innerText=`Generate QR Code`
        },500);
    };
    qrImageEl.addEventListener("load",onImageLoad)
}

qrForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData=new FormData(qrForm);
    const text=formData.get("qrText");
    const qrCoderUrl=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    renderQRCode(qrCoderUrl);
})
qrInputTextEl.addEventListener('keyup',()=>{
    if(!qrInputTextEl.Value){
        qrContainerEl.classList.remove('show');
    }
});
