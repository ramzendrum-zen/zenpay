Get-ChildItem -Path "$PSScriptRoot/apps/merchant-dashboard/src" -Recurse -File -Include *.ts,*.tsx | ForEach-Object {
    $content = Get-Content $_.FullName
    $content = $content -replace 'ZenWallet', 'ZenPay'
    $content = $content -replace 'zenwallet', 'zenpay'
    $content | Set-Content $_.FullName
    Write-Host "Processed: $($_.Name)"
}
