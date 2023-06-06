import React from "react"

const Information = () => {

    const handleClickEmail = () => {
        window.alert('My Email : kraiyos.wanna@gmail.com')
    }
    const handleClickPhone = () => {
        window.alert('My Phone : (+66) 99 149 9425')
    }

    return (
        <div className="flex flex-row flex-wrap  px-[50px] min-[768px]:px-[120px] bg-[#F5ebee] ">
            <div className="flex flex-col flex-warp items-start mt-[3rem]  px-[50px] min-[768px]:px-[120px] bg-[#F5ebee] ">
                <p className="text-[2rem] mt-[1.5rem] mb-[3rem]"  id='font1'> Hi! </p>
                <p className="text-[4rem] leading-[3rem] " id="font1"> I'm Kraiyos Wanna.</p>
                <p className="text-[4rem] mb-[3rem]" id='font1'>a Full-Stack Developer.</p>
                <p className=" w-[55%] text-[1.5rem] " id='font1'>"Hello, my name is Kraiyos Wanna. I have recently graduated from TechUp Bootcamp, where I honed my skills and gained comprehensive knowledge to become a software developer. What attracted me to this field is my passion for problem-solving and creating innovative solutions, which have been deepened through my studies. I have also grown a profound love for programming, and I am confident in my ability to contribute positively to any team. I am seeking an opportunity to bring my skills and passion to a new challenge. Please consider my application, and I assure you that I will not disappoint."</p>
                <div className="flex flex-row items-center mr-[5rem] flex-wrap 5-[50px] mt-[2rem]  px-[50px] min-[768px]:px-[120px] bg-[#F5ebee]">
                    <span className="text-[1.5rem] text-slate-500 mr-[1rem] " id='font1'>Contect me ! :</span>
                    <a href="https://github.com/KraiyosW" rel="noopener noreferrer" target="_blank">
                        <button>
                            <img className="w-[50px] h-[50px] mr-[0.5rem]" src="/Picture/github.png"></img>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/kraiyos-wanna/" rel="noopener noreferrer" target="_blank" >
                        <button>
                            <img className="w-[45px] h-[40px] mr-[0.5rem] " src="/Picture/linkin.png"></img>
                        </button>
                    </a>
                    <button onClick={handleClickEmail}>
                        <img className="w-[45px] h-[50px] pb-[0.4rem] mr-[0.5rem]" src='/Picture/email.png'></img>
                    </button>
                    <button onClick={handleClickPhone}>
                        <img className="w-[45px] h-[50px] pb-[0.4rem]" src='/Picture/phone.png'></img>
                    </button>
                </div>
            </div>
        </div>
    );


}


export default Information