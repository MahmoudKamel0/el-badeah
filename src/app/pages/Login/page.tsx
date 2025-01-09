import Image from "next/image";
import Link from "next/link";
import './login.scss'
import Arrow from "../../../../public/arrow";

export default function Login() {
       return (
              <section className="login | h-screen flex items-center justify-center relative" dir="rtl">

                     <div className="img | flex flex-auto overflow-hidden bg-neutral-900 h-full">
                            <Image className="object-cover h-full w-full" src="/login.webp" alt="login" loading="lazy" width="500" height="500" />
                     </div>
                     
                     <form className="absolute top-0 left-0 lg:static h-full w-full lg:w-[600px] flex flex-col items-start justify-between gap-5">
                            <div className="title | flex items-start justify-between w-full">
                                   <div>
                                          <span className='inline-block'>تسجيل الدخول</span>
                                          <h2>مرحبًا بعودتك 👋</h2>
                                          <p>قم بتسجيل الدخول للمتابعة احدث العروض</p>
                                   </div>

                                   <Link href="/" className="flex items-center justify-center gap-3">
                                          <p>ارجع للصفحة الرئيسية</p>
                                          <div className="icon | p-3 rounded-full"><Arrow /></div>
                                   </Link>
                            </div>

                            <div className="inputs-form | w-full">
                                   {/* Email User */}
                                   <div className="input">
                                          <label htmlFor="name">البريد الالكتروني</label>
                                          <input id="email" type="email" name="email" placeholder='ادخل بريدك الالكتروني' />
                                   </div>

                                   {/* Password User */}
                                   <div className="input">
                                          <label htmlFor="name">كلمه المرور</label>
                                          <input id="password" type="password" name="password" placeholder='ادخل كلمه المرور' />
                                   </div>
                                   <p>هل نسيت كلمه المرور الخاصه بك <Link href='/resetPassword'>اضفط هنا</Link> </p>
                            </div>

                            {/* this is here error validation */}
                            <ul className='errors-validation'>
                                   {/* <h4>{loginUser.errors.email ||loginUser.errors.password ? 'What happened ?!' : null}</h4> */}
                                   <li className="error"><label htmlFor="email"></label></li>
                                   <li className="error"><label htmlFor="password"></label></li>
                            </ul>

                            {/* Footer */}
                            <div className="footer | flex flex-wrap items-center justify-between w-full">
                                   <p>ليس لديك حساب <Link href='/Register'>سجل الان</Link></p>
                                   <div className="buttons | mt-5 sm:mt-0">
                                          <button type="button"><Link href='/'>إلغاء</Link></button>
                                          <button>استمرار</button>
                                   </div>
                            </div>
                     </form>
              </section>
       )
}
