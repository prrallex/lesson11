var data = {
	defaultLanguage: 'ua',
	dictionary:{
		en: {
			name: "Your name",
			namePlaceholder: "Input your name",
			gender: "Choose your gender",
			genderMale: "Male",
			genderFemale: "Female",
			countryWrapper: "Choose country where you live",
			countries: {
				ua: "Ukraine",
				fr: "France",
				us: "USA",
				br: "Brasil"
			},
			isShowBornCountry: "The country where you live and the country where you were born are the same?",
			bornCountryWrapper: "Choose country where you born",
			email:	"Your email",
			emailPlaceholder: "Input your email",
			buttonText: "Send"
		},
		ua: {
			name: "Ваше ім'я",
			namePlaceholder: "введіть ваше ім'я",
			gender: "Статть",
			genderMale: "М",
			genderFemale: "Ж",
			countryWrapper: "Виберіть місце де ви родились",
			countries: {
				ua: "Україна",
				fr: "Франція",
				us: "США",
				br: "Бразилія"
			},
			isShowBornCountry: "Ваше місце нарождення і місце вашого проживання рівні? ",
			bornCountryWrapper: "Місце вашого народження",
			email:	"Електронна адреса",
			emailPlaceholder: "введіть свою електронну адресу",
			buttonText: "Відправити"
		}
	}
}
$(".language-image").click(function(event) {
	currentLanguage = $(this).attr('data-lang')
	$(".language-image").removeClass('active')
	$(this).addClass('active');
	console.log(currentLanguage)
	setFormValue();
});

function setFormValue(){
	var dict = data.dictionary[currentLanguage]
		$("#name .description").text(dict.name);
	$("#name input").attr('placeholder', dict.namePlaceholder);

		$("#email .description").text(dict.email);
	$("#email input").attr('placeholder', dict.namePlaceholder);

		$("#gender .description").text(dict.gender);
	$("#gender input").attr('placeholder', dict.namePlaceholder);

		$("#gender .description").text(dict.gender);
	$("#male").text(dict.genderMale);
	$("#female").text(dict.genderFemale);

		$("#country_wrapper .description").text(dict.countryWrapper);
	$("country option").attr('value',dict.countries);




		$("#isShowBornCountry .description").text(dict.gender);

	$("#country option").each(function(index, el){	
		var currentVal = $("#country option").eq(index).val()
		$("#country option").eq(index).text(dict.countries[currentVal])
	});

}

var currentLanguage = data.defaultLanguage;
setFormValue();