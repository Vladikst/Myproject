/*===== Files that compile in main.min.js =======*/
import './scss/index.scss';
import 'jquery/dist/jquery.min.js';

if (window === window.parent) {
    document.getElementById("logo").innerHTML +=
        `<a href="https://www.madnix.com/en">
        <img src="https://static.madnix.com/v2/images/favicon_v2/logo_mad.png" alt="madnix">
        </a>
        <a href="index.html">
        <img class="lang" src="./assets/images/fr.png" alt="madnix">
        </a>`;

    const date = new Date();
    let year = date.getFullYear();
    document.getElementById("footerContent").innerHTML +=
        `<section class="pre_footer">
            <div class="container">
                <div class="cols">
                    <div class="providers col-50">
                        <h2>Our game providers</h2>
                        <div class="list">
                            <img class="item" src="./assets/images/amatic.png" alt="amatic">
                            <img class="item" src="./assets/images/betsoft.png" alt="betsoft">
                            <img class="item" src="./assets/images/booming.png" alt="booming">
                            <img class="item" src="./assets/images/booongo.png" alt="booongo">
                            <img class="item" src="./assets/images/cayetano.png" alt="cayetano">
                            <img class="item" src="./assets/images/egt.png" alt="egt">
                            <img class="item" src="./assets/images/evoplay.png" alt="evoplay">
                            <img class="item" src="./assets/images/felixgaming.png" alt="felixgaming">
                            <img class="item" src="./assets/images/fugaso.png" alt="fugaso">
                            <img class="item" src="./assets/images/kalamba.png" alt="kalamba">
                            <img class="item" src="./assets/images/mga.png" alt="mga">
                            <img class="item" src="./assets/images/gamomat.png" alt="gamomat">
                            <img class="item" src="./assets/images/noblegaming.png" alt="noblegaming">
                            <img class="item" src="./assets/images/nolimitcity.png" alt="nolimitcity">
                            <img class="item" src="./assets/images/quickspin.png" alt="quickspin">
                            <img class="item" src="./assets/images/playngo.png" alt="play&go">
                            <img class="item" src="./assets/images/oryx.png" alt="oryx">
                            <img class="item" src="./assets/images/rival.png" alt="rival">
                            <img class="item" src="./assets/images/yggdrasil.png" alt="yggdrasil">
                            <img class="item" src="./assets/images/relaxgaming.png" alt="relaxgaming">
                            <img class="item" src="./assets/images/redrake.png" alt="redrake">
                            <img class="item" src="./assets/images/spinomenal.png" alt="spinomenal">
                            <img class="item" src="./assets/images/sthlm-gaming.png" alt="sthlm-gaming">
                            <img class="item" src="./assets/images/wazdan.png" alt="wazdan">
                        </div>
                    </div>
                    <div class="payment container col-50">
                        <h2>Payment methods</h2>
                        <p>
                            Madnix only offers trustworthy and convenient deposit and withdrawal options, to guarantee
                            that
                            our
                            players have no issues with handling the transactions. Please keep in mind that the list of
                            available
                            payment methods may differ, depending on your country.
                            So we advise to log in to your Casino account, click on the Deposit button and check the
                            list of
                            methods
                            legit for your country.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="hr-line"></div>
        </div>
        <section class="container small-text">
            <p>
               The operator of the website is SILVER STAR ENTERTAINMENT EUROPE LIMITED, Cyprus company with registration number HE 401382, registered address at office Kalymnou, 1, “Q MERITO”, 4th floor, Agios Nikolaos, Kamares, 6037, Larnaca, Cyprus, using the license of its holding company, The Luck Factory B.V. (Curacao eGaming License (#1668/JAZ) issued on the 9th of March 2018).
            </p>
                <p>Copyright
                ${year}
                <a href="https://www.madnix.com/en/" target="_blank">www.madnix.com</a><br>
                Madnix is an online Casino with the Curacao Egaming License. The reference language of the Terms & Conditions is English.
            </p>
        </section>
        `;
}

$.getJSON("assets/js/data_en.json", function(json) {
    let data = json;
    //Main block
    $('.main-block h1').append(data.H1);
    $('.main-block .subheading').append(data.H2);
    $('.main-block .description').append(data.description);
    $('.doctor_lab:not(.mobile)').attr('src', data.gameImg.desktopUrl);
    $('.doctor_lab:not(.mobile)').attr('onerror', data.onErrorImg.desktopUrl);
    $('.doctor_lab.mobile').attr('src', data.gameImg.mobileUrl);
    $('.doctor_lab.mobile').attr('onerror', data.onErrorImg.mobileUrl);
    //Awards block
    $('.awards img').attr('src', data.awardsImgUrl);
    $('.awards img').attr('alt', data.H1);
    $('.awards .title-56').append(data.awardsTitle);
    $('.awards__text').append(data.awardsText);
    //Table block
    $('.table-block .features .title-56').append(data.detailsTitleFeatures);
    $('.table-block .comment').append(data.comment);
    //Features block
    $('.details .feature1 img').attr('src', data.feature1Img);
    $('.details .feature1 h4').append(data.feature1Title);
    $('.details .feature1 p').append(data.feature1Text);
    $('.details .feature2 img').attr('src', data.feature2Img);
    $('.details .feature2 h4').append(data.feature2Title);
    $('.details .feature2 p').append(data.feature2Text);
    $('.details .feature3 img').attr('src', data.feature3Img);
    $('.details .feature3 h4').append(data.feature3Title);
    $('.details .feature3 p').append(data.feature3Text);
    $('.details .feature4 img').attr('src', data.feature4Img);
    $('.details .feature4 h4').append(data.feature4Title);
    $('.details .feature4 p').append(data.feature4Text);
    $('.details .feature5 img').attr('src', data.feature5Img);
    $('.details .feature5 h4').append(data.feature5Title);
    $('.details .feature5 p').append(data.feature5Text);
    $('.details .feature6 img').attr('src', data.feature6Img);
    $('.details .feature6 h4').append(data.feature6Title);
    $('.details .feature6 p').append(data.feature6Text);
    $('.details .feature7 img').attr('src', data.feature7Img);
    $('.details .feature7 h4').append(data.feature7Title);
    $('.details .feature7 p').append(data.feature7Text);
    $('.details .feature8 img').attr('src', data.feature8Img);
    $('.details .feature8 h4').append(data.feature8Title);
    $('.details .feature8 p').append(data.feature8Text);
    //Details block
    $('.details .volatility .title-56').append(data.detailsTitleVolatility);
    $('.details__text').append(data.detailsText);
    $('.details .details__item1 img').attr('src', data.detail1ImgUrl);
    $('.details .details__item1 img').attr('alt', data.detail1Title);
    $('.details .details__item2 img').attr('src', data.detail2ImgUrl);
    $('.details .details__item2 img').attr('alt', data.detail2Title);
    $('.details .details__item3 img').attr('src', data.detail3ImgUrl);
    $('.details .details__item3 img').attr('alt', data.detail3Title);
    $('.details .details__item1 h4').append(data.detail1Title);
    $('.details .details__item2 h4').append(data.detail2Title);
    $('.details .details__item3 h4').append(data.detail3Title);

    //Specification block
    $('.specification .title-56').append(data.specificationTitle);

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);

    function generateTableTh(table, tableData, start, end, className) {
        tableData.map((cell, index) => {
            if(index >= start && index <= end) {
                $(table).append(`
                    <div class="table__col">
                        <div class="cell ${className}">${cell}</div>
                    </div>
                `);
            }
        })
    }

    function generateTableTd(table, tableData, start, end, className) {
        let i = 0;
        tableData.map((cell, index) => {
            if(index >= start && index <= end) {
                if(cell.includes('assets/images/')) {
                    $(table).find('.table__col').eq(i).append(`
                        <div class="cell td--image">
                            <a href="" class="gameLink">
                                <img src="${cell}" alt=${getLastItem(cell)}>
                            </a>
                        </div>
                    `);
                    i++;
                }
                else {
                    $(table).find('.table__col').eq(i).append(`
                        <div class="cell ${className}">${cell}</div>
                    `);
                    i++;
                }
            }
        })
    }

    //Generate table head
    generateTableTh('.table__part-left', data.table.headCells, 0, 3, 'th')
    generateTableTh('.table__part-right', data.table.headCells, 4, 7, 'th')
    //Generate table body
    generateTableTd('.table__part-left', data.table.bodyCells, 0, 3, 'td')
    generateTableTd('.table__part-right', data.table.bodyCells,4, 7, 'td')

    //Game Link
    $('.gameLink').attr('href', data.gameLink.url).attr('data-game', data.gameLink.slug);
    //set game link slug
    $('.gameLink').on('click', function (e) {
        if (isIframe) {
            e.preventDefault();
            parent.postMessage({game: $(this).data('game')}, '*')
        }
    });
});


const isIframe = window.location !== window.parent.location;

//set game link slug
$('.gameLink').on('click', function (e) {
    if (isIframe) {
        e.preventDefault();
        parent.postMessage({game: $(this).data('game')}, '*')
    }
});

let savedCurrentIframeHeight = 0;

function updateHeight() {
    const currentIframeHeight = document.body.scrollHeight;
    if (savedCurrentIframeHeight !== currentIframeHeight)
        savedCurrentIframeHeight = currentIframeHeight;
    window.parent.postMessage({
        height: currentIframeHeight
    }, "*");
}

$(document).ready(function () {
    if (isIframe) {
        updateHeight();
    }
});

$('.to-home').on('click', (e) => {
    if (isIframe) {
        e.preventDefault();
        parent.postMessage({link: 'home'}, '*')
    }
});

$(window).on('load', function () {
    setTimeout(updateHeight, 3000);
});

$(window).on('resize', function () {
    updateHeight();
});
