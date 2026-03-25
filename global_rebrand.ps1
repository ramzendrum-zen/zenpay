Get-ChildItem -Path "$PSScriptRoot" -Recurse -File -Include *.ts,*.tsx,*.json,*.html,*.css,*.md | ForEach-Object {
    if ($_.FullName -notmatch 'node_modules') {
        $content = Get-Content $_.FullName
        $content = $content -replace 'ZenWallet', 'ZenPay'
        $content = $content -replace 'zenwallet', 'zenpay'
        $content | Set-Content $_.FullName
    }
}
