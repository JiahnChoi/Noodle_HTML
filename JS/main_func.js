//dataset with csv
var csvdata = "Cup_Name,Weight,Calorie,Exp_Date,Birth,href\n" +
    "우육탕큰사발,115,520,6,19890928,http://image.nongshim.com/non/pro/1597305362478.jpg\n" +
    "새우탕큰사발,115,510,6,19890800,http://image.nongshim.com/non/pro/1598514635828.jpg\n" +
    "새우탕컵면,67,290,6,20070718,http://image.nongshim.com/non/pro/shrimp_434.jpg\n" +
    "무파마큰사발,112,485,6,20020501,http://image.nongshim.com/non/pro/1647821984006.jpg\n" +
    "맛짬뽕큰사발,105,475,6,20151224,http://image.nongshim.com/non/pro/1457915500716.jpg\n" +
    "김치사발면,86,375,6,19860414,http://image.nongshim.com/non/pro/1634090990101.jpg\n" +
    "김치큰사발,112,500,6,19900729,http://image.nongshim.com/non/pro/kimchi.jpg\n" +
    "짜왕큰사발,105,490,6,20150620,http://image.nongshim.com/non/pro/434_zahwang2_0.jpg\n" +
    "안성탕면컵,66,285,6,20200900,http://image.nongshim.com/non/pro/1647822261517.jpg\n" +
    "신라면컵,65,300,6,19970800,http://image.nongshim.com/non/pro/1647822565539.jpg\n" +
    "신라면큰사발면,114,490,6,19971200,http://image.nongshim.com/non/pro/1647822613216.jpg\n" +
    "튀김우동큰사발,111,515,6,19901008,http://image.nongshim.com/non/pro/1598514728296.jpg\n" +
    "튀김우동컵,62,315,6,20081100,http://image.nongshim.com/non/pro/1407982591951.jpg\n" +
    "사리곰탕컵,61,275,6,20020826,http://image.nongshim.com/non/pro/1634089761330.jpg\n" +
    "사리곰탕큰사발,111,490,6,20010925,http://image.nongshim.com/non/pro/1512695977044.jpg\n" +
    "감자면큰사발,92,405,6,20190200,http://image.nongshim.com/non/pro/1634090095441.jpg\n" +
    "앵그리짜파구리큰사발,108,500,6,20200400,http://image.nongshim.com/non/pro/1647994617037.jpg\n" +
    "신라면블랙사발두부김치,94,400,6,20200800,http://image.nongshim.com/non/pro/434_cup.jpg\n" +
    "신라면블랙사발,101,445,6,20171100,http://image.nongshim.com/non/pro/1646954846637.jpg\n" +
    "카구리큰사발면,103,455,6,20211000,http://image.nongshim.com/non/pro/curryneoguri_thumbnail1.jpg\n" +
    "특육개장큰사발면,103,NULL,6,20171211,http://image.nongshim.com/non/pro/B_Spicybeefsoup.jpg\n" +
    "보글보글부대찌개큰사발면,109,480,6,20160830,http://image.nongshim.com/non/pro/1634089881344.jpg\n" +
    "농심쌀국수,73,255,8,20190800,http://image.nongshim.com/non/pro/1647821663784.jpg\n" +
    "농심쌀국수소고기장국,75,275,8,20210200,http://image.nongshim.com/non/pro/1647821628031.jpg\n" +
    "오징어짬뽕컵,67,300,6,20050126,http://image.nongshim.com/non/pro/product_s.jpg\n" +
    "오징어짬뽕큰사발,115,515,6,20100405,http://image.nongshim.com/non/pro/product_big.jpg\n" +
    "짜파게티범벅,70,315,6,19880420,http://image.nongshim.com/non/pro/1647994241345.jpg\n" +
    "짜파게티큰사발,123,550,6,19920410,http://image.nongshim.com/non/pro/1647994180143.jpg\n" +
    "사천짜파게티큰사발,115,535,6,20121100,http://image.nongshim.com/non/pro/1647994380591.jpg\n" +
    "신라면볶음면큰사발,103,465,6,20210700,http://image.nongshim.com/non/pro/thumbnail2.jpg\n" +
    "신볶게티큰사발면,107,480,6,20220300,http://image.nongshim.com/non/pro/1647504914541.jpg\n" +
    "생생우동용기,276,420,6,19951202,http://image.nongshim.com/non/pro/1634089276002.jpg\n" +
    "육개장사발면,86,375,6,19821127,http://image.nongshim.com/non/pro/1634090914592.jpg\n" +
    "육개장큰사발,110,490,6,19951207,http://image.nongshim.com/non/pro/Spicybeefsoup.jpg\n" +
    "너구리큰사발,111,515,6,20120410,http://image.nongshim.com/non/pro/1598000604950.jpg\n" +
    "너구리컵,62,280,6,20090728,http://image.nongshim.com/non/pro/1541989983831.jpg\n" +
    "순한너구리컵,63,275,6,20190100,http://image.nongshim.com/non/pro/necup_434.jpg\n" +
    "볶음너구리큰사발,110,515,6,20170228,http://image.nongshim.com/non/pro/1487895667589.jpg\n" +
    "신라면건면사발,77,285,6,20200500,http://image.nongshim.com/non/pro/1647822767990.jpg";

rdata = $.csv.toArrays(csvdata);
console.log(rdata);

function infochanger(N, ext)
{
    var rinfocard = document.getElementById("rinfocardvar");
    var rinfocard2 = document.getElementById("rinfocardvar2");
    var rgraph = document.getElementById("rgraphvar");
    var rtitle = document.getElementById("rtitleval");
    var rweight = document.getElementById("rweightval");
    var rcal = document.getElementById("rcalval");
    var rend = document.getElementById("rendval");
    var rbirth = document.getElementById("rbirthval");
    var rimg =  document.getElementById("rimgval");
    var rtitle2 = document.getElementById("rtitleval2");
    var rweight2 = document.getElementById("rweightval2");
    var rcal2 = document.getElementById("rcalval2");
    var rend2 = document.getElementById("rendval2");
    var rbirth2 = document.getElementById("rbirthval2");
    var rimg2 =  document.getElementById("rimgval2");
    var mainst = document.getElementsByTagName("main");
    var rmain = document.getElementById("rmainsrc");
    mainst[0].style.overflow = "auto";
    mainst[0].style.height = "100%";
    var personal = document.getElementsByClassName("personalinfo");
    for(var i = 0; i < 4; i++)
    {
        personal[i].style.display = "none";
    }
    rmain.style.display = "none";
    rinfocard.style.display = "inline";
    rinfocard2.style.display = "none";
    rgraph.style.display = "none";
    rtitle.innerText = rdata[N][0];
    rweight.innerText = rdata[N][1];
    rcal.innerText = rdata[N][2];
    rend.innerText = rdata[N][3] + "개월";
    rbirth.innerText = rdata[N][4].substr(0,4) + '.' + rdata[N][4].substr(4,2) + '.' + rdata[N][4].substr(6,2);
    rimg.src = rdata[N][5];

    if(ext === 1)
    {
        rinfocard2.style.display = "inline";
        rtitle2.innerText = rdata[N+1][0];
        rweight2.innerText = rdata[N+1][1];
        rcal2.innerText = rdata[N+1][2];
        rend2.innerText = rdata[N+1][3] + "개월";
        rbirth2.innerText = rdata[N+1][4].substr(0,4) + '.' + rdata[N][4].substr(4,2) + '.' + rdata[N][4].substr(6,2);
        rimg2.src = rdata[N+1][5];
    }
}
function graphchanger(N)
{
    var rinfocard = document.getElementById("rinfocardvar");
    var rinfocard2 = document.getElementById("rinfocardvar2");
    var rgraph = document.getElementById("rgraphvar");
    var rchart1 = document.getElementById("rchart1var");
    var rchart2 = document.getElementById("rchart2var");
    var rchart3 = document.getElementById("rchart3var");
    var personal = document.getElementsByClassName("personalinfo");
    var mainst = document.getElementsByTagName("main");
    var rmain = document.getElementById("rmainsrc");
    mainst[0].style.overflow = "hidden";
    for(var i = 0; i < 4; i++)
    {
        personal[i].style.display = "none";
    }
    rmain.style.display = "none";
    rinfocard.style.display = "none";
    rinfocard2.style.display = "none";
    rgraph.style.display = "inline-block";
    if(N === 1)
    {
        rchart1.style.display = "inline";
        rchart2.style.display = "none";
        rchart3.style.display = "none";
    }
    else if(N === 2)
    {
        rchart1.style.display = "none";
        rchart2.style.display = "inline";
        rchart3.style.display = "none";
    }
    else
    {
        rchart1.style.display = "none";
        rchart2.style.display = "none";
        rchart3.style.display = "inline";
    }

}
function personal()
{
    var rinfocard = document.getElementById("rinfocardvar");
    var rinfocard2 = document.getElementById("rinfocardvar2");
    var rgraph = document.getElementById("rgraphvar");
    var mainst = document.getElementsByTagName("main");
    var rmain = document.getElementById("rmainsrc");
    mainst[0].style.overflow = "auto";
    var personal = document.getElementsByClassName("personalinfo");
    rmain.style.display = "none";
    rinfocard.style.display = "none";
    rinfocard2.style.display = "none";
    rgraph.style.display = "none";
    for(var i = 0; i < 4; i++)
    {
        personal[i].style.display = "inline";
    }
}
function mainreturn()
{
    var rinfocard = document.getElementById("rinfocardvar");
    var rinfocard2 = document.getElementById("rinfocardvar2");
    var rgraph = document.getElementById("rgraphvar");
    var mainst = document.getElementsByTagName("main");
    var rmain = document.getElementById("rmainsrc");
    mainst[0].style.overflow = "auto";
    var personal = document.getElementsByClassName("personalinfo");
    rmain.style.display = "inline";
    rinfocard.style.display = "none";
    rinfocard2.style.display = "none";
    rgraph.style.display = "none";
    for(var i = 0; i < 4; i++)
    {
        personal[i].style.display = "none";
    }
}