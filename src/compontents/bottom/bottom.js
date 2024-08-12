import ScrollComponent from "./animation-slide"
import BottomCarousel from "./bottomCarousel"



function Bottom(){
    return (
        <>
<center>
        <div>
            <div style={{fontSize:"60px", fontWeight:"bolder"}}>Discover the latest</div>
            <div style={{fontSize:"60px", fontWeight:"bolder"}} > <span style={{fontSize:"50px", fontWeight:"bolder", color:"blue", backgroundColor:"#BBD9F9", borderRadius:"30px"}}><img style={{height:"60px"}} src="https://cdn-icons-png.flaticon.com/128/9038/9038160.png" alt="data"></img>updates </span>
           from Chrome</div>
        </div>
        </center>
        <div style={{display:"flex", gap:"90px", margin:"60px 60px"}}>
            <div style={{backgroundColor:"#98F5F9", width:"100%", border:"14px",borderRadius:"6%"}}>
                <div style={{marginLeft:"90px",marginTop:"20px"}}>Updates</div><br></br>
                <h1 style={{fontSize:"50px", marginLeft:"40px"}}>Automatic updates</h1>
                <p style={{marginLeft:"60px",width:"500px", fontSize:"20px"}}>There’s a new Chrome release every four weeks, making it
             easy to have the newest features and a faster, safer web browser.</p>
             <h6 style={{fontSize:"20px", marginLeft:"40px", color:"blue"}}>Learn about automatic updates</h6>

             <img style={{height:"300px", width:"100%"}} src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png" alt="data"></img>
            </div>
            <div style={{backgroundColor:"#F4BB64",width:"100%", border:"14px",borderRadius:"6%"}}>
                <div style={{marginLeft:"90px",marginTop:"20px"}}>Latest</div>
                <h1 style={{fontSize:"50px", marginLeft:"40px"}}>New from Chrome</h1>
                <p style={{marginLeft:"60px",width:"500px", fontSize:"20px"}}>Chrome regularly updates with tools and features that make it faster and easier to use.</p>
             <h6 style={{fontSize:"20px", marginLeft:"40px", color:"blue"}}>Learn what’s new on Chrome</h6>

             <img style={{height:"300px", width:"100%",marginTop:"30px"}} src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="data"></img>
            </div>
        </div>
        <div>
            <center>
            <h1 style={{fontSize:"60px", fontWeight:"bolder"}}>Make it <span style={{backgroundColor:"#FFAEAE",
                 borderRadius:"20%", color:"#F85757", fontSize:"50px"}}><img style={{height:"40px"}}
                  src="https://cdn-icons-png.flaticon.com/128/4673/4673835.png" alt="data"></img>&nbsp;yours </span> and take
                   <br></br>it with you</h1>
            </center>
            <ScrollComponent/>

            <div style={{display:"flex", gap:"110px", margin:"60px 60px"}}>
              <div style={{borderRadius:"6px"}}>
              <img style={{borderRadius:"16px"}} src="https://www.google.com/chrome/static/images/v2/accordion-timed/autofill.webp" alt="data"></img>
              </div>

              <div>
                <center>
                <h1 style={{fontSize:"40px", lineHeight:"104px"}}>Customise your Chrome</h1>
                <h1 style={{fontSize:"40px", lineHeight:"104px"}}>Browse across devices</h1>
                <p style={{width:"420px"}}>Sign in to Chrome on any device to access your bookmarks, saved passwords and more.</p>
                <h1 style={{fontSize:"40px", lineHeight:"104px"}}>Save time with autofill</h1>
                </center>
              </div>
            </div>

            <div style={{display:"flex", margin:"60px 60px", gap:"90px"}}>
                <div style={{marginTop:"90px"}}>
                    <h1 style={{fontSize:"50px", fontWeight:"bold", marginTop:"30px"}}>Extend your <br></br>experience</h1>
                    <p style={{fontSize:"20px"}}>From shopping and entertainment to productivity, 
                    find extensions to improve your experience in the Chrome Web Store.</p>
                </div>
                <div>
                    <img src="https://www.google.com/chrome/static/images/dev-components/extensions-ui.png" alt="data"></img>
                </div>
            </div>

            <div>
                <center>
                    <h1 style={{fontSize:"50px", fontWeight:"bold"}}>Stay <span style={{color:"blue", backgroundColor:"#98F5F9", borderRadius:"20px"}}><img style={{height:"60px"}} src="https://cdn-icons-png.flaticon.com/128/14915/14915016.png" alt="data"></img>&nbsp;safe&nbsp;</span> <br></br>while you browse</h1>
                </center>
            </div>

            <div style={{display:"flex", gap:"50px", margin:"60px 60px"}}>
                <div style={{backgroundColor:"#524CF2", height:"80%"}}>
                <img style={{height:"60%", width:"70%", margin:"80px", borderRadius:"20px"}} src="https://www.google.com/chrome/static/images/v2/gallery/save-password.webp" alt="data"></img>
                <p style={{color:"white", fontSize:'20px', width:"70%", marginLeft:"60px"}}>Chrome has Google Password Manager built in, which makes it simple to save, manage 
                    and protect your passwords online. It also helps you create 
                    stronger passwords for every account you use.</p>
                    </div>
                    <div style={{backgroundColor:"#D9D8F9", height:"100%"}}>
                        <img style={{height:"80%", width:"70%", margin:"80px", borderRadius:"20px"}} src="https://www.google.com/chrome/static/images/v2/gallery/safety-check.webp" alt="data"></img>
                        <p style={{ fontSize:'20px', width:"70%", marginLeft:"60px"}}>Chrome's Safety Check confirms the overall security and privacy of your browsing experience,
                             including your saved passwords, extensions and settings. If something needs attention,
                              Chrome will help you fix it.</p>
                    </div>
            </div>


            <div style={{display:"flex", gap:"60px", margin:"60px 60px"}}>
                <div style={{border:"2px solid blue", borderRadius:"20px"}}>
                    <h6 style={{marginTop:"60px", marginLeft:"50px"}}>ENHANCED SAFE BROWSING</h6>
                    <h1 style={{fontSize:"50px", marginTop:"60px", textAlign:"center", fontWeight:"bold"}}>Browse with the confidence that you're staying safer online.</h1>
                </div>
                <div style={{backgroundColor:"#070283", borderRadius:"20px"}}>
                    <h6 style={{marginTop:"60px", marginLeft:"50px", color:"white"}}>PRIVACY GUIDE</h6>
                    <h1 style={{fontSize:"50px", marginTop:"60px", textAlign:"center", fontWeight:"bold", color:"white"}}>Keep your privacy under your control with easy-to-use settings.</h1>
                    <img src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp" alt="data"></img>
                </div>
            </div>

            <div>
             <center>   
            <h1 className="fast">The <span style={{color:"green", backgroundColor:"#CBFEB7", borderRadius:"20px"}}><img style={{height:"60px"}} src="https://cdn-icons-png.flaticon.com/128/7584/7584672.png" alt="data"></img>&nbsp;Fast&nbsp;</span> way to do <br/> things online</h1>
            </center>
            </div>

            <BottomCarousel/>

        </div>
        </>
    )
}


export default Bottom



















