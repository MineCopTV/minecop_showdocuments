ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterNetEvent('esx_showdocuments:savePlayer')
AddEventHandler('esx_showdocuments:savePlayer', function()
	local xPlayer = ESX.GetPlayerFromId(source)
	ESX.SavePlayer(xPlayer)
end)

RegisterNetEvent('esx_showdocuments:getDocument')
AddEventHandler('esx_showdocuments:getDocument', function(send, action, license, badge)
	local _source = source
	local identifier = ESX.GetPlayerFromId(_source).getIdentifier()
	local character = getCharacter(identifier)
	local driverLicense = getDriverLicense(identifier)
	local licenseData = {}
	if license ~= nil and license ~= "" then 
		licenseData = {label = getLicenseLabel(license), type = license}
	end
	if send ~= -1 then
		TriggerClientEvent('esx_showdocuments:showDocument', _source, _source, action, character, driverLicense, licenseData, badge)
		TriggerClientEvent('esx_showdocuments:showDocument', send, _source, action, character, driverLicense, licenseData, badge)
	else TriggerClientEvent('esx_showdocuments:showDocument', send, _source, action, character, driverLicense, licenseData, badge) end
end)

RegisterNetEvent('esx_showdocuments:getSpecialDocument')
AddEventHandler('esx_showdocuments:getSpecialDocument', function(send, action, character, driverLicense, license, badge)
	local _source = source
	local identifier = ESX.GetPlayerFromId(_source).getIdentifier()
	table.insert(character, job_name)
	character.job_name = string.gsub(character.job, "off", "")
	character.job_grade = getJobGradeLabel(string.gsub(character.job, "off", ""), character.job_grade)
	character.job = getJobLabel(string.gsub(character.job, "off", ""))
	local licenseData = {}
	if license ~= nil and license ~= "" then 
		licenseData = {label = getLicenseLabel(license), type = license}
	end
	if send ~= -1 then
		TriggerClientEvent('esx_showdocuments:showDocument', _source, _source, action, character, driverLicense, licenseData, badge)
		TriggerClientEvent('esx_showdocuments:showDocument', send, _source, action, character, driverLicense, licenseData, badge)
	else TriggerClientEvent('esx_showdocuments:showDocument', send, _source, action, character, driverLicense, licenseData, badge) end
end)

ESX.RegisterServerCallback('esx_showdocuments:getUserLicenses', function(source, cb)
	local identifier = ESX.GetPlayerFromId(source).getIdentifier()
	local data = {}
	MySQL.Async.fetchAll('SELECT * FROM user_licenses WHERE owner = @owner', { 
		['@owner'] = identifier
	}, function(result)
		for i=1, #result, 1 do
			for j=1, #Config.otherLicenses, 1 do
				if Config.otherLicenses[j] == result[i].type then
					table.insert(data, {
						type = result[i].type,
						name = getLicenseLabel(result[i].type)
					})
					break
				end
			end
		end
		cb(data)
	end)
end)

ESX.RegisterServerCallback('esx_showdocuments:getUserBadge', function(source, cb)
	local identifier = ESX.GetPlayerFromId(source).getIdentifier()
	local data = {}
	MySQL.Async.fetchAll('SELECT * FROM minecop_badge WHERE owner = @owner', { 
		['@owner'] = identifier
	}, function(result)
		data = result[1]
		cb(data)
	end)
end)

ESX.RegisterServerCallback('esx_showdocuments:getClosestPlayers', function(source, cb)
	local _source = source
	local data = {}
	local xPlayers = GetPlayers()	
    for k,v in ipairs(xPlayers) do
		local playerPed, targetPed = GetPlayerPed(_source), GetPlayerPed(v)
		local playerCoords, targetCoords = GetEntityCoords(playerPed), GetEntityCoords(targetPed)
		if playerPed ~= targetPed and #(playerCoords - targetCoords) < Config.showDocumentDistance then
			table.insert(data, {id=v})
		end
    end
	cb(data)
end)

function getCharacter(identifier)
    local character = MySQL.Sync.fetchAll("SELECT * FROM users WHERE identifier = @identifier", {
        ['@identifier'] = identifier
    });
    character = character[1]
	table.insert(character, job_name)
	character.job_name = string.gsub(character.job, "off", "")
	character.job_grade = getJobGradeLabel(string.gsub(character.job, "off", ""), character.job_grade)
	character.job = getJobLabel(string.gsub(character.job, "off", ""))
	return character
end

function getDriverLicense(identifier)
    local licenses = {}
	local result = MySQL.Sync.fetchAll('SELECT * FROM user_licenses WHERE owner = @owner', { 
		['@owner'] = identifier
	})
	for i=1, #Config.driverLicenses, 1 do
		local allow = false
		for j=1, #result, 1 do
			if Config.driverLicenses[i] == result[j].type then
				allow = true
				break
			end
		end
		table.insert(licenses, {type = Config.driverLicenses[i], allow = allow})
	end
	return licenses
end

function getLicenseLabel(type)
    local license = MySQL.Sync.fetchAll("SELECT * FROM licenses WHERE type = @type", {
        ['@type'] = type
    });
    license = license[1]['label']
	return license
end

function getJobLabel(jobName)
    local job = MySQL.Sync.fetchAll("SELECT * FROM jobs WHERE name = @job", {
		['@job'] = jobName
    });
    job = job[1]['label']
	return job
end

function getJobGradeLabel(jobName, grade)
    local job = MySQL.Sync.fetchAll("SELECT * FROM job_grades WHERE job_name = @job AND grade = @grade", {
		['@job'] = jobName,
		['@grade'] = grade
    });
    job = job[1]['label']
	return job
end