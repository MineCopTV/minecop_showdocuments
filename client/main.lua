ESX = nil
local PlayerData = {}
local isAnimated = false

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
	while ESX.GetPlayerData().job == nil do
		Citizen.Wait(10)
	end
	PlayerData = ESX.GetPlayerData()
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
	Citizen.Wait(10)
	PlayerData = ESX.GetPlayerData()
	TriggerServerEvent('esx_showdocuments:savePlayer')
end)

RegisterNetEvent('esx_showdocuments:showDocument')
AddEventHandler('esx_showdocuments:showDocument', function(target, action, character, driverLicense, license, badge)
	local sPlayer = PlayerId()
	local tPlayer = GetPlayerFromServerId(target)
	local playerPed, targetPed = PlayerPedId(), GetPlayerPed(tPlayer)
	local playerCoords, targetCoords = GetEntityCoords(playerPed), GetEntityCoords(targetPed)
	if tPlayer == sPlayer or #(playerCoords - targetCoords) < Config.showDocumentDistance then
		SendNUIMessage({
			action = action,
			character = character,
			driverLicense = driverLicense,
			license = license,
			badge = badge,
			settings = Config.displaySettings
		})
	end
	if tPlayer == sPlayer then
		if action == "show_license" then 
			playShowDocumentAnim(Config.animationProps.show_license[license.type])
		elseif action == "show_badge" then 
			playShowBadgeAnim(Config.animationProps.show_badge[badge.job])
		else playShowDocumentAnim(Config.animationProps[action]) end
	end
end)

Citizen.CreateThread(function()
	while true do
		Wait(0)
		if isAnimated then
			DisableControlAction(0, 24, true) -- Attack
			DisableControlAction(0, 257, true) -- Attack 2
			DisableControlAction(0, 25, true) -- Aim
			DisableControlAction(0, 263, true) -- Melee Attack 1
			DisableControlAction(0, 32, true) -- W
			DisableControlAction(0, 34, true) -- A
			DisableControlAction(0, 31, true) -- S
			DisableControlAction(0, 30, true) -- D
			DisableControlAction(0, 45, true) -- Reload
			DisableControlAction(0, 22, true) -- Jump
			DisableControlAction(0, 44, true) -- Cover
			DisableControlAction(0, 37, true) -- Select Weapon
			DisableControlAction(0, 23, true) -- Also 'enter'?
			DisableControlAction(0, 288,  true) -- Disable phone
			DisableControlAction(0, 289, true) -- Inventory
			DisableControlAction(0, 170, true) -- Animations
			DisableControlAction(0, 167, true) -- Job
			DisableControlAction(0, 26, true) -- Disable looking behind
			DisableControlAction(0, 73, true) -- Disable clearing animation
			DisableControlAction(2, 199, true) -- Disable pause screen
			DisableControlAction(0, 71, true) -- Disable driving forward in vehicle
			DisableControlAction(0, 72, true) -- Disable reversing in vehicle
			DisableControlAction(2, 36, true) -- Disable going stealth
			DisableControlAction(0, 47, true)  -- Disable weapon
			DisableControlAction(0, 264, true) -- Disable melee
			DisableControlAction(0, 257, true) -- Disable melee
			DisableControlAction(0, 140, true) -- Disable melee
			DisableControlAction(0, 141, true) -- Disable melee
			DisableControlAction(0, 142, true) -- Disable melee
			DisableControlAction(0, 143, true) -- Disable melee
			DisableControlAction(0, 75, true)  -- Disable exit vehicle
			DisableControlAction(27, 75, true) -- Disable exit vehicle
		else
			if IsControlJustReleased(0, Config.keyClear) then
				SendNUIMessage({action = "clear"})
			end
			if IsControlJustReleased(0, Config.keyMenu) then
				openShowDocumentsMenu()
			end
			if IsControlJustReleased(0, Config.keyID) then
				if Config.enableDocuments.id then 
					if Config.showSelected then
						openShowDocumentsSelectedMenu("show_id", "", {})
					else TriggerServerEvent('esx_showdocuments:getDocument', -1, "show_id", "", {}) end
				end
			end
			if Config.minecop_badge and IsControlJustReleased(0, Config.keyBadge) then
				ESX.TriggerServerCallback('esx_showdocuments:getUserBadge', function(badge)
					if badge == nil then 
						ESX.ShowNotification(_U('showDocumentsMenuNoBadge'))
					else
						if Config.showSelected then
							openShowDocumentsSelectedMenu("show_badge", "", badge)
						else TriggerServerEvent('esx_showdocuments:getDocument', -1, "show_badge", "", badge) end
					end
				end)
			end
		end
	end
end)

function openShowDocumentsMenu()
	local elements = {}
	if Config.enableDocuments.id then table.insert(elements, {label = _U('showDocumentsMenuID'), value = 'show_id'}) end
	if Config.enableDocuments.driver_license then table.insert(elements, {label = _U('showDocumentsMenuDriverLicense'), value = 'show_driver_license'}) end
	if Config.enableDocuments.card then table.insert(elements, {label = _U('showDocumentsMenuCard'), value = 'show_card'}) end
	if Config.enableDocuments.license then table.insert(elements, {label = _U('showDocumentsMenuLicenses'), value = 'licenses'}) end
	if Config.minecop_badge then table.insert(elements, {label = _U('showDocumentsMenuBadge'), value = 'show_badge'}) end
	ESX.UI.Menu.CloseAll()
	ESX.UI.Menu.Open('default', GetCurrentResourceName(), 'showdocuments', {
		title    = _U('showDocumentsMenuTitle'),
		align    = 'center',
		elements = elements
	}, function(data, menu)
		if isAnimated then return end
		if data.current.value == nil then return
		elseif data.current.value == "show_id" then
			menu.close()
			if Config.showSelected then
				openShowDocumentsSelectedMenu(data.current.value, "", {})
			else TriggerServerEvent('esx_showdocuments:getDocument', -1, data.current.value, "", {}) end
        elseif data.current.value == "show_driver_license" then
			menu.close()
			if Config.showSelected then
				openShowDocumentsSelectedMenu(data.current.value, "", {})
			else TriggerServerEvent('esx_showdocuments:getDocument', -1, data.current.value, "", {}) end
		elseif data.current.value == "show_card" then
			if PlayerData.job.name == "unemployed" then
				ESX.ShowNotification(_U('showDocumentsMenuNoCard'))
				return
			end
			menu.close()
			if Config.showSelected then
				openShowDocumentsSelectedMenu(data.current.value, "", {})
			else TriggerServerEvent('esx_showdocuments:getDocument', -1, data.current.value, "", {}) end
		elseif data.current.value == "licenses" then
			openShowDocumentsLicensesMenu()
		elseif data.current.value == "show_badge" then
			ESX.TriggerServerCallback('esx_showdocuments:getUserBadge', function(badge)
				if badge == nil then 
					ESX.ShowNotification(_U('showDocumentsMenuNoBadge'))
				else
					if Config.showSelected then
						openShowDocumentsSelectedMenu("show_badge", "", badge)
					else TriggerServerEvent('esx_showdocuments:getDocument', -1, "show_badge", "", badge) end
				end
			end)
		end
	end, function(data, menu)
		menu.close()
	end)
end

function openShowDocumentsLicensesMenu()
	ESX.TriggerServerCallback('esx_showdocuments:getUserLicenses', function(data)
		local elements = {}
		for i=1, #data, 1 do
			table.insert(elements, {
				label = data[i].name,
				license = data[i].type,
				value = "show_license"
			})
		end
		if elements == nil or #elements == 0 then
			ESX.ShowNotification(_U('showDocumentsMenuNoLicenses'))
			return
		end
		ESX.UI.Menu.CloseAll()
		ESX.UI.Menu.Open('default', GetCurrentResourceName(), 'showdocuments_licenses', {
			title    = _U('showDocumentsMenuLicenses'),
			align    = 'center',
			elements = elements
		}, function(data, menu)
			if isAnimated then return end
			if data.current.value == nil then return end
			menu.close()
			if Config.showSelected then
				openShowDocumentsSelectedMenu(data.current.value, data.current.license, {})
			else TriggerServerEvent('esx_showdocuments:getDocument', -1, data.current.value, data.current.license, {}) end
		end, function(data, menu)
			menu.close()
			openShowDocumentsMenu()
		end)
	end)
end

function openShowDocumentsSelectedMenu(action, license, badge)
	ESX.TriggerServerCallback('esx_showdocuments:getClosestPlayers', function(data)
		local elements = {
			{label = _U('showDocumentsMenuAll', Config.showDocumentDistance), value = -1},
			{label = _U('showDocumentsMenuCitizens')}
		}
		for i=1, #data, 1 do
			table.insert(elements, {
				label = _U('showDocumentsMenuCitizen', data[i].id),
				value = data[i].id
			})
		end
		ESX.UI.Menu.CloseAll()
		ESX.UI.Menu.Open('default', GetCurrentResourceName(), 'showdocuments_badges', {
			title    = _U('showDocumentsMenuTitle'),
			align    = 'center',
			elements = elements
		}, function(data, menu)
			if isAnimated then return end
			if data.current.value == nil then return end
			menu.close()
			TriggerServerEvent('esx_showdocuments:getDocument', data.current.value, action, license, badge)
		end, function(data, menu)
			menu.close()
		end)
	end)
end

function playShowDocumentAnim(item)
	if item == nil or item == "" then item = "prop_michael_sec_id" end
	local playerPed = PlayerPedId()
	if IsPedInAnyVehicle(playerPed, false) or IsPedCuffed(playerPed) then return end
	isAnimated = true
	SetCurrentPedWeapon(PlayerPedId(), -1569615261,true)
	Citizen.Wait(1)
	RequestAnimDict("random@atmrobberygen")
	while not HasAnimDictLoaded("random@atmrobberygen") do 
		Citizen.Wait(15)
	end
	TaskPlayAnim(playerPed, "random@atmrobberygen", "a_atm_mugging", 8.0, 3.0, 2500, 56, 1, false, false, false)
	local wallet = CreateObject(GetHashKey('prop_ld_wallet_01'), GetEntityCoords(playerPed), true)
	AttachEntityToEntity(wallet, playerPed, GetPedBoneIndex(playerPed, 0x49D9), 0.17, 0.0, 0.019, -120.0, 0.0, 0.0, 1, 0, 0, 0, 0, 1)
	local idCard = CreateObject(GetHashKey(item), GetEntityCoords(playerPed), true)
	AttachEntityToEntity(idCard, playerPed, GetPedBoneIndex(playerPed, 0xDEAD), 0.150, 0.045, -0.015, 0.0, 0.0, 180.0, 1, 0, 0, 0, 0, 1)
	Citizen.Wait(2500)
	DeleteEntity(idCard)
	Citizen.Wait(1000)
	DeleteEntity(wallet)
	isAnimated = false
	EnableAllControlActions(0)
end

function playShowBadgeAnim(item)
	if item == nil or item == "" then item = "prop_fib_badge" end
	local playerPed = PlayerPedId()
	if IsPedInAnyVehicle(playerPed, false) or IsPedCuffed(playerPed) then return end
	isAnimated = true
	SetCurrentPedWeapon(PlayerPedId(), -1569615261,true)
	Citizen.Wait(1)
	RequestAnimDict("random@atm_robbery@return_wallet_male")
	while not HasAnimDictLoaded("random@atm_robbery@return_wallet_male") do 
		Citizen.Wait(15)
	end
	local prop = CreateObject(GetHashKey(item), GetEntityCoords(PlayerPedId()), true)
	AttachEntityToEntity(prop, playerPed, GetPedBoneIndex(playerPed, 0xDEAD), 0.15, 0.003, -0.06, 90.0, 90.0, 180.0, 1, 0, 0, 0, 0, 1)
	TaskPlayAnim(playerPed, "random@atm_robbery@return_wallet_male", "return_wallet_positive_b_player", 8.0, 3.0, 3000, 56, 1, false, false, false)
	Citizen.Wait(4000)
	DeleteEntity(prop)
	isAnimated = false
	EnableAllControlActions(0)
end