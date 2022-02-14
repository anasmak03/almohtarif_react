import React, { Component } from 'react';
import './Home.css'
import {BrowserRouter as Router, Routes, Route, Link, unstable_HistoryRouter} from 'react-router-dom';
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
import data from '../Data/Mydata.json';
function Home () {
        const mydata = (
            <div>
            {data.map((datas) => ( 
                <>
                      <div className="boxs">
                            <div className='my-box'>
                              <div className="infos1">
                              <p key={datas.id}>{datas.title}</p> 
                              <span key={datas.id}>{datas.date}</span>
                            <p key={datas.id}>{datas.author}</p>
                            <small key={datas.id}>{datas.description}</small> 

                                <br></br>
                                
                              </div>
                              <div className='picture'>
                              <img key={datas.id} src={datas.image} />
                              </div>
                            </div>
                        </div>
                
                 </>
                
           

            ))}
            </div>
        )
        return ( 
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
                        {/* <div className="boxs">
                            <div className='my-box'>
                              <div className="infos1">
                              <p>تويتر تعلن رسميا عن توسيع اختبار ميزة "التصويت لأسفل"</p>
                            <span>1:36 م <i class="fa fa-clock"></i> </span>
                            <p>العكرودي أنس <i class="fa fa-user us"></i></p>
                                <small>أعلن موقع التواصل الاجتماعي تويتر عن توسيع اختباره لزر "التصويت لأسفل" لمجموعة مختارة من المستخدمين حول العالم. وقالت الشركة إنها ...</small>
                                <br></br>
                                <button className='btn2'>   <i class="fa fa-share-alt fa-fw"></i></button>
                                <button className='btn1'>قراءة المزيد</button>
                              </div>
                              <div className='picture'>
                                  <img src={picture3} alt="photo"/>
                              </div>
                            </div>
                        </div> */}
                        {mydata}
                        {/* <div className="boxs">
                            <div className='my-box'>
                              <div className="infos1">
                              <p>تعرف على هذه المنصة التي تحتوي كل ما تحتاجه في مجال صناعة الفيديوهات مدعومة بالذكاء الإصطناعي</p>
                            <span>1:36 م <i class="fa fa-clock"></i> </span>
                            <p>العكرودي أنس <i class="fa fa-user us"></i></p>
                                <small>ليس هناك شك في أن الفيديو هو أحد أقوى أدوات التسويق المتوفرة للوصول إلى عملاء جدد والترويج لمنتجك أو خدمتك. لكن إنشاء محتوى فيديو فعال وجذاب...</small>
                                <br></br>
                                <button className='btn2'>   <i class="fa fa-share-alt fa-fw"></i></button>
                                <button className='btn1'>قراءة المزيد</button>
                              </div>
                              <div className='picture'>
                                  <img src={picture1} alt="photo"/>
                              </div>
                            </div>
                        </div>
                        <div className="boxs">
                            <div className='my-box'>
                              <div className="infos1">
                              <p>إيلون ماسك يكشف عن موعد تقديم آخر مستجدات Starship</p>
                            <span>1:36 م <i class="fa fa-clock"></i> </span>
                            <p>العكرودي أنس <i class="fa fa-user us"></i></p>
                                <small>يقترب المتابعون من التعرف على آخر مستجدات SpaceX بعد مدة من الانقطاع، حيث أعلن  الرئيس التنفيذي للشركة ورجل الأعمال المثير للجدل إيلون ماسك ...</small>
                                <br></br>
                                <button className='btn2'>   <i class="fa fa-share-alt fa-fw"></i></button>
                                <button className='btn1'>قراءة المزيد</button>
                              </div>
                              <div className='picture'>
                                  <img src={picture2} alt="photo"/>
                              </div>
                            </div>
                        </div>
                        <div className="boxs">
                            <div className='my-box'>
                              <div className="infos1">
                              <p>تطبيق مميز لاستخدام أوامر ADB على أي هاتف أندرويد عن طريق هاتف آخر متصل دون الحاجة إلى الحاسوب</p>
                            <span>1:36 م <i class="fa fa-clock"></i> </span>
                            <p>العكرودي أنس <i class="fa fa-user us"></i></p>
                                <small>إذا كنت من مستخدمي Android، فمن المحتمل أنك سمعت عن أوامر ADB من قبل. وإذا لم تكون بالفعل، فهي أداة سطر أوامر تتيح لك الاتصال مع جهاز Androi...</small>
                                <br></br>
                                <button className='btn2'>   <i class="fa fa-share-alt fa-fw"></i></button>
                                <button className='btn1'>قراءة المزيد</button>
                              </div>
                              <div className='picture'>
                                  <img src={picture} alt="photo"/>
                              </div>
                            </div>
                        </div>
                        <div className="boxs">
                            <div className='my-box'>
                              <div className="infos1">
                              <p>فيسبوك تكشف عن مؤشر سلبي لأول مرة منذ إنشائها!</p>
                            <span>1:36 م <i class="fa fa-clock"></i> </span>
                            <p>العكرودي أنس <i class="fa fa-user us"></i></p>
                                <small>يبدو أن موقع التواصل الاجتماعي فيسبوك يعيش أحد أصعب أيامه منذ انطلاقه قبل سنوات، حيث اعتادت فيسبوك على الإعلان عن ارتفاع في عدد مستخدميها ال...</small>
                                <br></br>
                                <button className='btn2'>   <i class="fa fa-share-alt fa-fw"></i></button>
                                <button className='btn1'>قراءة المزيد</button>
                              </div>
                              <div className='picture'>
                                  <img src={picture4} alt="photo"/>
                              </div>
                            </div>
                        </div> */}

                        

                    </div>

                   

                   
                </div>
                </div>
            </div>
        );
    
}

export default Home;