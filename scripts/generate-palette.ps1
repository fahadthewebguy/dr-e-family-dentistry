function HslToHex($h, $s, $l) {
    $s = $s / 100.0
    $l = $l / 100.0
    $c = (1 - [Math]::Abs(2 * $l - 1)) * $s
    $x = $c * (1 - [Math]::Abs((($h / 60.0) % 2) - 1))
    $m = $l - $c / 2

    if ($h -lt 60) { $rp=$c; $gp=$x; $bp=0 }
    elseif ($h -lt 120) { $rp=$x; $gp=$c; $bp=0 }
    elseif ($h -lt 180) { $rp=0; $gp=$c; $bp=$x }
    elseif ($h -lt 240) { $rp=0; $gp=$x; $bp=$c }
    elseif ($h -lt 300) { $rp=$x; $gp=0; $bp=$c }
    else { $rp=$c; $gp=0; $bp=$x }

    $r = [Math]::Round(($rp + $m) * 255)
    $g = [Math]::Round(($gp + $m) * 255)
    $b = [Math]::Round(($bp + $m) * 255)
    return "#{0:X2}{1:X2}{2:X2}" -f [int]$r, [int]$g, [int]$b
}

Write-Output "--- PRIMARY (plum) ramp, H=327, anchored at 700 = #684858 ---"
$primaryStops = @(
    @{stop=50;  l=97; s=40},
    @{stop=100; l=93; s=38},
    @{stop=200; l=85; s=32},
    @{stop=300; l=74; s=28},
    @{stop=400; l=60; s=26},
    @{stop=500; l=47; s=24},
    @{stop=600; l=39; s=22},
    @{stop=700; l=34; s=21},
    @{stop=800; l=26; s=24},
    @{stop=900; l=19; s=26},
    @{stop=950; l=11; s=28}
)
foreach ($p in $primaryStops) {
    $hex = HslToHex 327 $p.s $p.l
    Write-Output ("{0}: {1}" -f $p.stop, $hex)
}

Write-Output ""
Write-Output "--- ACCENT (gold) ramp, H=45, anchored at 400 = #D8B860 ---"
$accentStops = @(
    @{stop=50;  l=97; s=70},
    @{stop=100; l=93; s=68},
    @{stop=200; l=85; s=65},
    @{stop=300; l=74; s=62},
    @{stop=400; l=60; s=59},
    @{stop=500; l=50; s=58},
    @{stop=600; l=42; s=56},
    @{stop=700; l=34; s=54},
    @{stop=800; l=26; s=52},
    @{stop=900; l=19; s=50},
    @{stop=950; l=11; s=48}
)
foreach ($a in $accentStops) {
    $hex = HslToHex 45 $a.s $a.l
    Write-Output ("{0}: {1}" -f $a.stop, $hex)
}
