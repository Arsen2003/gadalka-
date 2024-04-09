
    import styles from './page.module.scss'
    import Image from 'next/image'
    import circleImage from '../../assets/images/image-circle.png'
    import goldWings from '../../assets/images/wings-gold.png'
    import loveImage from '../../assets/images/love-image.png'
    import telegramImage from '../../assets/images/telegram-image.png'
    import whatsappImage from '../../assets/images/whatsapp-image.png'
    import forestImage from '../../assets/images/forest-image.png'
    import taroImage from '../../assets/images/tari-circle.png'
    import circleGold from '../../assets/images/circle-gold.png'
    import { getCertificates, getPosts } from '@/app/posts/getPosts/getPosts'
    import candleImage from './../../assets/images/candle-image.png'
    export default async function HomePage() {
      const posts =  await getPosts()
      const certificates = await getCertificates()
      const list = { hidden: { opacity: 0 } }
      const item = { hidden: { x: -10, opacity: 0 } }








      return (
        <main className={styles.main}>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>
          <div class={styles.snow}></div>

          <section className={styles.hero_section}>
            <div className="container">
              <div className={styles.hero_section_content}>
                <h1>
                  Ясновидящая <br />
                  Лола
                </h1>
                <span>
                  Магия - это то, что помогает раскрыть тайны вашего будущего и
                  привлечь счастье и успех в вашу жизнь!
                </span>
                <a href="tel:+998901155162">ПОЗВОНИТЬ</a>
                <div className={styles.hero_section_content_links}>
                  <a href="">
                    <Image src={whatsappImage} alt="whatsapp-image" />
                  </a>
                  <a href="">
                    <Image src={telegramImage} alt="telegram-image" />{' '}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.gold_line_1}>
            <span>Помощь с любыми ситуациями </span>
            <p>
              Магия преодолевает преграды времени и пространства. Моя готовность
              помочь вам достичь счастья, любви и исполнения желаний не знает
              границ. Это не просто работа, это мое призвание, моя жизнь, моя
              миссия в этом мире.
            </p>
          </div>
          <section className={styles.section_info}>
            <div className="container">
              <div className={styles.section_info_content}>
                <p>
                  Обладая <span>надежной</span> и <span>мощной</span> магией, а
                  также профессиональным опытом, я готова <span>помочь</span>{' '}
                  вам раскрыть все ключевые моменты, необходимые для привлечения
                  в вашу жизнь <span>любви</span>, <span>здоровья</span>,{' '}
                  <span>богатства</span> и <span>благополучия</span>.
                </p>
                <Image src={circleImage} alt="circle-image" />
              </div>
            </div>
          </section>
          <div className={styles.additional}>
            <p>
              Многие люди испытывают проблемы и упускают возможность <br />{' '}
              прожить жизнь иначе.
            </p>
            <span>Настало время изменить все это!</span>
          </div>
          <section className={styles.mobile_info_section}>
            <div>
              <Image src={taroImage} alt="taroImage" />
              <div>
                <span>ОБРЯДЫ И РИТУАЛЫ</span>
                <p>
                  Уникальные ритуалы, которые подготавливаю индивидуально под 
                  Вашу ситуацию
                </p>
              </div>
            </div>
            <div>
              <div>
                <span>РЕЗУЛЬТАТ</span>
                <p>
                  Гарантирую достижение необходимого результата в короткие сроки
                </p>
              </div>
              <Image src={taroImage} alt="taroImage" />
            </div>
            <Image src={circleGold} alt="circle-gold" />
          </section>
          <div className={styles.gold_line_2}>
            <h2>Мои Услуги</h2>
          </div>

          <section className={styles.services_section}>
            {await posts.map((post) => (
              <div key={post.id} className={styles.card}>
                <div className={styles.card_left}>
                  <Image
                    className={styles.card_image}
                    src={post.image}
                    width={306}
                    height={209}
                    alt="gold-wings"
                  />
                  <span>{post.title}</span>
                  <Image
                    className={styles.card_wings}
                    src={goldWings}
                    alt="gold-wings"
                  />
                </div>
                <div className={styles.card_right}>
                  <p>{post.main_text}</p>
                  <ul animate="hidden" variants={list}>
                    {post.additional_text.map((text) => (
                      <li variants={item} key={text}>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
          <section className={styles.quote_section}>
            <p>
              Магия - это не просто средство предсказания будущего, но и ключ к
              раскрытию потенциала нашей души и привлечению гармонии в нашу
              жизнь
            </p>
            <span>Джон Леннон</span>
          </section>
          <div className={styles.gold_line_4}>
            <h2>ОБРАТИВШИСЬ КО МНЕ ЗА ПОМОЩЬЮ</h2>
          </div>
          <section className={styles.support_section}>
            <div>
              <span></span>
              <p>Вы узнаете свое будущее, получите ответы на любые вопросы</p>
            </div>
            <div>
              <span></span>
              <p>Примите верное решение, в каком- либо вопросе и деле</p>
            </div>
            <div>
              <span></span>
              <p>
                Обретете настоящую любовь — человек, которого вы любите ответит
                вам взаимностью. Муж/ жена вернется к вам
              </p>
            </div>
            <div>
              <span></span>
              <p>Избавитесь от ненужных людей, навязчивых ухажеров</p>
            </div>
            <div>
              <span></span>
              <p>
                В вашей семье воцарится любовь, уважение, гармония и счастье
              </p>
            </div>
            <div>
              <span></span>
              <p>
                Раз и навсегда избавитесь от порчи, сглаза, родовых проклятий, и
                любого другого негатива
              </p>
            </div>
            <div>
              <span></span>
              <p>
                Вы будете легко достигать успеха в бизнесе, в карьере, в учебе.
              </p>
            </div>
          </section>
          <section className={styles.answer_section}>
            <div className={styles.answer_section_1}>
              <h4>Как я работаю?</h4>
              <span> Личная встреча</span>
              <span> Личная встреча</span>
            </div>
            <div className={styles.answer_section_2}>
              <span>Дистанционно я работаю по фотографии.</span>
              <p>
                МНОГИЕ ОБРЯДЫ - ПРИВОРОТЫ, ОТВОРОТЫ, СНЯТИЕ НЕГАТИВА, УСТАНОВКА
                ЗАЩИТЫ ОТ ЗАВИСТНИКОВ - ДЕЛАЮТСЯ БЕЗ НЕПОСРЕДСТВЕННОГО УЧАСТИЯ
                ВТОРОЙ СТОРОНЫ ОБРЯДА. ФОТО ОБЯЗАТЕЛЬНО
              </p>
            </div>
          </section>
          <section className={styles.help_section}>
            <span>Помогу </span>
            <p>избежать подстерегающих опасностей и проблем!</p>
            <p>
              Магия в тяжелый момент жизни- поможет изменить судьбу к лучшему!
            </p>
          </section>
          <section className={styles.solution_section}>
            <Image src={candleImage} alt="candle-image" />
            <div>
              <h4>ВСЕГДА ЕСТЬ РЕШЕНИЕ</h4>
              <span>
                ГЛАВНОЕ — ПРАВИЛЬНО ПОНЯТЬ СУТЬ, И ПРИНЯТЬ ВЕРНОЕ РЕШЕНИЕ ПО ЕЕ
                ИСПРАВЛЕНИЮ!
              </span>
            </div>
          </section>
          <section className={styles.skills_section}>
            <div>
              <span>НАВЫК ПРОВЕДЕНИЯ ОБРЯДОВ</span>
              <p>
                За время своей работы, я получила огромный опыт в решении
                различных ситуаций. Помните, что я не возьмусь за работу, если
                буду не уверена в своих силах!
              </p>
            </div>
            <div>
              <span>АВТОРСКИЕ ЗАГОВОРЫ И МОЛИТВЫ</span>
              <p>
                В своей работе я применяю уникальные авторские обряды и
                заговоры, которые проверены мною на практике. Все заговоры - не
                несут негативных последствий!
              </p>
            </div>
            <div>
              <span>ПОМОЩЬ В ЛЮБОЕ ВРЕМЯ СУТОК</span>
              <p>
                Я осуществляю как личный прием, так и дистанционный. Если вы
                находитесь в другой точке земного шара - вы можете связаться со
                мной при помощи Whatsapp.
              </p>
            </div>
          </section>
          <section className={styles.questions_section}>
            <Image src={forestImage} alt="forest-image" />
            <h3>Получи ответы</h3>
            <div className={styles.questions_section_card}>
              <span>КАКИМ ОБРАЗОМ ПРОИСХОДИТ ОНЛАЙН ГАДАНИЕ?</span>
              <p>
                Чтобы настроиться на энергетику, исходящую от клиента через
                таро, я уточню у человека важные данные:
              </p>
              <ul>
                <li>— имя</li>
                <li>— фото</li>
                <li>— дата рождения</li>
              </ul>
            </div>
            <div className={styles.questions_section_card}>
              <span>КАКАЯ ФОТОГРАФИЯ НУЖНА?</span>
              <p>
                Фотографии для гадания должны быть одни из последних, четкие.
                Каждыи человек должен быть изображен отдельно на фото, без
                посторонних лиц.
              </p>
            </div>
            <div className={styles.questions_section_card}>
              <span>КАК ЗАПИСАТЬСЯ?</span>
              <p>
                Для этого вам необходимо заранее связаться со мной, оговорить
                круг интересующих вас вопросов. Прислать всю информацию
              </p>
              <p>
                Для этого вам необходимо заранее связаться со мной, оговорить
                круг интересующих вас вопросов. Прислать всю информацию
              </p>
            </div>
            <div className={styles.questions_section_card}>
              <span>СВЯЗАТЬСЯ СО МНОЙ:</span>
              <ul>
                <li>— через whatsapp</li>
                <li>— позвонить/написать смс</li>
              </ul>
            </div>
          </section>
          <div className={styles.gold_line_4}>
            <h2>Отзывы</h2>
          </div>
          <section className={styles.reviews_section}>
            <div className={styles.reviews_section_card}>
              <div className={styles.reviews_section_card_header}>Ольга</div>
              <p>
                Расстались с моим парнем, но все равно меня не отпускали чувства
                к нему, пробовала переключиться, но ничего не помогало. Дарья
                очень четко озвучила мне решение проблемы, я сперва отнеслась с
                недоверием, но в итоге все получилось, как она и сказала. Мы
                дали отношениям второй шанс.
              </p>
            </div>
          </section>
          <section className={styles.certificates_section}>
            <h4>Сертификаты</h4>
            <div className={styles.certificates_section_content}>
              {certificates.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  width={337}
                  height={337}
                  alt="certificates"
                />
              ))}
            </div>
          </section>
          <span className={styles.title}>
            *Результаты в каждом случае индивидуальны и могут <br /> отличаться
          </span>
          <div className={styles.gold_line_3}>
            <h2>Получите подробную информацию прямо сейчас!</h2>
          </div>
          <a className={styles.phone} href="tel:+998901155162">
            +998 90 115 51 62
          </a>
        </main>
      )
    }
