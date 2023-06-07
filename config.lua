Config = {}
Config.Locale = 'en'
-- Documents to be presented included
Config.enableDocuments = {
    id = true,
    driver_license = true,
    card = true,
    license = true
}
-- If true you must using "minecop_badge", it will display the badges option in menu
Config.minecop_badge = true
-- Key control for documents menu, ID card and current job badge
Config.keyMenu = 56 -- Key F9 (Show documents menu)
Config.keyID = 312 -- Key [ (Show ID)
Config.keyBadge = 313 -- Key ] (Show badge from actual work if no badge do nothing)
Config.keyClear = 83 -- Key = (Clear showed documents)
-- Show the document to the selected user, not everyone
Config.showSelected = true
-- How far players can see the document
Config.showDocumentDistance = 15
-- Driver License elements
Config.driverLicenses = {"drive_bike", "drive", "drive_truck"}
-- Other licenses displayed separately
Config.otherLicenses = {"weapon", "ems_insurance", "oc_insurance"}
-- The resource used to display during the document presentation animation (show_badge - you must enable "minecop_badge")
Config.animationProps = {
    show_id = "prop_michael_sec_id",
    show_driver_license = "prop_cs_credit_card",
    show_card = "prop_ld_contact_card",
    show_license = {
        weapon = "prop_cs_business_card",
    },
    show_badge = {
        police = "prop_fib_badge"
    }
}
-- Display documents settings
-- 
-- CHARACTER
-- profile      | width, height, top, left
-- name         | color, size (1-15), top, left (firstname and lastname)
-- firstname    | color, size (1-15), top, left
-- lastname     | color, size (1-15), top, left
-- sex          | color, size (1-15), top, left
-- dateofbirth  | color, size (1-15), top, left
-- height       | color, size (1-15), top, left
-- signature    | color, size (1-15), top, left
-- job          | color, size (1-15), top, left
-- job_grade    | color, size (1-15), top, left
-- phone_number | color, size (1-15), top, left
--
-- DRIVER LICENSE
-- <licenseName> | color, font_awesome, size (1-15), top, left
-- 
-- CARD
-- logo         | color, width, height, top, left (from current job must exist file in folder for example "/img/logo/police.png")
-- 
-- LICENSE
-- license      | color, size (1-15), top, left
-- 
-- BADGE
-- callsign     | color, size (1-15), top, left
-- number       | color, size (1-15), top, left
-- 
Config.displaySettings = {
    -- Time showing document in seconds
    time = 40,
    -- Messages
    yes = "Yes",
    no = "No",
    maleLabel = "Male",
    femaleLabel = "Female",
    -- Profile images
    male = "img/profile/man.png",
    female = "img/profile/woman.png",
    -- Options to display for Show ID [Height, Character, Driver License]
    show_id = {
        profile = { width = 85, height = 115, top = 25, left = 27 },
        firstname = { color = "black", size = 6, top = 30, left = 145 },
        lastname = { color = "black", size = 6, top = 75, left = 145 },
        sex = { color = "black", size = 5, top = 120, left = 145 },
        dateofbirth = { color = "black", size = 5, top = 120, left = 275 },
        signature = { color = "darkblue", size = 15, top = 140, left = 120 }
    },
    -- Options to display for Show Driver License [Height, Character, Driver License]
    show_driver_license = {
        profile = { width = 85, height = 115, top = 25, left = 27 },
        firstname = { color = "black", size = 6, top = 30, left = 145 },
        lastname = { color = "black", size = 6, top = 75, left = 145 },
        drive_bike = { color = "black", font_awesome = "fas fa-motorcycle fa-sm", size = 2, top = 128, left = 145 },
        drive = { color = "black", font_awesome = "fas fa-car-side fa-sm", size = 2, top = 128, left = 208 },
        drive_truck = { color = "black", font_awesome = "fas fa-truck fa-sm", size = 2, top = 128, left = 272 },
        signature = { color = "darkblue", size = 15, top = 140, left = 120 }
    },
    -- Options to display for Show Card [Height, Character, Driver License, Card]
    show_card = {
        -- This category represents default style of card
        default = {
            firstname = { color = "white", size = 11, top = -5, left = 40 },
            lastname = { color = "white", size = 10, top = 40, left = 75 },
            job = { color = "darkorange", size = 8, top = 80, left = 40 },
            job_grade = { color = "white", size = 7, top = 176, left = 70 },
            phone_number = { color = "white", size = 7, top = 137, left = 70 }
        },
        -- This category represents police style of card
        police = {
            logo = { width = 60, height = 60, top = 5, left = 310 },
            firstname = { color = "black", size = 10, top = 73, left = 45 },
            lastname = { color = "white", size = 8, top = 103, left = 45 },
            job = { color = "white", size = 11, top = 0, left = 380 },
            phone_number = { color = "white", size = 7, top = 176, left = 45 }
        }
    },
    -- Options to display for Show Card [Height, Character, Driver License, License]
    show_license = {
        -- This category represents default style of all licenses
        default = {
            profile = { width = 85, height = 115, top = 25, left = 27 },
            license = { color = "white", size = 10, top = 9, left = 140 },
            firstname = { color = "black", size = 6, top = 65, left = 145 },
            lastname = { color = "black", size = 6, top = 110, left = 145 },
            signature = { color = "darkblue", size = 15, top = 140, left = 120 }
        },
        -- This category represents default style of weapon license
        weapon = {
            profile = { width = 85, height = 115, top = 25, left = 27 },
            firstname = { color = "black", size = 6, top = 65, left = 145 },
            lastname = { color = "black", size = 6, top = 110, left = 145 },
            signature = { color = "darkblue", size = 15, top = 140, left = 120 }
        }
    },
    -- Options to display for Show Card [Height, Character, Driver License, Badge]
    show_badge = {
        -- This category represents default style of badge
        default = {
            height = 560,
            profile = { width = 85, height = 115, top = 103, left = 80 },
            firstname = { color = "black", size = 6, top = 90, left = 208 },
            lastname = { color = "black", size = 6, top = 123, left = 208 },
            callsign = { color = "black", size = 6, top = 156, left = 208 },
            number = { color = "black", size = 6, top = 156, left = 315 },
            signature = { color = "gray", size = 10, top = 180, left = 208 }
        },
        -- This category represents police style of badge
        fbi = {
            height = 358,
            profile = { width = 60, height = 85, top = 228, left = 88 },
            name = { color = "black", size = 7, top = 182, left = 30 },
            sex = { color = "black", size = 4, top = 26, left = 270 },
            dateofbirth = { color = "black", size = 4, top = 26, left = 375 },
            heightChar = { color = "black", size = 4, top = 4, left = 410 },
            callsign = { color = "black", size = 4, top = 4, left = 270 },
            number = { color = "black", size = 4, top = 4, left = 338 },
            signature = { color = "black", size = 10, top = 300, left = 290 }
        }
    }
}