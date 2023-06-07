var docCounter = 0;

function showDocument(action, character, driverLicense, license, badge, settings){
	++docCounter;
	var divId = "#"+docCounter;
	var divHeight = 0;
	// Character info
	if(settings === undefined) return;
	var sex = settings.maleLabel;
	var profileSrc = settings.male;
	var time = settings.time*1000;
	if(character.sex === "f") {
		sex = settings.femaleLabel;
		profileSrc = settings.female;
	}
	// Document creation
	var divToCreate = '<div class="show-document '+action+'" id="'+docCounter+'">';
	// Custom data
	if(action === "show_id"){
		var showSet = settings.show_id;
		if(showSet !== undefined){
			if(showSet.height !== undefined) divHeight = showSet.height;
			if(showSet.profile !== undefined){
				var profile = '<div class="document-text" style="top:'+showSet.profile.top+'px;left:'+showSet.profile.left+'px;"><img src="'+profileSrc+'" width="'+showSet.profile.width+'px" height="'+showSet.profile.height+'px"></div>';
				divToCreate = divToCreate + profile;
			}
			if(showSet.name !== undefined){
				var name = '<h'+showSet.name.size+' class="document-text" style="top:'+showSet.name.top+'px;left:'+showSet.name.left+'px;color:'+showSet.name.color+';">'+character.firstname+' '+character.lastname+'</h'+showSet.name.size+'>';
				divToCreate = divToCreate + name;
			}
			if(showSet.firstname !== undefined){
				var firstname = '<h'+showSet.firstname.size+' class="document-text" style="top:'+showSet.firstname.top+'px;left:'+showSet.firstname.left+'px;color:'+showSet.firstname.color+';">'+character.firstname+'</h'+showSet.firstname.size+'>';
				divToCreate = divToCreate + firstname;
			}
			if(showSet.lastname !== undefined){
				var lastname = '<h'+showSet.lastname.size+' class="document-text" style="top:'+showSet.lastname.top+'px;left:'+showSet.lastname.left+'px;color:'+showSet.lastname.color+';">'+character.lastname+'</h'+showSet.lastname.size+'>';
				divToCreate = divToCreate + lastname;
			}
			if(showSet.sex !== undefined){
				var sex = '<h'+showSet.sex.size+' class="document-text" style="top:'+showSet.sex.top+'px;left:'+showSet.sex.left+'px;color:'+showSet.sex.color+';">'+sex+'</h'+showSet.sex.size+'>';
				divToCreate = divToCreate + sex;
			}
			if(showSet.dateofbirth !== undefined){
				var dateofbirth = '<h'+showSet.dateofbirth.size+' class="document-text" style="top:'+showSet.dateofbirth.top+'px;left:'+showSet.dateofbirth.left+'px;color:'+showSet.dateofbirth.color+';">'+character.dateofbirth+'</h'+showSet.dateofbirth.size+'>';
				divToCreate = divToCreate + dateofbirth;
			}
			if(showSet.heightChar !== undefined){
				var heightChar = '<h'+showSet.heightChar.size+' class="document-text" style="top:'+showSet.heightChar.top+'px;left:'+showSet.heightChar.left+'px;color:'+showSet.heightChar.color+';">'+character.height+'</h'+showSet.heightChar.size+'>';
				divToCreate = divToCreate + heightChar;
			}
			if(showSet.signature !== undefined){
				var signatureText = character.firstname + " " + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname.charAt(0);
				var signature = '<h'+showSet.signature.size+' class="document-text document-text-signature" style="top:'+showSet.signature.top+'px;left:'+showSet.signature.left+'px;color:'+showSet.signature.color+';">'+signatureText+'</h'+showSet.signature.size+'>';
				divToCreate = divToCreate + signature;
			}
			if(showSet.job !== undefined){
				var job = '<h'+showSet.job.size+' class="document-text" style="top:'+showSet.job.top+'px;left:'+showSet.job.left+'px;color:'+showSet.job.color+';">'+character.job+'</h'+showSet.job.size+'>';
				divToCreate = divToCreate + job;
			}
			if(showSet.job_grade !== undefined){
				var job_grade = '<h'+showSet.job_grade.size+' class="document-text" style="top:'+showSet.job_grade.top+'px;left:'+showSet.job_grade.left+'px;color:'+showSet.job_grade.color+';">'+character.job_grade+'</h'+showSet.job_grade.size+'>';
				divToCreate = divToCreate + job_grade;
			}
			if(showSet.phone_number !== undefined){
				var phone_number = '<h'+showSet.phone_number.size+' class="document-text" style="top:'+showSet.phone_number.top+'px;left:'+showSet.phone_number.left+'px;color:'+showSet.phone_number.color+';">'+character.phone_number+'</h'+showSet.phone_number.size+'>';
				divToCreate = divToCreate + phone_number;
			}
			for(var i=0; i < driverLicense.length; i++){
				var lic = driverLicense[i]
				var allow = '<span style="color:red;">'+settings.no+'</span>';
				if(lic.allow) allow = '<span style="color:lightgreen;">'+settings.yes+'</span>';
				var driver_license = lic.type;
				if(showSet[lic.type] !== undefined){
					var driver_license = '<h'+showSet[lic.type].size+' class="document-text" style="top:'+showSet[lic.type].top+'px;left:'+showSet[lic.type].left+'px;color:'+showSet[lic.type].color+';"><i class="'+showSet[lic.type].font_awesome+'"></i> '+allow+'</h'+showSet[lic.type].size+'>';
					divToCreate = divToCreate + driver_license;
				}
			}
		}
	}
	if(action === "show_driver_license"){
		var showSet = settings.show_driver_license;
		if(showSet !== undefined){
			if(showSet.height !== undefined) divHeight = showSet.height;
			if(showSet.profile !== undefined){
				var profile = '<div class="document-text" style="top:'+showSet.profile.top+'px;left:'+showSet.profile.left+'px;"><img src="'+profileSrc+'" width="'+showSet.profile.width+'px" height="'+showSet.profile.height+'px"></div>';
				divToCreate = divToCreate + profile;
			}
			if(showSet.name !== undefined){
				var name = '<h'+showSet.name.size+' class="document-text" style="top:'+showSet.name.top+'px;left:'+showSet.name.left+'px;color:'+showSet.name.color+';">'+character.firstname+' '+character.lastname+'</h'+showSet.name.size+'>';
				divToCreate = divToCreate + name;
			}
			if(showSet.firstname !== undefined){
				var firstname = '<h'+showSet.firstname.size+' class="document-text" style="top:'+showSet.firstname.top+'px;left:'+showSet.firstname.left+'px;color:'+showSet.firstname.color+';">'+character.firstname+'</h'+showSet.firstname.size+'>';
				divToCreate = divToCreate + firstname;
			}
			if(showSet.lastname !== undefined){
				var lastname = '<h'+showSet.lastname.size+' class="document-text" style="top:'+showSet.lastname.top+'px;left:'+showSet.lastname.left+'px;color:'+showSet.lastname.color+';">'+character.lastname+'</h'+showSet.lastname.size+'>';
				divToCreate = divToCreate + lastname;
			}
			if(showSet.sex !== undefined){
				var sex = '<h'+showSet.sex.size+' class="document-text" style="top:'+showSet.sex.top+'px;left:'+showSet.sex.left+'px;color:'+showSet.sex.color+';">'+sex+'</h'+showSet.sex.size+'>';
				divToCreate = divToCreate + sex;
			}
			if(showSet.dateofbirth !== undefined){
				var dateofbirth = '<h'+showSet.dateofbirth.size+' class="document-text" style="top:'+showSet.dateofbirth.top+'px;left:'+showSet.dateofbirth.left+'px;color:'+showSet.dateofbirth.color+';">'+character.dateofbirth+'</h'+showSet.dateofbirth.size+'>';
				divToCreate = divToCreate + dateofbirth;
			}
			if(showSet.heightChar !== undefined){
				var heightChar = '<h'+showSet.heightChar.size+' class="document-text" style="top:'+showSet.heightChar.top+'px;left:'+showSet.heightChar.left+'px;color:'+showSet.heightChar.color+';">'+character.height+'</h'+showSet.heightChar.size+'>';
				divToCreate = divToCreate + heightChar;
			}
			if(showSet.signature !== undefined){
				var signatureText = character.firstname + " " + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname.charAt(0);
				var signature = '<h'+showSet.signature.size+' class="document-text document-text-signature" style="top:'+showSet.signature.top+'px;left:'+showSet.signature.left+'px;color:'+showSet.signature.color+';">'+signatureText+'</h'+showSet.signature.size+'>';
				divToCreate = divToCreate + signature;
			}
			if(showSet.job !== undefined){
				var job = '<h'+showSet.job.size+' class="document-text" style="top:'+showSet.job.top+'px;left:'+showSet.job.left+'px;color:'+showSet.job.color+';">'+character.job+'</h'+showSet.job.size+'>';
				divToCreate = divToCreate + job;
			}
			if(showSet.job_grade !== undefined){
				var job_grade = '<h'+showSet.job_grade.size+' class="document-text" style="top:'+showSet.job_grade.top+'px;left:'+showSet.job_grade.left+'px;color:'+showSet.job_grade.color+';">'+character.job_grade+'</h'+showSet.job_grade.size+'>';
				divToCreate = divToCreate + job_grade;
			}
			if(showSet.phone_number !== undefined){
				var phone_number = '<h'+showSet.phone_number.size+' class="document-text" style="top:'+showSet.phone_number.top+'px;left:'+showSet.phone_number.left+'px;color:'+showSet.phone_number.color+';">'+character.phone_number+'</h'+showSet.phone_number.size+'>';
				divToCreate = divToCreate + phone_number;
			}
			for(var i=0; i < driverLicense.length; i++){
				var lic = driverLicense[i]
				var allow = '<span style="color:red;">'+settings.no+'</span>';
				if(lic.allow) allow = '<span style="color:lightgreen;">'+settings.yes+'</span>';
				var driver_license = lic.type;
				if(showSet[lic.type] !== undefined){
					var driver_license = '<h'+showSet[lic.type].size+' class="document-text" style="top:'+showSet[lic.type].top+'px;left:'+showSet[lic.type].left+'px;color:'+showSet[lic.type].color+';"><i class="'+showSet[lic.type].font_awesome+'"></i> '+allow+'</h'+showSet[lic.type].size+'>';
					divToCreate = divToCreate + driver_license;
				}
			}
		}
	}
	var cardBgSrc = null
	if(action === "show_card"){
		cardBgSrc = "/html/img/show_card.png";
		if(settings.show_card === undefined) return;
		var showSet = settings.show_card.default;
		if(showSet !== undefined){
			if(settings.show_card[character.job_name] !== undefined){
				showSet = settings.show_card[character.job_name];
				cardBgSrc = "/html/img/show_card_"+character.job_name+".png";
			} 
			if(showSet.height !== undefined) divHeight = showSet.height;
			if(showSet.logo !== undefined){
				var logoSrc = "/html/img/logo/"+character.job_name+".png";
				var logo = '<div class="document-text" style="top:'+showSet.logo.top+'px;left:'+showSet.logo.left+'px;"><img src="'+logoSrc+'" width="'+showSet.logo.width+'px" height="'+showSet.logo.height+'px"></div>';
				divToCreate = divToCreate + logo;
			}
			if(showSet.profile !== undefined){
				var profile = '<div class="document-text" style="top:'+showSet.profile.top+'px;left:'+showSet.profile.left+'px;"><img src="'+profileSrc+'" width="'+showSet.profile.width+'px" height="'+showSet.profile.height+'px"></div>';
				divToCreate = divToCreate + profile;
			}
			if(showSet.name !== undefined){
				var name = '<h'+showSet.name.size+' class="document-text" style="top:'+showSet.name.top+'px;left:'+showSet.name.left+'px;color:'+showSet.name.color+';">'+character.firstname+' '+character.lastname+'</h'+showSet.name.size+'>';
				divToCreate = divToCreate + name;
			}
			if(showSet.firstname !== undefined){
				var firstname = '<h'+showSet.firstname.size+' class="document-text" style="top:'+showSet.firstname.top+'px;left:'+showSet.firstname.left+'px;color:'+showSet.firstname.color+';">'+character.firstname+'</h'+showSet.firstname.size+'>';
				divToCreate = divToCreate + firstname;
			}
			if(showSet.lastname !== undefined){
				var lastname = '<h'+showSet.lastname.size+' class="document-text" style="top:'+showSet.lastname.top+'px;left:'+showSet.lastname.left+'px;color:'+showSet.lastname.color+';">'+character.lastname+'</h'+showSet.lastname.size+'>';
				divToCreate = divToCreate + lastname;
			}
			if(showSet.sex !== undefined){
				var sex = '<h'+showSet.sex.size+' class="document-text" style="top:'+showSet.sex.top+'px;left:'+showSet.sex.left+'px;color:'+showSet.sex.color+';">'+sex+'</h'+showSet.sex.size+'>';
				divToCreate = divToCreate + sex;
			}
			if(showSet.dateofbirth !== undefined){
				var dateofbirth = '<h'+showSet.dateofbirth.size+' class="document-text" style="top:'+showSet.dateofbirth.top+'px;left:'+showSet.dateofbirth.left+'px;color:'+showSet.dateofbirth.color+';">'+character.dateofbirth+'</h'+showSet.dateofbirth.size+'>';
				divToCreate = divToCreate + dateofbirth;
			}
			if(showSet.heightChar !== undefined){
				var heightChar = '<h'+showSet.heightChar.size+' class="document-text" style="top:'+showSet.heightChar.top+'px;left:'+showSet.heightChar.left+'px;color:'+showSet.heightChar.color+';">'+character.height+'</h'+showSet.heightChar.size+'>';
				divToCreate = divToCreate + heightChar;
			}
			if(showSet.signature !== undefined){
				var signatureText = character.firstname + " " + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname.charAt(0);
				var signature = '<h'+showSet.signature.size+' class="document-text document-text-signature" style="top:'+showSet.signature.top+'px;left:'+showSet.signature.left+'px;color:'+showSet.signature.color+';">'+signatureText+'</h'+showSet.signature.size+'>';
				divToCreate = divToCreate + signature;
			}
			if(showSet.job !== undefined){
				var job = '<h'+showSet.job.size+' class="document-text" style="top:'+showSet.job.top+'px;left:'+showSet.job.left+'px;color:'+showSet.job.color+';">'+character.job+'</h'+showSet.job.size+'>';
				divToCreate = divToCreate + job;
			}
			if(showSet.job_grade !== undefined){
				var job_grade = '<h'+showSet.job_grade.size+' class="document-text" style="top:'+showSet.job_grade.top+'px;left:'+showSet.job_grade.left+'px;color:'+showSet.job_grade.color+';">'+character.job_grade+'</h'+showSet.job_grade.size+'>';
				divToCreate = divToCreate + job_grade;
			}
			if(showSet.phone_number !== undefined){
				var phone_number = '<h'+showSet.phone_number.size+' class="document-text" style="top:'+showSet.phone_number.top+'px;left:'+showSet.phone_number.left+'px;color:'+showSet.phone_number.color+';">'+character.phone_number+'</h'+showSet.phone_number.size+'>';
				divToCreate = divToCreate + phone_number;
			}
			for(var i=0; i < driverLicense.length; i++){
				var lic = driverLicense[i]
				var allow = '<span style="color:red;">'+settings.no+'</span>';
				if(lic.allow) allow = '<span style="color:lightgreen;">'+settings.yes+'</span>';
				var driver_license = lic.type;
				if(showSet[lic.type] !== undefined){
					var driver_license = '<h'+showSet[lic.type].size+' class="document-text" style="top:'+showSet[lic.type].top+'px;left:'+showSet[lic.type].left+'px;color:'+showSet[lic.type].color+';"><i class="'+showSet[lic.type].font_awesome+'"></i> '+allow+'</h'+showSet[lic.type].size+'>';
					divToCreate = divToCreate + driver_license;
				}
			}
		}
	}
	var licenseBgSrc = null
	if(action === "show_license"){
		licenseBgSrc = "/html/img/show_license.png";
		if(settings.show_license === undefined) return;
		var showSet = settings.show_license.default;
		if(showSet !== undefined){
			if(settings.show_license[license.type] !== undefined) {
				showSet = settings.show_license[license.type];
				licenseBgSrc = "/html/img/show_license_"+license.type+".png";
			}
			if(showSet.height !== undefined) divHeight = showSet.height;
			if(showSet.profile !== undefined){
				var profile = '<div class="document-text" style="top:'+showSet.profile.top+'px;left:'+showSet.profile.left+'px;"><img src="'+profileSrc+'" width="'+showSet.profile.width+'px" height="'+showSet.profile.height+'px"></div>';
				divToCreate = divToCreate + profile;
			}
			if(showSet.name !== undefined){
				var name = '<h'+showSet.name.size+' class="document-text" style="top:'+showSet.name.top+'px;left:'+showSet.name.left+'px;color:'+showSet.name.color+';">'+character.firstname+' '+character.lastname+'</h'+showSet.name.size+'>';
				divToCreate = divToCreate + name;
			}
			if(showSet.firstname !== undefined){
				var firstname = '<h'+showSet.firstname.size+' class="document-text" style="top:'+showSet.firstname.top+'px;left:'+showSet.firstname.left+'px;color:'+showSet.firstname.color+';">'+character.firstname+'</h'+showSet.firstname.size+'>';
				divToCreate = divToCreate + firstname;
			}
			if(showSet.lastname !== undefined){
				var lastname = '<h'+showSet.lastname.size+' class="document-text" style="top:'+showSet.lastname.top+'px;left:'+showSet.lastname.left+'px;color:'+showSet.lastname.color+';">'+character.lastname+'</h'+showSet.lastname.size+'>';
				divToCreate = divToCreate + lastname;
			}
			if(showSet.sex !== undefined){
				var sex = '<h'+showSet.sex.size+' class="document-text" style="top:'+showSet.sex.top+'px;left:'+showSet.sex.left+'px;color:'+showSet.sex.color+';">'+sex+'</h'+showSet.sex.size+'>';
				divToCreate = divToCreate + sex;
			}
			if(showSet.dateofbirth !== undefined){
				var dateofbirth = '<h'+showSet.dateofbirth.size+' class="document-text" style="top:'+showSet.dateofbirth.top+'px;left:'+showSet.dateofbirth.left+'px;color:'+showSet.dateofbirth.color+';">'+character.dateofbirth+'</h'+showSet.dateofbirth.size+'>';
				divToCreate = divToCreate + dateofbirth;
			}
			if(showSet.heightChar !== undefined){
				var heightChar = '<h'+showSet.heightChar.size+' class="document-text" style="top:'+showSet.heightChar.top+'px;left:'+showSet.heightChar.left+'px;color:'+showSet.heightChar.color+';">'+character.height+'</h'+showSet.heightChar.size+'>';
				divToCreate = divToCreate + heightChar;
			}
			if(showSet.signature !== undefined){
				var signatureText = character.firstname + " " + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname.charAt(0);
				var signature = '<h'+showSet.signature.size+' class="document-text document-text-signature" style="top:'+showSet.signature.top+'px;left:'+showSet.signature.left+'px;color:'+showSet.signature.color+';">'+signatureText+'</h'+showSet.signature.size+'>';
				divToCreate = divToCreate + signature;
			}
			if(showSet.job !== undefined){
				var job = '<h'+showSet.job.size+' class="document-text" style="top:'+showSet.job.top+'px;left:'+showSet.job.left+'px;color:'+showSet.job.color+';">'+character.job+'</h'+showSet.job.size+'>';
				divToCreate = divToCreate + job;
			}
			if(showSet.job_grade !== undefined){
				var job_grade = '<h'+showSet.job_grade.size+' class="document-text" style="top:'+showSet.job_grade.top+'px;left:'+showSet.job_grade.left+'px;color:'+showSet.job_grade.color+';">'+character.job_grade+'</h'+showSet.job_grade.size+'>';
				divToCreate = divToCreate + job_grade;
			}
			if(showSet.phone_number !== undefined){
				var phone_number = '<h'+showSet.phone_number.size+' class="document-text" style="top:'+showSet.phone_number.top+'px;left:'+showSet.phone_number.left+'px;color:'+showSet.phone_number.color+';">'+character.phone_number+'</h'+showSet.phone_number.size+'>';
				divToCreate = divToCreate + phone_number;
			}
			for(var i=0; i < driverLicense.length; i++){
				var lic = driverLicense[i]
				var allow = '<span style="color:red;">'+settings.no+'</span>';
				if(lic.allow) allow = '<span style="color:lightgreen;">'+settings.yes+'</span>';
				var driver_license = lic.type;
				if(showSet[lic.type] !== undefined){
					var driver_license = '<h'+showSet[lic.type].size+' class="document-text" style="top:'+showSet[lic.type].top+'px;left:'+showSet[lic.type].left+'px;color:'+showSet[lic.type].color+';"><i class="'+showSet[lic.type].font_awesome+'"></i> '+allow+'</h'+showSet[lic.type].size+'>';
					divToCreate = divToCreate + driver_license;
				}
			}
			if(showSet.license !== undefined){
				var lic = '<h'+showSet.license.size+' class="document-text" style="top:'+showSet.license.top+'px;left:'+showSet.license.left+'px;color:'+showSet.license.color+';">'+license.label+'</h'+showSet.license.size+'>';
				divToCreate = divToCreate + lic;
			}
		}
	}
	var badgeBgSrc = null
	if(action === "show_badge"){
		badgeBgSrc = "/html/img/show_badge.png";
		if(settings.show_badge === undefined) return;
		var showSet = settings.show_badge.default;
		if(showSet !== undefined){
			if(settings.show_badge[badge.job] !== undefined) {
				showSet = settings.show_badge[badge.job];
				badgeBgSrc = "/html/img/show_badge_"+badge.job+".png";
			}
			if(showSet.height !== undefined) divHeight = showSet.height;
			if(showSet.profile !== undefined){
				var profile = '<div class="document-text" style="top:'+showSet.profile.top+'px;left:'+showSet.profile.left+'px;"><img src="'+profileSrc+'" width="'+showSet.profile.width+'px" height="'+showSet.profile.height+'px"></div>';
				divToCreate = divToCreate + profile;
			}
			if(showSet.name !== undefined){
				var name = '<h'+showSet.name.size+' class="document-text" style="top:'+showSet.name.top+'px;left:'+showSet.name.left+'px;color:'+showSet.name.color+';">'+character.firstname+' '+character.lastname+'</h'+showSet.name.size+'>';
				divToCreate = divToCreate + name;
			}
			if(showSet.firstname !== undefined){
				var firstname = '<h'+showSet.firstname.size+' class="document-text" style="top:'+showSet.firstname.top+'px;left:'+showSet.firstname.left+'px;color:'+showSet.firstname.color+';">'+character.firstname+'</h'+showSet.firstname.size+'>';
				divToCreate = divToCreate + firstname;
			}
			if(showSet.lastname !== undefined){
				var lastname = '<h'+showSet.lastname.size+' class="document-text" style="top:'+showSet.lastname.top+'px;left:'+showSet.lastname.left+'px;color:'+showSet.lastname.color+';">'+character.lastname+'</h'+showSet.lastname.size+'>';
				divToCreate = divToCreate + lastname;
			}
			if(showSet.sex !== undefined){
				var sex = '<h'+showSet.sex.size+' class="document-text" style="top:'+showSet.sex.top+'px;left:'+showSet.sex.left+'px;color:'+showSet.sex.color+';">'+sex+'</h'+showSet.sex.size+'>';
				divToCreate = divToCreate + sex;
			}
			if(showSet.dateofbirth !== undefined){
				var dateofbirth = '<h'+showSet.dateofbirth.size+' class="document-text" style="top:'+showSet.dateofbirth.top+'px;left:'+showSet.dateofbirth.left+'px;color:'+showSet.dateofbirth.color+';">'+character.dateofbirth+'</h'+showSet.dateofbirth.size+'>';
				divToCreate = divToCreate + dateofbirth;
			}
			if(showSet.heightChar !== undefined){
				var heightChar = '<h'+showSet.heightChar.size+' class="document-text" style="top:'+showSet.heightChar.top+'px;left:'+showSet.heightChar.left+'px;color:'+showSet.heightChar.color+';">'+character.height+'</h'+showSet.heightChar.size+'>';
				divToCreate = divToCreate + heightChar;
			}
			if(showSet.signature !== undefined){
				var signatureText = character.firstname + " " + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname;
				if(signatureText.length > 20) signatureText = character.firstname.charAt(0) + "." + character.lastname.charAt(0);
				var signature = '<h'+showSet.signature.size+' class="document-text document-text-signature" style="top:'+showSet.signature.top+'px;left:'+showSet.signature.left+'px;color:'+showSet.signature.color+';">'+signatureText+'</h'+showSet.signature.size+'>';
				divToCreate = divToCreate + signature;
			}
			if(showSet.job !== undefined){
				var job = '<h'+showSet.job.size+' class="document-text" style="top:'+showSet.job.top+'px;left:'+showSet.job.left+'px;color:'+showSet.job.color+';">'+character.job+'</h'+showSet.job.size+'>';
				divToCreate = divToCreate + job;
			}
			if(showSet.job_grade !== undefined){
				var job_grade = '<h'+showSet.job_grade.size+' class="document-text" style="top:'+showSet.job_grade.top+'px;left:'+showSet.job_grade.left+'px;color:'+showSet.job_grade.color+';">'+character.job_grade+'</h'+showSet.job_grade.size+'>';
				divToCreate = divToCreate + job_grade;
			}
			if(showSet.phone_number !== undefined){
				var phone_number = '<h'+showSet.phone_number.size+' class="document-text" style="top:'+showSet.phone_number.top+'px;left:'+showSet.phone_number.left+'px;color:'+showSet.phone_number.color+';">'+character.phone_number+'</h'+showSet.phone_number.size+'>';
				divToCreate = divToCreate + phone_number;
			}
			for(var i=0; i < driverLicense.length; i++){
				var lic = driverLicense[i]
				var allow = '<span style="color:red;">'+settings.no+'</span>';
				if(lic.allow) allow = '<span style="color:lightgreen;">'+settings.yes+'</span>';
				var driver_license = lic.type;
				if(showSet[lic.type] !== undefined){
					var driver_license = '<h'+showSet[lic.type].size+' class="document-text" style="top:'+showSet[lic.type].top+'px;left:'+showSet[lic.type].left+'px;color:'+showSet[lic.type].color+';"><i class="'+showSet[lic.type].font_awesome+'"></i> '+allow+'</h'+showSet[lic.type].size+'>';
					divToCreate = divToCreate + driver_license;
				}
			}
			if(showSet.callsign !== undefined){
				var callsign = '<h'+showSet.callsign.size+' class="document-text" style="top:'+showSet.callsign.top+'px;left:'+showSet.callsign.left+'px;color:'+showSet.callsign.color+';">'+badge.callsign+'</h'+showSet.callsign.size+'>';
				divToCreate = divToCreate + callsign;
			}
			if(showSet.number !== undefined){
				var number = '<h'+showSet.number.size+' class="document-text" style="top:'+showSet.number.top+'px;left:'+showSet.number.left+'px;color:'+showSet.number.color+';">'+badge.number+'</h'+showSet.number.size+'>';
				divToCreate = divToCreate + number;
			}
		}
	}
	divToCreate = divToCreate + '</div>';
	// Document sending
	$('#div-reference').append(divToCreate)
	$(divId).css('height', divHeight+"px");
	if(cardBgSrc !== null) $(divId).css('background-image', 'url('+cardBgSrc+')');
	if(licenseBgSrc !== null) $(divId).css('background-image', 'url('+licenseBgSrc+')');
	if(badgeBgSrc !== null) $(divId).css('background-image', 'url('+badgeBgSrc+')');
	$(divId).fadeIn("slow");
	setTimeout(function(){
		$(divId).fadeOut();
	}, time);
}

$(function(){
	window.onload = (e) => {
		window.addEventListener('message', (event) => {
			var msg = event.data;
			if (msg !== undefined) {
				if(msg.action === "show_id" || msg.action === "show_driver_license"
					|| msg.action === "show_card" || msg.action === "show_license"
					|| msg.action === "show_badge"){
						showDocument(msg.action, msg.character, msg.driverLicense, msg.license, msg.badge, msg.settings);
				} else if(msg.action === "clear"){
					$(".show-document").fadeOut();
				}
			}
		});
	};
});