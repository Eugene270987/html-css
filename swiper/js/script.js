new Swiper('.image__slider', {
    /*Стрелки навигации*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /*Пагинация, буллеты, прогрессбар*/
    pagination: {
      el: '.swiper-pagination',
      /*
      УСТАНАВЛИВАЕМ ТИП - БУЛЛЕТЫ, ДАЛЕЕ, ЧТОБЫ ОНИ БЫЛИ КЛИКАБЕЛЬНЫ, 
      ДИНАМИЧЕСКИЕ(ЦЕНТРАЛЬНЫЙ БУЛЛЕТ - АКТИВНЫЙ, ОСТАЛЬНЫЕ - МЕНЬШЕ ПО РАЗМЕРУ),
      ЧИСЛО АКТИВНЫХ БУЛЛЕТОВ - 2, НУ И ФУНКЦИЯ НИЖУ - МЫ НУМЕРУЕМ НАШИ БУЛЛЕТЫ
      */

      /*
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
      */

      /*
      ЗДЕСЬ МЫ МЕНЯЕМ ТИП НА ФРАКЦИЮ - НОМЕРА НАШИХ СЛАЙДОВ БУДУТ ВЫГЛЯДЕТЬ ТАК:
      1/6, 2/6, Т.Д.
      */

     /* 
     Кастомный вывод фракции. Здесь мы можем менять, ставить 1 из 6, 1 of 6, и так далее
     type: 'fraction',
     
     renderFraction: function (currentClass, totalClass) {
      return 'Фото <span class="' + currentClass + '"></span>' +
              ' of/из ' +
              '<span class="' + totalClass + '"></span>';
      }
      */


      // Прогрессбар
      type: 'progressbar',


    },

    /*Scrollbar*/

    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */


    simulateTouch: true,
    //Можно сделать false - и мы не сможем свайпать изображения
    touchRatio: 1,
    //Чувствительность Свайпа/перетаскивания. Можно увеличить. Значение 0 - отключит свайп.
    touchAngle: 45,
    //Угол срабатывания
    grabCursor: true,
    //Курсор перетаскивания. Стилизует курсор как курсор поинтер. Что мы типа можем схватить слайд и передвинуть.
    slideToClickedSlide: true,
    //Это когда у нас несколько слайдов на экране, и мы хотим перейти с одного слайда на другой, сделать второй главным. При клике на него, он сделается главным.


    //Навигация по хешу
    hashNavigation: {
      //Отслеживаем состояние - у каждого слайда будет свой адрес! 
      watchState: true,
    },

    //Управление при помощи клавиатуры
    keyboard: {
      enabled: true,

      //Только в пределах вьюпорта
      onlyInViewport: true,

      //Управление с помощью клавиш пейдж ап, пейдж даун

      pageUpDown: true,
    },

    //Управление с помощью колеса мыши
    mousewheel: {
      sensitivity: 1,
      //класс обьекта на котором будет срабатывать прокрутка
      //Если у нас много слайдеров, и прокрутка будет использоваться на всех, тогда мы это значение не пишем.
      eventsTarget: ".image__slider"
    },

    //Автовысота - полезна, когда в слайдах - текст разного обьема. Высота слайдера подстраивается автоматически. 
    autoheight: false,
    // Количество слайдов для показа. Можно указывать дробные числа, а также, 'auto'. 
    // Если ауто - то в стилях нужно добавить .image__slider-slide or , .swiper-slide width: auto
    // ПРи авто - количество слайдов для показа будет автоматическим
    slidesPerView: 3,
    // Если слайдов меньше чем нужно, стрелки, скроллбар и прочее - отключается. Будет просто одна картинка. 
    watchOverFlow: true,

    // Отступ между слайдами - вместо Гэп в ЦСС. Изменения в ЦСС могут привести к некорректной работе слайдера.
    spaceBetween: 30,
    // Количество пролистываемых слайдов
    slidesPerGroup: 3,
    // Активный слайд по центру. Рационально когда значение slidesperGroup - 1.
    centeredSlides: false,
    // Стартовый слайд (можем использовать любой слайд). первый Слайд - 0. Если хотим начать со 2 - то пишем 1. 
    // Работает когда centeredSlides: false,
    initialSlide: 0,
    // Мультирядность. Для корректной работы - ставим autoheight: false,
    // slidesPerColumn: 2,

    // Бесконечный слайдер
    // При бесконечном слайдере, скролл не подразумевается - поэтому его нужно отключать! 
    // Бесконечность не будет работать с мультирядностью! (Значение slidesPerColumn - не более 1!!!)
    loop: true,
    // loop: false,
    // Количество дублирующих слайдов
    loopedSlides: 3,
    // loopedSlides: 0,

    //Автопрокрутка - работает хорошо с loop - свободный режим вырубаем
    /*
    autoplay: {
    // Пауза между прокруткой
    delay: 3000,
    // Закончить на последней слайде
    stopOnLastSlide: true,
    // Отключить после ручного переключения
    disableOnInteraction: false,
  }
    */

    // Свободный режим
    freeMode: true,

    // Скорость прокрутки
    speed: 700,
    
    // Вертикальный слайдер - нужно слайдеру добавить в ЦСС высоту, например, 700 пикселей
    // Включаем свободный режим, скролбар - и двигаем слайды колесом мыши.
    // direction: 'vertical',

    // Эффект переключения слайдов. Слайд - эффект по умолчанию
    effect: 'slide',

    
    /*
    // Fade effect
    effect: 'fade',

    // Some options
    fadeEffect: {
      crossFade: true,
    },
    */


    /*
    // Flip Effect
    effect: 'flip',

    flipEffect: {
      // Shadow
      slideShadows: true,
      // Показ только активного слайда
      limitRotation: true,
    },
    */

    // Cube effect
    /*
    effect: 'cube',

    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    */

    // Coverflow effect
    // effect: 'coverflow',
    /*
    coverflowEffect: {
      // Угол
      rotate: 20,
      // Наложение
      stretch: 50,
      // Тень
      slideShadows: true,
    },
    */



    // Адаптивность
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    },

    // Брейкпоинты по соотношению ширины/высоты

    /*
        breakpoints: {
      '@0.75': {
        slidesPerView: 1,
      },
      '@1.00': {
        slidesPerView: 2,
      },
      '@1.50': {
        slidesPerView: 3,
      }
    },
    */

    // Предзагрузка картинок
    preloadImages: false,

    // Включаем ленивую подгрузку картинок
    lazy: {
      // Подгружать на старте переключения слайда
      loadOnTransitionStart: false,
      // Подгрузить предыдущую и следующие картинки - пользователь не заметит что что-то подгружается. 
      loadPrevNext: false,
    },


    // Настройки ниже стоит включать, когда у нас slidesPerView: auto, or slidesPerView>1
    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,


    // Зум картинки
    zoom: {
      // Максимальное значение
      maxRatio: 5,
      // Минимальное значение
      minRatio: 1,
    },
});


// https://www.youtube.com/watch?v=ddbxsrGPRY0
// Также интересные модификации:
// - Слайдер в слайдере
// - Слайдер с превью
// - Передача управления другому слайдеру
// - Обновление слайдера
// - Параллакс эффект
// - Виртуальные слайды и т.д.

