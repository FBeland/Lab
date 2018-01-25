Set-Location -Path $PSScriptRoot
Set-PnPTraceLog -On -Level Debug

# PnP-PowerShell 
# https://github.com/SharePoint/PnP-PowerShell/releases/tag/2.21.1712.2

# Manage the Site Collection App Catalog
# https://support.office.com/en-us/article/Manage-the-Site-Collection-App-Catalog-928b9b61-a9de-4563-a7d1-6231aa9d4d19
# https://dev.office.com/blogs/sharepoint-framework-1-4-and-new-site-updates-now-available

# SharePoint Online Management Shell
# https://www.microsoft.com/en-us/download/details.aspx?id=35588

# npm install gulp -g
# npm install yo -g
# npm install @microsoft/generator-sharepoint -g
# yo @microsoft/generator-sharepoint


function Add-SiteColAppCatalog($siteUrl) {
    $adminUrl = "https://x13-admin.sharepoint.com"
    Connect-SPOService -Url $adminUrl
    Add-SPOSiteCollectionAppCatalog -Site $siteUrl
    Disconnect-SPOService
}

function Build-Dev() {
    Push-Location .\lab-x1
    Write-Host " npm install " -BackgroundColor Cyan -ForegroundColor Black
    #todo npm install
    Write-Host " npm install done " -BackgroundColor Green -ForegroundColor Black

    Write-Host " gulp " -BackgroundColor Cyan -ForegroundColor Black
    gulp clean
    gulp bundle
    gulp package-solution
    Write-Host " gulp done " -BackgroundColor Green -ForegroundColor Black
    Pop-Location
}

function Build-Ship() {
    Push-Location .\lab-x1
    Write-Host " npm install " -BackgroundColor Cyan -ForegroundColor Black
    #todo npm install
    Write-Host " npm install done " -BackgroundColor Green -ForegroundColor Black

    Write-Host " gulp " -BackgroundColor Cyan -ForegroundColor Black
    gulp clean --ship
    gulp bundle --ship
    gulp package-solution --ship
    Write-Host " gulp done " -BackgroundColor Green -ForegroundColor Black
    Pop-Location
}

function Add-App($url) {
    Push-Location .\lab-x1

    Write-Host " connect " -BackgroundColor Cyan -ForegroundColor Black
    Connect-PnPOnline -Url $url -Credentials "X13"
    Write-Host " connected to" (Get-PnPWeb).Url -BackgroundColor Green -ForegroundColor Black

    Write-Host " add and publish " -BackgroundColor Cyan -ForegroundColor Black
    $conn = Get-PnPConnection
    $result = Add-PnPApp -Path .\sharepoint\solution\lab-x1.sppkg -Overwrite -Publish -Connection $conn        
    Write-Host " add and publish done " -BackgroundColor Green -ForegroundColor Black

    Disconnect-PnPOnline
    Pop-Location
}

function Install-App($url) {
    Push-Location .\lab-x1

    Write-Host " connect " -BackgroundColor Cyan -ForegroundColor Black
    Connect-PnPOnline -Url $url -Credentials "X13"
    Write-Host " connected to " (Get-PnPWeb).Url -BackgroundColor Green -ForegroundColor Black

    Write-Host " install " -BackgroundColor Cyan -ForegroundColor Black
    Get-PnPApp | Where-Object {$_.Title.StartsWith("lab-x1","CurrentCultureIgnoreCase")} | ForEach {
        $app = $_
        if($app.InstalledVersion -eq $null) {
            Write-Host " Installing " $app.Title -ForegroundColor Black -BackgroundColor Green
            Install-PnPApp -Identity $_.id
        } elseif($app.InstalledVersion -ne $app.AppCatalogVersion) {
            Write-Host " Updating " $app.Title "from" $app.InstalledVersion "to" $app.AppCatalogVersion -ForegroundColor Black -BackgroundColor Green
            Update-PnPApp -Identity $_.id
        } else {
            Write-Host $app.Title " is up-to-date " -ForegroundColor Black -BackgroundColor White
        }
    }

    Disconnect-PnPOnline
    Pop-Location
}

#Add-SiteColAppCatalog -siteUrl "https://x13.sharepoint.com/sites/Lab-decembre-x12"
Build-Dev
#Build-Ship
#Add-App -url "https://x13.sharepoint.com/sites/Lab-decembre-x12"
#Install-App -url "https://x13.sharepoint.com/sites/Lab-decembre-x12"
