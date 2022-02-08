import React, { Component } from 'react';
import './Footer.css';

function Footer(){
    
        return (
            <div>
                <div className='footer'>
                    <p>المحترف عبارة عن مدونة ضخمة تضم عدد كبير من الفيديوهات المصورة عن طريق حلقات متسلسلة نتطرق فيها إلى مختلف المواضيع التقنية القريبة من الشباب العربي ، بالإضافة إلى مقالات . مدونة المحترف تأسست سنة 2009 حيث تستقطب الآن عدد كبير من الزوار من كافة ربوع الوطن العربي ، حيث ان مقرها الرئيسي بالمغرب و مديرها امين رغيب ،حاصلة على جائزة افضل مدونة مغربية لسنة 2012 / 2013 ومصنفة ضمن افضل 10 مدونات عربية حسب المركز الدولي للصحفيين ICFJ سنة 2013 وحاصلة على الجائزة الفضية من يوتوب (اول قناة مغربية تحصل على هذه الجائزة من يوتوب ) سنة 2014 وتم تكريم مؤسسها من طرف حاكم دبي بجائزة رواد التواصل الإجتماعي عن فئة التكنولوجيا سنة 2015 وهو الموقع التقني الاول في المغرب والعالم العربي</p>
                    <br/>
                <button className='botona'>consulting@raghib : للإتصال بنا </button>
              <div className='father'>
                  <div className='child1'>
                      <button>إشتراك</button>
                      <input type="text" placeholder='بريدك الإلكتروني'></input>
                  </div>
                  <div className='child2'>
                    <i className="far fa-envelope-open"></i>
                    <h5>إبق على إطلاع بجديدنا</h5>
                    <h7>إشترك في قائمتنا البريدية ليصلك كل جديد</h7>
                  </div>
              </div>
              <pre>كافة الحقوق محفوظة © 2021 | واتس آب ، فيسبوك ، أنترنت ، شروحات تقنية حصرية - المحترف</pre>
                </div>
           </div>
        );
    
}

export default Footer;