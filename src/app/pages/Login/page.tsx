import Image from "next/image";
import Link from "next/link";
import './login.scss'

export default function Login() {
       return (
              <section className="login | h-[78vh] flex items-center justify-center" dir="rtl">

                     <div className="img | flex flex-auto overflow-hidden bg-neutral-900 h-full">
                            <Image className="object-cover h-full w-full" src="/login.webp" alt="login" loading="lazy" width="500" height="500" />
                     </div>
                     
                     <form className="h-full w-[600px] flex flex-col items-start justify-between gap-5">
                            <div className="title">
                                   <span className='inline-block'>تسجيل الدخول</span>
                                   <h2>مرحبًا بعودتك</h2>
                                   <p>قم بتسجيل الدخول للمتابعةاحدث العروض</p>
                            </div>

                            <div className="inputs-form | w-full">
                                   {/* Email User */}
                                   <div className="input">
                                          <label htmlFor="name">البريد الالكتروني</label>
                                          <input id="email" type="email" name="email" placeholder='enter your first name' />
                                   </div>

                                   {/* Password User */}
                                   <div className="input">
                                          <label htmlFor="name">كلمه المرور</label>
                                          <input id="password" type="password" name="password" placeholder='enter your first name' />
                                   </div>
                                   <p>are you forget password? <Link href='/resetPassword'>click here</Link> </p>
                            </div>

                            {/* this is here error validation */}
                            <ul className='errors-validation'>
                                   {/* <h4>{loginUser.errors.email ||loginUser.errors.password ? 'What happened ?!' : null}</h4> */}
                                   <li className="error"><label htmlFor="email"></label></li>
                                   <li className="error"><label htmlFor="password"></label></li>
                            </ul>

                            {/* Footer */}
                            <div className="footer | flex flex-wrap items-center justify-between">
                                   <p>If you don't have an account <Link href='/Register'>Register</Link></p>
                                   <div className="buttons | mt-5 sm:mt-0">
                                          <button type="button"><Link href='/'>Cancel</Link></button>
                                          <button>Continue</button>
                                   </div>
                            </div>
                     </form>
              </section>
       )
}
