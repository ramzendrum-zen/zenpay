Get-ChildItem -Path "$PSScriptRoot" -Recurse -File -Include *.ts,*.tsx,*.json,*.html,*.css,*.md | ForEach-Object {
    if ($_.FullName -notmatch 'node_modules') {
        $content = Get-Content $_.FullName
        # Force common lowercase versions back if they got capitalized
        $content = $content -replace '@ZenPay', '@zenpay'
        $content = $content -replace 'ZenPay-platform', 'zenpay-platform'
        $content | Set-Content $_.FullName
    }
}
