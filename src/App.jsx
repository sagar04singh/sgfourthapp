import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import   img from "./projectimages/img0.jpg";
import img2 from "./projectimages/img20.png";


const App=()=>{


    return(

        <>
<h1>PORTFOLIO</h1> 

<div className="container-fluid home_main">
<div className="row">
<div className="col-md-6 mt-5">
<h2>Sagar Singh</h2>
<h3><span className="dot2">React.js developer</span></h3>
    <p>To be able to work an encouraging and stable company that will assist me in developing,improving and obtaining
the neccessary skills in order to become a good in web developer field.</p>
</div>
<div className="col-md-6 mt-3 lt">
<img src={img} style={{width:"200px"}}/>
<h4>BCA-Pursuing<br/>(Distance Ignou 2022)</h4>
<p style={{color:"yellow"}}>Email-(ss894884@gmail.com)</p>

</div>

</div>
</div>

{/* 2 */}
<div className="container-fluid home_main mt-5">
<div className="row">
<div className="col-md-12 mt-5 st">
<h2>SKILLS</h2>
<img src={img2} style={{width:"450px"}}/>

</div>
<div className="col-md-12  home_sk">

    <ul>
        <li>HTML-<span className="dot">95%</span></li>
        <li>CSS-<span className="dot">85%</span></li>
        <li>JAVASCRIPT-<span className="dot">70%</span></li>
        <li>BOOTSTRAP-<span className="dot">80%</span></li>
        <li>REACT.JS-<span className="dot">80%</span></li>
        <li>GITHUB-<span className="dot">75%</span></li>
    </ul>
</div>

</div>
</div>
{/* 3 */}
<div className="container-fluid home_main pr mt-5">
<div className="row">
<div className="col-md-12  mt-5">
<h2>PROJECTS</h2>
 <a href="https://sagar04singh.github.io/sgthirdapp/">NOTES APP USING PROPS AND USESTATE METHOD(React.js)</a>
 <p>CLICK TO VIEW</p>
</div>

</div>
</div>

{/* 5 */}
<div className="container-fluid home_main">
<div className="row">
<div className="col-md-12 mt-5">
<h2>Experience</h2>
 <p>Fresher</p>
</div>

</div>
</div>




</>

    );

};

export default App;