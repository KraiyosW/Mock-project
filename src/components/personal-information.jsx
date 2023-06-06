
const Information = () => {

    const handleClickEmail = () => {
        window.alert('My Email : kraiyos.wanna@gmail.com')
    }
    const handleClickPhone = () => {
        window.alert('My Phone : (+66) 99 149 9425')
    }
    const handleRequest = () =>{
        window.alert('Please contact me via Email, Phone or LinkedIn.')
    }

    return (
        <div className="flex flex-row  px-[50px] min-[768px]:px-[120px] bg-[#F5ebee] ">
            <div className="flex flex-col flex-warp items-start mt-[3rem]  px-[50px] min-[768px]:px-[120px] bg-[#F5ebee] ">
                <p className="text-[2rem] mt-[1.5rem] mb-[3rem]"  id='font1'> Hi! </p>
                <p className="text-[3rem] leading-[3rem] " id="font1"> I'm Kraiyos Wanna.</p>
                <p className="text-[3rem] mb-[3rem]" id='font1'>a Full-Stack Developer.</p>
                <p className=" w-[80%] text-[1.5rem] " id='font1'>"Hello, my name is Kraiyos Wanna. I have recently graduated from TechUp Bootcamp, where I honed my skills and gained comprehensive knowledge to become a software developer. What attracted me to this field is my passion for problem-solving and creating innovative solutions, which have been deepened through my studies. I have also grown a profound love for programming, and I am confident in my ability to contribute positively to any team. I am seeking an opportunity to bring my skills and passion to a new challenge. Please consider my application, and I assure you that I will not disappoint."</p>
                <div className="flex flex-row  items-center pr-[5rem] flex-wrap 5-[50px] mt-[2rem] mb-[2rem]  bg-[#F5ebee]">
                    <span className="text-[1.5rem] text-slate-500 mr-[1rem]" id='font1'> Contect me ! :</span>
                    <a href="https://github.com/KraiyosW" rel="noopener noreferrer" target="_blank">
                        <button>
                            <img className="w-[50px] h-[50px] mr-[1rem] hover:opacity-[0.7]" src="/Picture/github.png"></img>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/kraiyos-wanna/" rel="noopener noreferrer" target="_blank" >
                        <button>
                            <img className="w-[45px] h-[40px] mr-[1rem] hover:opacity-[0.7]" src="/Picture/linkin.png"></img>
                        </button>
                    </a>
                    <button onClick={handleClickEmail}>
                        <img className="w-[45px] h-[50px] pb-[0.4rem] mr-[1rem] hover:opacity-[0.7]" src='/Picture/email.png'></img>
                    </button>
                    <button onClick={handleClickPhone}>
                        <img className="w-[45px] h-[50px] pb-[0.4rem] hover:opacity-[0.7]" src='/Picture/phone.png'></img>
                    </button>
                    
                </div>
                <div className=" flex flex-row mr-[3rem]  ">
                        <button onClick={handleRequest} className="w-[220px] h-[50px] bg-[#FF2950] rounded-[5px] text-white text-[1.5rem] mr-[2rem] hover:bg-[#25be30]" id='font1'>Send Request</button>
                        <a href="https://drive.google.com/file/d/1MdbpBUEYw2YDEqAp_D1sWCvCgdrJqPY9/view?usp=sharing" target="_blank">
                            <button  className="w-[220px] h-[50px]  border-double bg-[#FFFFFF] rounded-[5px] border-4 border-[#Eea217] text-[#848584] text-[1.5rem] hover:border-[#25be30]" id='font1'>Download CV</button>
                    </a>
                    </div>
            </div>
            <div className="class-picture-profile">
                <img className="mt-[30rem] right-[15rem] top-[-2rem]" id="bullet1" src='/Picture/Bullet Points1.png'></img>
                <img className="w-[150rem] mt-[10rem] top-[5.5rem] left-[2rem]" id="bullet2" src='/Picture/Bullet Points1.png'></img>
                <img className="w-[120rem] mt-[15rem] right-[8rem] brightness-100 hover:brightness-125" id='picture-profile' src='/Picture/toeyprofile.jpg'></img>

                </div>
        </div>
    );

}


export default Information                   