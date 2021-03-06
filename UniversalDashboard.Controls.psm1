function New-UDButton {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        $Text,
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [Switch]$Floating,
        [Parameter()]
        [Switch]$Flat,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet('left', 'right')]
        [String]$IconAlignment = 'left'
    )

    $btnClass = 'btn'
    if ($Floating) {
        $btnClass = 'btn-floating'
    }

    if ($Flat) {
        $btnClass = 'btn-flat'
    }

    New-UDElement -Id $Id -Tag "a" -Attributes @{
        className = "$btnClass"
        onClick = $OnClick
    } -Content {
        if ($Icon -ne $null) {
            $faClass = $Icon.ToString().Replace('_', '-')
            New-UDElement -Tag 'i' -Attributes @{ className = "fa fa-$faClass $iconAlignment" }
        }

        $Text
    }
}
function New-UDCard {
    [CmdletBinding(DefaultParameterSetName = 'text')]
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        [String]$Title,
        [Parameter(ParameterSetName = 'content')]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = 'endpoint')]
        [object]$Endpoint,
        [Parameter()]
        [Parameter(ParameterSetName = 'text')]
        [string]$Text,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor,
        [Parameter()]
        [UniversalDashboard.Models.Link[]]$Links,
        [Parameter()]
        [UniversalDashboard.Models.Basics.Element]$Image,
        [Parameter()]
        [ScriptBlock]$Reveal,
        [Parameter()]
        [String]$RevealTitle,
        [Parameter()]
        [ValidateSet('small', 'medium', 'large')]
        [String]$Size,
        [Parameter()]
        [String]$Language,
        [Parameter()]
        [ValidateSet('left', 'center', 'right')]
        [String]$TextAlignment = 'left',
        [Parameter()]
        [ValidateSet('Small', 'Medium', 'Large')]
        [String]$TextSize = 'Small',
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Watermark,
        [Parameter()]
        [Switch]$Horizontal
    )

    $activatorClass = ''
    if ($Reveal -ne $null) {
        $activatorClass = 'activator'
    }

    $sizeClass = ''
    if ($PSBoundParameters.ContainsKey('Size')) {
        $sizeClass = $Size
    }

    $cardClass = "card $sizeClass ud-card"
    if ($Horizontal) {
        $cardClass = "card $sizeClass horizontal ud-card"
    }

    $colors = @{
        backgroundColor = $BackgroundColor.HtmlColor
        color = $FontColor.HtmlColor
    }
     
    New-UDElement -Tag "div" -Id $Id -Attributes @{ className = $cardClass; style = $colors } -Content {
        if ($Image -ne $null) {
            New-UDElement -Tag 'div' -Attributes @{ className = "card-image waves-effect waves-block waves-light" } -Content {
                $Image
            }
        }

        New-UDElement -Tag "div" -Attributes @{ className = 'card-content' } -Content {
            New-UDElement -Tag 'span' -Attributes @{ className = "card-title $activatorClass" } -Content { 
                $Title 

                if ($Reveal -ne $null) {
                    New-UDElement -Tag 'i' -Attributes @{ className = 'fa fa-ellipsis-v right'}
                }
            }

            if ($PSBoundParameters.Keys.Contains("Watermark")) {
                New-UDElement -Tag "i" -Attributes @{
                    className = "fa fa-" + $Watermark.ToString().Replace("_", "-")
                    style = @{ 
                        opacity = 0.05
                        float= 'left'
                        marginLeft = '70px'
                        fontSize = '6em'
                        position = 'absolute'
                        top = '20px'
                        color = $FontColor.HtmlColor
                    }
                }
            }

            $ParameterSet = $PSCmdlet.ParameterSetName 
            if ($ParameterSet -eq 'endpoint') {
                New-UDElement -Tag "div" -Attributes @{ className = "$TextAlignment-align" } -Endpoint $Endpoint
            } else {
                New-UDElement -Tag "div" -Attributes @{ className = "$TextAlignment-align" } -Content {
                    $TextContent = {
                        if ($ParameterSet -eq 'content') {
                            $Content.Invoke()
                        } elseif ($ParameterSet -eq 'text') {
                            $Text -split "`r`n" | ForEach-Object {
                                $_
                                New-UDElement -Tag "br"
                            }
                        } 
                    }
    
                    switch($TextSize) {
                        "Small" { $TextContent.Invoke() }
                        "Medium" { New-UDElement -Tag 'h5' -Content {$TextContent.Invoke()}}
                        "Large" { New-UDElement -Tag 'h3' -Content {$TextContent.Invoke()} }
                    }
                }
            }
        }

        if ($Links -ne $null) {
            New-UDElement -Tag 'div' -Attributes @{ className = 'card-action' } -Content {
                $Links
            }
        }

        if ($Reveal -ne $null) {
            New-UDElement -Tag 'div' -Attributes @{ className = 'card-reveal' } -Content {
                New-UDElement -Tag 'span' -Attributes @{ className = 'card-title' } -Content { 
                    $Title 
                    New-UDElement -Tag 'i' -Attributes @{ className = 'fa fa-times right'}
                }
                $Reveal.Invoke()
            }
        }
    }
}
function New-UDCheckbox {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        $Label,
        [Parameter()]
        [Switch]$Checked,
        [Parameter()]
        [Switch]$FilledIn,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [object]$OnChange
    )

    $Attributes = @{
        type = "checkbox"
        onChange = $OnChange
    }

    if ($Checked) {
        $Attributes.checked = 'checked'
    }

    if ($FilledIn) {
        $Attributes.className = 'filled-in'
    }

    if ($Disabled) {
        $Attributes.disabled = $true
    }

    New-UDElement -Tag "p" -Content {
        New-UDElement -Id $Id -Tag "input" -Attributes $Attributes
        New-UDElement -Tag "label" -Attributes @{
            "for" = $id
        } -Content { $label }
    }
}
function New-UDCollapsible {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter(Mandatory = $true, Position = 0)]
        [ScriptBlock]$Items,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor = 'White',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor = 'Black',
        [Parameter()]
        [Switch]$Popout,
        [Parameter()]
        [ValidateSet("Expandable", "Accordion")]
        [String]$Type = 'Expandable'
    )

    $className = "collapsible ud-collapsible"
    if ($Popout) {
        $className += " popout"
    }

    New-UDElement -Tag "ul" -Id $Id -Attributes @{
        className = $className 
        'data-collapsible' = $Type.ToLower()
        style = @{
            backgroundColor = $BackgroundColor.HtmlColor
            color = $FontColor.HtmlColor
        }
    } -Content $Items
}

function New-UDCollapsibleItem {
    [CmdletBinding(DefaultParameterSetName = "content")]
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
		[String]$Title,
		[Parameter()]
	    [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
		[Parameter(ParameterSetName = "content")]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "endpoint")]
        [ScriptBlock]$Endpoint,
        [Parameter(ParameterSetName = "endpoint")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "endpoint")]
		[int]$RefreshInterval = 5,
		[Parameter()]
        [Switch]$Active,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor = 'White',
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$FontColor = 'Black'
    )

    $liClassName = "ud-collapsible-item"
    $itemClassName = "collapsible-header" 

    if ($Active) {
        $liClassName += " active"
        $itemClassName += " active"
    }

    New-UDElement -Tag "li" -id $Id -Attributes @{
        style = @{
            backgroundColor = $BackgroundColor.HtmlColor
            color = $FontColor.HtmlColor
        }
        className = $liClassName
    } -Content {
        New-UDElement -Tag "div" -Attributes @{
            className = $itemClassName 
            style = @{
                backgroundColor = $BackgroundColor.HtmlColor
                color = $FontColor.HtmlColor
            }
        } -Id "$Id-header" -Content {
            if ($PSBoundParameters.ContainsKey("Icon")) {
                New-UDIcon -Icon $Icon -Id "$Id-icon"
            }
            $Title
        }
        if ($PSCmdlet.ParameterSetName -eq "content") {
            New-UDElement -Tag "div" -Attributes @{
                className = "collapsible-body"
            } -Content $Content -Id "$Id-body"
        }
        else {
            New-UDElement -Tag "div" -Attributes @{
                className = "collapsible-body"
            } -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval -Id "$Id-body"
        }
    }
    

    
}
function New-UDCollection {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$LinkCollection,
        [Parameter()]
        [string]$Header
    )

    $collectionClass = "collection"
    if ($PSBoundParameters.ContainsKey("Header")) {
        $collectionClass += " with-header"
    }

    if ($LinkCollection) {
        New-UDElement -Tag "div" -Attributes @{
            className = $collectionClass
        } -Content $Content
    }
    else {
        New-UDElement -Tag "ul" -Attributes @{
            className = $collectionClass
        } -Content {
            if ($PSBoundParameters.ContainsKey("Header")) {
                New-UDElement -Tag 'li' -Attributes @{
                    className = 'collection-header'
                } -Content {
                    New-UDHeading -Size 4 -Text $Header
                }
            }

            $Content.Invoke()
        }
    }


}

function New-UDCollectionItem {
    [CmdletBinding(DefaultParameterSetName = 'content')]
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = 'content')]
        [ScriptBlock]$SecondaryContent,
        [Parameter(ParameterSetName = 'link')]
        [String]$Url,
        [Switch]$Active
    )

    $className = "collection-item"
    if ($Active) {
        $className += " active"
    }

    if ($PSCmdlet.ParameterSetName -eq 'link') {
        New-UDElement -Tag "a" -Attributes @{
            href = $Url
            className = $className
        } -Content $Content
    } else {
        New-UDElement -Tag "li" -Attributes @{
            className = $className
        } -Content {
            if ($SecondaryContent -ne $null) {
                New-UDElement -Tag 'div' -Content {
                    $Content.Invoke()
                    New-UDElement -Tag 'span' -Attributes @{ className = 'secondary-content' } -Content $SecondaryContent
                }
            }
            else {
                $Content.Invoke()
            }
           
        }
    }
}
function New-UDColumn {
    [CmdletBinding(DefaultParameterSetName = 'content')]
    param(
        [Parameter()]
        [String]$Id = (New-Guid),

        [Parameter()]
        [Alias('Size')]
        [ValidateRange(1,12)]
        [int]$SmallSize = 12,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$LargeSize = 12,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$MediumSize = 12,

        [Parameter()]
        [ValidateRange(1,12)]
        [int]$SmallOffset = 1,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$MediumOffset = 1,
        [Parameter()]
        [ValidateRange(1,12)]
        [int]$LargeOffset = 1,

        [Parameter(ParameterSetName = 'content', Position = 1)]
        [ScriptBlock]$Content,

        [Parameter(ParameterSetName = "endpoint")]
        [object]$Endpoint,
        [Parameter(ParameterSetName = "endpoint")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "endpoint")]
        [int]$RefreshInterval = 5
    )

    $classes = "col"

    if ($PSBoundParameters.ContainsKey("SmallSize")) {
        $classes += " s$SmallSize"
    }

    if ($PSBoundParameters.ContainsKey("MediumSize")) {
        $classes += " m$MediumSize"
    }

    if ($PSBoundParameters.ContainsKey("LargeSize")) {
        $classes += " l$LargeSize"
    }

    if ($PSBoundParameters.ContainsKey("SmallOffset")) {
        $classes += " offset-s$SmallOffset"
    }

    if ($PSBoundParameters.ContainsKey("MediumOffset")) {
        $classes += " offset-m$MediumOffset"
    }

    if ($PSBoundParameters.ContainsKey("LargeOffset")) {
        $classes += " offset-l$LargeOffset"
    }

    if ($PSCmdlet.ParameterSetName -eq 'content') {
        New-UDElement -Tag 'div' -Attributes @{
            className = $classes
        } -Content $Content
    } else {
        New-UDElement -Tag 'div' -Attributes @{
            className = $classes
        } -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval 
    }

    
}
function New-UDFab {
    param(
        [Parameter()]
        [string] $Id = (New-Guid),
        [Parameter(Mandatory = $true, Position = 0)]
        [ScriptBlock]$Content,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$ButtonColor,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet("Small", "Large")]
        $Size = "Large",
        [Parameter()]
        [Switch]$Horizontal,
        [Parameter()]
        [object]$onClick
    )
    
    if ($Horizontal) {
        $direction = "horizontal"
    }

    New-UDElement -Id $Id -Tag "div" -Attributes @{className = "fixed-action-btn $direction"} -Content {
        New-UDElement -Tag "a" -Attributes @{className = "btn-floating btn-$Size"; onClick = $onClick; style = @{ backgroundColor = $ButtonColor.HtmlColor}} -Content {
            New-UDElement -Tag "i" -Attributes @{className = "fa $Size fa-$icon"}  
        }
        New-UDElement -Tag "ul" -Content $Content
        
    }
}

function New-UDFabButton {
    param(
        [Parameter()]
        [string] $Id = (New-Guid),
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$ButtonColor,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet("Small", "Large")]
        $Size = "Large",
        [Parameter()]
        [object]$onClick
    )

    New-UDElement -Id $Id -Tag "li" -Content {
        New-UDElement -Tag "a" -Attributes @{className = "btn-floating btn-$Size"; onClick = $onClick; style = @{ backgroundColor = $ButtonColor.HtmlColor}} -Content {
            New-UDElement -Tag "i" -Attributes @{className = "fa $Size fa-$icon"} 
        }
    }
}
function New-UDHeading {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter(ParameterSetName = "Content")]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = "Text")]
        [string]$Text,
        [Parameter()]
        [ValidateSet("1", "2", "3", "4", "5", "6")]
        $Size,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$Color = 'black'
    )

    if ($PSCmdlet.ParameterSetName -eq "Text") {
        $Content = { $Text }
    }

    New-UDElement -Id $Id -Tag "h$size" -Content $Content -Attributes @{
        style = @{
            color = $Color.HtmlColor
        }
    }
}
function New-UDIcon {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter(Mandatory = $true)]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon,
        [Parameter()]
        [ValidateSet('ExtraSmall', 'Small', 'Large', '2x', '3x', '4x', '5x')]
        [string]$Size,
        [Parameter()]
        [Switch]$FixedWidth,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$Color
    )

    $sizeClass = ''
    if ($PSBoundParameters.ContainsKey("Size")) {
        switch ($Size) {
            "ExtraSmall" { $sizeClass = 'fa-xs' }
            "Small" { $sizeClass = 'fa-sm' }
            "Large" { $sizeClass = 'fa-lg' }
            "2x" { $sizeClass = 'fa-2x' }
            "3x" { $sizeClass = 'fa-3x' }
            "4x" { $sizeClass = 'fa-4x' }
            "5x" { $sizeClass = 'fa-5x' }

        }
    }

    $fixedWidthClass = ''
    if ($FixedWidth) {
        $fixedWidthClass = 'fa-fw'
    }

    $IconClass = $Icon.ToString().Replace('_', '-')

    $Attributes = @{
        className = "fa fa-$IconClass $sizeClass $fixedWidthClass"
    }

    if ($PSBoundParameters.ContainsKey('Color')) {
        $Attributes.style =  @{
            color = $Color.HtmlColor
        }
    }

    New-UDElement -Tag 'i' -Attributes $Attributes -Id $id
}
function New-UDIFrame {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        $Uri
    )

    New-UDElement -Id $Id -Tag "iframe" -Attributes @{
        src = $Uri
    }
}
function New-UDImage {
    [CmdletBinding(DefaultParameterSetName = 'url')]
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter(ParameterSetName = 'url')]
        [String]$Url,
        [Parameter(ParameterSetName = 'path')]
        [String]$Path,
        [Parameter()]
        [int]$Height,
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [Hashtable]$Attributes = @{}
    )

    switch ($PSCmdlet.ParameterSetName) {
        'path' {
            if (-not [String]::IsNullOrEmpty($Path)) {
                if (-not (Test-Path $Path)) {
                    throw "$Path does not exist."
                }
        
                $mimeType = 'data:image/png;base64, '
                if ($Path.EndsWith('jpg') -or $Path.EndsWith('jpeg')) {
                    $mimeType = 'data:image/jpg;base64, '
                }
        
                $base64String = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($Path))
        
                $Attributes.'src' = "$mimeType $base64String"
            }
        }
        'url' {
            $Attributes.'src' = $Url
        }
    }
    if ($PSBoundParameters.ContainsKey('Height')) {
        $Attributes.'height' = $Height
    }
    if ($PSBoundParameters.ContainsKey('Width')) {
        $Attributes.'width' = $Width
    }

    New-UDElement -Tag 'img' -Attributes $Attributes
}
function New-UDLayout {
    param(
        [Parameter(Mandatory = $true)]
        [int]$Columns,
        [Parameter(Mandatory = $true)]
        [ScriptBlock]$Content
    )

    $Components = $Content.Invoke()
    $columnSize = 12 / $Columns
    $Offset = 0
    $ComponentCount = ($Components | Measure-Object).Count

    while ($Offset -lt $ComponentCount) {
        $ColumnObjects = $Components | Select-Object -Skip $Offset -First $Columns | ForEach-Object {
            New-UDColumn -Size $ColumnSize -Content {
                $_
            }
        }

        New-UDRow -Columns {
            $ColumnObjects
        }
        
        $Offset += $Columns
    }
}
function New-UDParagraph {
    param(
        [Parameter(ParameterSetName = 'content')]
        [ScriptBlock]$Content,
        [Parameter(ParameterSetName = 'text')]
        [string]$Text,
        [Parameter()]
        [UniversalDashboard.Models.DashboardColor]$Color = 'black'
    )

    if ($PSCmdlet.ParameterSetName -eq 'content') {
        New-UDElement -Tag 'p' -Content $Content -Attributes @{
            style = @{
                color = $Color.HtmlColor
            }
        }
    }
    else {
        New-UDElement -Tag 'p' -Content {
            $Text
        } -Attributes @{
            style = @{
                color = $Color.HtmlColor
            }
        }
    }
   
}
function New-UDPreloader {
    [CmdletBinding(DefaultParameterSetName = "indeterminate")]
    param(
        [Parameter(ParameterSetName = "determinate")]
        [ValidateRange(0, 100)]
        $PercentComplete,
        [Parameter(ParameterSetName = "determinate")]
        [Parameter(ParameterSetName = "indeterminate")]
        [UniversalDashboard.Models.DashboardColor]$BackgroundColor,
        [Parameter(ParameterSetName = "determinate")]
        [Parameter(ParameterSetName = "indeterminate")]
        [UniversalDashboard.Models.DashboardColor]$ProgressColor,
        [Parameter(ParameterSetName = 'circular')]
        [Switch]$Circular,
        [Parameter(ParameterSetName = 'circular')]
        [ValidateSet('blue', 'red', 'green')]
        [string]$Color,
        [Parameter(ParameterSetName = 'circular')]
        [ValidateSet('small', 'medium', 'large')]
        [string]$Size
        )

    if ($PSCmdlet.ParameterSetName -eq 'circular') {
        $sizeClass = ''
        switch ($Size) {
            "small" { $sizeClass = 'small' }
            "large" { $sizeClass = 'big' }
        }

        New-UDElement -Tag 'div' -Attributes @{className = "preloader-wrapper $sizeClass active"} -Content {
            New-UDElement -Tag 'div' -Attributes @{ className = "spinner-layer spinner-$color-only"} -Content {
                New-UDElement -Tag 'div' -Attributes @{ className = 'circle-clipper left'} -Content {
                    New-UDElement -Tag 'div' -Attributes @{ className ='circle' } 
                }
                New-UDElement -Tag 'div' -Attributes @{ className = 'gap-patch'} -Content {
                    New-UDElement -Tag 'div' -Attributes @{ className ='circle' } 
                }
                New-UDElement -Tag 'div' -Attributes @{ className = 'circle-clipper right'} -Content {
                    New-UDElement -Tag 'div' -Attributes @{ className ='circle' } 
                }
            }
        }
    }
    else 
    {
        $OutsideAttributes = @{
            className = "progress"
        }
    
        if ($PSBoundParameters.ContainsKey("BackgroundColor")) {
            $OutsideAttributes.style = @{
                backgroundColor = $BackgroundColor.HtmlColor
            }
        }
        
        New-UDElement -Tag "div" -Attributes $OutsideAttributes -Content {
            $Attributes = @{
                className = $PSCmdlet.ParameterSetName
            }
    
            if ($PSBoundParameters.ContainsKey("ProgressColor")) {
                $Attributes.style = @{
                    backgroundColor = $ProgressColor.HtmlColor
                }
            }
    
            if ($PSCmdlet.ParameterSetName -eq "determinate") {
                $Attributes["style"] = @{
                    width = "$($PercentComplete)%"
                }
            }
    
            New-UDElement -Tag "div" -Attributes $Attributes
        }
    }
    


}
function New-UDRadio {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Switch]$WithGap,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [object]$OnChange,
        [Parameter()]
        [string]$Group,
        [Parameter()]
        [Switch]$Checked
    )

    $Attributes = @{
        type = "radio"
        onChange = $OnChange
        name = $Group
    }

    if ($Checked) {
        $Attributes.checked = 'checked'
    }

    if ($WithGap) {
        $Attributes.className = 'with-gap'
    }

    if ($Disabled) {
        $Attributes.disabled = $true
    }

    New-UDElement -Tag "p" -Content {
        New-UDElement -Id $Id -Tag "input" -Attributes $Attributes
        New-UDElement -Tag "label" -Attributes @{
            "for" = $id
        } -Content { $label }
    }
}
function New-UDRow {
    [CmdletBinding(DefaultParameterSetName = 'static')]
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter(ParameterSetName = "static", Position = 0)]
        [ScriptBlock]$Columns,
        [Parameter(ParameterSetName = "dynamic")]
        [object]$Endpoint,
        [Parameter(ParameterSetName = "dynamic")]
        [Switch]$AutoRefresh,
        [Parameter(ParameterSetName = "dynamic")]
        [int]$RefreshInterval = 5
    )

    if ($PSCmdlet.ParameterSetName -eq 'static') {
        New-UDElement -Tag 'div' -Attributes @{
            className = 'row'
        } -Content $Columns
    }
    else {
        New-UDElement -Tag 'div' -Attributes @{
            className = 'row'
        } -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval 
    }
}
function New-UDSelect {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        [ScriptBlock]$Option,
        [Parameter()]
        [Switch]$MultiSelect,
        [Parameter()]
        [String]$Label,
        [Parameter()]
        [Switch]$BrowserDefault,
        [Parameter()]
        [Switch]$Icons,
        [Parameter()]
        [object]$OnChange
    )

    Process {
        $Attributes = @{
            onChange = $OnChange
        }
        if ($MultiSelect) {
            $Attributes.multiple = $true
        }

        if ($BrowserDefault) {
            $Attributes.className = "browser-default"
        }

        if ($Icons) {
            $Attributes.className = "icons"
        }

        New-UDElement -Tag "div" -Attributes @{className = 'input-field'} -Content {
            New-UDElement -Tag "select" -Id $Id -Content $Option -Attributes $Attributes

            if ($PSBoundParameters.ContainsKey('Label')) {
                New-UDElement -Tag "label" -Content { $Label }
            } 
        }
    }
}

function New-UDSelectGroup {
    param(
        [Parameter(Mandatory = $true)]
        [ScriptBlock]$Option,
        [Parameter(Mandatory = $true)]
        [String]$Name
    )

    Process {
        New-UDElement -Tag "optgroup" -Attributes @{ label = $Name }  -Content $Option
    }
}

function New-UDSelectOption {
    param(
        [Parameter(Mandatory = $true)]
        [String]$Name,
        [Parameter(Mandatory = $true)]
        [String]$Value,
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [Switch]$Selected,
        [Parameter()]
        [String]$Icon
    )

    $Attributes = @{
        value = $Value
    }

    if ($Disabled) {
        $Attributes.disabled = $Disabled
    }

    if ($Selected) {
        $Attributes.selected = $Selected
    }

    if ($PSBoundParameters.ContainsKey('Icon')) {
        $Attributes.'data-icon' = $Icon
    }

    New-UDElement -Tag "option" -Attributes $Attributes -Content {
        $Name
    }
}
function New-UDSpan {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        $Content
    )

    New-UDElement -Id $Id -Tag "span" -Content {
        $Content
    }
}
function New-UDSwitch {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        $OnText = "On",
        [Parameter()]
        $OffText = "Off",
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [object]$OnChange,
        [Parameter()]
        [Switch]$On
    )

    $Attributes = @{ 
        type = "checkbox"
        onChange = $OnChange
    }

    if ($On) {
        $Attributes.checked = 'checked'
    }


    if ($Disabled) {
        $Attributes.disabled = $true
    }

    New-UDElement -Tag "div" -Content {
        New-UDElement -Tag "label" -Content {
            $OffText
            New-UDElement -Tag "input" -Attributes $Attributes -Id $Id
            New-UDElement -Tag "span" -Attributes @{className = "lever"}
            $OnText
        }
    } -Attributes @{
        className = "switch"
    }
}
function New-UDTable {
	param(
		[Parameter()]
	    [string]$Id = (New-Guid),
		[Parameter()]
	    [string]$Title,
	    [Parameter(Mandatory = $true)]
	    [string[]]$Headers,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$BackgroundColor,
		[Parameter()]
		[UniversalDashboard.Models.DashboardColor]$FontColor,
		[Parameter()]
		[ValidateSet("bordered", "striped", "highlight", "centered", "responsive-table")]
		[string]$Style,
	    [Parameter()]
		[UniversalDashboard.Models.Link[]] $Links,
		[Parameter(Mandatory = $true, ParameterSetName = 'endpoint')]
		[object]$Endpoint,
		[Parameter(ParameterSetName = 'endpoint')]
		[Switch]$AutoRefresh,
		[Parameter(ParameterSetName = 'endpoint')]
		[int]$RefreshInterval = 5,
		[Parameter()]
		[object[]]$ArgumentList,
		[Parameter(ParameterSetName = 'content')]
		[ScriptBlock]$Content
	)

	$Actions = $null
	if ($Links -ne $null) {
		$Actions = New-UDElement -Tag 'div' -Content {
			$Links
		} -Attributes @{
			className = 'card-action'
		}
	}

	New-UDElement -Tag "div" -Id $Id -Attributes @{
		className = 'card ud-table' 
		style = @{
			backgroundColor = $BackgroundColor.HtmlColor
			color = $FontColor.HtmlColor
		}
	} -Content {
		New-UDElement -Tag "div" -Attributes @{
			className = 'card-content'
		} -Content {
			New-UDElement -Tag 'span' -Content { $Title }
			New-UDElement -Tag 'table' -Content {
				New-UDElement -Tag 'thead' -Content {
					New-UDElement -Tag 'tr' -Content {
						foreach($header in $Headers) {
							New-UDElement -Tag 'th' -Content { $header }
						}
					}
				}

				if ($Content -ne $null) {
					New-UDElement -Tag 'tbody' -Content $Content
				}
				else {
					New-UDElement -Tag 'tbody' -Endpoint $Endpoint -AutoRefresh:$AutoRefresh -RefreshInterval $RefreshInterval -ArgumentList $ArgumentList
				}

				
			} -Attributes @{ className = $Style }
		}
		$Actions
	}
}

function New-UDTextbox {
    param(
        [Parameter()]
        [String]$Id = (New-Guid),
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [string]$Placeholder,
        [Parameter()]
        $Value,
        [Parameter()]
        [ValidateSet('text', 'password', 'email')]
        [String]$Type = 'text',
        [Parameter()]
        [Switch]$Disabled,
        [Parameter()]
        [UniversalDashboard.Models.FontAwesomeIcons]$Icon
    )

    $Attributes = @{
        type = $type
        value = $Value
        placeholder = $Placeholder
    }

    if ($Disabled) {
        $Attributes.disabled = $true
    }

    New-UDElement -Tag "div" -Attributes @{ className = 'input-field'} -Content {

        if ($PSBoundParameters.ContainsKey('Icon')) {
            New-UDElement -Tag "i" -Attributes @{
                className = "fa fa-$($Icon.ToString().Replace('_', '-')) prefix"
            }
        }

        New-UDElement -Id $Id -Tag "input" -Attributes $Attributes

        if ($PSBoundParameters.ContainsKey('Label')) {
            New-UDElement -Tag "label" -Attributes @{
                'for' = $Id 
            } -Content { $Label }
        }
    }
}
