import React from "react"

const Main = () => {
  return (
    <main>
    <section class="introduce">
      <img src="./static/img/intro-logo.png" alt="" />
      <h2>
        ДОМА ДЛЯ ОТДЫХА В ТАЙГЕ С УЮТНОЙ <br />
        ДОМАШНЕЙ АТМОСФЕРОЙ И ПОЛНЫМ<br />
        ЕДИНЕНИЕМ С ПРИРОДОЙ
      </h2>
      <button class="booking">Забронировать <img src="./static/img/pine.svg" alt="" /></button>
    </section>
    <section class="about-us">
      <h2>о нас</h2>
      <div class="about-us--wrapper">
        <div class="about-us--wrapper-text">
          <h3>
            ОСТАВЬТЕ ГОРОД ПОЗАДИ И НАЧНИТЕ ПЛАНИРОВАТЬ СВОЙ ПОБЕГ УЖЕ СЕГОДНЯ
          </h3>
          <p>
            Наш сервис по букингу загородных домов предоставляет уникальную
            возможность провести незабываемый отдых вдали от городской суеты.
            Мы собрали лучшие предложения от владельцев уютных коттеджей, дач
            и домов для отдыха, чтобы каждый наш клиент мог выбрать идеальное
            место для отдыха на природе.
          </p>
        </div>
        <div><img src="./static/img/about-us1.png" alt="" /></div>
      </div>
      <div class="about-us--wrapper">
        <div><img src="./static/img/about-us2.png" alt="" /></div>
        <div class="about-us--wrapper-text">
          <h3>ЗА ВРЕМЯ НАШЕЙ РАБОТЫ МЫ ОСЧАСТЛИВИЛИ МНОЖЕСТВО ЛЮДЕЙ</h3>
          <p>
            Мы с гордостью можем сказать, что мы уже давно занимаемся
            предоставлением возможности провести незабываемый отдых в
            загородных домах и коттеджах. Наша цель - сделать отдых каждого
            нашего клиента особенным и незабываемым, чтобы они могли полностью
            расслабиться и насладиться моментами счастья и покоя в уютной
            обстановке загородного дома.
          </p>
        </div>
      </div>
    </section>
    <section class="comfortably">
      <h2>у нас уютно</h2>
      <div class="comfortably-slider">
        <div><img src="./static/img/1.png" alt="" /></div>
        <div><img src="./static/img/2.png" alt="" /></div>
        <div><img src="./static/img/3.png" alt="" /></div>
      </div>
    </section>
    <section class="advantages">
      <h2>наши преимущества</h2>
      <div class="advantages-reasons">
        <div class="advantages-reasons--item">
          <img src="./static/img/house.png" alt="" />
          <p>
            Широкий выбор различных типов загородных домов с разными                                                    
            удобствами и комфортом
          </p>
        </div>
        <div class="advantages-reasons--item">
          <img src="./static/img/calendar.png" alt="" />
          <p>
            Удобная система онлайн-бронирования, которая позволяет
            забронировать в удобное для вас время
          </p>
        </div>
        <div class="advantages-reasons--item">
          <img src="./static/img/customer-support.png" alt="" />
          <p>
            Профессиональная поддержка клиентов и помощь в выборе лучшего
            варианта для отдыха
          </p>
        </div>
        <div class="advantages-reasons--item">
          <img src="./static/img/discount.png" alt="" />
          <p>
            Выгодные предложения и специальные акции для постоянных клиентов
          </p>
        </div>
      </div>
    </section>
    <section class="catalog">
      <div><h2>Наши дома</h2></div>
      <div class="catalog-list">
        <div class="catalog-list--item">
          <img src="./../backend/house/1/1.jpg" alt="" />
          <p>A-frame с панорамным видом</p>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        <div class="catalog-list--item">
          <img src="./../backend/house/2/2.jpg" alt="" />
          <p></p>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        <div class="catalog-list--item">
          <div><img src="" alt="" /></div>
          <div><p></p></div>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        <div class="catalog-list--item">
          <div><img src="" alt="" /></div>
          <div><p></p></div>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        <div class="catalog-list--item">
          <div><img src="" alt="" /></div>
          <div><p></p></div>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        <div class="catalog-list--item">
          <div><img src="" alt="" /></div>
          <div><p></p></div>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        <div class="catalog-list--item">
          <div><img src="" alt="" /></div>
          <div><p></p></div>
          <div>
            <button>забронировать</button>
            <p>от 17 150 руб/сут.</p>
          </div>
        </div>
        
      </div>
    </section>
    <section class="booking-now">
      <h2>Арендовать дом мечты прямо сейчас</h2>
      <div>
        <p>
          Отправьте форму, чтобы наш менеджер связался с вами и помог
          подобрать идеальный загородный дом: Мы учтем все ваши пожелания и
          подберем варианты, которые максимально соответствуют вашим
          запросам.Наш менеджер проконсультирует вас по всем вопросам и
          поможет забронировать дом, который сделает ваш отдых
          незабываемым.Отправляйте заявку уже сейчас, и пусть ваш загородный
          отдых будет идеальным!
        </p>
      </div>
      <form action="" method="post">
        <input type="text" />
        <input type="text" />
        <input type="button" value="Забронировать" />
      </form>
    </section>
  </main>
  )
}

export default Main