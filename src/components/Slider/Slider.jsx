import styles from './Slider.module.scss'

const Slider = () => {
    return ( 
        <div className={styles.slider}>
                    <div className={styles.slider__categories}>
                        <div className={`${styles.slider__category} ${styles.slider__category__active}`}>                     
                            <span>Техологии</span>
                        </div>
                        <div className={styles.slider__category}>
                            <span>Кино</span>
                        </div>
                        <div className={styles.slider__category}>
                            <span>Литература</span>
                        </div>
                        <div className={styles.slider__category}>
                            <span>Медицина</span>
                        </div>
                        <div className={styles.slider__category}>
                            <span>Спорт</span>
                        </div>
                        <div className={styles.slider__category}>
                            <span>Наука</span>
                        </div>
                    </div>
                    <button className={styles.slider__btn__left}></button>
                    <div className={styles.slides}>

                        <div className={`${styles.slide} ${styles.slide__active}`}>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1980</div>
                                <div className={styles.slide__info}>Sinclair Research выпускает домашний компьютер ZX80</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1982</div>
                                <div className={styles.slide__info}>Появился домашний компьютер ZX S2 выпущенный британской компанией Sincla Research</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1983</div>
                                <div className={styles.slide__info}>Компания Apple выпускает первый Macintosh с графическим интерфейсом пользователя.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1983</div>
                                <div className={styles.slide__info}>ARPANET (предшественник интернета) переходит на протокол TCP/IP.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1985</div>
                                <div className={styles.slide__info}>Компания Microsoft выпускает Windows 1.0, первую версию своей операционной системы с графическим интерфейсом пользователя.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1985</div>
                                <div className={styles.slide__info}>Компания Nintendo выпускает игровую консоль Nintendo Entertainment System (NES).</div>
                            </div>
                        </div> 

                        <div className={styles.slide}>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1987</div>
                                <div className={styles.slide__info}>"Хищик"/Predator, США (реж. Джон Мактирнан)</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1988</div>
                                <div className={styles.slide__info}>"Кто подставил кролика Роджера"/Who Framed Roger Rabbit, США (реж. Робер Земекис)</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1989</div>
                                <div className={styles.slide__info}>"Назад в будущее 2"/Back To The Future 2, США (реж. Робер Земекис)</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1990</div>
                                <div className={styles.slide__info}>"Крепкий орешек 2"/Die Hard 2, США (реж. Ренни Харлин)</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1991</div>
                                <div className={styles.slide__info}>"Семейка Аддамс"/The Addams Family, США, (реж. Барри Зонненфельд)</div>
                            </div>
                        </div> 

                        <div className={styles.slide}>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1992</div>
                                <div className={styles.slide__info}>Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разделах"</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1994</div>
                                <div className={styles.slide__info}>"Бессоница" - роман Стивена Кинга.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1995</div>
                                <div className={styles.slide__info}>Нобелевская премия по литературе - Шейманс Хини</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1997</div>
                                <div className={styles.slide__info}>"Гарри Поттер и философский камень" - роман Джоан Роулинг.</div>
                            </div>
                        </div> 

                        <div className={styles.slide}>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>1998</div>
                                <div className={styles.slide__info}>Исследователи объявляют, что они успешно клонировали овцу Долли.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2000</div>
                                <div className={styles.slide__info}>Генетические ученые завершили первую картировку генома человека.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2002</div>
                                <div className={styles.slide__info}>Исследователи сообщают о первом успешном трансплантировании лица.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2003</div>
                                <div className={styles.slide__info}>Китайские ученые публикуют новость о первом успешном клонировании человека.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2006</div>
                                <div className={styles.slide__info}>Ученые успешно применили стволовые клетки в лечении болезни Паркинсона</div>
                            </div>
                        </div> 

                        <div className={styles.slide}>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2006</div>
                                <div className={styles.slide__info}>Баскетбольный клуб ЦСКА стал победителем национального первенства России.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2008</div>
                                <div className={styles.slide__info}>С 8 по 24 августа в Пекине прошли 29-е летние Олимпийские игры</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2010</div>
                                <div className={styles.slide__info}>13 - 28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2012</div>
                                <div className={styles.slide__info}>2 августа - Летние Олимпийские игры.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2014</div>
                                <div className={styles.slide__info}>XXII зимние Олимпийские игры (Сочи, Россия).</div>
                            </div>
                        </div> 

                        
                        <div className={styles.slide}>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2015</div>
                                <div className={styles.slide__info}>13 сентября - частное солнечное затмение, видимое в Южной Африке и части Антаркдиты</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2016</div>
                                <div className={styles.slide__info}>Телескоп "Хаббл" обнаружил самую удаленную из всех обнаруженных галактик, получившую обозначение GN-z11</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2017</div>
                                <div className={styles.slide__info}>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2018</div>
                                <div className={styles.slide__info}>Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2019</div>
                                <div className={styles.slide__info}>Google объявил о создании 53-кубитного квантового компьютера.</div>
                            </div>
                            <div className={styles.slide__content}>
                                <div className={styles.slide__date}>2020</div>
                                <div className={styles.slide__info}>Корабль Crew вернулся на Землю после первого пилотируемого полета</div>
                            </div>
                        </div> 
                    </div>
                    <button className={styles.slider__btn__right}></button>
                    <div className={styles.slider__dots}>
                        <div className={`${styles.slider__dot} ${styles.slider__dot__active}`}></div>
                        <div className={styles.slider__dot}></div>
                        <div className={styles.slider__dot}></div>
                        <div className={styles.slider__dot}></div>
                        <div className={styles.slider__dot}></div>
                        <div className={styles.slider__dot}></div>
                    </div>
                </div>
     );
}
 
export default Slider;