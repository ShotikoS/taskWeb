const newsChanger = [
    {
        id: 0,
        image: "./image/Image.png",
        title: 'ეროვნული ნაკრები | ხორვარია 2:1 საქართველო',
        newsType: '<p>ერ. ნაკრები</p'
    },
    {
        id: 1,
        image: "./image/Image1.png",
        title: 'ეროვნული ნაკრები | ხორვარია 2:1 საქართველო',
        newsType: '<p>ნაკრები U16</p>'
    },
    {
        id: 2,
        image: "./image/Image2.jpeg",
        title: 'ფუტსალი | საქართველო 9:2 ავსტრია',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>'
    },
    {   
        id: 3,
        image: "./image/Image3.jpg",
        title: 'ფუტსალი | გერმანია 1:3 საქართველო',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>'
    }
]

var newsCarousel = [
    {
        image: './image/Image.png',
        newsType: '<p>ეროვნული ნაკრები</p>',
        title: 'ხორვატია 2:1 საქართველო',
        text: '19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში ხორვატიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე გამართული ამხანაგური მატჩი ორმხრივი…'
    },
    {
        image: './image/Image1.png',
        newsType: '<p>ნაკრები U16</p>',
        title: 'საქართველო 2:0 ბელორუსი',
        text: '19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში ბელორუსიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე გამართული ამხანაგური მატჩი ორმხრივი…'
    },
    {
        image: './image/Image2.jpeg',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>',
        title: 'საქართველო 9:2 ავსტრია',
        text: '19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში ავსტრიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე გამართული ამხანაგური მატჩი ორმხრივი…'
    },
    {
        image: './image/Image3.jpg',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>',
        title: 'გერმანია 1:3 საქართველო',
        text: '19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში გერმანიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე გამართული ამხანაგური მატჩი ორმხრივი…'
    }
]

const dropDown = ['მთავარი', 'შედეგები', 'კალენდარი', 'ახალი ამბები', 'ფოტო და ვიდეო'];

const navbar__Menu = [
    {
        text: 'კაცთა ეროვნული',
        id: 'MansNational'
    },
    {
        text: 'ქალთა ეროვნული',
        id: 'WomansNational'
    },
    {
        text: '21 წლამდელი',
        id: 'Before21'
    },
    {
        text: 'ასაკობრივი',
        id: 'byAge'
    },
    {
        text: 'ფუტსალი',
        id: 'futsal'
    },
    {
        text: 'ფანშოპი',
        id: 'funshop'
    },
];

$(document).ready(function(){
    $(".chooseSlide li").click(function(){
        $(".chooseSlide li").removeClass('active')
        $(this).addClass('active');
    })
    $(".navItem").mouseover(function(){
        $(this).find(".dropDown").css({
            "display": "flex"
        })
    })
    $(".navItem").mouseleave(function(){
        $(this).find(".dropDown").css({
            "display": "none"
        })
    })
    $(".chooseSlide li").click(function(){
        $(".chooseSlide li").find('.NewsChanger__button').css({
            'background-color': 'white',
            'border': '1px solid white',
            'color': '#375FC9'
        })
        $(".chooseSlide li").find('.redLine').css({
            'display': 'none'
        })
        if($(".chooseSlide li").hasClass('active')){
            $(this).find('.NewsChanger__button').css({
                'background-color': '#F03135',
                'border': '1px solid #F03135',
                'color': 'white'
            })
            $(this).find('.redLine').css({
                'display': 'block',
                'transition': '0.5s'
            })
        }
    })
})

$(document).ready(function(){
    $(window).resize(function(){
        let ParentWidth = $(".LastNews__container").width();
        let windowWidth = $(window).width();
        if(windowWidth < 515){
            $(".latestNews__content li").width(ParentWidth);
        }else if(windowWidth < 1161){
            $(".latestNews__content li").width(225)
        }else if(windowWidth > 1160){
            $(".latestNews__content li").css({
                "width": "24%"
            })
        }
    })
})

$(document).ready(function(){
    $(window).on("load", function(){
        let ParentWidth = $(".LastNews__container").width();
        let windowWidth = $(window).width();
        if(windowWidth < 515){
            $(".latestNews__content li").width(ParentWidth);
        }
    })
})

$(document).ready(function(){
    $(".currentLanguage").click(function(){
        $(".Languages").animate({
            height: "toggle"
        })
    })
})

const headerArr = [
    {
        href: '#',
        img: './image/logo.png',
        text: 'ნაკრები'
    },
    {
        href: '#',
        img: './image/logo2.png',
        text: 'ფეხბურთის ფედერაცია'
    },
    {
        href: '#',
        img: './image/logo2.png',
        text: 'Crystalbet ეროვნული ლიგა'
    },
    {
        href: '#',
        img: './image/logo2.png',
        text: 'ფეხბურთის ფედერაცია'
    },
    {
        href: '#',
        img: './image/logo2.png',
        text: 'საქართველოს თასი'
    }
]

function fillHeader(arr, ID){
    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            let create_li = document.createElement('li');
            let create_a = document.createElement('a');
            let create_img = document.createElement('img');
            let create_p = document.createElement('p');
            create_a.href = arr[i].href;
            create_img.src = arr[i].img;
            create_img.alt = 'headerIcons';
            create_img.className = 'headerIcons';
            create_p.innerText = arr[i].text;
            create_li.className = 'active';
            create_a.appendChild(create_img);
            create_a.appendChild(create_p);
            create_li.appendChild(create_a);
            document.getElementById(ID).appendChild(create_li);
        }else{
            let create_li = document.createElement('li');
            let create_a = document.createElement('a');
            let create_img = document.createElement('img');
            let create_p = document.createElement('p');
            create_a.href = arr[i].href;
            create_img.src = arr[i].img;
            create_img.alt = 'headerIcons';
            create_img.className = 'headerIcons';
            create_p.innerText = arr[i].text;
            create_a.appendChild(create_img);
            create_a.appendChild(create_p);
            create_li.appendChild(create_a);
            document.getElementById(ID).appendChild(create_li);
        }
    }
}

fillHeader(headerArr, "header__content");

function fillSlideChooser(arr, ID){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement('li');
        let line = document.createElement('div');
        let redLine = document.createElement('div');
        let SlideList_image = document.createElement('div');
        let Newschanger_slideDescription = document.createElement('div');
        let Newschanger_Title = document.createElement('h3');
        let NewsChanger_button = document.createElement('button');
        if(i == 0){
            line.className = 'line';
            create_li.id = arr[i].id;
            redLine.className = 'redLine';
            redLine.id = 'act';
            SlideList_image.className = 'SlideList__image';
            SlideList_image.style.backgroundImage = 'url(' + arr[i].image +')';
            Newschanger_slideDescription.className = 'Newschanger__slideDescription';
            Newschanger_Title.className = 'Newschanger__Title';
            Newschanger_Title.innerText = arr[i].title;
            NewsChanger_button.className = 'NewsChanger__button';
            NewsChanger_button.id = 'act1';
            NewsChanger_button.innerHTML = arr[i].newsType;
            Newschanger_slideDescription.appendChild(Newschanger_Title);
            Newschanger_slideDescription.appendChild(NewsChanger_button);
            create_li.appendChild(line);
            create_li.appendChild(redLine);
            create_li.appendChild(SlideList_image);
            create_li.appendChild(Newschanger_slideDescription);
            document.getElementById(ID).appendChild(create_li);
        }else{
            line.className = 'line';
            create_li.id = arr[i].id;
            redLine.className = 'redLine';
            SlideList_image.className = 'SlideList__image';
            SlideList_image.style.backgroundImage = 'url(' + arr[i].image +')';
            Newschanger_slideDescription.className = 'Newschanger__slideDescription';
            Newschanger_Title.className = 'Newschanger__Title';
            Newschanger_Title.innerText = arr[i].title;
            NewsChanger_button.className = 'NewsChanger__button';
            NewsChanger_button.innerHTML = arr[i].newsType;
            Newschanger_slideDescription.appendChild(Newschanger_Title);
            Newschanger_slideDescription.appendChild(NewsChanger_button);
            create_li.appendChild(line);
            create_li.appendChild(redLine);
            create_li.appendChild(SlideList_image);
            create_li.appendChild(Newschanger_slideDescription);
            document.getElementById(ID).appendChild(create_li);
        }
    }
}

var slideIndex = 0;

//dotStyle

$(document).ready(function(){
    $('.chooseSlide li').click(function(){
        slideIndex = $(this).attr('id');
        $(".slider__content").css({
            'background-image': "url(" + newsCarousel[slideIndex].image + ")"
        })
        $(".newsType__slider").html(newsCarousel[slideIndex].newsType);
        $(".newsTitle__slider").text(newsCarousel[slideIndex].title);
        $(".newsText__slider").text(newsCarousel[slideIndex].text);
    })
    $('.dotStyle').click(function(){
        slideIndex = $(this).attr('id');
        $(".slider__content").css({
            'background-image': "url(" + newsCarousel[slideIndex].image + ")"
        })
        $(".newsType__slider").html(newsCarousel[slideIndex].newsType);
        $(".newsTitle__slider").text(newsCarousel[slideIndex].title);
        $(".newsText__slider").text(newsCarousel[slideIndex].text);
    })
    $(".dotStyle").click(function(){
        $(".dotStyle").css({
            'background-color': '#5A6661'
        })
        $(this).css({
            'background-color': 'white'
        })
    })
})

function fillNavbarMenu(arr, ID){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement('li');
        let create_div = document.createElement('div');
        let create_ul = document.createElement('ul');
        create_li.className = 'navItem';
        create_div.className = 'DropDowntitle';
        create_ul.className = 'dropDown';
        create_ul.id = arr[i].id;
        create_div.innerText = arr[i].text;
        create_li.appendChild(create_div);
        create_li.appendChild(create_ul);
        document.getElementById(ID).appendChild(create_li);
    }
}

function fillDropDown(arr, ID){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement('li');
        create_li.innerText = arr[i];
        create_li.className = 'dropDownItem';
        document.getElementById(ID).appendChild(create_li);
    }
}

const Latest__news = [
    {
        image: './image/Image.png',
        date: '15 თებერვალი 2020',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>',
        title: 'ფუტსალი | გერმანია 1:3 საქართველო',
        text: '19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში ხორვატიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე გამართული ამხანაგური მატჩი ორმხრივი…'
    },
    {
        image: './image/Image1.png',
        date: '15 თებერვალი 2020',
        newsType: '<p>ერ. ნაკრები</p>',
        title: 'ეროვნული კატეგორიის ლიცენზიის მქონე მწვრთნელთა გადამზადების კურსების მონაწილეებს კუთვნილი ლიცენზიები გადაეცათ',
        text: 'მიხეილ მესხის სახელობის სტადიონზე საქართველოს ფეხბურთის ფედერაციის პირველმა ვიცე პრეზიდენტმა, კახა ჭუმბურიძემ, თბილისის ფეხბურთის ფედერაციის პრეზიდენტთან…'
    },
    {
        image: './image/Image2.jpeg',
        date: '15 თებერვალი 2020',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>',
        title: 'საქართველოს 16-წლამდე ნაკრები ისრაელში საერთაშორისო ტურნირზე გაემგზავრა',
        text: 'საქართველოს 16-წლამდე ნაკრები ისრაელში საერთაშორისო ოთხთა ტურნირზე გაემგზავრა. ზურაბ ხიზანიშვილის გუნდი მასპინძელ ისრაელთან ერთად პოლონეთისა…'
    },
    {
        image: './image/Image3.jpg',
        date: '15 თებერვალი 2020',
        newsType: '<img src="./image/ball.png" alt="ballImage" class="ball"/> <p>U16</p>',
        title: 'უეფას მწვრთნელთა განათლების Pro ლიცენზიის კურსი დასრულდა',
        text: 'დავით პეტრიაშვილი არენაზე უეფას მწვრთნელთა განათლების უმაღლესი საფეხურის, Pro ლიცენზიის მეთორმეტე დასკვნითი მოდული გაიმართა. მე-12 მოდულის ფარგლებში, რომელიც…'
    }
]

$(document).ready(function(){
    $(".DotStyle").click(function(){
        $(".DotStyle").css({
            'background-color': '#5A6661'
        })
        $(this).css({
            'background-color': 'rgb(0, 199, 0)'
        })
        let margin = $(this).attr('id');
        margin = margin - 10;
        let windowLength = $(".latestNews__content li").width() + 30;
        let result = (windowLength * margin)* -1;
        result = result.toString();
        $('.latestNews__content').css({
            'margin-left': result + 'px',
            'transition': '0.5s'
        })
    })
})

function fillLatestNews(arr, ID){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement('li');
        let latestNews_img = document.createElement('div');
        let latestNews_description = document.createElement('div');
        let latestNews_title = document.createElement('p');
        let latestNews_date = document.createElement('p');
        let latestNews_text = document.createElement('p');
        let date_P = document.createElement('p');
        let createSpan = document.createElement('span');
        createSpan.className = 'LatestNews__type';
        latestNews_img.className = 'latestNews__img';
        latestNews_description.className = 'latestNews__description';
        latestNews_title.className = 'latestNews__title';
        latestNews_date.className = 'latestNews__date';
        latestNews_text.className = 'latestNews__text';
        latestNews_img.style.backgroundImage = "url(" + arr[i].image + ")";
        date_P.innerText = arr[i].date;
        createSpan.innerHTML = arr[i].newsType;
        latestNews_title.innerText = arr[i].title;
        latestNews_date.appendChild(date_P);
        latestNews_date.appendChild(createSpan);
        latestNews_text.innerText = arr[i].text;
        latestNews_description.appendChild(latestNews_title);
        latestNews_description.appendChild(latestNews_date);
        latestNews_description.appendChild(latestNews_text);
        create_li.appendChild(latestNews_img);
        create_li.appendChild(latestNews_description);
        document.getElementById(ID).appendChild(create_li);
    }
}

function widthToglle(clickableID, EventID){
    $(document).ready(function(){
        $(clickableID).click(function(){
            $(EventID).animate({
                width: 'toggle'
            })
        })
    })
}

widthToglle(".bar", ".navbar__menu");
fillLatestNews(Latest__news, "latestNews__content");
fillNavbarMenu(navbar__Menu, "navbar__menu");
fillDropDown(dropDown, "MansNational");
fillDropDown(dropDown, "WomansNational");
fillDropDown(dropDown, "Before21");
fillDropDown(dropDown, "byAge");
fillDropDown(dropDown, "futsal");
fillDropDown(dropDown, "funshop");
fillSlideChooser(newsChanger, "chooseSlide");