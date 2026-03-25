Get-ChildItem -Path "$PSScriptRoot" -Recurse -Filter "*zenwallet*" | ForEach-Object {
    if ($_.FullName -notmatch "node_modules") {
        $newName = $_.Name -replace "zenwallet", "zenpay"
        $newName = $newName -replace "ZenWallet", "ZenPay"
        Rename-Item $_.FullName $newName
        Write-Host "Renamed: $($_.Name) -> $newName"
    }
}
