$(document).ready(function () {
    //function hai jissey brands ke name jis pr click kara uske ellawa sarey More Info rehte
    function btntextshowerr() {
        $('#Barton-brand').text('More Info')
        $('#Moscot-brand').text('More Info')
        $('#Jacques-brand').text('More Info')
        $('#RAY-brand').text('More Info')
        $('#contactlens-brand').text('More Info')
        $('#sunglass-brand').text('More Info')
        $('#btglens-brand').text('More Info')
        $('#bflens-brand').text('More Info')
        $('#Menicon-brand').text('More Info')
        $('#FreshLook-brand').text('More Info')
        $('#Persol-brand').text('More Info')
        $('#ACUVUE-brand').text('More Info')
    }
    // modal me jo compare btn hai uska func
    function comparision() {
        $('.car2').hide()
        $('.car2').removeClass('col-5')
        $('.car1').removeClass('col-5')
        $('.modal-dialog').css('max-width', '50%')
        $('.COMPARE').show()
    }
    //navbar function for frames
    function Ab() {
        $('#brandsinfo').slideDown()
        $('#brandsinfo1').hide()
        $('#brandsinfo2').hide()
        $('#Frame').text('Close')
    }
    //navbar function for lens
    function Ac() {
        $('#brandsinfo1').slideDown()
        $('#brandsinfo').hide()
        $('#brandsinfo2').hide()
        $('#Lense').text('Close')
    }
    //ye func hr jaga laga issey jitne bhi products hain wo sb hide hojatey or OUR PRODUCTS ki heading bhi
    function hider() {
        $('.Moscot').hide()
        $('.Barton').hide()
        $('.jacques').hide()
        $('.rayban').hide()
        $('.menicon').hide()
        $('.FreshLook').hide()
        $('.Persol').hide()
        $('.Acuvue').hide()
        $('.contactlens').hide()
        $('.ZEPHIRIN').hide()
        $('.sunglass').hide()
        $('.btglens').hide()
        $('.bflens').hide()
        $('.brands-products-container').hide()
    }
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#f1').click(function () {
        Ab()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#f2').click(function () {
        Ab()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#f3').click(function () {
        Ab()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#f4').click(function () {
        Ab()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#l1').click(function () {
        Ac()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#l2').click(function () {
        Ac()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#l3').click(function () {
        Ac()
    })
    //brand name pr click krne se uski jaga pr jane ke liye
    $('#l4').click(function () {
        Ac()
    })
    //brand info me sarey brands ke name unki description hai
    $('#brandsinfo').hide()
    $('#brandsinfo1').hide()
    //#Frame brandinfo1 ka button hai jissey moscot barton jacques or rayban show hota
    $('#Frame').click(function () {
        if ($(this).text() === 'More') {
            $('#brandsinfo').slideDown()
            $('#brandsinfo1').hide()
            $('#Glass').text('More')
            $('#Lense').text('More')
            $(this).text('Close')
            btntextshowerr()
            hider()
        }
        else {
            $('#brandsinfo').hide()
            $(this).text('More')
            hider()
        }
    })
    //#Lense brandinfo2 ka button hai jissey menicon or baqi brand name show hota
    $('#Lense').click(function () {
        if ($(this).text() === 'More') {
            $('#brandsinfo1').slideDown()
            $('#brandsinfo').hide()
            $('#Frame').text('More')
            $('#Glass').text('More')
            $(this).text('Close')
            btntextshowerr()
            hider()
        }
        else {
            $('#brandsinfo1').hide()
            $(this).text('More')
            hider()
        }
    })
    //Sunglasses show krne ka btn
    $('#Glass').click(function () {
        if ($(this).text() === 'More') {
            hider()
            $('#brandsinfo1').hide()
            $('#brandsinfo').hide()
            $('.brands-products-container').slideDown()
            $('#Frame').text('More')
            $('#Lense').text('More')
            $('.ZEPHIRIN').show()
            $('.MOLINO').show()
            $('.RAWLINS').show()
            $('.WAYFARER').show()
            $(this).text('Close')
        }
        else {
            $('.ZEPHIRIN').hide()
            $('.MOLINO').hide()
            $('.RAWLINS').hide()
            $('.WAYFARER').hide()
            $(this).text('More')
            hider()
        }
    })
    //#Moscot-brand moscot ki desciption me jo btn hai uskey liye takey uske products show hn
    $('#Moscot-brand').click(function () {
        if ($(this).text() === 'More Info') {
            hider()
            btntextshowerr()
            $('.Moscot').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    $('#Barton-brand').click(function () {
        if ($(this).text() === 'More Info') {
            hider()
            btntextshowerr()
            $('.Barton').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    $('#Jacques-brand').click(function () {
        if ($(this).text() === 'More Info') {
            btntextshowerr()
            hider()
            $('.jacques').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    $('#RAY-brand').click(function () {
        if ($(this).text() === 'More Info') {
            btntextshowerr()
            hider()
            $('.rayban').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    $('#Menicon-brand').click(function () {
        if ($(this).text() === 'More Info') {
            btntextshowerr()
            hider()
            $('.menicon').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    $('#FreshLook-brand').click(function () {
        if ($(this).text() === 'More Info') {
            btntextshowerr()
            hider()
            $('.FreshLook').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    //persol pehle name tha ye bellalens.pk ka kam krta pr id persol isliye hai cuz sara kaam ispr pehle se howwa wa hai
    $('#Persol-brand').click(function () {
        if ($(this).text() === 'More Info') {
            btntextshowerr()
            hider()
            $('.Persol').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //same jo upr likha 
    $('#ACUVUE-brand').click(function () {
        if ($(this).text() === 'More Info') {
            btntextshowerr()
            hider()
            $('.Acuvue').show()
            $('.brands-products-container').show()
            $(this).text('Close')
        }
        else {
            hider()
            $(this).text('More Info')
        }
    })
    //Modal ka kaam start yaha se horha
    //Moscot ke modal or compare ka kaam
    $('#Moscot1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/MOSCOT/BJORN.docx" download="BJORN.docx">DOWNLOAD</a>')
        $('.Modal-title').text('BJORN')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('MOSCOT <img class="fav-icons-for-products" src="../Images/fav-icons/moscot.avif" alt="">')
        $('.Modal-Price').text('$330')
        $('.Modal-img').html('<img class="card-img-top" src="../Images/MOSCOT/bjorn-color-pine-pos-2_1800x.webp">')
        $('.Modal-description').text('The 1970s, ZULU-inspired aviator, The BJORN, is made from acetate and comes in a translucent color, to fill out your face without covering it up. Full frontal, indeed.')
        $('.Modal-description2').html('<ul><li>Handcrafted using Italian acetate featuring unique patterns distinctive to each frame</li><li>Features two dot rivets</li><li>Comfortable saddle nose bridge</li><li>Includes acetate nose pads</li><li>3-Barrel hinge</li><li>MOSCOT temple engravings</li><li>Signature brass temple tips for MOSCOT SPIRIT frames</li><li>Designed and prototyped by 5th Generation, Zack Moscot in NYC</li><li>Parts and materials imported&nbsp;</li><li>Unisex</li></ul>')
        $('.Modal-title-2').text('Persol PO3105S')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Persol')
        $('.Modal-Price-2').text('$951')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/1.webp">')
        $('.Modal-description-2').text('The Persol PO3105S is an iconic pair of sunglasses, combining vintage design with modern craftsmanship')
        $('.Modal-description2-2').html('<ul><li>Color: Red, Blue, White, Black, Havana, Terra di Siena</li><li>Material: Acetate upper frame, metal rims</li><li>Bridge: Keyhole bridge</li><li>Lens: Crystal lenses, available with polarized options</li><li>Fit: Medium fit with adjustable nose pads</li><li>Signature Features: Meflecto temples, iconic arrow detail</li><li>Case: Includes protective leather case and cleaning cloth</li></ul>')
    })
    $('#Moscot2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/MOSCOT/DAHVEN.docx" download="DAHVEN.docx">DOWNLOAD</a>')
        $('.Modal-title').text('DAHVEN')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('MOSCOT <img class="fav-icons-for-products" src="../Images/fav-icons/moscot.avif" alt="">')
        $('.Modal-Price').text('$360')
        $('.Modal-img').html('<img class="card-img-top" src="../Images/MOSCOT/dahven-color-olive-brown-pos-2_1800x.webp">')
        $('.Modal-description').text('No need to pray for a sunny day with these iconic frames! Crafted from thick block acetate in rich tonal hues, The DAHVEN brings good fortune—and good looks—wherever you take it.')
        $('.Modal-description2').html('<ul><li>Handcrafted using Italian Acetate</li><li>Featuring raised two-dot rivets on temples</li><li>Comfortable key hole nose bridge</li><li>5-Barrel hinge</li><li>Signature acetate paddle temples</li><li>MOSCOT temple engraving</li><li>Designed and prototyped by 5th Generation, Zack Moscot in NYC</li><li>Parts and materials imported</li><li>Unisex</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/2.webp">')
        $('.Modal-title-2').text('MADELINY')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs. 1,941')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('<ul class=""><li class="">BrandName：MADELINY</li><li class="">Gender：WOMEN</li><li class="">Style：Pilot</li><li class="" data-spm-anchor-id="a2a0e.pdp_revamp.product_detail.i0.3f1a4584Lw3o1z">DepartmentName：Adult</li><li class="">FrameMaterial：Alloy</li><li class="">LensesOpticalAttribute：Mirror</li><li class="">EyewearType：Sunglasses</li><li class="">LensHeight：50mm</li><li class="">LensesMaterial：Polycarbonate</li><li class="">ModelNumber：MA021</li><li class="">ItemType：Eyewear</li><li class="">LensWidth：61mm</li></ul>')
    })
    $('#Moscot3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/MOSCOT/LEMTOSH-TT-SE.docx" download="LEMTOSH-TT-SE.docx">DOWNLOAD</a>')
        $('.Modal-title').text('LEMTOSH-TT-SE')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('MOSCOT <img class="fav-icons-for-products" src="../Images/fav-icons/moscot.avif" alt="">')
        $('.Modal-Price').text('$55,000')
        $('.Modal-img').html('<img class="card-img-top" src="../Images/MOSCOT/lemttse_2__UPDATEDALLIGNEDVERSION__1_1_1800x.webp">')
        $('.Modal-description').text('When Hyman arrived on Ellis Island 119 years ago, he heard, "What is your name, where are you from?" shouted from a distance. Although the ground was not paved in gold as promised, we wanted to honor his ambitious thinking by launching a Special Edition of the treasured LEMTOSH.')
        $('.Modal-description2').html('<ul><li>Handcrafted using a combination of metal and Italian acetate</li><li>Features diamond rivets</li><li>Comfortable key hole nose bridge</li><li>Includes acetate nose pads</li><li>7-Barrel hinge</li><li>MOSCOT temple engravings</li><li>Exclusive gold titanium temple tips</li><li>Designed and prototyped by 5th Generation, Zack Moscot in NYC</li><li>Parts and materials imported&nbsp;</li><li>Unisex</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/3.webp">')
        $('.Modal-title-2').text('WILSON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('Rs. 55')
        $('.Modal-description-2').text('Inspired by music legend John Lennon, this iconic round metal frame with Windsor rims and tortoise temples comes in new colors to suit the season.')
        $('.Modal-description2-2').html('<ul><li>Color: Bourbon Tortoise-Matte Spotted Tortoise, Black-Gold-Black, Demi Blonde-Brushed Gold-True Demi, Dark Wave Rock-Brushed Silver-Hazel, Honeycomb Tortoise-Pewter-Khaki Tortoise, Olive-Pewter-Douglas Fir, etc.</li><li>Material: Stainless steel frame, acetate Windsor rims and temples</li><li>Lens: CR39 lenses with AR coating</li><li>Fit: Eye 46mm, Bridge 22mm, Temple 145mm or Eye 49mm, Bridge 22mm, Temple 145mm</li><li>Signature Features: Clamp-on nose pads with adjustable metal arms</li><li>Case: Standard GLCO case included</li></ul>')
    })
    $('#Moscot4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/MOSCOT/SHTAKER.docx" download="SHTAKER.docx">DOWNLOAD</a>')
        $('.Modal-title').text('SHTARKER')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('MOSCOT <img class="fav-icons-for-products" src="../Images/fav-icons/moscot.avif" alt="">')
        $('.Modal-Price').text('$6,750')
        $('.Modal-img').html('<img class="card-img-top" src="../Images/MOSCOT/shtarker-color-gold-pos-2_f9e71f38-10dd-4eb8-8e8f-c1ea09af3b53_1800x.webp">')
        $('.Modal-description').text('No matter what type of empire you sit atop of, youll project an air of strength that says youre not to be trifled with...even if youre just leader of the pack.')
        $('.Modal-description2').html('<ul><li>Handcrafted using metal</li><li>Comfortable double bar nose bridge</li><li>Includes silicon nose pads</li><li>MOSCOT temple engravings</li><li>Signature acetate tips&nbsp;</li><li>Designed and prototyped by 5th Generation, Zack Moscot in NYC</li><li>Parts and materials imported&nbsp;</li><li>Unisex</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/4.webp">')
            ('.Modal-title-2').text('Oliver Peoples Aero Sun')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Oliver Peoples')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The Oliver Peoples Aero Sun sunglasses feature a refined aviator shape, made with a titanium frame and photochromic lenses. Known for its subtle elegance, the Aero Sun balances timeless style with modern functionality.')
        $('.Modal-description2-2').html('<ul><li>Color: Gold/Photochromic</li><li>Size: 57/17</li><li>Material: Lightweight titanium frame with acetate temple tips</li><li>Lens: Photochromic lenses</li><li>Fit: Standard fit</li><li>Signature Features: Classic aviator shape with a minimalist design</li><li>Case: Includes a protective case and cleaning cloth</li></ul>')
    })
    $('#Moscot5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/MOSCOT/GAFILTA.docx" download="GAFILTA.docx">DOWNLOAD</a>')
        $('.Modal-title').text('GAFILTA')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('MOSCOT <img class="fav-icons-for-products" src="../Images/fav-icons/moscot.avif" alt="">')
        $('.Modal-Price').text('$325.00')
        $('.Modal-img').html('<img class="card-img-top" src="../Images/MOSCOT/gafilta-color-antique-gold-pos-2_1800x.webp">')
        $('.Modal-description').text('There may be plenty of fish in the sea, but The GAFILTA is a good catch for a reason! Stuffed with ribbed filigree metal, a double-bar nose bridge, and served with a side of a color-coordinating sweat bar – no need to fish for compliments in this frame, they’ll come right to ya!')
        $('.Modal-description2').html('<ul id="isPasted"><li>Handcrafted in metal with ribbed filigree detail</li><li>Comfortable double-bar nose bridge</li><li>Color-coordinating acetate sweat bar</li><li>Silicone nose pads</li><li>Three-barrel hinges</li><li>Signature acetate temples</li><li>MOSCOT temple engraving</li><li>Designed and prototyped by 5th Generation, Zack Moscot in NYC</li><li>Parts and materials imported</li><li>Unisex</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/5.webp">')
        $('.Modal-title-2').text('HAMPTON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The very first frame we ever designed, Hampton continues to be as relevant today as it was when it debuted in 2010. A classic P3 shape lends timeless appeal while contemporary acetates give it a modern edge.')
        $('.Modal-description2-2').html('<ul><li>Hand Finished</li><li>Optical Quality CR39 lenses</li><li>Cured Cellulose Acetate with the classic GLCO core wire</li><li>Keyhole nose bridge</li><li>4 Base lens with backside anti-reflective coating</li><li>5 barrel hinges with real rivets and external pins</li><li>Includes a GLCO soft case and cleaning cloth in seasonal colors and designs</li><li>Unisex</li></ul>')
    })
    $('#Moscot6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/MOSCOT/DOLT.docx" download="DOLT.docx">DOWNLOAD</a>')
        $('.Modal-title').text('DOLT')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('MOSCOT <img class="fav-icons-for-products" src="../Images/fav-icons/moscot.avif" alt="">')
        $('.Modal-Price').text('$97,000')
        $('.Modal-img').html('<img class="card-img-top" src="../Images/MOSCOT/Dolt.webp">')
        $('.Modal-description').text('Cut from thick block acetate and featuring raised diamond rivets, this frame may not be the sharpest tool in the shed, but it is the thickest and goodest! Don’t let the name fool ya! The DOLT is a smart choice. Trust us')
        $('.Modal-description2').html('<ul id="isPasted"><li>Handcrafted using thick block Italian acetate</li><li>Raised gold diamond rivets on front and temples</li><li>Comfortable key hole nose bridge</li><li>Seven-barrel hinges</li><li>Signature acetate paddle temples</li><li>MOSCOT temple engraving</li><li>Designed and prototyped by 5th Generation, Zack Moscot in NYC</li><li>Parts and materials imported</li><li>Unisex</li></ul>')
        $('.Modal-title-2').text('Durand')
        $('.Modal-Stars-2').text('★★★★☆(4.3)')
        $('.Modal-Brand-2').html('Warby Parker')
        $('.Modal-Price-2').text('$95')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/6.webp">')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('Icon of a document with "RX" written on it, representing a prescription .Single-vision prescriptions Also choose readers or non-prescription lenses  Polycarbonate lenses The most impact-resistant lens material for glasses  Anti-reflective and scratch-resistant lens coatings And our lenses block 100% of UV rays :-)  Free shipping On every single order at Warby Parker Free returns or exchanges Within 30 days of purchase Free scratched lens replacement Guaranteed for prescription lenses within six months of purchase FSA, HSA, and insurance accepted Save an average of $100 when you use insurance')
    })
    //Barton ke modal or compare ka kaam
    $('#Barton1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/BARTON/Bader.docx" download="Bader.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bader')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/barton p.webp" alt="">')
        $('.Modal-Price').text('$685.00')
        $('.Modal-img').html('<img src="../Images/Barton Perreira/BADE5103_BaderGarnetGradient_RoseGold_Front_1800x.webp" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Break barriers in the iconic Bader. Intricately crafted and featuring a special Japanese acetate faceted temple that extends beyond the hinge and transitions seamlessly into titanium. ')
        $('.Modal-description2').html('<ul><li class="ContentPasted0">Handmade in Japan</li><li class="ContentPasted0">Frame Material - Zyl / Titanium</li><li class="ContentPasted0">Eye Size - 51mm</li><li class="ContentPasted0">Bridge Size - 17mm</li><li class="ContentPasted0">Temple Length - 145mm</li><li class="ContentPasted0"> <span>Includes Case &amp; Cleaning Cloth</span></li></ul>')
        $('.Modal-title-2').text('Persol PO3105S')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Persol')
        $('.Modal-Price-2').text('$951')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/1.webp">')
        $('.Modal-description-2').text('The Persol PO3105S is an iconic pair of sunglasses, combining vintage design with modern craftsmanship')
        $('.Modal-description2-2').html('<ul><li>Color: Red, Blue, White, Black, Havana, Terra di Siena</li><li>Material: Acetate upper frame, metal rims</li><li>Bridge: Keyhole bridge</li><li>Lens: Crystal lenses, available with polarized options</li><li>Fit: Medium fit with adjustable nose pads</li><li>Signature Features: Meflecto temples, iconic arrow detail</li><li>Case: Includes protective leather case and cleaning cloth</li></ul>')
    })
    $('#Barton2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/BARTON/Elvgren.docx" download="Elvgren.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Elvgren')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/barton p.webp" alt="">')
        $('.Modal-Price').text('$685.00')
        $('.Modal-img').html('<img src="../Images/Barton Perreira/ELVG4903K_Elvgren_Brushed_Silver_Brushed_Gold_FRONT_1800x.webp" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('The fine lines and the hand-engraved filigree detailing of this titanium optical frame are subtle, yet distinctive. The effortless shape, immaculate construction, and hand painted enamel color range complement the balance and fit of this frame.')
        $('.Modal-description2').html('<ul><li class="ContentPasted0">Handmade in Japan</li><li class="ContentPasted0">Frame Material - Zyl</li><li class="ContentPasted0">Eye Size - 49mm</li><li class="ContentPasted0">Bridge Size - 21mm</li><li class="ContentPasted0">Temple Length - 148mm</li><li class="ContentPasted0"><span>Includes Case &amp; Cleaning Cloth<span></li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/2.webp">')
        $('.Modal-title-2').text('MADELINY')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs. 1,941')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('<ul class=""><li class="">BrandName：MADELINY</li><li class="">Gender：WOMEN</li><li class="">Style：Pilot</li><li class="" data-spm-anchor-id="a2a0e.pdp_revamp.product_detail.i0.3f1a4584Lw3o1z">DepartmentName：Adult</li><li class="">FrameMaterial：Alloy</li><li class="">LensesOpticalAttribute：Mirror</li><li class="">EyewearType：Sunglasses</li><li class="">LensHeight：50mm</li><li class="">LensesMaterial：Polycarbonate</li><li class="">ModelNumber：MA021</li><li class="">ItemType：Eyewear</li><li class="">LensWidth：61mm</li></ul>')
    })
    $('#Barton3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/BARTON/Javelin.docx" download="Javelin.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Javelin')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/barton p.webp">')
        $('.Modal-Price').text('$490.00')
        $('.Modal-img').html('<img src="../Images/Barton Perreira/ELVG4903K_Elvgren_Brushed_Silver_Brushed_Gold_FRONT_1800x.webp" class="card-img-top">')
        $('.Modal-description').text('A sophisticated and sleek navigator silhouette for the refined explorer. Designed in ultra-lightweight titanium with our signature crosshatch detailing at the temples. Available in optical and sun.')
        $('.Modal-description2').html('<ul><li class="ContentPasted0">Handmade in Japan</li><li class="ContentPasted0">Frame Material - Titanium</li><li class="ContentPasted0">Eye Size - 56mm</li><li class="ContentPasted0">Bridge Size - 15mm</li><li class="ContentPasted0">Temple Length - 148mm</li><li class="ContentPasted0"><span>Includes Case &amp; Cleaning Cloth</span></li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/3.webp">')
        $('.Modal-title-2').text('WILSON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('Rs. 55')
        $('.Modal-description-2').text('Inspired by music legend John Lennon, this iconic round metal frame with Windsor rims and tortoise temples comes in new colors to suit the season.')
        $('.Modal-description2-2').html('<ul><li>Color: Bourbon Tortoise-Matte Spotted Tortoise, Black-Gold-Black, Demi Blonde-Brushed Gold-True Demi, Dark Wave Rock-Brushed Silver-Hazel, Honeycomb Tortoise-Pewter-Khaki Tortoise, Olive-Pewter-Douglas Fir, etc.</li><li>Material: Stainless steel frame, acetate Windsor rims and temples</li><li>Lens: CR39 lenses with AR coating</li><li>Fit: Eye 46mm, Bridge 22mm, Temple 145mm or Eye 49mm, Bridge 22mm, Temple 145mm</li><li>Signature Features: Clamp-on nose pads with adjustable metal arms</li><li>Case: Standard GLCO case included</li></ul>')
    })
    $('#Barton4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/BARTON/Trask.docx" download="Trask.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Trask')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/barton p.webp" alt="">')
        $('.Modal-Price').text('$630.00')
        $('.Modal-img').html('<img src="../Images/Barton Perreira/TRAS5901_Trask_Black_Satin_FRONT_1800x.webp" class="card-img-top">')
        $('.Modal-description').text('This aviator features a masterfully crafted lightweight titanium double bridge, showcasing timeless style with subtle filigree details and graduated temples for an effortless feel.')
        $('.Modal-description2').html('<ul><li class="ContentPasted0">Handmade in Japan</li><li class="ContentPasted0">Frame Material - <spandata-mce-fragment="1">Titanium</span></li><li class="ContentPasted0">Eye Size - 59mm</li><li class="ContentPasted0">Bridge Size - 13mm</li><li class="ContentPasted0">Temple Length - 145mm</li><li class="ContentPasted0"><span>Includes Case &amp; Cleaning Cloth</span></li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/4.webp">')
        $('.Modal-title-2').text('Oliver Peoples Aero Sun')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Oliver Peoples')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The Oliver Peoples Aero Sun sunglasses feature a refined aviator shape, made with a titanium frame and photochromic lenses. Known for its subtle elegance, the Aero Sun balances timeless style with modern functionality.')
        $('.Modal-description2-2').html('<ul><li>Color: Gold/Photochromic</li><li>Size: 57/17</li><li>Material: Lightweight titanium frame with acetate temple tips</li><li>Lens: Photochromic lenses</li><li>Fit: Standard fit</li><li>Signature Features: Classic aviator shape with a minimalist design</li><li>Case: Includes a protective case and cleaning cloth</li></ul>')
    })
    $('#Barton5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/BARTON/Banks.docx" download="Banks.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Banks')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/barton p.webp" alt="">')
        $('.Modal-Price').text('$490.00')
        $('.Modal-img').html('<img src="../Images/Barton Perreira/BANK5003_Banks_50_Matte_Dusk_FRONT_400x.webp" class="card-img-top">')
        $('.Modal-description').text('Embolden your look in the statement-making Banks. Made with zyl acetate, these glasses have a strong silhouette.')
        $('.Modal-description2').html('<ul><li class="ContentPasted0">Handmade in Japan</li><li class="ContentPasted0">Frame Material - Zyl</li><li class="ContentPasted0">Eye Size - 50mm</li><li class="ContentPasted0">Bridge Size - 22mm</li><li class="ContentPasted0">Temple Length - 148mm</li><li class="ContentPasted0"><span>Includes Case &amp; Cleaning Cloth</span></li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/5.webp">')
            ('.Modal-title-2').text('HAMPTON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The very first frame we ever designed, Hampton continues to be as relevant today as it was when it debuted in 2010. A classic P3 shape lends timeless appeal while contemporary acetates give it a modern edge.')
        $('.Modal-description2-2').html('<ul><li>Hand Finished</li><li>Optical Quality CR39 lenses</li><li>Cured Cellulose Acetate with the classic GLCO core wire</li><li>Keyhole nose bridge</li><li>4 Base lens with backside anti-reflective coating</li><li>5 barrel hinges with real rivets and external pins</li><li>Includes a GLCO soft case and cleaning cloth in seasonal colors and designs</li><li>Unisex</li></ul>')
    })
    $('#Barton6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/BARTON/Stax.docx" download="Stax.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Stax')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/barton p.webp" alt="">')
        $('.Modal-Price').text('$505.00')
        $('.Modal-img').html('<img src="../Images/Barton Perreira/stax.webp" class="card-img-top">')
        $('.Modal-description').text('Get noticed in the defined Stax. Chunky acetate takes a rectangular shape, resulting in a bold and balanced frame. Innovative corewiring provides a foundation that helps this design keep its striking shape.')
        $('.Modal-description2').html('<ul><li class="ContentPasted0">Handmade in Japan</li><li class="ContentPasted0">Frame Material - Zyl</li><li class="ContentPasted0">Eye Size - 50mm</li><li class="ContentPasted0">Bridge Size - 21mm</li><li class="ContentPasted0">Temple Length - 148mm</li><li class="ContentPasted0"><span>Includes Case &amp; Cleaning Cloth</span></li></ul>')
        $('.Modal-title-2').text('Durand')
        $('.Modal-Stars-2').text('★★★★☆(4.3)')
        $('.Modal-Brand-2').html('Warby Parker')
        $('.Modal-Price-2').text('$95')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/6.webp">')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('Icon of a document with "RX" written on it, representing a prescription .Single-vision prescriptions Also choose readers or non-prescription lenses  Polycarbonate lenses The most impact-resistant lens material for glasses  Anti-reflective and scratch-resistant lens coatings And our lenses block 100% of UV rays :-)  Free shipping On every single order at Warby Parker Free returns or exchanges Within 30 days of purchase Free scratched lens replacement Guaranteed for prescription lenses within six months of purchase FSA, HSA, and insurance accepted Save an average of $100 when you use insurance')
    })
    //jacques ke modal or compare ka kaam
    $('#jacques1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/JACQUES/BAUDELAIRE.docx" download="BAUDELAIRE.docx">DOWNLOAD</a>')
        $('.Modal-title').text('BAUDELAIRE')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/jacques marie mage.svg" alt="">')
        $('.Modal-Price').text('$505.00')
        $('.Modal-img').html('<img src="../Images/Jacques Marie Mage/Baudelaire2_Knox_RX_Front_ha9hz1.webp" class="card-img-top">')
        $('.Modal-description').text('As Charles Baudelaire, one of the most important figures in literary history, once said, “Everything that is beautiful and noble is the product of reason and calculation.” So it is with these unique spectacles, a product of mixing titanium frames and acetate lens rims, with subtle flourishes of sculptural details that are poetic and timeless.')
        $('.Modal-description2').html('<h5>DETAILS</h5><ul><li>GOLD 100% BETA TITANIUM FRAME WITH CUSTOM TEMPLE TIPS AND CLEAR LENSES</li>&nbsp;<li>MONOBLOCK TITANIUM HINGE CONSTRUCTION</li><li>DARK GOLD HARDWARE</li><li>CLEAR HONEY ACETATE INSERT</li><li>CUSTOM NOSE PAD WITH LOGO AND HAIRLINE ENGRAVING</li><li>CUSTOM 4MM RIM WITH HAIRLINE DETAIL</li><li>DEMO LENS CR39</li>&nbsp;<li>FRAME SHAPE: SQUARE</li></ul><h5>MEASUREMENTS</h5><ul><li>SIZE: SMALL</li><li>TEMPLE LENGTH: 154mm</li><li>FRAME TOTAL WIDTH: 137mm</li><li>LENS WIDTH: 47mm</li><li>LENS HEIGHT: 39mm</li><li>BRIDGE: 23mm</li></ul>')
        $('.Modal-title-2').text('Persol PO3105S')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Persol')
        $('.Modal-Price-2').text('$951')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/1.webp">')
        $('.Modal-description-2').text('The Persol PO3105S is an iconic pair of sunglasses, combining vintage design with modern craftsmanship')
        $('.Modal-description2-2').html('<ul><li>Color: Red, Blue, White, Black, Havana, Terra di Siena</li><li>Material: Acetate upper frame, metal rims</li><li>Bridge: Keyhole bridge</li><li>Lens: Crystal lenses, available with polarized options</li><li>Fit: Medium fit with adjustable nose pads</li><li>Signature Features: Meflecto temples, iconic arrow detail</li><li>Case: Includes protective leather case and cleaning cloth</li></ul>')

    })
    $('#jacques2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/JACQUES/RAWLINS.docx" download="RAWLINS.docx">DOWNLOAD</a>')
        $('.Modal-title').text('RAWLINS')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/jacques marie mage.svg" alt="">')
        $('.Modal-Price').text('$705500.00')
        $('.Modal-img').html('<img src="../Images/Jacques Marie Mage/Rawlins.webp" class="card-img-top">')
        $('.Modal-description').text('Open your eyes to the untamed spirit of the west, an old world majesty that traverses pristine plains and ascends to rocky peaks, beckoning you to address natures unforgiving and exquisite grace, to experience the wilds procreative pace, to experience Eden without leaving a trace.')
        $('.Modal-description2').html('<h5>DETAILS</h5><ul><li>HAVANA 10MM CURED CELLULOSE ACETATE FRAME WITH CUSTOM DOUBLE LAMINATED ACETATE TEMPLES FEATURING PRECIOUS METAL HARDWARE AND LIGHT BROWN LENSES</li>&nbsp;<li>STERLING SILVER ARROWHEAD FRONT PIN</li><li>DARK GOLD EXPOSED VOYAGEUR WIRECORE WITH CUSTOM FILIGREE ENGRAVING </li><li>SILVER TENSION-SECURED CUSTOM LAST FRONTIER MONOBLOCK HINGE</li><li>STERLING SILVER THUNDERBIRD TEMPLE DECORATION WITH TURQUOISE INLAY</li><li>SUPERLIGHT BRONZE CR39 4 BASE LENS WITH BACKSIDE ANTI-REFLECTIVE TREATMENT</li>&nbsp;<li>FRAME SHAPE: SQUARE</li><li>100% UV PROTECTION</li></ul><h5>MEASUREMENTS</h5><ul><li>SIZE: MEDIUM</li><li>TEMPLE LENGTH: 146mm</li><li>FRAME TOTAL WIDTH: 140mm</li><li>LENS WIDTH: 49mm</li><li>LENS HEIGHT: 39mm</li><li>BRIDGE: 23mm</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/2.webp">')
        $('.Modal-title-2').text('MADELINY')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs. 1,941')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('<ul class=""><li class="">BrandName：MADELINY</li><li class="">Gender：WOMEN</li><li class="">Style：Pilot</li><li class="" data-spm-anchor-id="a2a0e.pdp_revamp.product_detail.i0.3f1a4584Lw3o1z">DepartmentName：Adult</li><li class="">FrameMaterial：Alloy</li><li class="">LensesOpticalAttribute：Mirror</li><li class="">EyewearType：Sunglasses</li><li class="">LensHeight：50mm</li><li class="">LensesMaterial：Polycarbonate</li><li class="">ModelNumber：MA021</li><li class="">ItemType：Eyewear</li><li class="">LensWidth：61mm</li></ul>')
    })
    $('#jacques3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/JACQUES/HOLDEN RX.docx" download="HOLDEN RX.docx">DOWNLOAD</a>')
        $('.Modal-title').text('HOLDEN RX')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/jacques marie mage.svg" alt="">')
        $('.Modal-Price').text('$299400.00')
        $('.Modal-img').html('<img src="../Images/Jacques Marie Mage/Holden_Agar_RX_Front_Cropped_5377x3585_fcvjlu.webp" class="card-img-top">')
        $('.Modal-description').text('Experiment with color and perspective; paint your life in pure abstraction; clear a path for the bright and vivid hues; take heed and find comfort in forms and functions; celebrate living things and wild places; send out invitations to a personal exhibition of the heart.')
        $('.Modal-description2').html('<h5>DETAILS</h5><ul><li>HAVANA 10MM CURED CELLULOSE ACETATE FRAME WITH CUSTOM DOUBLE LAMINATED ACETATE TEMPLES FEATURING PRECIOUS METAL HARDWARE AND BRONZE LENSES</li>&nbsp;<li>DARK GOLD SIGNATURE ARROWHEAD FRONT PIN</li><li>EXPOSED DARK GOLD BLOW-DART WIRECORE</li><li>DARK GOLD TENSION-SECURED CUSTOM MONOBLOCK HINGE</li><li>SUPERLIGHT BRONZE CR39 4 BASE LENSES WITH BACKSIDE ANTI-REFLECTIVE TREATMENT</li>&nbsp;<li>100% UV PROTECTION</li></ul><h5>MEASUREMENTS</h5><ul><li>SIZE: MEDIUM</li><li>TEMPLE LENGTH: 146mm</li><li>FRAME TOTAL WIDTH: 143mm</li><li>LENS WIDTH: 50mm</li><li>LENS HEIGHT: 39mm</li><li>BRIDGE: 21mm</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/3.webp">')
        $('.Modal-title-2').text('WILSON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('Rs. 55')
        $('.Modal-description-2').text('Inspired by music legend John Lennon, this iconic round metal frame with Windsor rims and tortoise temples comes in new colors to suit the season.')
        $('.Modal-description2-2').html('<ul><li>Color: Bourbon Tortoise-Matte Spotted Tortoise, Black-Gold-Black, Demi Blonde-Brushed Gold-True Demi, Dark Wave Rock-Brushed Silver-Hazel, Honeycomb Tortoise-Pewter-Khaki Tortoise, Olive-Pewter-Douglas Fir, etc.</li><li>Material: Stainless steel frame, acetate Windsor rims and temples</li><li>Lens: CR39 lenses with AR coating</li><li>Fit: Eye 46mm, Bridge 22mm, Temple 145mm or Eye 49mm, Bridge 22mm, Temple 145mm</li><li>Signature Features: Clamp-on nose pads with adjustable metal arms</li><li>Case: Standard GLCO case included</li></ul>')
    })
    $('#jacques4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/JACQUES/HOLLYWOOD.docx" download="HOLLYWOOD.docx">DOWNLOAD</a>')
        $('.Modal-title').text('HOLLYWOOD')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/jacques marie mage.svg" alt="">')
        $('.Modal-Price').text('$411300.00')
        $('.Modal-img').html('<img src="../Images/Jacques Marie Mage/Hollywood_Blonde_Front_Cropped_5377x3585_9b0b8568-0ae4-45d3-815c-6cfc3bb5c585.webp" class="card-img-top">')
        $('.Modal-description').text('A masterclass in style and craft, these classic aviators dare you to fly too close to the sun, just for fun. Preeminent elegance emanates from the iconic teardrop shape, a visual spree of organic shapes, taut lines, and polished surfaces reflecting the pure power of creative agency.')
        $('.Modal-description2').html('<h5>DETAILS</h5><ul><li>MOON GOLD 100% BETA TITANIUM FRAME WITH SILVER DETAILS, HAVANA ACETATE ACCENTS AND BROWN LENSES</li>&nbsp;<li>MOON GOLD TITANIUM FRONT WITH SILVER/ DETAILS</li><li>MOON GOLD TITANIUM TEMPLES WITH SILVER DETAILS AND AGAR ACETATE TIPS</li><li>MOON GOLD TENSION-SECURED CUSTOM MONOBLOCK HINGE</li><li>CUSTOM NOSE PAD WITH LOGO AND HAIRLINE ENGRAVING</li><li>SUPERLIGHT BRONZE CR39 4 BASE LENS WITH BACKSIDE ANTI-REFLECTIVE TREATMENT</li>&nbsp;<li>100% UV PROTECTION</li></ul><h5>MEASUREMENTS</h5><ul><li>TEMPLE LENGTH: 146</li><li>FRAME TOTAL WIDTH: 146</li><li>LENS WIDTH: 58</li><li>LENS HEIGHT: 46</li><li>BRIDGE: 15</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/4.webp">')
        $('.Modal-title-2').text('Oliver Peoples Aero Sun')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Oliver Peoples')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The Oliver Peoples Aero Sun sunglasses feature a refined aviator shape, made with a titanium frame and photochromic lenses. Known for its subtle elegance, the Aero Sun balances timeless style with modern functionality.')
        $('.Modal-description2-2').html('<ul><li>Color: Gold/Photochromic</li><li>Size: 57/17</li><li>Material: Lightweight titanium frame with acetate temple tips</li><li>Lens: Photochromic lenses</li><li>Fit: Standard fit</li><li>Signature Features: Classic aviator shape with a minimalist design</li><li>Case: Includes a protective case and cleaning cloth</li></ul>')
    })
    $('#jacques5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/JACQUES/MOLINO.docx" download="MOLINO.docx">DOWNLOAD</a>')
        $('.Modal-title').text('MOLINO')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/jacques marie mage.svg" alt="">')
        $('.Modal-Price').text('$299400.00')
        $('.Modal-img').html('<img src="../Images/Jacques Marie Mage/molinoo.webp" class="card-img-top">')
        $('.Modal-description').text('The shape of rebellious sophistication, these distinctive ‘60s-inspired spectacles are an astute mix of volume and balance, a handcrafted heirloom of impeccable construction and subtle bevel detailing that demonstrates a flair for the sensual and poetic.')
        $('.Modal-description2').html('<h5>DETAILS</h5><ul><li>GREY 10MM CURED CELLULOSE ACETATE FRAME CUSTOM DOUBLE LAMINATED ACETATE TEMPLES AND GREEN LENSES</li>&nbsp;<li>STERLING SILVER SIGNATURE ARROWHEAD FRONT PIN</li><li>HIDDEN STERLING SILVER CUSTOM HAIRLINE ENGRAVED WIRECORE</li><li>STERLING SILVER TENSION-SECURED CUSTOM 7 BARREL HINGE WITH SILVER SPUR-SHAPED RIVETS</li><li>DARK OLIVE CR39 LENSES</li><li>6 BASE LENS WITH BACKSIDE ANTI-REFLECTIVE TREATMENT</li>&nbsp;<li>FRAME SHAPE: RECTANGULAR</li><li>100% UV PROTECTION</li></ul><h5>MEASUREMENTS</h5><ul><li>SIZE: WIDE</li><li>TEMPLE LENGTH: 144mm</li><li>FRAME TOTAL WIDTH: 144mm</li><li>LENS WIDTH: 51mm</li><li>LENS HEIGHT: 37mm</li><li>BRIDGE: 19mm</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/5.webp">')
        $('.Modal-title-2').text('HAMPTON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The very first frame we ever designed, Hampton continues to be as relevant today as it was when it debuted in 2010. A classic P3 shape lends timeless appeal while contemporary acetates give it a modern edge.')
        $('.Modal-description2-2').html('<ul><li>Hand Finished</li><li>Optical Quality CR39 lenses</li><li>Cured Cellulose Acetate with the classic GLCO core wire</li><li>Keyhole nose bridge</li><li>4 Base lens with backside anti-reflective coating</li><li>5 barrel hinges with real rivets and external pins</li><li>Includes a GLCO soft case and cleaning cloth in seasonal colors and designs</li><li>Unisex</li></ul>')
    })
    $('#jacques6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/JACQUES/ZEPHIRIN.docx" download="ZEPHIRIN.docx">DOWNLOAD</a>')
        $('.Modal-title').text('ZEPHIRIN')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BARTON <img class="fav-icons-for-products" src="../Images/fav-icons/jacques marie mage.svg" alt="">')
        $('.Modal-Price').text('$299400.00')
        $('.Modal-img').html('<img src="../Images/Jacques Marie Mage/Zephirin.webp" class="card-img-top">')
        $('.Modal-description').text('Inspired by big thinkers and ambitious outcasts, this Icon of JMM originally released in Spring 2015 has been reimagined for the Epoxy Collection in four dazzling new color stories, each featuring custom arrowhead front-pins with hand-painted epoxy inlays, exposed temple wirecores with distinct ‘baguette’ pattern, and our signature spur-shaped rivets and custom 7-barrel hinges with hairline details.')
        $('.Modal-description2').html('<h5>DETAILS</h5><ul><li>BLUE 10MM CURED CELLULOSE ACETATE FRAME WITH CUSTOM DOUBLE LAMINATED ACETATE TEMPLES FEATURING PRECIOUS METAL HARDWARE AND BLUE GRADIENT LENSES</li>&nbsp;<li>STERLING SILVER SIGNATURE ARROWHEAD FRONT PIN WITH NAVY EPOXY INLAY</li><li>EXPOSED SILVER IMPERIAL WIRECORE</li><li>SILVER TENSION-SECURED CUSTOM 5 BARREL HAIRLINE HINGE</li><li>NEPTUNE GRADIENT CR39 6 BASE LENSES WITH BACKSIDE ANTI-REFLECTIVE TREATMENT</li>&nbsp;<li>FRAME SHAPE: SQUARE</li><li>100% UV PROTECTION</li></ul><h5>MEASUREMENTS</h5><ul><li>SIZE: SMALL</li><li>TEMPLE LENGTH: 142mm</li><li>FRAME TOTAL WIDTH: 135mm</li><li>LENS WIDTH: 44mm</li><li>LENS HEIGHT: 39mm</li><li>BRIDGE: 25mm</li></ul>')
        $('.Modal-title-2').text('Durand')
        $('.Modal-Stars-2').text('★★★★☆(4.3)')
        $('.Modal-Brand-2').html('Warby Parker')
        $('.Modal-Price-2').text('$95')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/6.webp">')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('Icon of a document with "RX" written on it, representing a prescription .Single-vision prescriptions Also choose readers or non-prescription lenses  Polycarbonate lenses The most impact-resistant lens material for glasses  Anti-reflective and scratch-resistant lens coatings And our lenses block 100% of UV rays :-)  Free shipping On every single order at Warby Parker Free returns or exchanges Within 30 days of purchase Free scratched lens replacement Guaranteed for prescription lenses within six months of purchase FSA, HSA, and insurance accepted Save an average of $100 when you use insurance')
    })
    //rayban ke modal or compare ka kaam
    $('#rayban1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/RAYBAN/LEONARD.docx" download="LEONARD.docx">DOWNLOAD</a>')
        $('.Modal-title').text('LEONARD')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('RAYBAN <img class="fav-icons-for-products" src="../Images/fav-icons/ray ban.ico" alt="">')
        $('.Modal-Price').text('$55,000')
        $('.Modal-img').html('<img src="../Images/RAYBAN/0RY9093V__3685__STD__shad__fr.avif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('The Leonard is the new Icons model, designed to become an instant legend. This effortlessly-styled square shape comes in a variety of colours, each with the unmistakable Ray-Ban logo embossed on temples. Made of lightweight acetate from front to tips, for true comfort wherever you wear them. Because sometimes, going back in time is the way to make history now.')
        $('.Modal-description2').html('<h4>FRAME DESCRIPTION</h4><ul><li>Frame Shape Square</li><li>Frame color Polished Havana</li><li>Frame material Acetate</li><li>Temple color Havana</li></ul><h4>PRODUCT DIMENSIONS</h4><ul><li>Hinge to hinge 119mm</li><li>Lens height 39.7mm</li><li>Bridge width 49 17mm</li><li>Temple Length 145mm</li></ul>')
        $('.Modal-title-2').text('Persol PO3105S')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('Persol')
        $('.Modal-Price-2').text('$951')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/1.webp">')
        $('.Modal-description-2').text('The Persol PO3105S is an iconic pair of sunglasses, combining vintage design with modern craftsmanship')
        $('.Modal-description2-2').html('<ul><li>Color: Red, Blue, White, Black, Havana, Terra di Siena</li><li>Material: Acetate upper frame, metal rims</li><li>Bridge: Keyhole bridge</li><li>Lens: Crystal lenses, available with polarized options</li><li>Fit: Medium fit with adjustable nose pads</li><li>Signature Features: Meflecto temples, iconic arrow detail</li><li>Case: Includes protective leather case and cleaning cloth</li></ul>')
    })
    $('#rayban2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/RAYBAN/WAYFARER.docx" download="WAYFARER.docx">DOWNLOAD</a>')
        $('.Modal-title').text('WAYFARER')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('RAYBAN <img class="fav-icons-for-products" src="../Images/fav-icons/ray ban.ico" alt="">')
        $('.Modal-Price').text('$218.00')
        $('.Modal-img').html('<img src="../Images/RAYBAN/wayfers.avif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Go back to where it all began with Ray-Ban New Wayfarer Classic sunglasses. Using the same iconic shape as the classic Wayfarer, these Sunglasses offer an updated version that includes a smaller frame and slightly softer eye shape.')
        $('.Modal-description2').html('<h4>FRAME DESCRIPTION</h4><ul><li>Frame Shape Square</li><li>Frame color Matte Black</li><li>Frame material Injected</li><li>Temple color Black</li></ul><h4>PRODUCT DIMENSIONS</h4><ul><li>Hinge to hinge 131mm</li><li>Lens height 40.8mm</li><li>Bridge width 55 18mm</li><li>Temple Length 145mm</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/2.webp">')
        $('.Modal-title-2').text('MADELINY')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs. 1,941')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')

        $('.Modal-description2-2').html('<ul class=""><li class="">BrandName：MADELINY</li><li class="">Gender：WOMEN</li><li class="">Style：Pilot</li><li class="" data-spm-anchor-id="a2a0e.pdp_revamp.product_detail.i0.3f1a4584Lw3o1z">DepartmentName：Adult</li><li class="">FrameMaterial：Alloy</li><li class="">LensesOpticalAttribute：Mirror</li><li class="">EyewearType：Sunglasses</li><li class="">LensHeight：50mm</li><li class="">LensesMaterial：Polycarbonate</li><li class="">ModelNumber：MA021</li><li class="">ItemType：Eyewear</li><li class="">LensWidth：61mm</li></ul>')
    })
    $('#rayban3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/RAYBAN/CLUBMASTER.docx" download="CLUBMASTER.docx">DOWNLOAD</a>')
        $('.Modal-title').text('CLUBMASTER')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('RAYBAN <img class="fav-icons-for-products" src="../Images/fav-icons/ray ban.ico" alt="">')
        $('.Modal-Price').text('$1,520.00')
        $('.Modal-img').html('<img src="../Images/RAYBAN/clubmaster.avif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Ray-Ban RB5154 Clubmaster Optics eyeglasses are retro and timeless. Inspired by the 50s, this square shape has been popular among intellectuals and creatives. Clubmaster eyeglasses are made of acetate and come in dark Havana frame color.')
        $('.Modal-description2').html('<h4>FRAME DESCRIPTION</h4><ul><li>Frame Shape Square</li><li>Frame color Polished Dark Havana</li><li>Frame material Acetate</li><li>Temple color Dark Havana</li></ul><h4>PRODUCT DIMENSIONS</h4><ul><li>Hinge to hinge 135mm</li><li>Lens height 39.6mm</li><li>Bridge width 51 21mm</li><li>Temple Length 145mm</li></ul>')
        $('.Modal-title-2').text('Durand')
        $('.Modal-Stars-2').text('★★★★☆(4.3)')
        $('.Modal-Brand-2').html('Warby Parker')
        $('.Modal-Price-2').text('$95')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/6.webp">')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('Icon of a document with "RX" written on it, representing a prescription .Single-vision prescriptions Also choose readers or non-prescription lenses  Polycarbonate lenses The most impact-resistant lens material for glasses  Anti-reflective and scratch-resistant lens coatings And our lenses block 100% of UV rays :-)  Free shipping On every single order at Warby Parker Free returns or exchanges Within 30 days of purchase Free scratched lens replacement Guaranteed for prescription lenses within six months of purchase FSA, HSA, and insurance accepted Save an average of $100 when you use insurance')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/3.webp">')
        $('.Modal-title-2').text('WILSON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('Rs. 55')
        $('.Modal-description-2').text('Inspired by music legend John Lennon, this iconic round metal frame with Windsor rims and tortoise temples comes in new colors to suit the season.')
        $('.Modal-description2-2').html('<ul><li>Color: Bourbon Tortoise-Matte Spotted Tortoise, Black-Gold-Black, Demi Blonde-Brushed Gold-True Demi, Dark Wave Rock-Brushed Silver-Hazel, Honeycomb Tortoise-Pewter-Khaki Tortoise, Olive-Pewter-Douglas Fir, etc.</li><li>Material: Stainless steel frame, acetate Windsor rims and temples</li><li>Lens: CR39 lenses with AR coating</li><li>Fit: Eye 46mm, Bridge 22mm, Temple 145mm or Eye 49mm, Bridge 22mm, Temple 145mm</li><li>Signature Features: Clamp-on nose pads with adjustable metal arms</li><li>Case: Standard GLCO case included</li></ul>')
    })
    $('#rayban4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/RAYBAN/ROB.docx" download="ROB.docx">DOWNLOAD</a>')
        $('.Modal-title').text('ROB')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('RAYBAN <img class="fav-icons-for-products" src="../Images/fav-icons/ray ban.ico" alt="">')
        $('.Modal-Price').text('$1,350.00')
        $('.Modal-img').html('<img src="../Images/RAYBAN/0RY9572V__4086__P21__shad__fr.avif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Ray-Ban RB9572V Rob Optics Kids eyeglasses are ready for the coolest kids on the block. The metal frame with irregular shape and clear lenses makes these gold temples eyeglasses a must-have for the coolest kids on the block.')
        $('.Modal-description2').html('<h4>FRAME DESCRIPTION</h4><ul><li>Frame Shape Irregular</li><li>Frame color Polished Black On Gold</li><li>Frame material Metal</li><li>Temple color Gold</li></ul><h4>PRODUCT DIMENSIONS</h4><ul><li>Hinge to hinge 118mm</li><li>Lens height 41mm</li><li>Bridge width 46 19mm</li><li>Temple Length 130mm</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/44.webp">')
            ('.Modal-title-2').text('Shadow Brown Peoples Aero Sun')
        $('.Modal-Stars-2').text('2.4')
        $('.Modal-Brand-2').html('Eyelens.pk Peoples')
        $('.Modal-Price-2').text('Rs.20')
        $('.Modal-description-2').text('The Shadow Brown lenses offer a stylish brownish shade with subtle prints, perfect for those seeking a captivating look. These lenses enhance the depth and glow of the eyes, adding a unique touch to your style.ty.')
        $('.Modal-description2-2').html('<ul><<ul><li>Color: Shadow Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#rayban5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/RAYBAN/RB9594V.docx" download="RB9594V.docx">DOWNLOAD</a>')
        $('.Modal-title').text('RB9594V')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('RAYBAN <img class="fav-icons-for-products" src="../Images/fav-icons/ray ban.ico" alt="">')
        $('.Modal-Price').text('$120.00')
        $('.Modal-img').html('<img src="../Images/RAYBAN/0RY9594V__4090__P21__shad__fr.avif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Ray-Ban RB9594V Optics Kids features a metal frame with an irregular shape, perfect for active children. The silver color adds a stylish touch, while the polished finish ensures they stand out from the crowd. These eyeglasses are both durable and comfortable, making them ideal for kids on the go.')
        $('.Modal-description2').html('<h4>FRAME DESCRIPTION</h4><ul><li>Frame Shape Irregular</li><li>Frame color Polished Silver</li><li>Frame material Metal</li><li>Temple color Silver</li></ul><h4>PRODUCT DIMENSIONS</h4><ul><li>Hinge to hinge 121mm</li><li>Lens height 40mm</li><li>Bridge width 47 19mm</li><li>Temple Length 130mm</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/5.webp">')
        $('.Modal-title-2').text('HAMPTON')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('GarrettLeight')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('The very first frame we ever designed, Hampton continues to be as relevant today as it was when it debuted in 2010. A classic P3 shape lends timeless appeal while contemporary acetates give it a modern edge.')
        $('.Modal-description2-2').html('<ul><li>Hand Finished</li><li>Optical Quality CR39 lenses</li><li>Cured Cellulose Acetate with the classic GLCO core wire</li><li>Keyhole nose bridge</li><li>4 Base lens with backside anti-reflective coating</li><li>5 barrel hinges with real rivets and external pins</li><li>Includes a GLCO soft case and cleaning cloth in seasonal colors and designs</li><li>Unisex</li></ul>')
    })
    $('#rayban6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/RAYBAN/HAWKEYE.docx" download="HAWKEYE.docx">DOWNLOAD</a>')
        $('.Modal-title').text('HAWKEYE')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('RAYBAN <img class="fav-icons-for-products" src="../Images/fav-icons/ray ban.ico" alt="">')
        $('.Modal-Price').text('$218.00')
        $('.Modal-img').html('<img src="../Images/RAYBAN/0RY9098V__3961__P21__shad__fr.avif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Look sharp and head back to the past with a fine acetate frame. This rounded square model makes no compromise in terms of comfort, clarity or style. The outstanding easy-to-wear shape is available in a wide range of select colours, including the new bi-layered shades.')
        $('.Modal-description2').html('<h4>FRAME DESCRIPTION</h4><ul><li>Frame Shape Square</li><li>Frame color Polished Polished Grey On Transparent</li><li>Frame material Acetate</li><li>Temple color Grey On Transparent</li></ul><h4>PRODUCT DIMENSIONS</h4><ul><li>Hinge to hinge 130mm</li><li>Lens height 41.5mm</li><li>Bridge width 50 21mm</li><li>Temple Length 145mm</li></ul>')
        $('.Modal-title-2').text('Durand')
        $('.Modal-Stars-2').text('★★★★☆(4.3)')
        $('.Modal-Brand-2').html('Warby Parker')
        $('.Modal-Price-2').text('$95')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/6.webp">')
        $('.Modal-description-2').text('MADELINY Classic Pilot Oversized Glasses Frame Fashion Brand Designer Eyeglasses Clear Lens Eyewear MA021')
        $('.Modal-description2-2').html('Icon of a document with "RX" written on it, representing a prescription .Single-vision prescriptions Also choose readers or non-prescription lenses  Polycarbonate lenses The most impact-resistant lens material for glasses  Anti-reflective and scratch-resistant lens coatings And our lenses block 100% of UV rays :-)  Free shipping On every single order at Warby Parker Free returns or exchanges Within 30 days of purchase Free scratched lens replacement Guaranteed for prescription lenses within six months of purchase FSA, HSA, and insurance accepted Save an average of $100 when you use insurance')
    })
    //menicon ke modal or compare ka kaam
    $('#menicon1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/menicon/Caffe Eye.docx" download="Caffe Eye.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Caffe Eye')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('Menicon <img class="fav-icons-for-products" src="../Images/fav-icons/menicon.png" alt="">')
        $('.Modal-Price').text('$3,500')
        $('.Modal-img').html('<img src="../Images/MENICON/caffe1.webp" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Introducing the Lensme Caffe, a stunning collection of caffe-colored contact lenses from Lensme, known for their exceptional quality and elegance. These lenses are perfect for enhancing their eye color with a soft, natural-looking shade. The comfortable design ensures you can wear them all day without discomfort. They are ideal for complementing your makeup, adding a unique and beautiful touch to your look. Whether you’re going for a bold or a subtle style, the Lensme Caffe lenses are a fantastic choice. Plus, their six-month replacement cycle offers both convenience and value. Available exclusively on Lenspk.com, these lenses are a must-have for anyone in Pakistan looking for a safe, comfortable, and stylish eye color change.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Caffe color that blends seamlesslywith your natural eye color.</li><li><strong>Water Content</strong>: 38% water content ensuresall-day comfort.</li><li><strong>Base Curve</strong>: 8.6 mm</li><li><strong>Diameter</strong> : 14.2 mm</li><li><strong>Modality</strong>: Can be used for up to 6 months.<li><li><strong>Availability</strong>: Easily available on Lenspkcom, perfect for customers in Pakistan.</li><li><strong>Packaging</strong>: Box containing a pair of lenses<li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/11.jpg">')
        $('.Modal-title-2').text('Aurora Sky Gray')
        $('.Modal-Stars-2').text('3.8')
        $('.Modal-Brand-2').html('eyelens.pk')
        $('.Modal-Price-2').text('Rs.4,500.00')
        $('.Modal-description-2').text('The Aurora Sky Gray contact lenses offer a soft and comfortable wear, enhancing the natural eye color with a subtle gray tone. They are designed for daily use, providing a fresh and vibrant look. These lenses come individually packaged, ensuring a hygienic experience. Ideal for anyone looking to add a touch of elegance to their eyes, the Sky Gray lenses are a great choice for all-day comfort and style.')
        $('.Modal-description2-2').html('<ul><li>Color: Sky Gray</li><li>Material: Soft and comfortable contact lens material</li><li>Effect: Subtle enhancement to natural eye color</li><li>Use: Ideal for daily wear</li><li>Packaging: Comes in a box of 1 lens</li><li>Price: Rs. 4,500.00</li><li>Available: Limited stock - Only 5 items left</li></ul>')
    })

    $('#menicon2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/menicon/Natural Blue.docx" download="Natural Blue.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Natural Blue')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('Menicon <img class="fav-icons-for-products" src="../Images/fav-icons/menicon.png" alt="">')
        $('.Modal-Price').text('$3,650')
        $('.Modal-img').html('<img src="../Images/MENICON/download.jfif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('')
        $('.Modal-description2').html('<ul><li><strong>Content:</strong> Polymacon, 38% Water</li><li><strong>Diameter:</strong> 14.5mm</li><li><strong>Base Curve:</strong> 8.6mm</li><li><strong>Power Range:</strong> -0.00D (plano)</li><li>-0.50D to -6.00D (0.25 steps)</li><li>-6.50D to -8.00D (0.50 steps)</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/22.webp">')
        $('.Modal-title-2').text('Choco')
        $('.Modal-Stars-2').text('4.9')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs.2,880.00')
        $('.Modal-description-2').text('The Choco Contact Lenses offer a rich brown color that enhances your natural eye tone. With a comfortable water content of 45% and a diameter of 14.2mm, these lenses provide a natural, bright-eyed look.')
        $('.Modal-description2-2').html('<ul><li>Color: Choco Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,880.00</li><li>Stock: Limited stock available</li></ul>')
    })
    $('#menicon3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/menicon/ColorGlends.docx" download="ColorGlends.docx">DOWNLOAD</a>')
        $('.Modal-title').text('ColorGlends')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('Menicon <img class="fav-icons-for-products" src="../Images/fav-icons/menicon.png" alt="">')
        $('.Modal-Price').text('$5,700')
        $('.Modal-img').html('<img src="../Images/MENICON/macro-pupil-retina-human-eye-eyeball-female-eyes-long-eyelashes-close-up-macro-human-eye-closeup-blue-human-eye-human-321039189.webp" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('colorblends  contact lenses in Pakistan are available in 12 colours i.e. grey, brown, green, blue, pure hazel, sterling grey, brilliant blue, gemstone green, amethyst, honey, true sapphire and turquoise colours.')
        $('.Modal-description2').html('<ul><li><strong>Content:</strong> 45% Phemfilcon, 55% Water</li><li><strong>Diameter:</strong> 14.5mm</li><li><strong>Base Curve:</strong> 8.6mm</li><li><strong>Power Range:</strong> -0.00D (plano) -0.50D-6.00D (0.25 steps) -6.50D to -8.00D (0.50 steps)</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/33.jpg">')
        $('.Modal-title-2').text('3D Green')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$30.00')
        $('.Modal-description-2').text('The 3D Green lenses provide a vibrant green effect, perfect for those seeking a bold look. Made with a high-quality polymer blend, they offer comfort and hydration throughout the day.')
        $('.Modal-description2-2').html('<ul><li>Color: 3D Green</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: Not Available</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 9 items left)</li></ul>')
    })

    $('#menicon4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/menicon/Mosaic.docx" download="Mosaic.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Mosaic')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('Menicon <img class="fav-icons-for-products" src="../Images/fav-icons/menicon.png" alt="">')
        $('.Modal-Price').text('$4,500')
        $('.Modal-img').html('<img src="../Images/MENICON/istockphoto-179209374-612x612.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('')
        $('.Modal-description2').html('<ul><li><strong>Content:</strong> 55% Water</li><li><strong>Diameter:</strong> 14.2mm</li><li><strong>Base Curve:</strong> 8.6mm</li><li><strong>Power Range:</strong> -0.00D (plano)</li><li>-0.50D to -6.00D (0.25 steps)</li><li>-6.50D to -10.00D (0.50 steps)</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/44.webp">')
        $('.Modal-title-2').text('Shadow Brown')
        $('.Modal-Stars-2').text('2.4')
        $('.Modal-Brand-2').html('Eyelens.pk')
        $('.Modal-Price-2').text('Rs.20')
        $('.Modal-description-2').text('The Shadow Brown lenses offer a stylish brownish shade with subtle prints, perfect for those seeking a captivating look. These lenses enhance the depth and glow of the eyes, adding a unique touch to your style.')
        $('.Modal-description2-2').html('<ul><li>Color: Shadow Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })

    $('#menicon5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/menicon/1 DAY MOIST.docx" download="1 DAY MOIST.docx">DOWNLOAD</a>')
        $('.Modal-title').text('1 DAY MOIST')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('Menicon <img class="fav-icons-for-products" src="../Images/fav-icons/menicon.png" alt="">')
        $('.Modal-Price').text('9,500')
        $('.Modal-img').html('<img src="../Images/MENICON/photo-1494869042583-f6c911f04b4c.jfif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('1-DAY ACUVUE MOIST are daily disposable contact lenses. They are lightly tinted blue for easy visibility. They are daily disposable lens that can be used only once.')
        $('.Modal-description2').html('<ul><li><strong>Content:</strong> 58% Water</li><li><strong>Diameter:</strong> 14.2mm</li><li><strong>Base Curve:</strong> 8.5</li><li><strong>Power Range:</strong> -0.50D to -6.00D (0.2steps)</li><li>-6.00D to -10.00D (0.50 steps)</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/55.webp">')
        $('.Modal-title-2').text('Amber G')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('Amber 1 Contact Lenses provide a warm amber hue that subtly enhances the eyes, perfect for a natural yet striking appearance.')
        $('.Modal-description2-2').html('<ul><li>Color: Amber</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -6.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,400.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })

    $('#menicon6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/menicon/Glow Radiant.docx" download="Glow Radiant.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Glow Radiant')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('Menicon <img class="fav-icons-for-products" src="../Images/fav-icons/menicon.png" alt="">')
        $('.Modal-Price').text('$4,350')
        $('.Modal-img').html('<img src="../Images/MENICON/6.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Radiant Hazelnut</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/66.jpg">')
        $('.Modal-title-2').text('Devil Gray')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('EyeLens.com')
        $('.Modal-Price-2').text('Rs.2,100.00')
        $('.Modal-description-2').text('The Devil Gray lenses offer a bold gray hue that enhances the eyes with a striking, dramatic effect, making them ideal for those seeking a standout look. With a comfortable fit, they are suitable for daily wear.')
        $('.Modal-description2-2').html('<ul><li>Color: Devil Gray</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -8.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,100.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    //FreshLook ke modal or compare ka kaam
    $('#FreshLook1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/FreshLook/Cedar.docx" download="Cedar.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Cedar')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('FreshLook <img class="fav-icons-for-products" src="../Images/fav-icons/fresh.jpg" alt="">')
        $('.Modal-Price').text('$4,250.00')
        $('.Modal-img').html('<img src="../Images/FRESHLOOK/1.jpeg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').html('<ul><li>Color: Cedar</li><li>For Eyesight and cosmetic looks</li><li>With Biocompatible elements that make the lenses soft comfortable throughout the day</li><li>With High Water retention which allows high oxygepermeability</li><li>HD designed</li><li>With UV blocker</li><li>Made with USA materials</li><li>FDA and CE-approved material</li></ul>')
        $('.Modal-description2').text('')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/11.jpg">')
        $('.Modal-title-2').text('Aurora Sky Gray')
        $('.Modal-Stars-2').text('3.8')
        $('.Modal-Brand-2').html('eyelens.pk')
        $('.Modal-Price-2').text('Rs.4,500.00')
        $('.Modal-description-2').text('The Aurora Sky Gray contact lenses offer a soft and comfortable wear, enhancing the natural eye color with a subtle gray tone. They are designed for daily use, providing a fresh and vibrant look. These lenses come individually packaged, ensuring a hygienic experience. Ideal for anyone looking to add a touch of elegance to their eyes, the Sky Gray lenses are a great choice for all-day comfort and style.')
        $('.Modal-description2-2').html('<ul><li>Color: Sky Gray</li><li>Material: Soft and comfortable contact lens material</li><li>Effect: Subtle enhancement to natural eye color</li><li>Use: Ideal for daily wear</li><li>Packaging: Comes in a box of 1 lens</li><li>Price: Rs. 4,500.00</li><li>Available: Limited stock - Only 5 items left</li></ul>')
    })
    $('#FreshLook2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/FreshLook/Pine.docx" download="Pine.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Pine')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('FreshLook <img class="fav-icons-for-products" src="../Images/fav-icons/fresh.jpg" alt="">')
        $('.Modal-Price').text('$4,250.00')
        $('.Modal-img').html('<img src="../Images/FRESHLOOK/2.jpeg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').html('<ul><li>Color: Pine</li><li>For Eyesight and cosmetic looks</li><li>With Biocompatible elements that make the lenses soft comfortable throughout the day</li><li>With High Water retention which allows highoxygenpermeability</li><li>HD designed</li><li>With UV blocker</li><li>Made with USA materials</li><li>FDA and CE-approved material</li></ul>')
        $('.Modal-description2').text('')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/22.webp">')
        $('.Modal-title-2').text('Choco')
        $('.Modal-Stars-2').text('4.9')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs.2,880.00')
        $('.Modal-description-2').text('The Choco Contact Lenses offer a rich brown color that enhances your natural eye tone. With a comfortable water content of 45% and a diameter of 14.2mm, these lenses provide a natural, bright-eyed look.')
        $('.Modal-description2-2').html('<ul><li>Color: Choco Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,880.00</li><li>Stock: Limited stock available</li></ul>')
    })
    $('#FreshLook3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/FreshLook/Wood Stone.docx" download="Wood Stone.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Wood Stone')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('FreshLook <img class="fav-icons-for-products" src="../Images/fav-icons/fresh.jpg" alt="">')
        $('.Modal-Price').text('$4,250.00')
        $('.Modal-img').html('<img src="../Images/FRESHLOOK/3.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').html('<ul><li>Color: Amber</li><li>For Vision enhancement and aesthetic appeal</li><li>Incorporating Biocompatible materials for lasting comfort<li><li>High Water retention for optimal oxygen flow</li><li>Advanced HD design for superior clarity</li><li>Equipped with UV protection</li><li>Manufactured using high-quality USA materials</li><li>Complies with FDA and CE safety standards</li></ul>')
        $('.Modal-description2').text('')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/33.jpg">')
        $('.Modal-title-2').text('3D Green')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$30.00')
        $('.Modal-description-2').text('The 3D Green lenses provide a vibrant green effect, perfect for those seeking a bold look. Made with a high-quality polymer blend, they offer comfort and hydration throughout the day.')
        $('.Modal-description2-2').html('<ul><li>Color: 3D Green</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: Not Available</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 9 items left)</li></ul>')
    })
    $('#FreshLook4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/FreshLook/Colorblends.docx" download="Colorblends.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Colorblends')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('FreshLook <img class="fav-icons-for-products" src="../Images/fav-icons/fresh.jpg" alt="">')
        $('.Modal-Price').text('$4,250.00')
        $('.Modal-img').html('<img src="../Images/FRESHLOOK/Images (1).jfif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').html('<ul><li>Duration of Use: Up to 1 month</li><li>Water Content: 55%</li><li>Base Curve: 8.6mm</li><li>Diameter: 14.5mm</li><li>Manufacturer: Alcon (USA)</li><li>Permeability: 20</li><li>Package Content: A pair of lenses</li><li>Lens Material: Phemfilcon A</li></ul>')
        $('.Modal-description2').text('')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/44.webp">')
        $('.Modal-title-2').text('Shadow Brown')
        $('.Modal-Stars-2').text('2.4')
        $('.Modal-Brand-2').html('Eyelens.pk')
        $('.Modal-Price-2').text('Rs.20')
        $('.Modal-description-2').text('The Shadow Brown lenses offer a stylish brownish shade with subtle prints, perfect for those seeking a captivating look. These lenses enhance the depth and glow of the eyes, adding a unique touch to your style.')
        $('.Modal-description2-2').html('<ul><li>Color: Shadow Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#FreshLook5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/FreshLook/Air Optix.docx" download="Air Optix.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Air Optix')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('FreshLook <img class="fav-icons-for-products" src="../Images/fav-icons/fresh.jpg" alt="">')
        $('.Modal-Price').text('$4,250.00')
        $('.Modal-img').html('<img src="../Images/FRESHLOOK/Images (2).jfif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').html('<ul><li>Lens Material: Lotrafilcon B</li><li>Surface: Permanent plasma technology</li><li>Water Content: 33%</li><li>Base Curve: 8.6</li><li>Diameter: 14.2</li><li>Center Thickness: 0.08 mm @ -3.00D</li><li>Replacement Schedule: Monthly</li><li>Usage Schedule: Daily</li></ul>')
        $('.Modal-description2').text('')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/55.webp">')
        $('.Modal-title-2').text('Amber G')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('Amber 1 Contact Lenses provide a warm amber hue that subtly enhances the eyes, perfect for a natural yet striking appearance.')
        $('.Modal-description2-2').html('<ul><li>Color: Amber</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -6.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,400.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#FreshLook6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/FreshLook/Innovative.docx" download="Innovative.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Innovative')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('FreshLook <img class="fav-icons-for-products" src="../Images/fav-icons/fresh.jpg" alt="">')
        $('.Modal-Price').text('$4,250.00')
        $('.Modal-img').html('<img src="../Images/FRESHLOOK/Images (3).jfif" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('FreshLook Colorblends Brown contact lenses are made with the latest 3-in-1 technology that combines three colors into one giving your eyes the most magnificent look.')
        $('.Modal-description2').html('<ul><li>Lens Material: Phemfilcon A</li><li>Water Content: 55%</li><li>Base Curve: 8.6</li><li>Diameter: 14.5</li><li>Replacement Schedule: Monthly</li><li>Usage Schedule: Daily</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/66.jpg">')
        $('.Modal-title-2').text('Devil Gray')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('EyeLens.com')
        $('.Modal-Price-2').text('Rs.2,100.00')
        $('.Modal-description-2').text('The Devil Gray lenses offer a bold gray hue that enhances the eyes with a striking, dramatic effect, making them ideal for those seeking a standout look. With a comfortable fit, they are suitable for daily wear.')
        $('.Modal-description2-2').html('<ul><li>Color: Devil Gray</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -8.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,100.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    //Bellalens ke modal or compare ka kaam
    $('#Bellalens1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/bellalens/Almond Gray.docx" download="Almond Gray.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bella Almond Gray Contact Lenses – Diamond Collection')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BellaLens <img class="fav-icons-for-products" src="../Images/fav-icons/cropped-Bellalens.pk_-1-192x192.png" alt="">')
        $('.Modal-Price').text('$4,450.00')
        $('.Modal-img').html('<img src="../Images/BellaLens/Almond.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Bella Diamond Almond Gray contact lens is a fantastic grey color with prints near the iris and also a student for a captivating look. Almond Gray contacts are loved by customers throughout the United States, United Kingdom, Saudi Arabia, UAE, Canada, Australia, Europe, and the Middle East.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Almond Gray</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/11.jpg">')
        $('.Modal-title-2').text('Aurora Sky Gray')
        $('.Modal-Stars-2').text('3.8')
        $('.Modal-Brand-2').html('eyelens.pk')
        $('.Modal-Price-2').text('Rs.4,500.00')
        $('.Modal-description-2').text('The Aurora Sky Gray contact lenses offer a soft and comfortable wear, enhancing the natural eye color with a subtle gray tone. They are designed for daily use, providing a fresh and vibrant look. These lenses come individually packaged, ensuring a hygienic experience. Ideal for anyone looking to add a touch of elegance to their eyes, the Sky Gray lenses are a great choice for all-day comfort and style.')
        $('.Modal-description2-2').html('<ul><li>Color: Sky Gray</li><li>Material: Soft and comfortable contact lens material</li><li>Effect: Subtle enhancement to natural eye color</li><li>Use: Ideal for daily wear</li><li>Packaging: Comes in a box of 1 lens</li><li>Price: Rs. 4,500.00</li><li>Available: Limited stock - Only 5 items left</li></ul>')
    })
    $('#Bellalens2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/bellalens/Gray Green.docx" download="Gray Green.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bella Gray Green Contact Lenses – Diamond Collection')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BellaLens <img class="fav-icons-for-products" src="../Images/fav-icons/cropped-Bellalens.pk_-1-192x192.png" alt="">')
        $('.Modal-Price').text('$4,450.00')
        $('.Modal-img').html('<img src="../Images/BellaLens/green.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Bella Diamonds Gray Green contact lens blends all-natural tones with a deep limbal right that brings instantaneous youthful vigor to your look. Gray Environment-friendly contacts are always in fashion across UAE, UK, Europe, USA, Canada, Saudi Arabia, Australia, and also the Center East.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Gray Green</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/22.webp">')
        $('.Modal-title-2').text('Choco')
        $('.Modal-Stars-2').text('4.9')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs.2,880.00')
        $('.Modal-description-2').text('The Choco Contact Lenses offer a rich brown color that enhances your natural eye tone. With a comfortable water content of 45% and a diameter of 14.2mm, these lenses provide a natural, bright-eyed look.')
        $('.Modal-description2-2').html('<ul><li>Color: Choco Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,880.00</li><li>Stock: Limited stock available</li></ul>')
    })
    $('#Bellalens3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/bellalens/Pacific Blue.docx" download="Pacific Blue.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bella Pacific Blue Contact Lenses – Diamond Collection')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BellaLens <img class="fav-icons-for-products" src="../Images/fav-icons/cropped-Bellalens.pk_-1-192x192.png" alt="">')
        $('.Modal-Price').text('$4,450.00')
        $('.Modal-img').html('<img src="../Images/BellaLens/blue.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Bella Diamonds Pacific Blue contact lenses are oceanic blue tone which uses an enlarging aim to your eyes. Pacific Blue contacts are bestselling blue lenses in the United States, UAE, Canada, UK, Australia, Europe, Saudi Arabia, and the Middle East.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Pacific Blue</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/33.jpg">')
        $('.Modal-title-2').text('3D Green')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$30.00')
        $('.Modal-description-2').text('The 3D Green lenses provide a vibrant green effect, perfect for those seeking a bold look. Made with a high-quality polymer blend, they offer comfort and hydration throughout the day.')
        $('.Modal-description2-2').html('<ul><li>Color: 3D Green</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: Not Available</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 9 items left)</li></ul>')
    })
    $('#Bellalens4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/bellalens/Glitter Gray.docx" download="Glitter Gray.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bella Glitter Gray Contact Lenses – Diamond Collection')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BellaLens <img class="fav-icons-for-products" src="../Images/fav-icons/cropped-Bellalens.pk_-1-192x192.png" alt="">')
        $('.Modal-Price').text('$4,450.00')
        $('.Modal-img').html('<img src="../Images/BellaLens/gray.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Bella Diamonds Glitter Gray contact lens with a blend of gray as well as skies blue and also a distinct limbal ring brings a unique look to the wearer. Shine Gray is among the successful colored calls in the United States, UAE, Saudi Arabia, UK, Canada, Australia, the Middle East, and Europe.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Glitter Gray</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/44.webp">')
        $('.Modal-title-2').text('Shadow Brown')
        $('.Modal-Stars-2').text('2.4')
        $('.Modal-Brand-2').html('Eyelens.pk')
        $('.Modal-Price-2').text('Rs.20')
        $('.Modal-description-2').text('The Shadow Brown lenses offer a stylish brownish shade with subtle prints, perfect for those seeking a captivating look. These lenses enhance the depth and glow of the eyes, adding a unique touch to your style.')
        $('.Modal-description2-2').html('<ul><li>Color: Shadow Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#Bellalens5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/bellalens/Caribbean Green.docx" download="Caribbean Green.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bella Caribbean Green Contact Lenses – Diamond Collection')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BellaLens <img class="fav-icons-for-products" src="../Images/fav-icons/cropped-Bellalens.pk_-1-192x192.png" alt="">')
        $('.Modal-Price').text('$4,450.00')
        $('.Modal-img').html('<img src="../Images/BellaLens/cara.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Bella Diamonds Caribbean Green contact lens is an all-natural green beauty motivated by the lush jungles for mystical eco-friendly eyes. Caribbean Eco-friendly calls are extremely prominent in the USA, UK, Saudi Arabia, UAE, Canada, Australia, Europe, and the Middle East.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Caribbean Green</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/55.webp">')
        $('.Modal-title-2').text('Amber G')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('Amber 1 Contact Lenses provide a warm amber hue that subtly enhances the eyes, perfect for a natural yet striking appearance.')
        $('.Modal-description2-2').html('<ul><li>Color: Amber</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -6.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,400.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#Bellalens6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/bellalens/Brown Shadow.docx" download="Brown Shadow.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Bella Brown Shadow Contact Lenses – Diamond Collection')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('BellaLens <img class="fav-icons-for-products" src="../Images/fav-icons/cropped-Bellalens.pk_-1-192x192.png" alt="">')
        $('.Modal-Price').text('$4,450.00')
        $('.Modal-img').html('<img src="../Images/BellaLens/brown.jpg" alt="Brand 3" class="card-img-top">')
        $('.Modal-description').text('Bella Diamonds Brown Shadow contact lens is a stylish brownish shade with subtle prints for a captivating look. Brown Shadow contacts are a top-seller in Canada, UAE, United States, UK, Saudi Arabia, Europe, the Middle East, as well as Australia.')
        $('.Modal-description2').html('<ul><li><strong>Color</strong>: Brown Shadow</li><li><strong>Modality</strong>: Monthly</li><li><strong>Base Curve</strong>: 8.6mm</li><li><strong>Diameter</strong>: 14.5mm</li><li><strong>Water Content</strong>: 38%</li><li><strong>Material</strong>: Polymacon</li><li><strong>Central Thickness</strong>: 0.07(-3.00D)</li><li><strong>DK (oxygen permeability)</strong>: 8.4</li><li><strong>UV block</strong>: 40% UV lights</li><li><strong>Permeability</strong>: 12</li><li><strong>Look</strong>: Natural Looking</li><li><strong>TRANSMISSIBILITY: </strong>95%</li><li>For wear during the daytime for up to three months</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/66.jpg">')
        $('.Modal-title-2').text('Devil Gray')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('EyeLens.com')
        $('.Modal-Price-2').text('Rs.2,100.00')
        $('.Modal-description-2').text('The Devil Gray lenses offer a bold gray hue that enhances the eyes with a striking, dramatic effect, making them ideal for those seeking a standout look. With a comfortable fit, they are suitable for daily wear.')
        $('.Modal-description2-2').html('<ul><li>Color: Devil Gray</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -8.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,100.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    //Acuve ke modal or func ka kaam
    $('#ACUVUElens1').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/Acuvue/Fresh Lilac.docx" download="Fresh Lilac.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Fresh Lilac')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('ACUVUE <img class="fav-icons-for-products" src="../Images/fav-icons/192x192.png">')
        $('.Modal-Price').text('$45.90')
        $('.Modal-img').html('<img src="../Images/Acuvue/1.webp" class="card-img-top" class="card-img-top">')
        $('.Modal-description').text('Change the way you see the world with 1-Day Acuvue Define Fresh Lilac. These branded colored contact lenses are perfect for daily occasions, from school to the office. With a daily disposable feature, enjoy the convenience and comfort of fresh lenses every day.')
        $('.Modal-description2').html('<ul><li>Diameter: 14.2mm</li><li>Water Content: 58%</li><li>Base Curve: 8.50mm</li><li>Replacement Period: Daily Disposable</li><li>Whats included: 15 pairs of contact lenses + a lens case</li><li>Remarks: Each box contains 30 pieces of lenses of thesameprescription. Please order a second box if you haveadifferent prescription for your right and left eyes.</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/11.jpg">')
        $('.Modal-title-2').text('Aurora Sky Gray')
        $('.Modal-Stars-2').text('3.8')
        $('.Modal-Brand-2').html('eyelens.pk')
        $('.Modal-Price-2').text('Rs.4,500.00')
        $('.Modal-description-2').text('The Aurora Sky Gray contact lenses offer a soft and comfortable wear, enhancing the natural eye color with a subtle gray tone. They are designed for daily use, providing a fresh and vibrant look. These lenses come individually packaged, ensuring a hygienic experience. Ideal for anyone looking to add a touch of elegance to their eyes, the Sky Gray lenses are a great choice for all-day comfort and style.')
        $('.Modal-description2-2').html('<ul><li>Color: Sky Gray</li><li>Material: Soft and comfortable contact lens material</li><li>Effect: Subtle enhancement to natural eye color</li><li>Use: Ideal for daily wear</li><li>Packaging: Comes in a box of 1 lens</li><li>Price: Rs. 4,500.00</li><li>Available: Limited stock - Only 5 items left</li></ul>')
    })
    $('#ACUVUElens2').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/Acuvue/1-DAY.docx" download="1-DAY.docx">DOWNLOAD</a>')
        $('.Modal-title').text('1-DAY')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('ACUVUE <img class="fav-icons-for-products" src="../Images/fav-icons/192x192.png">')
        $('.Modal-Price').text('$95.00')
        $('.Modal-img').html('<img src="../Images/Acuvue/Acuvue-1Day-New-Define-Fresh-Blue-CUE (1).jpg" class="card-img-top">')
        $('.Modal-description').text('ACUVUE® DEFINE® FRESH range is our very first lens inspired by the vibrant colours found in nature. Made with hand drawn patterns inspired by the iris that brightens your eyes while naturally blending into the iris.1 Available only for near and far-sighted vision.')
        $('.Modal-description2').html('<ul><li><strong>Color:</strong> Natural enhancement with a freslook</li><li><strong>UV Protection:</strong> Class 2 (blocks ~98% UVB~85% UVA)</li><li><strong>Material:</strong> Etafilcon A</li><li><strong>Breathability:</strong> High oxygen permeabilitfor comfort</li><li><strong>Edge Design:</strong> Smooth edge for minimaeyelid interaction</li><li><strong>Wearing Duration:</strong> Up to 12 hours per dayli><li><strong>Packaging:</strong> 30 lenses per box, suitablfor 15 days of use</li><li><strong>Prescription Range:</strong> -0.50D to -9.00D</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/22.webp">')
        $('.Modal-title-2').text('Choco')
        $('.Modal-Stars-2').text('4.9')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('Rs.2,880.00')
        $('.Modal-description-2').text('The Choco Contact Lenses offer a rich brown color that enhances your natural eye tone. With a comfortable water content of 45% and a diameter of 14.2mm, these lenses provide a natural, bright-eyed look.')
        $('.Modal-description2-2').html('<ul><li>Color: Choco Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,880.00</li><li>Stock: Limited stock available</li></ul>')
    })
    $('#ACUVUElens3').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/Acuvue/Amelie Earl.docx" download="Amelie Earl.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Amelie Earl')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('ACUVUE <img class="fav-icons-for-products" src="../Images/fav-icons/192x192.png">')
        $('.Modal-Price').text('$30.00')
        $('.Modal-img').html('<img src="../Images/Acuvue/Amelie-Grey-CUE-2.webp" class="card-img-top">')
        $('.Modal-description').text('Step into a world of elegance with the Amelie Earl Grey contact lenses from EyeCandys. This summer’s must-have accessory transports you to an English high tea, evoking Images of regal gatherings and delicate lace. Inspired by the timeless beauty of the British countryside, these lenses add a subtle yet enchanting bluish tint to your eyes, reminiscent of the finest Earl Grey tea.')
        $('.Modal-description2').html('<ul><li>Diameter: 12.5cm</li><li>Water Content: 70%</li><li>Base Curve: 7.80mm</li><li>Replacement Period: Reusable</li><li>Whats included: 1 bags of Amelie Earl + a infuser</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/33.jpg">')
        $('.Modal-title-2').text('3D Green')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$30.00')
        $('.Modal-description-2').text('The 3D Green lenses provide a vibrant green effect, perfect for those seeking a bold look. Made with a high-quality polymer blend, they offer comfort and hydration throughout the day.')
        $('.Modal-description2-2').html('<ul><li>Color: 3D Green</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: Not Available</li><li>Package Includes: 1 Pair of Lenses, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 9 items left)</li></ul>')
    })
    $('#ACUVUElens4').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/Acuvue/Acuvue Green.docx" download="Acuvue Green.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Acuvue Green')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('ACUVUE <img class="fav-icons-for-products" src="../Images/fav-icons/192x192.png">')
        $('.Modal-Price').text('$26.00')
        $('.Modal-img').html('<img src="../Images/Acuvue/Acuvue-1Day-New-Define-Fresh-Green-_KR_-CUE.jpg" class="card-img-top">')
        $('.Modal-description').text('Enhance the color of your eyes with these DEFINE® FRESH GREEN contact lenses from ACUVUE® . The advanced LACREON® Technology locks in moisture to create a silky smooth cushion, keeping your eyes fresh and comfortable through the day. Designed with UV-A and UV-B protection for 1-day wear with different strengths available.')
        $('.Modal-description2').html('<ul><li>Diameter: 14.2mm</li><li>Water Content: 58%</li><li>Base Curve: 8.50mm</li><li>Color: Green</li><li>Replacement Period: Daily Disposable</li><li>Whats included: 15 pairs of contact lenses + a lens case</li><li>Remarks: Each box contains 30 pieces of lenses of same prescription. Order a second box if you different prescriptions for each eye.</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/44.webp">')
        $('.Modal-title-2').text('Shadow Brown')
        $('.Modal-Stars-2').text('2.4')
        $('.Modal-Brand-2').html('Eyelens.pk')
        $('.Modal-Price-2').text('Rs.20')
        $('.Modal-description-2').text('The Shadow Brown lenses offer a stylish brownish shade with subtle prints, perfect for those seeking a captivating look. These lenses enhance the depth and glow of the eyes, adding a unique touch to your style.')
        $('.Modal-description2-2').html('<ul><li>Color: Shadow Brown</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -10.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 3,200.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#ACUVUElens5').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/Acuvue/Acuvue Greyzel.docx" download="Acuvue Greyzel.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Acuvue Greyzel')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('ACUVUE <img class="fav-icons-for-products" src="../Images/fav-icons/192x192.png">')
        $('.Modal-Price').text('$30.00')
        $('.Modal-img').html('<img src="../Images/Acuvue/Acuvue-1Day-New-Define-Fresh-Greyzel-_KR_-CUE.jpg" class="card-img-top">')
        $('.Modal-description').text('Enhance the color of your eyes with these DEFINE® FRESH Greyzel contact lenses from ACUVUE® . The advanced LACREON® Technology locks in moisture to create a silky smooth cushion, keeping your eyes fresh and comfortable through the day. Designed with UV-A and UV-B protection for 1-day wear with different strengths available.')
        $('.Modal-description2').html('<ul><li>Diameter: 14.2mm</li><li>Water Content: 58%</li><li>Base Curve: 8.50mm</li><li>Color: Greyzel</li><li>Replacement Period: Daily Disposable</li><li>Whats included: 15 pairs of contact lenses + a lens case</li><li>Remarks: Each box contains 30 pieces of lenses of same prescription. Order a second box if you different prescriptions for each eye.</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/55.webp">')
        $('.Modal-title-2').text('Amber G')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('No Brand')
        $('.Modal-Price-2').text('$429.00')
        $('.Modal-description-2').text('Amber 1 Contact Lenses provide a warm amber hue that subtly enhances the eyes, perfect for a natural yet striking appearance.')
        $('.Modal-description2-2').html('<ul><li>Color: Amber</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -6.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,400.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    $('#ACUVUElens6').click(function () {
        comparision()
        $('.Downloader-btn').html('<a type="button" class="btn btn-secondary modal-download" href="../Word-files/Acuvue/Vivid Choco.docx" download="Vivid Choco.docx">DOWNLOAD</a>')
        $('.Modal-title').text('Vivid Choco')
        $('.Modal-Stars').text('★★★★☆')
        $('.Modal-Brand').html('ACUVUE <img class="fav-icons-for-products" src="../Images/fav-icons/192x192.png">')
        $('.Modal-Price').text('$35.00')
        $('.Modal-img').html('<img src="../Images/Acuvue/Amelie-Grey-CUE-2.webp" class="card-img-top">')
        $('.Modal-description').text('This line of cosmetic contacts was designed to mimic the striations of natural irises as closely as possible, and the result is a beautiful enhancement lens that brings out your eyes’ true sparkle. Your eyes get a boost of definition from the limbal ring, printed at just the right thickness to prevent an unnatural borders. Acuvue® Define™ dailies also deliver an amazing highlight with their soft, yet bold base color (chocolate for the Vivid Choco shade).')
        $('.Modal-description2').html('<ul><li>Power Range: 0.00 ~ -9.00</li><li>Lens Diameter: 14.2 mm</li><li>Graphic Diameter: 12.8 mm</li><li>Base Curve: 8.5</li><li>Water Content: 58%</li><li>Replacement Cycle: Daily</li><li>Size: Slightly larger</li><li>Style: Realistic</li><li>Number of Tones: 2</li><li>Pattern: Circle lens (prominent limbal ring)</li><li>Material: Etafilcon A with LACREON®</li><li>Manufacturer: Johnson & Johnson</li></ul>')
        $('.Modal-img-2').html('<img class="card-img-top" src="../Images/comparision/66.jpg">')
        $('.Modal-title-2').text('Devil Gray')
        $('.Modal-Stars-2').text('No Ratings')
        $('.Modal-Brand-2').html('EyeLens.com')
        $('.Modal-Price-2').text('Rs.2,100.00')
        $('.Modal-description-2').text('The Devil Gray lenses offer a bold gray hue that enhances the eyes with a striking, dramatic effect, making them ideal for those seeking a standout look. With a comfortable fit, they are suitable for daily wear.')
        $('.Modal-description2-2').html('<ul><li>Color: Devil Gray</li><li>Water Content: 45% Polymer, 55% Water</li><li>Diameter: 14.2mm</li><li>Base Curve: 8.6mm</li><li>Power Range: -0.50 to -8.00</li><li>Package Includes: 1 Pair of Lens, Solution, Lens Case, Pouch</li><li>Price: Rs. 2,100.00</li><li>Stock: Limited availability (only 7 items left)</li></ul>')
    })
    // modal ka kaam yaha pr end horha
    $('.COMPARE').click(function () {
        $('.car1').addClass('col-5')
        $('.car2').addClass('col-5')
        $('.modal-dialog').css('max-width', '90%')
        $('.car2').show()
        $(this).hide()
    })
    var totalitem = 0
    var totalm1 = 0
    var totalm2 = 0
    var totalm3 = 0
    var totalm4 = 0
    var totalm5 = 0
    var totalm6 = 0
    var totalb1 = 0
    var totalb2 = 0
    var totalb3 = 0
    var totalb4 = 0
    var totalb5 = 0
    var totalb6 = 0
    var totalj1 = 0
    var totalj2 = 0
    var totalj3 = 0
    var totalj4 = 0
    var totalj5 = 0
    var totalj6 = 0
    var totalr1 = 0
    var totalr2 = 0
    var totalr3 = 0
    var totalr4 = 0
    var totalr5 = 0
    var totalr6 = 0
    var totalmn1 = 0
    var totalmn2 = 0
    var totalmn3 = 0
    var totalmn4 = 0
    var totalmn5 = 0
    var totalmn6 = 0
    var totalf1 = 0
    var totalf2 = 0
    var totalf3 = 0
    var totalf4 = 0
    var totalf5 = 0
    var totalf6 = 0
    var totalbl1 = 0
    var totalbl2 = 0
    var totalbl3 = 0
    var totalbl4 = 0
    var totalbl5 = 0
    var totalbl6 = 0
    var totala1 = 0
    var totala2 = 0
    var totala3 = 0
    var totala4 = 0
    var totala5 = 0
    var totala6 = 0
    //total value se sarey products ka total amount navbar ke cart ke total ke name se show hota
    var totalvalue = 0
    //jab buy now krte to wo product cart me jakr save hojata to uska amount uski value sab waha show krne ke func hain one by one hr product ka
    $('#bnmoscot1').click(function () {
        totalvalue += 330
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalm1 += 1
        $('#mqty1').text(totalm1)
        $('#moscotcart1').show()
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmoscot2').click(function () {
        $('#moscotcart2').show()
        totalvalue += 360
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalm2 += 1
        $('#mqty2').text(totalm2)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmoscot3').click(function () {
        $('#moscotcart3').show()
        totalvalue += 55000
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalm3 += 1
        $('#mqty3').text(totalm3)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmoscot4').click(function () {
        $('#moscotcart4').show()
        totalvalue += 6750
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalm4 += 1
        $('#mqty4').text(totalm4)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmoscot5').click(function () {
        $('#moscotcart5').show()
        totalvalue += 325
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalm5 += 1
        $('#mqty5').text(totalm5)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmoscot6').click(function () {
        $('#moscotcart6').show()
        totalvalue += 97000
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalm6 += 1
        $('#mqty6').text(totalm6)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbarton1').click(function () {
        $('#bartoncart1').show()
        totalvalue += 685
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalb1 += 1
        $('#btqty1').text(totalb1)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbarton2').click(function () {
        $('#bartoncart2').show()
        totalvalue += 685
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalb2 += 1
        $('#btqty2').text(totalb2)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbarton3').click(function () {
        $('#bartoncart3').show()
        totalvalue += 490
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalb3 += 1
        $('#btqty3').text(totalb3)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbarton4').click(function () {
        $('#bartoncart4').show()
        totalvalue += 630
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalb4 += 1
        $('#btqty4').text(totalb4)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbarton5').click(function () {
        $('#bartoncart5').show()
        totalvalue += 490
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalb5 += 1
        $('#btqty5').text(totalb5)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbarton6').click(function () {
        $('#bartoncart6').show()
        totalvalue += 505
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalb6 += 1
        $('#btqty6').text(totalb16)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnjacques1').click(function () {
        $('#jacquescart1').show()
        totalvalue += 505
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalj1 += 1
        $('#jqty1').text(totalj1)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnjacques2').click(function () {
        $('#jacquescart2').show()
        totalvalue += 705
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalj2 += 1
        $('#jqty2').text(totalj2)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnjacques3').click(function () {
        $('#jacquescart3').show()
        totalvalue += 599
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalj3 += 1
        $('#jqty3').text(totalj3)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnjacques4').click(function () {
        $('#jacquescart4').show()
        totalvalue += 411
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalj4 += 1
        $('#jqty4').text(totalj4)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnjacques5').click(function () {
        $('#jacquescart5').show()
        totalvalue += 400
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalj5 += 1
        $('#jqty5').text(totalj5)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnjacques6').click(function () {
        $('#jacquescart6').show()
        totalvalue += 299
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        totalj6 += 1
        $('#jqty6').text(totalj6)
        prselect()
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnrayban1').click(function () {
        $('#raybancart1').show()
        totalvalue += 55000
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalr1 += 1
        $('#rqty1').text(totalr1)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnrayban2').click(function () {
        $('#raybancart2').show()
        totalvalue += 218
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalr2 += 1
        $('#rqty2').text(totalr2)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnrayban3').click(function () {
        $('#raybancart3').show()
        totalvalue += 1520
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalr3 += 1
        $('#rqty3').text(totalr3)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnrayban4').click(function () {
        $('#raybancart4').show()
        totalvalue += 1350
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalr4 += 1
        $('#rqty4').text(totalr4)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnrayban5').click(function () {
        $('#raybancart5').show()
        totalvalue += 120
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalr5 += 1
        $('#rqty5').text(totalr5)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnrayban6').click(function () {
        $('#raybancart6').show()
        totalvalue += 218
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalr6 += 1
        $('#rqty6').text(totalr6)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmenicon1').click(function () {
        $('#meniconcart1').show()
        totalvalue += 3500
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalmn1 += 1
        $('#mnqty1').text(totalmn1)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmenicon2').click(function () {
        $('#meniconcart2').show()
        totalvalue += 3650
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalmn2 += 1
        $('#mnqty2').text(totalmn2)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmenicon3').click(function () {
        $('#meniconcart3').show()
        totalvalue += 5700
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalmn3 += 1
        $('#mnqty3').text(totalmn3)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmenicon4').click(function () {
        $('#meniconcart4').show()
        totalvalue += 4500
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalmn4 += 1
        $('#mnqty4').text(totalmn4)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmenicon5').click(function () {
        $('#meniconcart5').show()
        totalvalue += 9500
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalmn5 += 1
        $('#mnqty5').text(totalmn5)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnmenicon6').click(function () {
        $('#meniconcart6').show()
        totalvalue += 4350
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalmn6 += 1
        $('#mnqty6').text(totalmn6)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnFreshLook1').click(function () {
        $('#FreshLookcart1').show()
        totalvalue += 4250
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalf1 += 1
        $('#fqty1').text(totalf1)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnFreshLook2').click(function () {
        $('#FreshLookcart2').show()
        totalvalue += 4250
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalf2 += 1
        $('#fqty2').text(totalf2)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnFreshLook3').click(function () {
        $('#FreshLookcart3').show()
        totalvalue += 4250
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalf3 += 1
        $('#fqty3').text(totalf3)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnFreshLook4').click(function () {
        $('#FreshLookcart4').show()
        totalvalue += 4250
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalf4 += 1
        $('#fqty4').text(totalf4)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnFreshLook5').click(function () {
        $('#FreshLookcart5').show()
        totalvalue += 4250
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalf5 += 1
        $('#fqty5').text(totalf5)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnFreshLook6').click(function () {
        $('#FreshLookcart6').show()
        totalvalue += 4250
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalf6 += 1
        $('#fqty6').text(totalf6)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbellalens1').click(function () {
        $('#Bellalenscart1').show()
        totalvalue += 4450
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalbl1 += 1
        $('#blqty1').text(totalbl1)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbellalens2').click(function () {
        $('#Bellalenscart2').show()
        totalvalue += 4450
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalbl2 += 1
        $('#blqty2').text(totalbl2)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbellalens3').click(function () {
        $('#Bellalenscart3').show()
        totalvalue += 4450
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalbl3 += 1
        $('#blqty3').text(totalbl3)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbellalens4').click(function () {
        $('#Bellalenscart4').show()
        totalvalue += 4450
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalbl4 += 1
        $('#blqty4').text(totalbl4)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbellalens5').click(function () {
        $('#Bellalenscart5').show()
        totalvalue += 4450
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalbl5 += 1
        $('#blqty5').text(totalbl5)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnbellalens6').click(function () {
        $('#Bellalenscart6').show()
        totalvalue += 4450
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totalbl6 += 1
        $('#blqty6').text(totalbl6)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnacuvue1').click(function () {
        $('#Acuvuecart1').show()
        totalvalue += 45.90
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totala1 += 1
        $('#aqty1').text(totala1)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnacuvue2').click(function () {
        $('#Acuvuecart2').show()
        totalvalue += 95.00
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totala2 += 1
        $('#aqty2').text(totala2)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnacuvue3').click(function () {
        $('#Acuvuecart3').show()
        totalvalue += 30.00
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totala3 += 1
        $('#aqty3').text(totala3)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnacuvue4').click(function () {
        $('#Acuvuecart4').show()
        totalvalue += 30.00
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totala4 += 1
        $('#aqty4').text(totala4)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnacuvue5').click(function () {
        $('#Acuvuecart5').show()
        totalvalue += 30.00
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totala5 += 1
        $('#anqty5').text(totala5)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    $('#bnacuvue6').click(function () {
        $('#Acuvuecart6').show()
        totalvalue += 35.00
        $('#total-value').text(totalvalue)
        totalitem += 1
        if (totalitem >= 1) {
            $('.numbertext').text(totalitem)
        }
        else {
            $('.numbertext').text('')
        }
        prselect()
        totala6 += 1
        $('#aqty6').text(totala6)
        $('#btbox').slideDown()
        $('#btbox').animate({
            left: '50%'
        }, 500)
    })
    //Add to cart ka kaam khtm
    //Read More or buy now ke pass jo heart ka icon laga wa ussey products wishlist me add hojatey us icon pr click krne se us product ka name wishlist me chala jata uske hr product ke func hai one by one
    $('#listmoscot1').click(function () {
        $('#moscotlist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmoscot2').click(function () {
        $('#moscotlist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmoscot3').click(function () {
        $('#moscotlist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmoscot4').click(function () {
        $('#moscotlist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmoscot5').click(function () {
        $('#moscotlist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmoscot6').click(function () {
        $('#moscotlist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbarton1').click(function () {
        $('#bartonlist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbarton2').click(function () {
        $('#bartonlist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbarton3').click(function () {
        $('#bartonlist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbarton4').click(function () {
        $('#bartonlist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbarton5').click(function () {
        $('#bartonlist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbarton6').click(function () {
        $('#bartonlist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listjacques1').click(function () {
        $('#jacqueslist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listjacques2').click(function () {
        $('#jacqueslist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listjacques3').click(function () {
        $('#jacqueslist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listjacques4').click(function () {
        $('#jacqueslist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listjacques5').click(function () {
        $('#jacqueslist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listjacques6').click(function () {
        $('#jacqueslist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listrayban1').click(function () {
        $('#raybanlist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listrayban2').click(function () {
        $('#raybanlist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listrayban3').click(function () {
        $('#raybanlist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listrayban4').click(function () {
        $('#raybanlist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listrayban5').click(function () {
        $('#raybanlist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listrayban6').click(function () {
        $('#raybanlist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmenicon1').click(function () {
        $('#meniconlist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmenicon2').click(function () {
        $('#meniconlist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmenicon3').click(function () {
        $('#meniconlist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmenicon4').click(function () {
        $('#meniconlist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmenicon5').click(function () {
        $('#meniconlist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listmenicon6').click(function () {
        $('#meniconlist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listFreshLook1').click(function () {
        $('#FreshLooklist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listFreshLook2').click(function () {
        $('#FreshLooklist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listFreshLook3').click(function () {
        $('#FreshLooklist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listFreshLook4').click(function () {
        $('#FreshLooklist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listFreshLook5').click(function () {
        $('#FreshLooklist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listFreshLook6').click(function () {
        $('#FreshLooklist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbellalens1').click(function () {
        $('#bellalenslist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbellalens2').click(function () {
        $('#bellalenslist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbellalens3').click(function () {
        $('#bellalenslist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbellalens4').click(function () {
        $('#bellalenslist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbellalens5').click(function () {
        $('#bellalenslist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listbellalens6').click(function () {
        $('#bellalenslist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listacuvue1').click(function () {
        $('#acuvuelist1').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listacuvue2').click(function () {
        $('#acuvuelist2').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)

    })
    $('#listacuvue3').click(function () {
        $('#acuvuelist3').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listacuvue4').click(function () {
        $('#acuvuelist4').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listacuvue5').click(function () {
        $('#acuvuelist5').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    $('#listacuvue6').click(function () {
        $('#acuvuelist6').show()
        hrtselect()
        $('#lbtbox').slideDown()
        $('#lbtbox').animate({
            left: '50%'
        }, 500)
    })
    //list ka kaam khtm
    //Cart ke andr checkout ka btn ke liye func hai ke jab usko koi press krey to cart poora khali hojae 
    //cart me hr item pehle se exist krta bss wo hide hota jab user buynow pr click krta to wo show hojata
    function checkout() {
        $('#moscotcart1').hide()
        $('#moscotcart2').hide()
        $('#moscotcart3').hide()
        $('#moscotcart4').hide()
        $('#moscotcart5').hide()
        $('#moscotcart6').hide()
        $('#bartoncart1').hide()
        $('#bartoncart2').hide()
        $('#bartoncart3').hide()
        $('#bartoncart4').hide()
        $('#bartoncart5').hide()
        $('#bartoncart6').hide()
        $('#jacquescart1').hide()
        $('#jacquescart2').hide()
        $('#jacquescart3').hide()
        $('#jacquescart4').hide()
        $('#jacquescart5').hide()
        $('#jacquescart6').hide()
        $('#raybancart1').hide()
        $('#raybancart2').hide()
        $('#raybancart3').hide()
        $('#raybancart4').hide()
        $('#raybancart5').hide()
        $('#raybancart6').hide()
        $('#meniconcart1').hide()
        $('#meniconcart2').hide()
        $('#meniconcart3').hide()
        $('#meniconcart4').hide()
        $('#meniconcart5').hide()
        $('#meniconcart6').hide()
        $('#FreshLookcart1').hide()
        $('#FreshLookcart2').hide()
        $('#FreshLookcart3').hide()
        $('#FreshLookcart4').hide()
        $('#FreshLookcart5').hide()
        $('#FreshLookcart6').hide()
        $('#Bellalenscart1').hide()
        $('#Bellalenscart2').hide()
        $('#Bellalenscart3').hide()
        $('#Bellalenscart4').hide()
        $('#Bellalenscart5').hide()
        $('#Bellalenscart6').hide()
        $('#Acuvuecart1').hide()
        $('#Acuvuecart2').hide()
        $('#Acuvuecart3').hide()
        $('#Acuvuecart4').hide()
        $('#Acuvuecart5').hide()
        $('#Acuvuecart6').hide()
        $('#total-checkout').hide()
    }
    //by default chlta or jab koi cheez add hoti cart me to hat jata
    checkout()
    //checkout ka click honey pr bhi ye chalta 
    $('#Checkoutbtn').click(function () {
    })
    $('#patanhiyekiohai').hide()
    //jab buy now pr click krte to is func ki waja se wo product cart me jati prselect (productselect)
    function prselect() {
        $('#total-checkout').show()
        $('#default-cart').hide()
        $('.top-text').css('width', 'none')
        $('#patanhiyekiohai').show()
    }
    //list by default hide rehti jesey opr checkout ke func me items hide they 
    //list me hr item pehle se exist krta bss wo hide hota jab user heart pr click krta to wo show hojata
    $('#listhide').hide()
    //by default cart ka btn jo show jota uskey liye hai or uski css jab user cart pr click krta to uski styling ajati or default text(No items in cart)
    $('#Cartselectbtn').click(function (event) {
        event.preventDefault()
        event.stopPropagation()
        $(this).css('borderBottom', '2px solid blue')
        $('#listselectbtn').css('border', 'none')
        $(this).css('borderRadius', '0px')
        $('#carthide').show()
        $('#listhide').hide()
    })
    //by default list ka btn jo show jota uskey liye hai or uski css jab user list pr click krta to uski styling ajati or default text(No items in list)
    $('#listselectbtn').click(function (event) {
        event.preventDefault()
        event.stopPropagation()
        $(this).css('borderBottom', '2px solid blue')
        $('#Cartselectbtn').css('border', 'none')
        $(this).css('borderRadius', '0px')
        $('#carthide').hide()
        $('#listhide').show()
    })
    //jab cart or list khali hoti to uski styling 
    $('.top-text').css('width', '400px')
    //same jese checkout ke func se cart khali hota wesey hi clear ke func se list khali hoti
    function clear() {
        $('#moscotlist1').hide()
        $('#moscotlist2').hide()
        $('#moscotlist3').hide()
        $('#moscotlist4').hide()
        $('#moscotlist5').hide()
        $('#moscotlist6').hide()
        $('#bartonlist1').hide()
        $('#bartonlist2').hide()
        $('#bartonlist3').hide()
        $('#bartonlist4').hide()
        $('#bartonlist5').hide()
        $('#bartonlist6').hide()
        $('#jacqueslist1').hide()
        $('#jacqueslist2').hide()
        $('#jacqueslist3').hide()
        $('#jacqueslist4').hide()
        $('#jacqueslist5').hide()
        $('#jacqueslist6').hide()
        $('#raybanlist1').hide()
        $('#raybanlist2').hide()
        $('#raybanlist3').hide()
        $('#raybanlist4').hide()
        $('#raybanlist5').hide()
        $('#raybanlist6').hide()
        $('#meniconlist1').hide()
        $('#meniconlist2').hide()
        $('#meniconlist3').hide()
        $('#meniconlist4').hide()
        $('#meniconlist5').hide()
        $('#meniconlist6').hide()
        $('#FreshLooklist1').hide()
        $('#FreshLooklist2').hide()
        $('#FreshLooklist3').hide()
        $('#FreshLooklist4').hide()
        $('#FreshLooklist5').hide()
        $('#FreshLooklist6').hide()
        $('#bellalenslist1').hide()
        $('#bellalenslist2').hide()
        $('#bellalenslist3').hide()
        $('#bellalenslist4').hide()
        $('#bellalenslist5').hide()
        $('#bellalenslist6').hide()
        $('#acuvuelist1').hide()
        $('#acuvuelist2').hide()
        $('#acuvuelist3').hide()
        $('#acuvuelist4').hide()
        $('#acuvuelist5').hide()
        $('#acuvuelist6').hide()
        $('#CLEARBTN').hide()
    }
    //by default chlta jab koi user add krta to hat jata
    clear()
    //same check out ki trhn ye bhi hai list ke liye
    $('#CLEARBTN').click(function () {
        clear()
        $('#default-list').show()
    })
    //jo heart ke btn se list me saman jata wo is func ki waja se jata
    function hrtselect() {
        $('#CLEARBTN').show()
        $('#default-list').hide()
        $('.top-text').css('width', 'none')
    }
    //frame opr jo description hoti
    $('.framdesc-hover').hide()
    //lens opr jo description hoti
    $('.lensdesc-hover').hide()
    //sunglass opr jo description hoti
    $('.glassdesc-hover').hide()
    //jab frame ke opr hover krte to uski description show hoti is function se
    $('.productnumber1').mouseover(function () {
        $('.framdesc-hover').slideDown()
        $('.lensdesc-hover').slideUp(1)
        $('.glassdesc-hover').slideUp(1)
        $('.framdesc-hover').css('borderRadius', '40px')
        $('.framdesc-hover').css('padding', '20px')
    })
    $('.productnumber1').mouseout(function () {
        $('.framdesc-hover').hide()
    })
    //jab lens ke opr hover krte to uski description show hoti is function se
    $('.productnumber2').mouseover(function () {
        $('.lensdesc-hover').slideDown()
        $('.framdesc-hover').slideUp(1)
        $('.glassdesc-hover').slideUp(1)
        $('.lensdesc-hover').css('borderRadius', '40px')
        $('.lensdesc-hover').css('padding', '20px')
    })
    $('.productnumber2').mouseout(function () {
        $('.lensdesc-hover').hide()
    })
    //jab sunglass ke opr hover krte to uski description show hoti is function se
    $('.productnumber3').mouseover(function () {
        $('.glassdesc-hover').slideDown()
        $('.lensdesc-hover').slideUp(1)
        $('.framdesc-hover').slideUp(1)
        $('.glassdesc-hover').css('borderRadius', '40px')
        $('.glassdesc-hover').css('padding', '20px')
    })
    $('.productnumber3').mouseout(function () {
        $('.glassdesc-hover').hide()
    })
    //login page pr jo username dalte wo save hokr yaha ati 
    var username = localStorage.getItem('username')
    if (username) {
        $('#Username').text(username)
        $('#LogInB').hide()
        $('#dd').hide()
    }
    // else if (username1) {
    //     $('#Username').text(username1)
    //     $('#LogInB').hide()
    //     $('#dd').hide()
    // }
    else {
        $('#LogInB').show()
        localStorage.removeItem('username')
    }
    //logout krne se username hide hojata or login ka btn wapis ajata
    $('#LogOutB').click(function () {
        $('#Username').text('')
        $('#LogInB').show()
        localStorage.removeItem('username');
    })
    $('#Checkoutbtn').click(function () {
        $('#checkoutModal').modal('show');
    });

    $('#confirmCheckout').click(function () {
        $('#gbtbox').slideDown()
        $('#gbtbox').animate({
            left: '50%'
        }, 500)
        $('#checkoutModal').modal('hide');
        checkout()
        $('#default-cart').show()
        $('#patanhiyekiohai').hide()
        $('.numbertext').text('')
    })
    hider()
    $('#themeSwitch').click(function () {
        $('body').toggleClass('dark-theme');
    })
    $('#gtcart').click(function () {
        $('#btbox').hide()
    })
    $('#gtlist').click(function () {
        $('#lbtbox').hide()
    })
    $('#crosbtn').click(function () {
        $('#btbox').hide()
    })
    $('#crossbtn').click(function () {
        $('#lbtbox').hide()
    })
    $('#crosssbtn').click(function () {
        $('#gbtbox').hide()
    })
    // VALIDATION FOR CONTACT PAGE 
    $(document).ready(function () {
        $("#supportForm").on("submit", function (event) {
            event.preventDefault();
            let name = $("#name").val().trim();
            let email = $("#email").val().trim();
            let contact = $("#contact").val().trim();
            let message = $("#message").val().trim();
            let errorMessage = "";
            if (name === "") {
                errorMessage = "Name is required.";
            } else if (!/^[a-zA-Z\s]+$/.test(name)) {
                errorMessage = "Name must contain only letters.";
            }
            if (errorMessage === "" && email === "") {
                errorMessage = "Email is required.";
            } else if (errorMessage === "" && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
                errorMessage = "Enter a valid Email address.";
            }
            if (errorMessage === "" && contact === "") {
                errorMessage = "Contact is required.";
            } else if (errorMessage === "" && !/^\d{11}$/.test(contact)) {
                errorMessage = "Contact must be exactly 11 digits.";
            }
            if (errorMessage === "" && message === "") {
                errorMessage = "Message is required.";
            } else if (errorMessage === "" && message.split(/\s+/).length < 5) {
                errorMessage = "Message must contain at least 5 words.";
            }
            if (errorMessage !== "") {
                $("#customModalMessage").text(errorMessage);
                $("#customValidationModal").fadeIn();
            } else {
                $("#customModalMessage").text("Your message has been submitted successfully.");
                $("#customValidationModal").fadeIn();

                setTimeout(() => {
                    this.submit();
                }, 2000);
            }
        });
        window.closeCustomModal = function () {
            $("#customValidationModal").fadeOut();
        };
    });
});
// GSAP FOR LANDING PAGE ONLY
gsap.from('.product-img-wrapper1', {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    stagger: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: 'card',
        start: "top 80%",
    }
});
gsap.from(".fw-bold", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    delay: 0.4,
});
gsap.from(".stars", {
    opacity: 0,
    y: -100,
    x: 100,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: "power2.out"
});
gsap.from(".me-3", {
    opacity: 0,
    y: 100,
    x: 100,
    duration: 1,
    delay: 0.4,
    stagger: 0.6,
    ease: "power2.out"
});
gsap.from(".glitch-wrapper", {
    opacity: 0,
    scale: 0.8,
    rotation: 150,
    duration: 1.2,
    ease: "back.out(1.7)",
});

gsap.from(".hero-title", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    delay: 1,
    ease: "elastic.out(1, 0.5)",
    yoyo: true,
    delay: 0.4,
});
gsap.from(".lead", {
    opacity: 0,
    y: -50,
    x: 100,
    rotationX: 90,
    duration: 1.5,
    ease: "power2.out",
    yoyo: true,
    delay: 0.4,
});
gsap.from(".btn-custom", {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.4,
});
gsap.from(".btn-custom1", {
    x: 300,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.4,
});