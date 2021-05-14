

var cards = [
	 {Q:'က', A:'ka', sound:'1-ka'}
	,{Q:'ခ', A:'Kha', sound:'2-kha'}
	,{Q:'ဂ', A:'Ga', sound:'3-ga'}
	,{Q:'ဃ', A:'Ga', sound:'4-ga'}
	,{Q:'င', A:'Nga', sound:'5-nga'} ]

var g1 = [
	 {Q:'က', A:'ka', sound:'1-ka'}
	,{Q:'ခ', A:'Kha', sound:'2-kha'}
	,{Q:'ဂ', A:'Ga', sound:'3-ga'}
	,{Q:'ဃ', A:'Ga', sound:'4-ga'}
	,{Q:'င', A:'Nga', sound:'5-nga'} ]
var g2 = [
	{Q:'စ', A:'Sa', sound:'6-sa'}
	,{Q:'ဆ', A:'Sa', sound:'7-sa'}
	,{Q:'ဇ', A:'Za', sound:'8-za'}
	,{Q:'ဈ', A:'Za', sound:'9-za'}
	,{Q:'ည', A:'Nya', sound:'10-nya'} ]
var g3 = [
	{Q:'ဋ', A:'Ta', sound:'11-ta'}
	,{Q:'ဌ', A:'Hta', sound:'12-hta'}
	,{Q:'ဍ', A:'Da', sound:'13-da'}
	,{Q:'ဎ', A:'Da', sound:'13-da'}
	,{Q:'ဏ', A:'Na', sound:'15-na'} ]
var g4 = [
	{Q:'တ', A:'Ta', sound:'11-ta'}
	,{Q:'ထ', A:'Hta', sound:'12-hta'}
	,{Q:'ဒ', A:'Da', sound:'13-da'}
	,{Q:'ဓ', A:'Da', sound:'14-da'}
	,{Q:'န', A:'Na', sound:'15-na'}
	,{Q:'ပ', A:'Pa', sound:'21-pa'} ]
var g5 = [
	{Q:'ဖ', A:'Pha', sound:'22-pha'}
	,{Q:'ဗ', A:'Ba', sound:'23-ba'}
	,{Q:'ဘ', A:'Ba', sound:'24-ba'}
	,{Q:'မ', A:'Ma', sound:'25-ma'}
	,{Q:'ယ', A:'Ya', sound:'26-ya'}
	,{Q:'ရ', A:'Ra', sound:'27-ra'} ]
var g6 = [
	{Q:'လ', A:'La', sound:'28-la'}
	,{Q:'ဝ', A:'Wa', sound:'29-wa'}
	,{Q:'သ', A:'Tha', sound:'30-tha'}
	,{Q:'ဟ', A:'Ha', sound:'31-ha'}
	,{Q:'ဠ', A:'La', sound:'32-la'}
	,{Q:'အ', A:'Aa', sound:'33-aa'} ]
var numbers = [
	 {Q:'၀', A:'Zero<br>Thoun nya', sound:'Zero'}
	,{Q:'၁', A:'One<br>Tit', sound:'One'}
	,{Q:'၂', A:'Two<br>Nit', sound:'Two'}
	,{Q:'၃', A:'Three<br>Thoun', sound:'Three'}
	,{Q:'၄', A:'Four<br>Ley', sound:'Four'}
	,{Q:'၅', A:'Five<br>Nga', sound:'Five'}
	,{Q:'၆', A:'Six<br>Chou', sound:'Six'}
	,{Q:'၇', A:'Seven<br>Ku Nit', sound:'Seven'}
	,{Q:'၈', A:'Eight<br>Shi.', sound:'Eight'}
	,{Q:'၉', A:'Nine<br>Cooo:', sound:'Nine'}
	,{Q:'၁၀', A:'Ten<br>Te-se', sound:'Ten'} ]
	// ,{Q:'', A:'', sound:''}
	// ,{Q:'', A:'', sound:''}
	// ,{Q:'', A:'', sound:''}


var Actions1 = [
	 {Q:'ကောင်း', A:'Good - kaun:', sound:'good'}
	,{Q:'စား', A:'Eat - sa:', sound:'eat'}
	,{Q:'သွား', A:'Go - thwa:', sound:'go'}
	,{Q:'လာ', A:'Come - la', sound:'come'}
	,{Q:'ဖတ်', A:'Read - hpeq', sound:'read'}

	,{Q:'ပေး', A:'Give- pei: / bei:', sound:'give'}
	,{Q:'ရှိ', A:'to have - shi', sound:'have'}
	,{Q:'လေ့လာ', A:'study / learn - lei.-la', sound:'learn'}
	,{Q:'သိ', A:'know - thi.', sound:'know'}
	,{Q:'‌ပြော', A:'speak / say / tell - twei.', sound:'say'}

	,{Q:'တွေ့', A:'meet / find / see - pyaw.', sound:'see'}
	,{Q:'နားထောင်', A:'listen - na:-htaun', sound:'listen'}
	,{Q:'ချင်', A:'want - chin', sound:'want'}
	,{Q:'ကူညီ ', A:'help - ', sound:'help'}
	,{Q:'ချစ်တဘ်', A:'love - ', sound:'love'} ]

var Actions2 = [
	 {Q:'ပြန်', A:'To go back / return /again - byan / pyan. (pronounced between a “p” and “b”)', sound:'return'}
	,{Q:'လုပ်', A:'to work, to do - lote', sound:'work'}
	,{Q:'သင်ယူ', A:'Learn - thin-yu', sound:'Learn'}
	,{Q:'သင်', A:'Study - thin', sound:'Study'}
	,{Q:'ယူ', A:'Take - yu', sound:'Take'}

	,{Q:'ရှင်းပြ', A:'Explain - shin:-pya.', sound:'Explain'}
	,{Q:'ရှင်း', A:'Clear - shin:', sound:'Clear'}
	,{Q:'ပြ', A:'Show - pya.', sound:'Show'}
	,{Q:'သင်ပေး', A:'teach - thin - bey:', sound:'teach'}
	,{Q:'နားလည်', A:'understand - nah:- leh', sound:'understand'}

	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'လို', A:'need - lo', sound:'need'}
	,{Q:'ယုံ', A:'believe - yone', sound:'believe'} ]

var Actions3 = [
	 {Q:'ကြည့်', A:'look - gyi.', sound:'look'}
	,{Q:'ရောက်', A:'arrive - yout / yowt', sound:'arrive'}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}

	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''} ]
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var People1 = [
	 {Q:'ညီကိ', A:'brother - nyi-ko', sound:'brother'}
	,{Q:'ညီမ', A:'sister - nyi-ma', sound:'sister'}
	,{Q:'မိသားစု', A:'Family - mee tha: zu', sound:'Family'}
	,{Q:'ကလေး', A:'baby - ka-lay / c’-lay', sound:'baby'}
	,{Q:'အမေ', A:'mother - ah.-mey', sound:'mother'}

	,{Q:'အဖေ', A:'father - ah.-pey', sound:'father'}
	,{Q:'သား', A:'son - tha:', sound:'son'}
	,{Q:'သမီး', A:'daughter - tha-mee:', sound:'daughter'}
	,{Q:'သားသမီး', A:'children - tha:-tha-mee:', sound:'children'}
	,{Q:'မိတ်ဆွေ', A:'friend - mate-sway', sound:'friend'}

	,{Q:'လူ', A:'person - lu', sound:'person'}
	,{Q:'လူတွေ', A:'people - lu-dwey', sound:'people'}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''}
	,{Q:'', A:'', sound:''} ]
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var Things1 = [
	 {Q:'လက်‌‌ဆေင်', A:'gift - leq-hsaun', sound:'gift'}
	,{Q:'စာအုပ်', A:'book - sa-ouq', sound:'book'}
	,{Q:'အခန်း', A:'room / chapter - a-khan:', sound:'room'}
	,{Q:'နာရီ', A:'clock - na-yi', sound:'clock'}
	,{Q:'ထမင်း', A:'rice - hta-min', sound:'rice'}


	,{Q:'လက်', A:'hand - leq', sound:'hand'}
	,{Q:'အစည်းအ‌ဝေး', A:'meeting - ă-si.-ă-wei:', sound:'meeting'}
	,{Q:'စာပိုဒ်', A:'paragraph - sa-baiq / sa-bite', sound:'paragraph'}
	,{Q:'မေးခွန်', A:'questions - mei:-gun: / mei:-koon:', sound:'questions'}
	,{Q:'အဖြေ', A:'answer - ă-hpyei', sound:'answer'}
	
	,{Q:'အခန်းငယ်', A:'verse - ă-hkan:-ngeh', sound:'verse'}
	,{Q:'သတင်', A:'news - tha.-din:', sound:'news'}
	// ,{Q:'', A:'', sound:''}
	// ,{Q:'', A:'', sound:''}
	// ,{Q:'', A:'', sound:''} 
	]













var items = [
	 {item:g1, name:'g1', selected:true}
	,{item:g2, name:'g2', selected:false}
	,{item:g3, name:'g3', selected:false}
	,{item:g4, name:'g4', selected:false}
	,{item:g5, name:'g5', selected:false}
	,{item:g6, name:'g6', selected:false}
	,{item:numbers, name:'numbers', selected:false}

	,{item:Things1, name:'Things1', selected:false}
	// ,{item:Things2, name:'Things1', selected:false}
	// ,{item:Things3, name:'Things1', selected:false}

	,{item:Actions1, name:'Actions1', selected:false}
	,{item:Actions2, name:'Actions2', selected:false}
	,{item:Actions3, name:'Actions2', selected:false}

	,{item:People1, name:'People1', selected:false}
	// ,{item:Animals, name:'Animals', selected:false}
	// ,{item:'', selected:false}
	// ,{item:'', selected:false}
	// ,{item:'', selected:false}
	// ,{item:'', selected:false}
	// ,{item:'', selected:false}
	// ,
	]