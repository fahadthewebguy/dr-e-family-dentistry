Add-Type -AssemblyName System.Drawing

$logoPath = "C:\Users\fahad\Desktop\Dr Janet Euzarrage\assets-src\logo.png"
$bmp = [System.Drawing.Bitmap]::FromFile($logoPath)

function RgbToHsl($r, $g, $b) {
    $rf = $r / 255.0
    $gf = $g / 255.0
    $bf = $b / 255.0
    $max = [Math]::Max($rf, [Math]::Max($gf, $bf))
    $min = [Math]::Min($rf, [Math]::Min($gf, $bf))
    $l = ($max + $min) / 2.0
    $d = $max - $min
    $h = 0.0
    $s = 0.0
    if ($d -ne 0) {
        $s = $d / (1 - [Math]::Abs(2 * $l - 1))
        if ($max -eq $rf) { $h = 60 * ((($gf - $bf) / $d) % 6) }
        elseif ($max -eq $gf) { $h = 60 * ((($bf - $rf) / $d) + 2) }
        else { $h = 60 * ((($rf - $gf) / $d) + 4) }
    }
    if ($h -lt 0) { $h += 360 }
    return @($h, $s, $l)
}

$buckets = @{}

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $px = $bmp.GetPixel($x, $y)
        if ($px.A -lt 200) { continue }
        $hsl = RgbToHsl $px.R $px.G $px.B
        $h = $hsl[0]; $s = $hsl[1]; $l = $hsl[2]
        if ($l -gt 0.92 -or $l -lt 0.06) { continue }

        $qr = [Math]::Round($px.R / 8.0) * 8
        $qg = [Math]::Round($px.G / 8.0) * 8
        $qb = [Math]::Round($px.B / 8.0) * 8
        $key = "$qr,$qg,$qb"

        if ($buckets.ContainsKey($key)) {
            $buckets[$key].count++
        } else {
            $buckets[$key] = [PSCustomObject]@{
                r = $qr; g = $qg; b = $qb; count = 1; h = $h; s = $s; l = $l
            }
        }
    }
}

$bmp.Dispose()

$sorted = $buckets.Values | Sort-Object -Property count -Descending

Write-Output "Total distinct quantized colors: $($sorted.Count)"
Write-Output ""
Write-Output "Top 15 dominant colors:"
$i = 1
foreach ($c in ($sorted | Select-Object -First 15)) {
    $hex = "#{0:X2}{1:X2}{2:X2}" -f [int]$c.r, [int]$c.g, [int]$c.b
    Write-Output ("{0}. {1}  rgb({2},{3},{4})  hsl({5:N0},{6:N0}%,{7:N0}%)  count={8}" -f $i, $hex, [int]$c.r, [int]$c.g, [int]$c.b, $c.h, ($c.s*100), ($c.l*100), $c.count)
    $i++
}

$plumCandidates = $sorted | Where-Object { $_.h -ge 250 -and $_.h -le 335 -and $_.s -gt 0.15 }
$plum = if ($plumCandidates) { $plumCandidates[0] } else { $sorted[0] }

$goldCandidates = $sorted | Where-Object { $_.h -ge 25 -and $_.h -le 65 -and $_.s -gt 0.1 }
$gold = if ($goldCandidates) { $goldCandidates[0] } else { $null }

Write-Output ""
Write-Output "--- SELECTED BRAND COLORS ---"
$plumHex = "#{0:X2}{1:X2}{2:X2}" -f [int]$plum.r, [int]$plum.g, [int]$plum.b
Write-Output ("Primary (plum): {0}  hsl({1:N0},{2:N0}%,{3:N0}%)" -f $plumHex, $plum.h, ($plum.s*100), ($plum.l*100))
if ($gold) {
    $goldHex = "#{0:X2}{1:X2}{2:X2}" -f [int]$gold.r, [int]$gold.g, [int]$gold.b
    Write-Output ("Accent (gold, from logo): {0}  hsl({1:N0},{2:N0}%,{3:N0}%)" -f $goldHex, $gold.h, ($gold.s*100), ($gold.l*100))
} else {
    Write-Output "No strong gold/cream tone found in logo - will derive a complementary warm accent."
}
