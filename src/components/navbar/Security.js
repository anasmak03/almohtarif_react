import React, { Component } from 'react';
import security from '../Data/SecurityData.json';
import img1 from '../images/box1.png';
import img2  from '../images/box2.png';
import img3  from '../images/box3.png';
import img4  from'../images/box4.png';
import img5  from'../images/box5.png';
import img6  from '../images/box6.png';
import img7  from '../images/box7.jpg';
import img8  from '../images/box8.png';
import img9  from'../images/box9.png';
import img10  from'../images/box10.png';
import picture from '../images/pic1.png';
import picture1 from '../images/pic2.png';
import picture2 from '../images/pic3.png';
import picture3 from '../images/pic4.png';
import picture4 from '../images/pic5.png';
function Security (){
    const SecurityData = (
        <div>
            {security.map((data) => (
                 <div className="boxs">
                 <div className='my-box'>
                   <div className="infos1">
                   <p key={data.id}>{data.title}</p> 
                   <span key={data.id}>{data.date}</span>
                 <p key={data.id}>{data.author}</p>
                 <small key={data.id}>{data.description}</small> 
    
                     <br></br>
                     
                   </div>
                   <div className='picture'>
                   <img key={data.id} src={data.image} />
                   </div>
                 </div>
             </div>

            ))}
        </div>
    )
        return (
            <div>
            
            <div>
                <div className="parent-home">
                <div className='container'>
                    <div className="container-box">
                        <span>18:30 <i className="fa fa-podcast"></i> </span> <br />
                        <small>بتوقيت GMT+1</small>
                        <p>البث المباشرة مع رغيب أمين للإجابة على تساؤلاتكم التقنية من الإثنين إلى الأربعاء</p>
                        <div className='btn'>
                            <button>إلتحق الأن</button>
                        </div>
                        <div className='container-box2'>
                        <div className='container1'>
                        <button>أكثر من 2 مليون و نصف معجب       &nbsp;     <i class="fab fa-facebook" ></i></button>
                        <button>أكثر من 3 مليون و 800 ألف متابع  <i class="fab fa-youtube"></i></button>
                        <button>أزيد من 60 ألف متابع لنا عبر تويتر  &nbsp; <i class="fab fa-twitter"></i></button>
                        </div>
                    </div>
                    <div className='container-box3'>
                        <p className='title'>أكثر المواضيع مشاهدة خلال هذا الاسبوع</p>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'>2 تيرابايت من دورات التدوال في الفوركس وغيره اقدمها لك بالمجان سارع قبل الحذف</p>
                        </div>
                        <div className='img'>
                            <img  src={img1} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'>بالصور: الكشف عن مشغل الفيديو الجديد ليوتيوب على أندرويد و iOS </p>
                        </div>
                        <div className='img'>
                            <img  src={img2} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'> هكذا سيبدو الشكل الجديد لـ Gmail</p>
                        </div>
                        <div className='img'>
                            <img  src={img3} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'> نتفليكس تطلق ميزة جديدة لجعل المشاهدة أكثر متعة</p>
                        </div>
                        <div className='img'>
                            <img  src={img4} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'>أداة مجانية للحصول على أفكار لإنشاء محتوى مشابه للفيديوهات الرائجة في Youtube مع محرر فيديو مدمج</p>
                        </div>
                        <div className='img'>
                            <img  src={img9} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'> طريقة جديدة لكي تجد اي كتاب تبحث عنه في الانترنت بالمجان</p>
                        </div>
                        <div className='img'>
                            <img  src={img6} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'>أداة مجانية لضبط دقة الصور لتبدو عالية الجودة بواسطة الذكاء الإصطناعي .. تعرف عليها الآن !</p>
                        </div>
                        <div className='img'>
                            <img  src={img7} alt="picture"/>
                        </div>
                        </div>
                    </div>
    
                    <div className='container-box3'>
                        <div className='flex'>
                        <div className='infos'>
                            <p className='info'>أخيرا.. آب ستور يدعم التطبيقات غير المدرجة التي يمكن اكتشافها فقط من خلال رابط مباشر</p>
                        </div>
                        <div className='img'>
                            <img  src={img8} alt="picture"/>
                        </div>
                        </div>
                    </div>
                    </div>
    
                    
                    <div className='container-box1'>
                        <div className="content">
                            <h4>أخر المواضيع <i class="fa fa-bookmark"></i></h4>
                        </div>
                        
                        {SecurityData}
                       
    
                        
    
                    </div>
    
                   
    
                   
                </div>
                </div>
            </div>
            </div>
        );
    
}

export default Security;