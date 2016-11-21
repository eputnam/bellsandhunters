var members = [
    {
        "name": "Keith",
        "instrument": "guitar, vocals",
        "dates": "current"
    },
    {
        "name": "Kelly",
        "instrument": "vocals",
        "dates": "current"
    },
    {
        "name": "Joe",
        "instrument": "lead guitar",
        "dates": "current"
    },
    {
        "name": "Guido",
        "instrument": "drums",
        "dates": "current"
    },
    {
        "name": "Avi",
        "instrument": "bass guitar",
        "dates": "current"
    },
    {
        "name": "Eric",
        "instrument": "bass guitar",
        "dates": "2012-2015"
    },
    {
        "name": "Igor",
        "instrument": "lead guitar",
        "dates": "2011-2014"
    },
    {
        "name": "Terry",
        "instrument": "drums",
        "dates": "2011-2013"
    },
    {
        "name": "Cliff",
        "instrument": "bass guitar",
        "dates": "2009-2012"
    },
    {
        "name": "Nate",
        "instrument": "guitar, harmonica",
        "dates": "2008-2011"
    },
    {
        "name": "Kurt",
        "instrument": "drums",
        "dates": "2009-2011"
    },
    {
        "name": "Orind",
        "instrument": "lead guitar",
        "dates": "2009-2010"
    }
]

//USED TO OPEN SECTIONS OF THE SITE, INCLUDES fadeIt()
function openSection(header, section) {
	fadeIt(header);
	$(header).click(function () {
		$(section).toggle('slow');
	});
}

//USED FOR FADING HEADERS
function fadeIt(header) {
	$(header).hover(
		function () {
		$(this).fadeTo('fast','.7');
	},
	function () {
		$(this).fadeTo('fast','1');
	});
}

//SHOWS LIGHTBOX FOR BAND MEMBER
function showLightBox(member,cbox){
    $(member).click(function() {
        $(cbox).colorbox({rel: cbox, maxHeight:'90%', maxWidth:'45%'});
    })
}

//IN PROGRESS...
function picBox(member,col_id, img1, img2, img3) {
	$(member).click(function () {
		$(this).fadeToggle('fast');
		$(this).prev().toggle('fast');
		$(col_id)
			.append("<a class='pic_cbox' href="+img1+" title='pictures courtesy of Roxplosion'><img src="+img1+"></a>")
			.append("<a class='pic_cbox' href="+img2+" title='pictures courtesy of Roxplosion'><img src="+img2+"></a>")
			.append("<a class='pic_cbox' href="+img3+" title='pictures courtesy of Roxplosion'><img src="+img3+"></a>");
		$('.pic_cbox').colorbox({transition:'fade',width:'30%',height:'70%'});
	});

    $('.backarrow').hover(
        function() {
            $(this).attr('src','img/backarrow.png');
        },
        function () {
            $(this).attr('src','img/backarrow_grey.png');
        }
    );

	$('.backarrow').click(function () {
		$(this).toggle('fast');
		$('.pic_cbox').remove();
		$(member).fadeToggle('slow');
	});
}


function getMembersArray(currentOrPast) {
    membersArray = [];

    switch(currentOrPast.toLowerCase()) {
        case "current":
            $.each(members, function(key, member) {
                if(member["dates"].toLowerCase() == "current"){
                    membersArray.push(members[key]);
                }
            });
            break;
        case "past":
            $.each(members, function(key, member) {
                if(member["dates"].toLowerCase() != "current"){
                    membersArray.push(members[key]);
                }
            });
            break;
        default:
            console.log("could not build member list");
    }

    return membersArray;

}

function showCurrentMembers() {
    var membersArray = getMembersArray('current');

    $.each(membersArray, function(key, member){
        var name = member["name"].toLowerCase();
        var inst = member["instrument"];
        var currentMemberBlock = " \
            <div class='div_memberdiv' id='div_" + name + "'> \
            <div class='div_membername'> \
            <h3>" + name.toUpperCase() + "</h3> \
            </div> \
            <div class='div_memberpic'> \
            <a class='cbox_" + name + "' href='img/people/" + name + "1.jpg'><img class='img_memberpic' src='img/people/" + name + "1.jpg'></a> \
            <a class='cbox_" + name + "' href='img/people/" + name + "2.jpg'></a> \
            <a class='cbox_" + name + "' href='img/people/" + name + "3.jpg'></a> \
            <a class='cbox_" + name + "' href='img/people/" + name + "4.jpg'></a> \
            <a class='cbox_" + name + "' href='img/people/" + name + "5.jpg'></a> \
            </div> \
            <div class='div_memberinst'> \
            " + inst + " \
            </div> \
            </div> \
            ";
        $("#section_current_members").append(currentMemberBlock);

    })

}

function showExtendedFamily() {
    var membersArray = getMembersArray('past');

    $.each(membersArray, function(key,member){
        var name = member['name'].toLowerCase();
        var inst = member['instrument'].toLowerCase();
        var dates = member['dates'];

        var extendedFamilyBlock = " \
            <div class='div_memberdiv' id='div_" + name + "'> \
            <div class='div_membername'> \
            <h3>" + name.toUpperCase() + "</h3> \
            </div> \
            <div class='div_memberpic'> \
            <img class='img_memberpic' src='img/people/" + member["name"].toLowerCase() + "1.jpg'></a> \
            </div> \
            <div class='div_memberinst'> \
            " + inst + " \
            </div> \
            <div> \
            " + dates + " \
            </div> \
            </div> \
            ";
        $("#section_past_members").append(extendedFamilyBlock);
    })
}

//SELECTS RANDOM PRESS QUOTES AND DISPLAYS THEM, ALSO DISPLAYS REMAINING QUOTES ON DEMAND
function selectPress() {
    var $press1 = $("<li class='press_quote'>\"This one scores very high on the likability index " +
        "with an above average height on the quality scale and should be worth a listen for " +
        "fans of straight up American roots rock music.\"</li><li class='press_source'>" +
        "<a href='http://dcrocklive.blogspot.com/2013/03/record-reviews-march-2013.html' target='_blank'>- David Hintz, DC Rock Live</a></li>");

    var $press2 = $("<li class='press_quote'>\“Finally, something is working in " +
        "DC\”</li><li class='press_source'><a href='http://issuu.com/fourculture/docs/fourculture_issue_8/90' target='_blank'>- Serena Bulter, fourculture magazine</a></li>");

    var $press3 = $("<li class='press_quote'>\“Expanding on their garage-rock meets Americana sound, Weddings and Funerals " +
        "features haunting lyrics, music rooted in blues and folk, and melodic, soulful vocal work.\”</li>" +
        "<li class='press_source'><a href='http://www.riffraf.net/2013/05/indie-spotlight-bells-and-hunters/' target='_blank'>- Elford Alley, riffraff.net</a></li>");

    var $press4 = $("<li class='press_quote'>\“Bells and Hunters has managed to create an album that walks a perfect line of " +
        "glorious angst…that feeling of emotion, tension, and perhaps resignation as you realize that perhaps things aren’t " +
        "what you thought they were and it’s time to move on.\”</li><li class='press_source'>" +
        "<a href='http://fourculture.com/mind/a-perfect-line-of-glorious-angst-bells-and-hunters/' target='_blank'>- Paula Frank, fourculture magazine</a></li>");

    var $press5 = $("<li class='press_quote'>\“Bells and Hunters wastes no time announcing that they are something different.\”</li>" +
        "<li class='press_source'><a href='http://independentclauses.com/bells-and-hunters-time-travels/' target='_blank'>- Stephen Carradini, IndependentClauses.com</a></li>");

    var $press6 = $("<li class='press_quote'>\“The Deli Magazine Artist of the Month April 2013\”</li><li class='press_source'>" +
        "<a href='http://washington.thedelimagazine.com/13576/interview-bells-and-hunters-dc-delis-band-month-april' target='_blank'>- The Deli Magazine</a></li>");

    var $press7 = $("<li class='press_quote'>\"Adele-styled vocals with genuine emotion...strong, fast-paced rock....tight construction in the " +
        "songs....not a note out of place.\"</li><li class='press_source'><a href='http://dcmusicdownload.com/2012/10/11/stpp-fest-part-1-black-squirrel-10-5-12/' target='_blank'>" +
        "- Clay Conger, dcmusicdownload.com</a></li>");

    var $press8 = $("<li class='press_quote'>\"Bluesy rock with plenty of funk moves and other sonic shifts......effectively creates a " +
        "rock environment perfect for weekend rockers wanting to cut loose.\"</li><li class='press_source'>" +
        "<a href='http://dcrocklive.blogspot.com/2012/05/council-bluffs-bells-hunters-resistance.html' target='_blank'>- David Hintz, DC Rock Live Reviews</a></li>");

    var $press9 = $("<li class='press_quote'>\"This fine local band has even become sharper and more on the mark than ever.\"</li><li class='press_source'>" +
        "<a href='http://dcrocklive.blogspot.com/2015/06/bells-and-hunters-hank-cupcakes-uptown.html' target='_blank'>- David Hintz, DC Rock Live Reviews</a></li>");
//  var $press9 = $("<li class='press_quote'>\"Best Local Band\" (3rd Place) - 2012 Washington City Paper " +
//        "'Best of DC' Annual Readers Poll</li><li class='press_source'>- Washington City Paper</li>");
//
//  var $press11 = $("<li class='press_quote'>\“B&H's new EP takes you for a ride - Kelly's vocal style is part soul, part Nashville, " +
//        "but totally captivating. Tracks 1-3 find you foot tapping, smiling, and happy. Then Morning Biscuit comes on and slaps you in the " +
//        "face - Fischer's hard-charging vocals take you to a different place, with the solid guitar licks and crunches. This is an eclectic " +
//        "band that defies genres...they are on permanent rotation on my Itunes list and I look forward to more out of this talented band.\”</li>" +
//        "<li class='press_source'>- CDBaby.com Album Review</li>");
//  var $press12 = $("<li class='press_quote'>\“I received a preview of Stoplight and Party Host about a bit ago. The scuffed silk vocals " +
//        "blew me completely away. They were put into serious rotation and I've been jonesing for another hit since.\”</li>" +
//        "<li class='press_source'>- CDBaby.com Album Review</li>");

    var pressArray = [$press1,$press2,$press3,$press4,$press5,$press6,$press7,$press8,$press9];
    var selectArray = [];

    for (i=0; i<4; i++) {
        var x = Math.floor(Math.random() * (pressArray.length));
        selectArray.push(x);
        do{
            x = Math.floor(Math.random() * (pressArray.length));
        } while($.contains(x,selectArray));
        console.log(selectArray);
        $('#list_press')
            .prepend(pressArray[x]);

        }

    var remainingArray= [];

    for(x in pressArray){
        if($.contains(x,selectArray)){
            break;
        } else {
            remainingArray.push(pressArray[x]);
        }
    }

    $('#title_morepress').click(function () {
        $('#title_morepress').toggle();

        for (i=0;i<remainingArray.length;i++){
            $('#list_press')
                .prepend(remainingArray[i]);
        }
    })

    fadeIt('.press_source');


}

//////////////////////////
///////BEGIN SITE/////////
//////////////////////////

$(document).ready(function() {
	$('#bio_theband').hide();
//	$('.backarrow').hide();



    showCurrentMembers();
    showExtendedFamily();

    //THE BAND
	fadeIt('#title_theband');
    $('#title_theband').click(function() {
		$('#bio_theband').toggle('slow');
        $('#list_theband').toggle('slow');
    });


    showLightBox('#div_keith','.cbox_keith');
    showLightBox('#div_kelly','.cbox_kelly');
    showLightBox('#div_joe','.cbox_joe');
    showLightBox('#div_avi','.cbox_avi');
    showLightBox('#div_guido','.cbox_guido');

    $('#view_extband').click(function() {
		$('#view_extband').toggle('fast');
		$('#list_extband').toggle('slow');
    });
    $('#title_extband').click(function() {
		$('#view_extband').toggle('fast');
		$('#list_extband').toggle('slow');
    });
	//THE MUSIC

  selectPress();

	openSection('#title_themusic','#list_themusic');

	openSection('#title_sights','.content_sights');

	openSection('#title_sounds','#table_sounds');

  openSection('#title_thepress','#list_press');

	//THE SHOWS
	openSection('#title_theshows','.widget_iframe');

  openSection('#title_pastshows','#doc_widget')

	//THE MERCH
	openSection('#title_themerch','.titles_themerch');

	fadeIt('#title_shirts');

	fadeIt('#title_cds');


});
